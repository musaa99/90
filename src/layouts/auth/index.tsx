'use client';

import { ReactNode } from 'react';

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <section className="h-screen w-full">
      <div>{children}</div>
    </section>
  );
};

export default AuthLayout;
