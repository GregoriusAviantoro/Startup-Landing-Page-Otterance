import React from 'react';
// @ts-ignore
import darkLogo from '../logos/otterance-dark.PNG?url';

export const Footer = () => {
  return <footer className="relative bg-light-blue border-t border-primary/10">
      <div className="absolute inset-x-0 -top-20 h-20 bg-gradient-to-b from-transparent to-light-blue"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-4">
            <img src={lightLogo} alt="Otterance" className="h-8 w-auto" />
            <span className="text-gray-400">|</span>
            <span className="text-gray-600 text-sm">
              Zero Inbox Hassle. Close Deals Faster.
            </span>
          </div>
          <div className="flex items-center space-x-6">
            <a href="#" className="text-gray-600 hover:text-primary transition-colors text-sm group">
              Privacy
              <span className="block h-0.5 w-0 group-hover:w-full transition-all bg-primary/30"></span>
            </a>
            <a href="#" className="text-gray-600 hover:text-primary transition-colors text-sm group">
              Terms
              <span className="block h-0.5 w-0 group-hover:w-full transition-all bg-primary/30"></span>
            </a>
          </div>
        </div>
      </div>
    </footer>;
};
