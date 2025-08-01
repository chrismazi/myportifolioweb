'use client';
import { useState, useEffect } from 'react';
import { Card } from "@/components/Card";
import StarIcon from "@/assets/icons/star.svg";

interface WelcomeNotificationProps {
  isVisible: boolean;
  onClose: () => void;
}

export const WelcomeNotification = ({ isVisible, onClose }: WelcomeNotificationProps) => {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (isVisible) {
      setIsAnimating(true);
      
      // Play Discord-like notification sound
      try {
        const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
        oscillator.frequency.setValueAtTime(600, audioContext.currentTime + 0.1);
        
        gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.2);
        
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 0.2);
      } catch (e) {
        console.log('Audio play failed:', e);
      }

      // Auto-close after 12 seconds
      const autoCloseTimer = setTimeout(() => {
        setIsAnimating(false);
        setTimeout(onClose, 200); // Wait for animation to complete
      }, 16000);

      return () => clearTimeout(autoCloseTimer);
    }
  }, [isVisible, onClose]);

  if (!isVisible) return null;

  return (
    <div className={`absolute top-20 right-8 z-10 ${isAnimating ? 'animate-in' : 'animate-out'}`}>
      <Card className="p-4 max-w-sm bg-gray-900 border border-gray-700 shadow-2xl hover:scale-105 transition-transform duration-300 gentle-glow">
        <div className="flex items-start gap-3">
          <div className="flex-1">
            <p className="text-white text-sm leading-relaxed">
              Hi 👋🏽, I&apos;m <span className="font-semibold text-emerald-300">Chris</span>. My superpower is{' '}
              <span className="font-semibold text-emerald-300">talking to computers</span>. 
              and I make dope <span className="text-emerald-300">AI solutions for Africa</span>!
            </p>
          </div>
          <button
            onClick={() => {
              setIsAnimating(false);
              setTimeout(onClose, 300);
            }}
            className="text-white/60 hover:text-white transition-colors p-1 hover:bg-white/10 rounded"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="mt-3 flex items-center gap-2">
          <StarIcon className="size-3 text-emerald-300" />
          <span className="text-xs text-white/60">Welcome to my portfolio!</span>
        </div>
      </Card>
    </div>
  );
}; 