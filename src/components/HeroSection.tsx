import React from 'react';
import { ArrowRightIcon, Building2, Users, FileStack } from 'lucide-react';
export const HeroSection = () => {
  return <div className="relative overflow-hidden bg-light-blue pb-20">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-light-blue via-light to-primary/10 z-10"></div>
        <div className="absolute top-0 left-0 right-0 h-2/3 bg-gradient-to-b from-accent/30 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t from-secondary/15 to-transparent"></div>
        <div className="absolute inset-0 opacity-40">
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-primary/30 rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-48 right-1/4 w-96 h-96 bg-secondary/30 rounded-full filter blur-3xl animate-pulse"></div>
        </div>
      </div>
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 md:pt-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm mb-8 shadow-sm">
              <span className="flex h-2 w-2 mr-2">
                <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Coming Soon
            </div>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-dark">
              <span className="block">Revolutionizing</span>
              <span className="block text-primary">Insurance Data Flow</span>
            </h1>
            <p className="mt-6 text-xl text-gray-600 max-w-3xl font-body">
              Transform your insurance operations with automated data handling
              that saves time, eliminates manual errors, and streamlines your
              entire workflow.
            </p>
            <div className="mt-10 bg-white/50 backdrop-blur-sm rounded-xl p-5 border border-primary/10 shadow-sm inline-block">
              <p className="text-gray-700 font-medium">
                Join the waitlist to be the first to experience the future of
                insurance data management.
              </p>
            </div>
            <div className="mt-6">
              <button className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg text-base font-medium transition-colors inline-flex items-center shadow-sm group">
                Join the Waitlist
                <ArrowRightIcon className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="bg-white/80 border border-primary/10 rounded-lg p-8 shadow-lg backdrop-blur-sm">
              <div className="relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-full h-[2px] bg-gradient-to-r from-primary via-secondary to-accent opacity-20"></div>
                </div>
                <div className="relative grid grid-cols-3 gap-4">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center text-white shadow-lg mb-3">
                      <Users className="w-8 h-8" />
                    </div>
                    <div className="font-medium text-dark">Clients</div>
                  </div>
                  <div className="flex flex-col items-center text-center">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-secondary to-secondary/70 flex items-center justify-center text-white shadow-lg mb-3">
                      <FileStack className="w-10 h-10" />
                    </div>
                    <div className="font-medium text-dark">Broker Database</div>
                  </div>
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent to-accent/70 flex items-center justify-center text-dark shadow-lg mb-3">
                      <Building2 className="w-8 h-8" />
                    </div>
                    <div className="font-medium text-dark">Insurers</div>
                  </div>
                </div>
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute top-1/2 left-1/4 w-2 h-2 rounded-full bg-primary animate-ping"></div>
                  <div className="absolute top-1/2 right-1/4 w-2 h-2 rounded-full bg-secondary animate-ping" style={{
                  animationDelay: '0.5s'
                }}></div>
                </div>
              </div>
              <div className="mt-8 p-4 bg-primary/5 border border-primary/20 rounded-lg">
                <p className="text-sm text-gray-600 font-medium">
                  Seamlessly connect all stakeholders with automated data flow,
                  reducing processing time and eliminating manual errors.
                </p>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-secondary/20 rounded-full filter blur-xl animate-pulse"></div>
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary/20 rounded-full filter blur-xl animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>;
};