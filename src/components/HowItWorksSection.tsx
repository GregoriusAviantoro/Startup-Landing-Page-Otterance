import React from "react";
export const HowItWorksSection = () => {
  const steps = [{
    number: "01",
    title: "Configure Your Workflow",
    description: "Set up your communication preferences and define trigger points for automated emails."
  }, {
    number: "02",
    title: "Connect Your Systems",
    description: "Integrate with your existing CRM, email platform, and insurance management tools."
  }, {
    number: "03",
    title: "Customize Templates",
    description: "Create branded email templates for different scenarios and client touchpoints."
  }, {
    number: "04",
    title: "Automate & Monitor",
    description: "Let Otterance handle the communication flow while you monitor performance."
  }];
  return <section id="how-it-works" className="py-20 bg-gray-900/95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Getting started with Otterance is simple. Follow these steps to
            transform your communication workflow.
          </p>
        </div>
        <div className="relative">
          {/* Connection line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-teal-500 to-purple-500 hidden md:block"></div>
          <div className="space-y-24">
            {steps.map((step, index) => <div key={index} className={`relative flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} items-center`}>
                <div className="md:w-1/2 mb-8 md:mb-0 md:px-12">
                  <div className={`bg-gray-800/50 border border-gray-700 rounded-lg p-8 ${index % 2 === 0 ? "md:mr-8" : "md:ml-8"}`}>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-400">{step.description}</p>
                  </div>
                </div>
                <div className="relative z-10 flex items-center justify-center w-12 h-12 rounded-full bg-gray-800 border-4 border-gray-900">
                  <span className="text-teal-400 font-bold">{step.number}</span>
                </div>
                <div className="md:w-1/2"></div>
              </div>)}
          </div>
        </div>
      </div>
    </section>;
};