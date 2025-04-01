import React from "react";
export const BenefitsSection = () => {
  const benefitGroups = [{
    title: "For Brokers",
    benefits: ["Save 15+ hours per week on manual email tasks", "Increase client retention through better communication", "Reduce errors and compliance risks", "Focus on building relationships, not administrative work"],
    gradient: "from-teal-500/20 to-teal-500/5",
    border: "border-teal-500/30"
  }, {
    title: "For Clients",
    benefits: ["Receive timely updates about their insurance status", "Never miss important information or deadlines", "Feel valued with consistent, professional communication", "Gain transparency into the insurance process"],
    gradient: "from-purple-500/20 to-purple-500/5",
    border: "border-purple-500/30"
  }, {
    title: "For Insurance Agents",
    benefits: ["Get complete information from brokers every time", "Streamline policy processing with better data flow", "Reduce back-and-forth communication for clarifications", "Process applications faster with complete information"],
    gradient: "from-blue-500/20 to-blue-500/5",
    border: "border-blue-500/30"
  }];
  return <section id="benefits" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Benefits For Everyone
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Otterance creates value for every stakeholder in the insurance
            communication chain.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {benefitGroups.map((group, index) => <div key={index} className={`rounded-lg p-8 bg-gradient-to-b ${group.gradient} ${group.border} border`}>
              <h3 className="text-2xl font-bold text-white mb-6">
                {group.title}
              </h3>
              <ul className="space-y-4">
                {group.benefits.map((benefit, i) => <li key={i} className="flex items-start">
                    <span className="inline-flex items-center justify-center flex-shrink-0 w-5 h-5 mr-3 mt-1 bg-gray-800 rounded-full">
                      <span className="w-2 h-2 rounded-full bg-teal-400"></span>
                    </span>
                    <span className="text-gray-300">{benefit}</span>
                  </li>)}
              </ul>
            </div>)}
        </div>
      </div>
    </section>;
};