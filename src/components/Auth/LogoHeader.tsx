import React from 'react';
import { Box } from 'lucide-react';
import { cn } from '@/lib/utils';

interface LogoHeaderProps {
  className?: string;
}

const LogoHeader: React.FC<LogoHeaderProps> = ({ className }) => {
  return (
    <div className={cn("flex items-center justify-center space-x-3 py-8", className)}> 
      {/* Centered and with padding-bottom to space from card below, assuming it's outside the card */}
      <Box className="h-10 w-10 text-primary" strokeWidth={1.5} />
      <span className="text-3xl font-semibold text-foreground">InsideBox</span>
    </div>
  );
};

export default LogoHeader;