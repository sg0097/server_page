import React from 'react';

const Breadcrumbs = ({ items = [] }) => {
  return (
    <nav className="flex items-center gap-x-3 text-white font-rajdhani">
      {items.map((item, index) => (
        <React.Fragment key={index}>
          {index > 0 && (
            <span className="text-white text-opacity-70 text-xl font-semibold select-none">/</span>
          )}
          <a
            href={item.href}
            className={`text-sm lg:text-base uppercase tracking-wide font-semibold ${
              item.current
                ? 'text-white'
                : 'text-white text-opacity-90 hover:text-white transition-colors'
            }`}
          >
            {item.label}
          </a>
        </React.Fragment>
      ))}
    </nav>
  );
};

export default Breadcrumbs;
