'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already accepted cookies
    const hasAccepted = localStorage.getItem('cookie-accepted');
    if (!hasAccepted) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-accepted', 'true');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 p-4 shadow-lg">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex-1">
          <p className="text-sm text-gray-600">
            By using this site, you accept our{' '}
            <Link 
              href="/legal/cookies" 
              className="text-black underline hover:no-underline"
            >
              cookie policy
            </Link>
            . We only use cookies for performance and internal use (cart persistence, checkout, analytics).
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button 
            onClick={handleAccept}
            size="sm"
            className="bg-black text-white hover:bg-gray-800"
          >
            Accept
          </Button>
          <Button 
            onClick={() => setIsVisible(false)}
            variant="ghost"
            size="sm"
            className="text-gray-500 hover:text-gray-700"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
