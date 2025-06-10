import { Metadata } from 'next';
import dynamic from 'next/dynamic';

export const metadata: Metadata = {
  title: '',
  description: '',
};

const Dashboard = dynamic(() => import('../../screens/dashboard'));

const DashboardPage = () => {
  return <Dashboard />;
};

export default DashboardPage;
