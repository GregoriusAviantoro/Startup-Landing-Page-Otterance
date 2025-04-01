import React from "react";
import { MailIcon, ClockIcon, UsersIcon, LineChartIcon, ShieldCheckIcon, RefreshCwIcon } from "lucide-react";
export const FeaturesSection = () => {
  const features = [{
    icon: <MailIcon className="h-6 w-6" />,
    title: "Automated Email Communications",
    description: "Send timely, relevant updates to all parties without manual intervention."
  }, {
    icon: <ClockIcon className="h-6 w-6" />,
    title: "Time-Saving Workflows",
    description: "Reduce administrative tasks and focus on high-value client interactions."
  }, {
    icon: <UsersIcon className="h-6 w-6" />,
    title: "Improved Client Relationships",
    description: "Keep clients informed and engaged throughout the entire process."
  }, {
    icon: <LineChartIcon className="h-6 w-6" />,
    title: "Analytics & Insights",
    description: "Track communication effectiveness and identify opportunities for improvement."
  }, {
    icon: <ShieldCheckIcon className="h-6 w-6" />,
    title: "Compliance Assurance",
    description: "Ensure all necessary information is communicated according to regulations."
  }, {
    icon: <RefreshCwIcon className="h-6 w-6" />,
    title: "Seamless Integration",
    description: "Works with your existing systems and processes without disruption."
  }];
  return <section id="features" className="relative py-20 bg-gray-900">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-900/95 to-gray-900"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Powerful Features
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Otterance provides everything you need to streamline communication
            between brokers, clients, and insurance agents.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => <div key={index} className="bg-gray-800/50 border border-gray-700 rounded-lg p-6 hover:border-teal-500/50 transition-colors">
              <div className="inline-flex items-center justify-center p-3 bg-teal-500/10 rounded-lg text-teal-400 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>)}
        </div>
      </div>
    </section>;
};