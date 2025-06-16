// app/wager/page.tsx or components/WagerCard.tsx
'use client';

import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';
import Copy from '@/assets/copy.svg';
import X from '@/assets/x.svg';
import telegram from '@/assets/telegram.svg';
import whatsapp from '@/assets/whatsapp.svg';

const SettleCard = () => {
  return (
    <section className="flex h-[-webkit-fill-available] w-full flex-col items-center space-y-6 p-4">
      <Card className="w-full max-w-md text-sm">
        <CardContent className="space-y-4 p-6">
          <div className="text-center">
            <p className="text-xs font-semibold">WAGER Won</p>
            <p className="text-green text-xs">You called it</p>
          </div>

          <div className="space-y-1 text-center">
            <p className="text-xs font-semibold text-gray-600">
              WAGER CONDITION
            </p>
            <p className="text-base font-medium text-black">
              “Mbappe to score in the second half ”
            </p>
          </div>
          <div className="flex flex-col justify-between space-x-4 gap-y-3">
            <div className="space-y-1">
              <h1>For:</h1>
              <p className="text-xs font-semibold text-gray-600">
                STAKE AMOUNT
              </p>
              <p className="text-base font-medium text-black">250 USDC</p>
              <span className="font-medium text-gray-900">@username1</span>
            </div>
            <div className="space-y-1">
              <h1>Against:</h1>
              <p className="text-xs font-semibold text-gray-600">
                STAKE AMOUNT
              </p>
              <p className="text-base font-medium text-black">250 USDC</p>
              <span className="font-medium text-gray-900">@username1</span>
            </div>
            <div className="flex-1 space-y-1">
              <h1>Total Stake:</h1>
              <p className="text-xs font-semibold text-gray-600">500 USDC</p>
            </div>
          </div>
        </CardContent>
      </Card>
      <div className="flex justify-around gap-x-8 pt-4">
        <Image
          src={Copy}
          width={20}
          height={20}
          alt="logo"
          className="h-12 w-10"
        />
        <Image
          src={X}
          width={20}
          height={20}
          alt="logo"
          className="h-12 w-10"
        />
        <Image
          src={telegram}
          width={20}
          height={20}
          alt="logo"
          className="h-12 w-10"
        />
        <Image
          src={whatsapp}
          width={20}
          height={20}
          alt="logo"
          className="h-12 w-10"
        />
      </div>

      <p className="text-muted-foreground text-center text-xs">
        Share your wager link with friends!
      </p>

      <Link
        href="/"
        className="hover:text-primary mt-6 text-sm font-medium text-black underline"
      >
        Back to home
      </Link>
    </section>
  );
};
export default SettleCard;
