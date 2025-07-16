'use client';
import { Button } from '@/components/ui/button';
import Dashboard from '@/screens/dashboard';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const Onboarding = () => {
  const router = useRouter();

  return (
    <section className="mt-6 flex h-auto w-full flex-col items-center justify-center p-2 md:flex-row">
      <main className="flex w-full max-w-7xl flex-col items-center justify-center space-y-8 lg:space-y-10">
        <div className="space-y-3 text-center">
          <h1 className="text-3xl font-[500] lg:text-4xl" id="hero-title">
            Wager on Your Takes
          </h1>
          <p className="mx-auto max-w-lg text-sm text-gray-500 lg:text-base">
            Settle peer-to-peer bets on live sports events with in-play wagers
          </p>
        </div>
        <Dashboard />

        <Button
          onClick={() => router.push('/dashboard')}
          className="rounded-full bg-blue-500 px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-blue-600 lg:px-8 lg:py-3 lg:text-base"
        >
          BOOK WAGER
        </Button>

        <div className="flex w-full max-w-md items-center overflow-hidden rounded-[14px] border border-gray-300 bg-white lg:max-w-lg">
          <input
            type="text"
            placeholder="Paste wager link to join"
            className="flex-1 p-3 text-[16px] focus:outline-none lg:p-4 lg:text-base"
            aria-label="Paste wager link to join"
          />
          <button className="h-full bg-gray-200 px-4 py-2 text-sm font-medium text-gray-800 transition-colors hover:bg-gray-300 lg:px-6 lg:text-base">
            Wager
          </button>
        </div>

        <div className="w-full max-w-md rounded-lg bg-white p-4 shadow-md lg:max-w-lg lg:p-6">
          <h2 className="mb-3 text-lg font-semibold lg:text-xl">
            Booked Wagers
          </h2>
          <div className="flex items-center justify-between text-sm lg:text-base">
            <span>“Mbappe to score in the second half”</span>
            <div className="flex items-center gap-3">
              <a href="#" className="text-blue-600 hover:underline">
                View
              </a>
              <button className="rounded bg-red-500 px-2 py-1 text-xs text-white transition-colors hover:bg-red-600 lg:px-3 lg:text-sm">
                Cancel
              </button>
            </div>
          </div>
        </div>

        <div className="w-full max-w-md lg:max-w-lg">
          <div className="flex w-full items-center justify-between rounded-[10px] bg-[#A7A9A8] px-4 py-8 text-base font-medium lg:px-6 lg:py-10">
            <span className="flex items-center gap-2 text-[#ECF5F5]">
              <Image
                src="/message.svg"
                width={24}
                height={24}
                alt="Wager rooms icon"
                className="h-6 w-6 lg:h-8 lg:w-8"
              />
              Wager Rooms
            </span>
            <span className="text-lg text-[#ECF5F5] lg:text-xl">→</span>
          </div>
        </div>
      </main>
    </section>
  );
};

export default Onboarding;
