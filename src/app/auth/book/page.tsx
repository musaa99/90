import { Metadata } from 'next';
import dynamic from 'next/dynamic';

export const metadata: Metadata = {
  title: 'Onboarding',
  description: 'Welcome!',
};

const Onboarding = dynamic(() => import('@/screens/auth/onboarding'));

const OnboardingPage = () => <Onboarding />;

export default OnboardingPage;
