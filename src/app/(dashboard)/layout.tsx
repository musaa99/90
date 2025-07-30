'use client';

import DashboardLayout from '@/layouts/dashboard';

const Dashboard = ({ children }: { children: React.ReactNode }) => {
  return <DashboardLayout>{children}</DashboardLayout>;
};

export default Dashboard;
