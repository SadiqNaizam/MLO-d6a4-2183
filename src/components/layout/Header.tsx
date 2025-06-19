import React from 'react';
import { cn } from '@/lib/utils';
// import { Package } from 'lucide-react'; // Example: if a default logo icon is desired

interface HeaderProps {
  /**
   * Optional content to be rendered within the header, typically on the right side for actions or user menus.
   */
  children?: React.ReactNode;
  /**
   * Optional title to be displayed in the header, often as a brand name or application title.
   * Defaults to "Application Name" if not provided.
   */
  title?: string;
  /**
   * Optional CSS class names for custom styling of the header element.
   */
  className?: string;
}

/**
 * A generic, responsive application header component.
 * It is designed to be sticky at the top of the viewport and can display a title and custom children elements.
 * Note: This header is a general-purpose component and is distinct from specialized headers like LogoHeader used on the login page.
 */
const Header: React.FC<HeaderProps> = ({
  children,
  title = "Application Name",
  className,
}) => {
  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60",
        className
      )}
      aria-label={title || 'Application Header'}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Left section: Typically for Logo and Site Title/Navigation */}
        <div className="flex items-center">
          <a href="/" className="flex items-center space-x-2" aria-label={`${title} homepage`}>
            {/* Example of using a Lucide icon as a generic logo, uncomment and import Package if needed */}
            {/* <Package className="h-6 w-6 text-primary" /> */}
            <span className="font-semibold text-lg text-foreground">
              {title}
            </span>
          </a>
          {/* Placeholder for primary navigation items, can be implemented as needed */}
          {/* <nav className="ml-6 hidden md:flex gap-4">
            <a href="/dashboard" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">Dashboard</a>
            <a href="/products" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">Products</a>
            <a href="/settings" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">Settings</a>
          </nav> */}
        </div>

        {/* Right section: For children elements like user actions, theme toggle, etc. */}
        {children && (
          <div className="flex items-center space-x-2 sm:space-x-4">
            {children}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
