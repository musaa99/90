'use client';
import React from 'react';
import Image from 'next/image';
import { Button } from '../ui/button';

const Header = () => {
  return (
    <div className="max-w-auto m-auto flex w-full flex-row items-center justify-between bg-white p-4 lg:p-6">
      <Image
        src="/logo.svg"
        width={40}
        height={40}
        alt="Logo"
        className="h-10 w-10 lg:h-12 lg:w-12"
      />
      <Button className="rounded-full bg-blue-500 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-600 lg:px-6 lg:text-base">
        Join Now
      </Button>
    </div>
  );
};

export default Header;
