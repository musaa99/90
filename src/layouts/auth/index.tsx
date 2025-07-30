'use client';
import Image from 'next/image';
import Logo from '../../../public/logo.svg';

import { ReactNode } from 'react';

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <section className="2md:grid-cols-2 grid w-full grid-cols-1 bg-[#F5F9FF]">
      <div className="2md:p-[3.25rem] 2md:min-h-dvh flex h-full flex-col justify-center gap-5 p-6 sm:pr-8">
        <nav className="mb-6">
          <Image
            src={Logo}
            className="mx-auto h-[3.37188rem]"
            alt="Medicate Logo"
          />
        </nav>
      </div>

      <div className="2md:min-h-dvh flex h-full flex-col border-l border-[rgba(9,85,183,0.10)] bg-[#FFF]">
        <div className="flex flex-grow items-center justify-center overflow-auto p-4">
          {children}
        </div>
        <p className="!text-body-text-1 pt-4 text-center text-[0.625rem] sm:mb-3">
          Powered by Infostrategy Technology Limited
        </p>
      </div>
    </section>
  );
};

export default AuthLayout;
