import React, { useState } from 'react';

const Tabs = ({ tabs = [], defaultTab = 0, className = '' }) => {
  const [activeTab, setActiveTab] = useState(defaultTab);

  return (
    <div className={`w-full ${className}`}>
      <div className="flex space-x-0">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`px-6 py-4 text-lg font-semibold uppercase tracking-wide border border-white border-opacity-20 transition-all duration-200 ${
              activeTab === index
                ? 'bg-white bg-opacity-10 text-white' :'bg-transparent text-white hover:bg-white hover:bg-opacity-5'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="mt-0">
        {tabs[activeTab] && tabs[activeTab].content}
      </div>
    </div>
  );
};

export default Tabs;