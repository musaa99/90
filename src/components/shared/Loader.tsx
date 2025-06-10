import { Loader2 } from 'lucide-react';

const Loader = () => {
  return (
    <div className="bg-fade-primary flex h-dvh w-dvw flex-col items-center justify-center">
      <Loader2 className="text-primary mr-2 h-10 w-10 animate-spin" />
    </div>
  );
};

export default Loader;
