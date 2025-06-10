'use client';

import { ReactNode } from 'react';

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <section className="h-screen w-full bg-[#f0f9fb]">
      <div>{children}</div>
    </section>
  );
};

export default AuthLayout;
