import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import dayjs from 'dayjs';
import { toast } from 'sonner';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const formatNumberWithCommas = (number: number) => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

// Password validation function
const isValidPassword = (password: string) => {
  return {
    hasMinLength: password.length >= 8,
    hasUppercase: /[A-Z]/.test(password),
    hasLowercase: /[a-z]/.test(password),
    hasSpecialChar: /[!@#$%^&*_-]/.test(password),
    hasNumber: /\d/.test(password),
    isValid:
      password.length >= 8 &&
      /[A-Z]/.test(password) &&
      /[a-z]/.test(password) &&
      /[!@#$%^&*_-]/.test(password) &&
      /\d/.test(password),
  };
};

const validatePassword = (value: string) => {
  const passwordRegex = /^(?=.*[0-9])(?=.*[A-Za-z])[A-Za-z\d]+$/;
  return passwordRegex.test(value);
};

const trimAndAppendEllipsis = (input: string): string => {
  if (input.length <= 20) {
    return input;
  }
  return `${input.slice(0, 20)}...`;
};
const formatCurrency = (amount: number, decimal?: boolean) => {
  return new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
    minimumFractionDigits: decimal ? 0 : undefined,
  }).format(amount);
};

const getGreeting = () => {
  const currentHour = new Date().getHours();
  if (currentHour < 12) return 'morning';
  if (currentHour < 18) return 'afternoon';
  return 'evening';
};

const generateTimeSlots = (timesPerDay: number): string[] => {
  const startHour = 8; // 8:00 AM
  const endHour = 20; // 8:00 PM
  const interval = (endHour - startHour) / (timesPerDay - 1);

  const slots: string[] = [];

  for (let i = 0; i < timesPerDay; i++) {
    const hour = startHour + i * interval;
    const h = Math.floor(hour);
    const m = Math.round((hour - h) * 60);
    const formattedTime = `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}`;
    slots.push(formattedTime);
  }

  return slots;
};

const computeEndDate = (startDate: string, days: number): string => {
  return dayjs(startDate)
    .add(days - 1, 'day')
    .endOf('day')
    .toISOString();
};

const handleErrorResponse = (error: any) => {
  if (typeof error?.data?.message === 'string') {
    return toast.error('Error', { description: error.data.message });
  }
  // if (typeof error?.data?.message === 'object') {
  //   const { message } = error.data as ErrorData;
  //   const msg = message
  //     .map((m, index) => `${index + 1}. ${m.error}`)
  //     .join('\n');
  //   return toast.error('Error', {
  //     description: msg,
  //     duration: 5000,
  //   });
  // }
  if (error?.message) {
    return toast.error('Error', { description: error.message });
  }
  if (error?.error) {
    return toast.error('Error', { description: error.error });
  }
  if (typeof error === 'string') {
    return toast.error('Error', { description: error });
  }
  return toast.error('Error', { description: 'Something went wrong!' });
};

const formatCountdown = (seconds: number) => {
  const m = Math.floor(seconds / 60)
    .toString()
    .padStart(2, '0');
  const s = (seconds % 60).toString().padStart(2, '0');
  return `${m}:${s}`;
};

export {
  cn,
  computeEndDate,
  formatCountdown,
  formatCurrency,
  formatNumberWithCommas,
  getGreeting,
  generateTimeSlots,
  handleErrorResponse,
  trimAndAppendEllipsis,
  isValidPassword,
  validatePassword,
};
