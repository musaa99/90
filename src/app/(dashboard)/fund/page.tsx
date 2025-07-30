import { Metadata } from 'next';
import dynamic from 'next/dynamic';

export const metadata: Metadata = {
  title: '',
  description: '',
};

const Fund = dynamic(() => import('../../../layouts/dashboard/fund'));

const FundPage = () => {
  return <Fund />;
};

export default FundPage;
