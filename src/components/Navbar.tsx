import React from 'react';
import { ArrowRightIcon } from 'lucide-react';
// @ts-ignore
// import darkLogo from '../logos/otterance-dark.PNG?url';
import blueLogo from '../logos/otterance-blue.PNG';

export const Navbar = () => {
  return <nav className="bg-light-blue/90 backdrop-blur-sm border-b border-primary/15 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
          <div className="flex items-center space-x-2">
          <img src={blueLogo} alt="Otterance" className="h-10 w-auto" />
          </div>
          <div className="hidden md:flex ml-4 h-4 w-px bg-primary/20"></div>
          <span className="hidden md:block ml-4 text-sm text-gray-600">
            Zero Inbox Hassle. Close Deals Faster.
            </span>
          </div>
          <div>
            <a href="https://forms.gle/SzXDA8EVCtPYVHAVA" target="_blank" className="bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-lg text-sm font-medium transition-colors shadow-sm inline-flex items-center group">
              Join Waitlist
              <ArrowRightIcon className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </nav>;
};
