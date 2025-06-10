import { RootState } from '@/store';
import {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
  createApi,
  fetchBaseQuery,
} from '@reduxjs/toolkit/query/react';
import { cacher } from './rtkQueryCacheUtils';
import { logout, tokenReceived } from '@/store/reducers/auth/reducer';

// Create our baseQuery instance
const baseQuery = fetchBaseQuery({
  baseUrl: 'https://',
  prepareHeaders: (headers, { getState }) => {
    // By default, if we have a token in the store, use that for authenticated requests
    const token = (getState() as RootState)?.auth?.accessToken;
    if (token) {
      headers.set('Authorization', `Bearer ${token}`);
    }
    return headers;
  },
});

const baseQueryWithReAuth: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);
  const refreshToken = (api.getState() as RootState)?.auth?.refreshToken;

  if (result.error && result.error.status === 401) {
    const refreshResult = await baseQuery(
      {
        url: `${process.env.NEXT_PUBLIC_MEDICATE_BASE_URL}/auth/refresh-token`,
        method: 'POST',
        body: {
          refreshToken,
        },
      },
      api,
      extraOptions
    );

    if (refreshResult.data) {
      // store the new token
      api.dispatch(tokenReceived(refreshResult.data));
      // retry the initial query
      result = await baseQuery(args, api, extraOptions);
    } else {
      api.dispatch(logout());
    }
  }

  return result;
};

// Define a service using a base URL and expected endpoints
export const api = createApi({
  baseQuery: baseQueryWithReAuth,
  endpoints: () => ({}),
  refetchOnReconnect: true,
  tagTypes: [
    ...cacher.defaultTags,
    // add tag types here
  ],
});
