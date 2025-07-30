import { Metadata } from 'next';
import dynamic from 'next/dynamic';

export const metadata: Metadata = {
  title: '',
  description: '',
};

const Dashboard = dynamic(() => import('../../../layouts/dashboard/dashboard'));

const DashboardPage = () => {
  return <Dashboard />;
};

export default DashboardPage;
