import React from 'react';
import { Button } from '@/components/ui/button';
import { Chrome } from 'lucide-react'; // Using Chrome as a generic browser/Google associated icon that IS in Lucide
import { cn } from '@/lib/utils';

interface AuthButtonsProps {
  className?: string;
}

const AuthButtons: React.FC<AuthButtonsProps> = ({ className }) => {
  const handleGoogleSignIn = () => {
    console.log('Sign in with Google clicked');
    // Placeholder for actual Google Sign-In logic
    alert('Simulating Google Sign-In...');
  };

  return (
    <div className={cn("mt-6", className)}>
      <Button 
        variant="outline" 
        className="w-full h-10 border-border text-foreground hover:bg-secondary/50 flex items-center justify-center"
        onClick={handleGoogleSignIn}
      >
        <Chrome className="mr-2 h-4 w-4 text-muted-foreground" /> 
        Sign in with Google
      </Button>
    </div>
  );
};

export default AuthButtons;