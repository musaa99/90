'use client';
import React from 'react';
import Image from 'next/image';
import { Button } from '../ui/button';

const Header = () => {
  return (
    <div className="m-auto mb-4 flex w-full max-w-md flex-row items-center justify-between bg-white p-4">
      <Image
        src="/logo.svg"
        width={20}
        height={20}
        alt="logo"
        className="h-12 w-10"
      />
      <Button className="rounded-full bg-blue-500 px-4 py-0 text-sm text-white hover:bg-blue-500">
        Join now
      </Button>
    </div>
  );
};

export default Header;
