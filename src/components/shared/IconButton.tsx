import { ComponentProps } from 'react';
import { Button } from '../ui/button';
import { cn } from '@/libs/utils';

const IconButton = ({
  className,
  children,
  ...rest
}: ComponentProps<'button'>) => {
  return (
    <Button
      variant="ghost"
      className={cn(
        'bg-icon-background hover:!bg-icon-background grid aspect-square h-10 w-10 cursor-pointer place-items-center p-0',
        className
      )}
      {...rest}
    >
      {children}
    </Button>
  );
};

export default IconButton;
