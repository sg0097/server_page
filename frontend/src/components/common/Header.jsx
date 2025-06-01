import React from 'react';
import Breadcrumbs from '../ui/Breadcrumbs';

const Header = () => {
  const breadcrumbItems = [
    { label: 'MULTIPLAYER', href: '#' },
    { label: 'SERVER BROWSER ', href: '#' },
    
  ];

  return (
    <header className="relative z-10 p-8">
      <div className="flex items-center mb-6">
        <button className="mr-4 text-white hover:text-gray-300 transition-colors">
          <img src="/images/img_back.svg" alt="Back" className="w-4 h-2" />
        </button>
        <Breadcrumbs items={breadcrumbItems} />
      </div>
      <h1  className="text-5xl font-semibold opacity-100 text-white uppercase tracking-wide mb-8 font-rajdhani">
        Server Info
      </h1>
    </header>
  );
};

export default Header;
