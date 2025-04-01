import React from 'react';
export const Footer = () => {
  return <footer className="relative bg-light-blue border-t border-primary/10">
      <div className="absolute inset-x-0 -top-20 h-20 bg-gradient-to-b from-transparent to-light-blue"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-4">
            <span className="text-primary font-heading text-xl font-bold">
              Otterance
            </span>
            <span className="text-gray-400">|</span>
            <span className="text-gray-600 text-sm">
              Streamline your data operations
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
            <div className="flex space-x-4">
              {[{
              name: 'Twitter',
              path: 'M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84'
            }, {
              name: 'LinkedIn',
              path: 'M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z'
            }].map(social => <a key={social.name} href="#" className="text-gray-600 hover:text-primary transition-colors transform hover:scale-110">
                  <span className="sr-only">{social.name}</span>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d={social.path} />
                  </svg>
                </a>)}
            </div>
          </div>
        </div>
      </div>
    </footer>;
};