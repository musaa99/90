import { Metadata } from 'next';
import dynamic from 'next/dynamic';

export const metadata: Metadata = {
  title: '',
  description: '',
};

const SettleCard = dynamic(() => import('../../screens/settled'));

const Settlepage = () => {
  return <SettleCard />;
};

export default Settlepage;
