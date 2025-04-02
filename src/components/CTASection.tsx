import React from 'react';
import { ArrowRightIcon, Sparkles } from 'lucide-react';
export const CTASection = () => {
  return <section className="relative pb-20 pt-20 bg-light-blue">
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-transparent to-light-blue pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/90 to-white/70 border border-primary/10 backdrop-blur-sm shadow-lg">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10"></div>
            <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/20 rounded-full filter blur-3xl animate-pulse"></div>
            <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-secondary/20 rounded-full filter blur-3xl animate-pulse"></div>
          </div>
          <div className="relative z-10 px-6 py-16 md:px-12 md:py-20 text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm mb-8 shadow-sm">
              <Sparkles className="w-4 h-4 mr-2" />
              Early Access
            </div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-6">
              Ready to Transform Your Workflow?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10 font-body">
              Join the waitlist today and be among the first to experience
              seamless insurance data management.
            </p>
            <div className="flex items-center justify-center mb-10">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-primary/30"></div>
              <div className="px-4">
                <span className="bg-primary/10 text-primary text-sm py-1 px-3 rounded-full">
                  Coming Soon
                </span>
              </div>
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-primary/30"></div>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button href="https://forms.gle/SzXDA8EVCtPYVHAVA" target="_blank" className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg text-base font-medium transition-colors inline-flex items-center shadow-sm group">
                Join the Waitlist
                <ArrowRightIcon className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>
          <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-primary/20 rounded-tl-xl"></div>
          <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-primary/20 rounded-tr-xl"></div>
          <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-primary/20 rounded-bl-xl"></div>
          <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-primary/20 rounded-br-xl"></div>
        </div>
      </div>
    </section>;
};