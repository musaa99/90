import AuthLayout from '@/layouts/auth';

const Auth = ({ children }: { children: React.ReactNode }) => {
  return <AuthLayout>{children}</AuthLayout>;
};

export default Auth;
