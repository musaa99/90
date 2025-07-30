import { Metadata } from 'next';
import dynamic from 'next/dynamic';

export const metadata: Metadata = {
  title: '',
  description: '',
};

const History = dynamic(() => import('../../../layouts/dashboard/history'));

const HistoryPage = () => {
  return <History />;
};

export default HistoryPage;
