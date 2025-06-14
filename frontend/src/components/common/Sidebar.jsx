import React from 'react';

const Sidebar = () => {
  const sidebarItems = [
    { icon: '/images/img_sidemenugame_48x32.png', alt: 'Game' },
    { icon: '/images/img_sidemenugame.png', alt: 'Game Menu' },
    { icon: '/images/img_sidemenu.png', alt: 'Menu' },
    { icon: '/images/img_sidemenugame_1.png', alt: 'Game Settings' },
    { icon: '/images/img_sidemenucareer.png', alt: 'Career' },
    { icon: '/images/img_vector.svg', alt: 'Vector' },
    { icon: '/images/img_sidemenunews.svg', alt: 'News' }
  ];

  return (
    <aside className="flex fixed left-0 top-0 h-full w-16 bg-black bg-opacity-20 flex-col items-center py-8 z-20">
      <div className="flex-1 flex flex-col items-center space-y-8">
        {sidebarItems.map((item, index) => (
          <button
            key={index}
            className="w-12 h-8 flex items-center justify-center hover:bg-white hover:bg-opacity-10 rounded transition-colors"
            aria-label={item.alt}
          >
            <img src={item.icon} alt={item.alt} className="max-w-full max-h-full" />
          </button>
        ))}
      </div>

      <div className="flex items-center justify-center flex-col  space-y-4 mt-auto">
        <img src="/images/img_sidemenumisc.svg" alt="Misc" className="w-12 h-12" />
        <img src="/images/img_sidemenumisc_white_a700.svg" alt="Misc White" className="w-12 h-12" />
      </div>
    </aside>
  );
};

export default Sidebar;
