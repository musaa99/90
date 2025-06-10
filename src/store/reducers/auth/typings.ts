type User = {
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
};
export type AuthState = {
  user: User | null;
  accessToken: string | null;
  refreshToken: string | null;
  resetToken: string | null;
  phoneNumber: string | null;
  userId: string | null;
};
