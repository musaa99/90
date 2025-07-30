// import { useMemo } from 'react';
// import { useAppSelector } from '@/hooks/useStore';
// import {
//   selectAccessToken,
//   selectPinSet,
//   selectRefreshToken,
//   selectUser,
// } from '@/store/reducers/auth/reducer';

// const useAuth = () => {
//   const user = useAppSelector(selectUser);
//   const accessToken = useAppSelector(selectAccessToken);
//   const refreshToken = useAppSelector(selectRefreshToken);
//   const pinSet = useAppSelector(selectPinSet);
//   const isAuth = !!user;

//   return useMemo(() => {
//     return {
//       accessToken,
//       isAuth,
//       pinSet,
//       user,
//       refreshToken,
//     };
//   }, [accessToken, isAuth, pinSet, user, refreshToken]);
// };

// export default useAuth;
