import { Metadata } from 'next';
import dynamic from 'next/dynamic';

export const metadata: Metadata = {
  title: 'Onboarding',
  description: 'Welcome! Choose your role and get started.',
};

const Onboarding = dynamic(() => import('@/screens/auth/onboarding'));

const OnboardingPage = () => <Onboarding />;

export default OnboardingPage;
