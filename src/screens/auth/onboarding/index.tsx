'use client';
import Header from '@/components/shared/header';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const Onboarding = () => {
  const router = useRouter();

  return (
    <>
      <Header />
      <section className="flex h-[-webkit-fill-available] w-full flex-col items-center space-y-6 p-4">
        <main className="flex w-full flex-col items-center justify-center space-y-10">
          <div className="space-y-2 text-center">
            <h1 className="text-2xl font-bold" id="">
              In-Play Wagers; Bet on Your Banter
            </h1>
            <p className="text-sm text-gray-500">
              Settle arguments fast and easy on-chain
            </p>
          </div>

          <Button
            onClick={() => router.push('/dashboard')}
            className="rounded-full bg-blue-500 px-6 py-2 text-white hover:bg-blue-500"
          >
            BOOK WAGER
          </Button>

          <div className="flex w-full max-w-md items-center overflow-hidden rounded-[14px] border">
            <input
              type="text"
              placeholder="Paste wager link to join"
              className="flex-1 p-2 focus:outline-none"
              aria-label="Paste wager link to join"
            />
            <button className="h-full bg-gray-200 px-4 py-2">Wager</button>
          </div>

          <div className="w-full max-w-md rounded-lg bg-white p-4 shadow">
            <h2 className="mb-2 font-semibold">Booked wagers</h2>
            <div className="flex items-center justify-between text-sm">
              <span>“Mbappe to score in the second half ”</span>
              <div className="flex items-center gap-2">
                <a href="#" className="text-blue-600">
                  View
                </a>
                <button className="rounded bg-red-500 px-2 py-1 text-xs text-white">
                  Cancel
                </button>
              </div>
            </div>
          </div>

          <div className="w-full max-w-md">
            <div className="flex w-full items-center justify-between rounded-[10px] bg-[#A7A9A8] px-4 py-10 text-base font-medium">
              <span className="flex items-center gap-2 text-[#ECF5F5]">
                <Image
                  src="/message.svg"
                  width={20}
                  height={20}
                  alt="logo"
                  className="h-12 w-8"
                />{' '}
                Wager rooms
              </span>
              <span className="text-[#ECF5F5]">→</span>
            </div>
          </div>
        </main>
      </section>
    </>
  );
};

export default Onboarding;
