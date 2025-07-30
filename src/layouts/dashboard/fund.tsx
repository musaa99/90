'use client';

import React from 'react';
import { ArrowLeft } from 'lucide-react';
import 'qr-scanner/qr-scanner-worker.min.js';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

const Fund = () => {
  const walletAddress = '8za3...sx2Z';

  const handleCopy = () => {
    navigator.clipboard.writeText(walletAddress);
    alert('Wallet address copied!');
  };

  return (
    <div className="flex w-full flex-col items-center px-4">
      <div className="flex w-full max-w-[320px] flex-col items-center">
        <Button variant="ghost" size="sm" className="mb-2 self-start">
          <ArrowLeft className="h-5 w-5 text-gray-600" />
        </Button>

        <div className="mb-6 text-center">
          <h2 className="text-[13px] font-semibold text-gray-800">FUND</h2>
          <p className="text-[11px] text-gray-600">Fund your wager wallet</p>
        </div>

        <div className="mb-6 flex h-[200px] w-[200px] items-center justify-center rounded-lg bg-white shadow-md">
          <Image
            src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=8za3...sx2Z"
            alt="QR Code"
            width={200}
            height={200}
            className="h-full w-full rounded-lg object-cover"
          />
        </div>

        <div className="mb-3 flex w-full items-center justify-between rounded-md bg-white px-4 py-3 shadow-sm">
          <span className="text-sm font-medium text-gray-800">
            UNFOLD <span className="text-gray-500">({walletAddress})</span>
          </span>
          <button
            onClick={handleCopy}
            className="rounded-md bg-blue-600 px-4 py-1.5 text-xs font-semibold text-white hover:bg-blue-700"
          >
            Copy
          </button>
        </div>

        <p className="text-center text-[12px] leading-snug text-gray-500">
          This address can only be used to receive compatible tokens. (e.g.,
          USDC on Solana, etc.).
        </p>
      </div>
    </div>
  );
};

export default Fund;
