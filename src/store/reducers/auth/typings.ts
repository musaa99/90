type User = {
  id: string;
  fullName: string;
};
export type AuthState = {
  user: User | null;
  accessToken: string | null;
  refreshToken: string | null;
  resetToken: string | null;
};
