// app/wager/page.tsx or components/WagerCard.tsx
'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Copy, Send, X, MessageCircle } from 'lucide-react';
import Link from 'next/link';

const WagerCard = () => {
  return (
    <section className="flex h-[-webkit-fill-available] w-full flex-col items-center space-y-6 p-4">
      <Card className="w-full max-w-md text-sm">
        <CardContent className="space-y-4 p-6">
          <div className="text-center">
            <p className="text-xs font-semibold">
              {' '}
              <span className="text-orange-500">●</span> WAGER BOOKED
            </p>
            <p className="text-muted-foreground text-xs">
              Awaiting second party
            </p>
          </div>

          <div className="space-y-1">
            <p className="text-xs font-semibold text-gray-600">
              WAGER CONDITION
            </p>
            <p className="text-base font-medium text-black">
              “Mbappe to score in the second half ”
            </p>
          </div>
          <div className="flex justify-between space-x-4">
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
          </div>

          <div className="flex justify-around pt-4">
            <Button variant="ghost" size="icon">
              <Copy className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon">
              <X className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon">
              <Send className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon">
              <MessageCircle className="h-4 w-4" />
            </Button>
          </div>

          <p className="text-muted-foreground text-center text-xs">
            Share your wager link with friends!
          </p>
        </CardContent>
      </Card>

      <Link
        href="/"
        className="hover:text-primary mt-6 text-sm font-medium text-black underline"
      >
        Back to home
      </Link>
    </section>
  );
};
export default WagerCard;
