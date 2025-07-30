'use client';

import { SidebarProvider } from '@/components/ui/sidebar';
import { ReactNode } from 'react';
import AppSidebar from './Sidebar';
import TopBar from './TopBar';

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <SidebarProvider>
      <div className="flex w-full">
        <div className="lg:hidden">
          <AppSidebar />
        </div>
        <div className="flex w-full flex-col bg-[#f5f6f8]">
          <TopBar />
          <main
            id="main-body"
            className="h-full w-full bg-[#ECF5F5] p-4 sm:p-6 md:p-8 lg:p-8"
          >
            {children}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default DashboardLayout;
