import { api } from '../api';
import {
  ChangePasswordRequest,
  ChangePasswordResponse,
  ChangePhoneNumberRequest,
  ChangePhoneNumberResponse,
  CreateUserRequest,
  CreateUserResponse,
  ForgetPasswordRequest,
  ForgetPasswordResponse,
  LoginResponseType,
  LoginUserRequest,
  OtpRequest,
  OtpResponse,
  ResetPasswordRequest,
  VerifyOtpRequest,
  VerifyOtpResponse,
  VerifyPasswordOtpResponse,
} from './typings';

const auth = api.injectEndpoints({
  endpoints: (build) => ({
    patientSignup: build.mutation<CreateUserResponse, CreateUserRequest>({
      query: (payload: CreateUserRequest) => ({
        url: `${process.env.NEXT_PUBLIC_MEDICATE_BASE_URL}/auth/individual-user/signup`,
        method: 'POST',
        body: payload,
      }),
    }),
    verifyOtp: build.mutation<VerifyOtpResponse, VerifyOtpRequest>({
      query: (payload: VerifyOtpRequest) => ({
        url: `${process.env.NEXT_PUBLIC_MEDICATE_BASE_URL}/auth/verify-phone-otp`,
        method: 'POST',
        body: payload,
      }),
    }),
    verifypasswordOtp: build.mutation<
      VerifyPasswordOtpResponse,
      VerifyOtpRequest
    >({
      query: (payload: VerifyOtpRequest) => ({
        url: `${process.env.NEXT_PUBLIC_MEDICATE_BASE_URL}/auth/verify-forgot-password-otp`,
        method: 'POST',
        body: payload,
      }),
    }),
    forgetPassword: build.mutation<
      ForgetPasswordResponse,
      ForgetPasswordRequest
    >({
      query: (payload: ForgetPasswordRequest) => ({
        url: `${process.env.NEXT_PUBLIC_MEDICATE_BASE_URL}/auth/forgot-password`,
        method: 'POST',
        body: payload,
      }),
    }),
    patientLogin: build.mutation<LoginResponseType, LoginUserRequest>({
      query: (payload: LoginUserRequest) => ({
        url: `${process.env.NEXT_PUBLIC_MEDICATE_BASE_URL}/auth/login`,
        method: 'POST',
        body: payload,
      }),
    }),
    resendOtp: build.mutation<OtpResponse, OtpRequest>({
      query: (payload: OtpRequest) => ({
        url: `${process.env.NEXT_PUBLIC_MEDICATE_BASE_URL}/auth/resend-otp`,
        method: 'POST',
        body: payload,
      }),
    }),
    changePhoneNumber: build.mutation<
      ChangePhoneNumberResponse,
      ChangePhoneNumberRequest
    >({
      query: ({ id, phone }) => ({
        url: `${process.env.NEXT_PUBLIC_MEDICATE_BASE_URL}/auth/change-phonenumber/${id}`,
        method: 'PATCH',
        body: { phone },
      }),
    }),
    changePassword: build.mutation<
      ChangePasswordResponse,
      ChangePasswordRequest
    >({
      query: (payload: ChangePasswordRequest) => ({
        url: `${process.env.NEXT_PUBLIC_MEDICATE_BASE_URL}/auth/change-password`,
        method: 'POST',
        body: payload,
      }),
    }),
    resetPassword: build.mutation<ChangePasswordResponse, ResetPasswordRequest>(
      {
        query: ({ newPassword, phone, resetToken }: ResetPasswordRequest) => ({
          url: `${process.env.NEXT_PUBLIC_MEDICATE_BASE_URL}/auth/reset-password`,
          method: 'POST',
          headers: {
            Authorization: `Bearer ${resetToken}`,
          },
          body: { newPassword, phone },
        }),
      }
    ),
  }),
  overrideExisting: true,
});

export const {
  usePatientSignupMutation,
  usePatientLoginMutation,
  useResendOtpMutation,
  useVerifyOtpMutation,
  useChangePhoneNumberMutation,
  useForgetPasswordMutation,
  useChangePasswordMutation,
  useResetPasswordMutation,
  useVerifypasswordOtpMutation,
} = auth;
