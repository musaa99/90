import { Metadata } from 'next';
import dynamic from 'next/dynamic';

export const metadata: Metadata = {
  title: '',
  description: '',
};

const BookWager = dynamic(() => import('../../../layouts/dashboard/bookwager'));

const BookWagerPage = () => {
  return <BookWager />;
};

export default BookWagerPage;
