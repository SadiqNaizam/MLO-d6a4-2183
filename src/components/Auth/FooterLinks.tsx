import React from 'react';
import { cn } from '@/lib/utils';
// import { Link } from 'react-router-dom'; // Example if using React Router

interface FooterLinksProps {
  className?: string;
}

const FooterLinks: React.FC<FooterLinksProps> = ({ className }) => {
  return (
    <div className={cn("mt-8 text-center", className)}>
      <p className="text-sm text-muted-foreground">
        Don't have an account?{' '}
        {/* Replace with <Link to="/signup"> if using react-router-dom */}
        <a href="#" className="font-medium text-primary hover:underline hover:text-primary/90">
          Sign up
        </a>
      </p>
    </div>
  );
};

export default FooterLinks;