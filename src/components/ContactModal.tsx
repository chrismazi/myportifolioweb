'use client';
import { useState } from 'react';
import { Card } from "@/components/Card";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import StarIcon from "@/assets/icons/star.svg";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal = ({ isOpen, onClose }: ContactModalProps) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  if (!isOpen) return null;

  // Generate available dates (next 30 days, excluding weekends)
  const generateAvailableDates = () => {
    const dates = [];
    const today = new Date();
    
    for (let i = 1; i <= 30; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      
      // Only include weekdays (Monday = 1, Friday = 5)
      if (date.getDay() >= 1 && date.getDay() <= 5) {
        dates.push(date);
      }
    }
    
    return dates;
  };

  const availableDates = generateAvailableDates();

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric'
    });
  };

  const handleDateSelect = (date: Date) => {
    setSelectedDate(date);
  };

  const handleScheduleCall = () => {
    // Here you would typically open Calendly or your preferred scheduling tool
    window.open('https://calendly.com/princechris/30min', '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="relative w-full max-w-lg">
        <Card className="p-6 relative">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Header */}
          <div className="text-center mb-6">
            <div className="text-3xl mb-3">👋🏽</div>
            <h2 className="text-xl font-serif font-bold text-white mb-2">
              Let's hang out for a 1:1
            </h2>
            <p className="text-white/60 text-sm">
              I'm happy to take 30 minutes out of my schedule to provide mentorship, 
              pair programming, Q&A, or just chill and talk tech!
            </p>
          </div>

          {/* Calendar Section */}
          <div className="mb-6">
            <h3 className="text-base font-semibold text-white mb-3">Available Dates</h3>
            <div className="grid grid-cols-5 gap-1 mb-2">
              {['Mon', 'Tue', 'Wed', 'Thu', 'Fri'].map((day) => (
                <div key={day} className="text-center text-xs text-white/60 font-medium py-1">
                  {day}
                </div>
              ))}
            </div>
            <div className="grid grid-cols-5 gap-1 max-h-32 overflow-y-auto">
              {availableDates.map((date) => (
                <button
                  key={date.toISOString()}
                  onClick={() => handleDateSelect(date)}
                  className={`p-1 rounded text-xs transition-colors ${
                    selectedDate?.toDateString() === date.toDateString()
                      ? 'bg-emerald-300 text-gray-900'
                      : 'bg-gray-800 text-white hover:bg-gray-700'
                  }`}
                >
                  {date.getDate()}
                </button>
              ))}
            </div>
          </div>

          {/* Selected Date Info */}
          {selectedDate && (
            <div className="mb-4 p-3 bg-gray-800 rounded-lg">
              <p className="text-white/80 mb-1 text-sm">
                <span className="font-semibold">Selected:</span> {formatDate(selectedDate)}
              </p>
              <p className="text-white/60 text-xs">
                Available time slots: 9:00 AM - 5:00 PM (Rwanda Time)
              </p>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={handleScheduleCall}
              className="flex-1 bg-emerald-300 text-gray-900 py-2 px-4 rounded-lg font-semibold hover:bg-emerald-200 transition-colors flex items-center justify-center gap-2 text-sm"
            >
              <StarIcon className="size-3" />
              Schedule a Call
            </button>
            <button
              onClick={onClose}
              className="flex-1 border border-white/15 text-white py-2 px-4 rounded-lg font-semibold hover:bg-white/10 transition-colors text-sm"
            >
              Maybe Later
            </button>
          </div>

          {/* Additional Info */}
          <div className="mt-4 text-center">
            <p className="text-white/40 text-xs">
              Or reach out directly at{' '}
              <a 
                href="mailto:princechris@example.com" 
                className="text-emerald-300 hover:text-emerald-200 underline"
              >
                princechris@example.com
              </a>
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
}; 