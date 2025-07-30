import { useSidebar } from '@/components/ui/sidebar';
import IconButton from '@/components/shared/IconButton';
import { MenuIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

const TopBar = () => {
  const { toggleSidebar, isTablet } = useSidebar();

  return (
    <>
      <header className="bg-background sticky top-0 left-0 z-30 flex w-full items-center gap-4 border-b border-b-[#F1F1F1] px-4 py-3.5 md:gap-6 md:px-8">
        {isTablet && (
          <IconButton onClick={toggleSidebar} className="order-last">
            <MenuIcon
              color="var(--primary)"
              height="1.125rem"
              width="1.125rem"
            />
          </IconButton>
        )}

        <div className="max-w-auto m-auto flex w-full flex-row items-center justify-between bg-white px-4 py-2 lg:p-1">
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
      </header>
    </>
  );
};

export default TopBar;
