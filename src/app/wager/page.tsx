import { Metadata } from 'next';
import dynamic from 'next/dynamic';

export const metadata: Metadata = {
  title: '',
  description: '',
};

const WagerCard = dynamic(() => import('../../screens/wager'));

const WagerPage = () => {
  return <WagerCard />;
};

export default WagerPage;
