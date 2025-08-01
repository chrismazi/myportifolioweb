'use client';
import { useState, useEffect } from 'react';
import { WelcomeNotification } from './WelcomeNotification';

interface HomePageWrapperProps {
  children: React.ReactNode;
}

export const HomePageWrapper = ({ children }: HomePageWrapperProps) => {
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    // Show notification after a short delay to let the page load
    const timer = setTimeout(() => {
      setShowNotification(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleCloseNotification = () => {
    setShowNotification(false);
  };

  return (
    <>
      {children}
      <WelcomeNotification 
        isVisible={showNotification} 
        onClose={handleCloseNotification} 
      />
    </>
  );
}; 