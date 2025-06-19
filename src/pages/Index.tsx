import React from 'react';
import LogoHeader from '@/components/Auth/LogoHeader';
import LoginForm from '@/components/Auth/LoginForm';
import AuthButtons from '@/components/Auth/AuthButtons';
import FooterLinks from '@/components/Auth/FooterLinks';
import { cn } from '@/lib/utils';

/**
 * IndexPage serves as the main login page for the application.
 * It orchestrates the assembly of various authentication-related components
 * such as LogoHeader, LoginForm, AuthButtons, and FooterLinks, structuring them
 * according to the defined layout requirements for a login interface.
 * The page ensures components are presented in a centrally aligned card on a neutral background.
 */
const IndexPage: React.FC = () => {
  // Adhering to Layout Requirements from project context:
  // Overall page layout: Centered content on a screen-height flex container with 'bg-background'.
  // Overall.definition: "justify-center items-center min-h-screen bg-background"
  //
  // Main content wrapper: Constrains the width of the login elements (LogoHeader + Card).
  // Overall.sizing.mainContent: "w-full max-w-md"
  //
  // Login card: Styles for the card containing the form and auth options.
  // MainContent.container: "p-6 bg-surface rounded-md shadow-md"
  // (Note: 'bg-card' is used instead of 'bg-surface' as '--surface' is not defined in the provided CSS theme,
  // whereas '--card' is defined and semantically appropriate for this element.)

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
      {/* This container centers the logo and the card, limiting their maximum width. */}
      <div className="w-full max-w-md">
        {/* LogoHeader is displayed above the main authentication card. */}
        {/* Its internal padding (e.g., py-8 from its own definition) creates vertical spacing from the card. */}
        <LogoHeader />
        
        {/* The main authentication card. */}
        {/* It groups LoginForm, AuthButtons, and FooterLinks. */}
        {/* Styling (padding, background, rounded corners, shadow) is applied as per requirements. */}
        {/* Components inside are vertically stacked by default block layout; their internal margins manage spacing. */}
        <main
          className={cn(
            'bg-card p-6 shadow-md',
            'rounded-md' // As per Layout Requirements: mainContent.container specifies rounded-md
          )}
        >
          <LoginForm />
          <AuthButtons />
          <FooterLinks />
        </main>
      </div>
    </div>
  );
};

export default IndexPage;
