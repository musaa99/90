// import { JSX,  } from 'react';

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from '@/components/ui/sidebar';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { useAppDispatch } from '@/hooks/useStore';
import { logout } from '@/store/reducers/auth/reducer';
import { api } from '@/store/services/api';
import { Button } from '@/components/ui/button';
import { XIcon } from 'lucide-react';

interface SidebarProps {
  title: string;
  url: string;
  // icon: (props: React.ComponentProps<'svg'>) => JSX.Element;
  mobile?: boolean;
  type?: 'action' | 'link';
}
const AppSidebar = () => {
  const pathname = usePathname();
  const { isTablet, toggleSidebar } = useSidebar();
  const dispatch = useAppDispatch();

  const sideNavItems: SidebarProps[] = [
    { title: 'Profile', url: '/profile', type: 'link' },
    { title: 'History', url: '/transaction-history', type: 'link' },
  ];

  return (
    <Sidebar collapsible="offcanvas" className="dashboard-sidebar px-5 pt-4">
      <div
        id="portal-container"
        className="xs:w-full pointer-events-none absolute inset-0 z-50"
      />

      <SidebarHeader className="mb-6 items-start px-4 pt-4 pb-0 md:pt-2 lg:items-center lg:px-2">
        <Button
          size="icon"
          variant="ghost"
          className="absolute top-1 right-2 lg:hidden"
          onClick={toggleSidebar}
        >
          <XIcon className="stroke-body-text-2" />
        </Button>
      </SidebarHeader>
      <SidebarContent className="2md:justify-between justify-start gap-0 pr-[2.37rem] pl-3 lg:p-0">
        <SidebarGroup>
          <SidebarMenu className="space-y-[0.625rem]">
            {sideNavItems.map((item) => {
              const isActive = pathname.includes(item.url);
              const mobile = item.mobile;

              if (mobile && !isTablet) return null;

              if (item.type === 'action') {
                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      onClick={() => {}}
                      isActive={isActive}
                      className="flex gap-2"
                    >
                      {/* <item.icon /> */}
                      <span
                        className={`${isActive ? 'text-primary' : 'text-body-text-2'} text-sm`}
                      >
                        {item.title}
                      </span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              }

              return (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    onClick={() => {
                      if (isTablet) toggleSidebar();
                    }}
                    isActive={isActive}
                    asChild
                    className="hover:text-body-text-2 text-body-text-2"
                  >
                    <Link href={item.url} role="button" className="flex gap-2">
                      {/* <item.icon /> */}
                      <span
                        className={`${isActive ? 'text-primary' : 'text-body-text-2'} text-sm`}
                      >
                        {item.title}
                      </span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              );
            })}
          </SidebarMenu>
        </SidebarGroup>
        <SidebarFooter className="pt-0">
          <SidebarMenu>
            {!isTablet && (
              <SidebarMenuItem>
                <SidebarMenuButton isActive={pathname === '/support'} asChild>
                  <a href="/support" className="cursor-pointer">
                    {/* <SupportIcon /> */}
                    <span
                      className={`${pathname === '/support' ? 'text-primary' : 'text-body-text-2'} text-sm`}
                    >
                      Support
                    </span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            )}

            {isTablet && (
              <>
                <SidebarMenuItem>
                  <SidebarMenuButton
                    className="hover:bg-destructive/10 cursor-pointer"
                    onClick={() => {
                      dispatch(logout());
                      dispatch(api?.util?.resetApiState());
                    }}
                  >
                    {/* <SignoutIcon /> */}
                    <span className="text-destructive text-sm">Logout</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </>
            )}
          </SidebarMenu>
        </SidebarFooter>
      </SidebarContent>
    </Sidebar>
  );
};

export default AppSidebar;
