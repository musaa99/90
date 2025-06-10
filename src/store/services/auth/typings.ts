import { ResponseType } from '../base.typing';

// Request interfaces
export interface CreateUserRequest {
  fullName: string;
  email: string;
  phoneNumber: string;
  password: string;
}

export interface LoginUserRequest {
  phone: string;
  password: string;
}

export interface OtpRequest {
  phone: string;
}
export interface ForgetPasswordRequest {
  phone: string;
}

export interface VerifyOtpRequest {
  phone: string;
  otp: string;
}

export interface ChangePhoneNumberRequest {
  id: string;
  phone: string;
}
export interface ChangePasswordRequest {
  oldPassword: string;
  newPassword: string;
}
export interface ResetPasswordRequest {
  phone: string;
  newPassword: string;
  resetToken: string;
}

// Response data interfaces
interface UserResponseData {
  id: string;
  phone: string;
}
interface ForgetPasswordResponseData {
  phone: string;
}

interface LoginResponseData {
  id: string;
  fullName: string;
  email: {
    emailAddress: string;
    isVerified: boolean;
    id: string;
  };
  phone: {
    phoneNumber: string;
    isVerified: boolean;
    id: string;
  };
  createdAt: string;
  updatedAt: string;
  tokens: {
    accessToken: string;
    refreshToken: string;
  };
}

interface OtpResponseData {
  message: string;
}

interface VerifyOtpResponseData {
  id: string;
  fullName: string;
  email: {
    emailAddress: string;
    isVerified: boolean;
  };
  phone: {
    phoneNumber: string;
    isVerified: boolean;
  };
  createdAt: string;
  updatedAt: string;
  tokens: {
    accessToken: string;
    refreshToken: string;
  };
}

interface VerifyPasswordOtpResponseData {
  message: string;
  resetToken: string;
}

interface ChangePhoneNumberResponseData {
  id: string;
  phone: string;
}
interface ChangePasswordResponseData {
  message: string;
}

export type CreateUserResponse = ResponseType<UserResponseData>;
export type LoginResponseType = ResponseType<LoginResponseData>;
export type OtpResponse = ResponseType<OtpResponseData>;
export type VerifyOtpResponse = ResponseType<VerifyOtpResponseData>;
export type VerifyPasswordOtpResponse =
  ResponseType<VerifyPasswordOtpResponseData>;
export type ForgetPasswordResponse = ResponseType<ForgetPasswordResponseData>;
export type ChangePhoneNumberResponse =
  ResponseType<ChangePhoneNumberResponseData>;
export type ChangePasswordResponse = ResponseType<ChangePasswordResponseData>;
