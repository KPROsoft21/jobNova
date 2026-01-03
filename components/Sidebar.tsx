
import React from 'react';
import { SIDEBAR_ITEMS, SECONDARY_ITEMS } from '../constants';

interface SidebarProps {
  activeItem: string;
  onItemClick: (id: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeItem, onItemClick }) => {
  return (
    <>
      {/* Desktop Sidebar */}
      <div className="hidden lg:flex flex-col w-64 bg-white h-screen fixed left-0 top-0 border-r border-gray-100 z-30 pt-4 overflow-y-auto">
        {/* Logo */}
        <div className="px-6 mb-8 flex items-center gap-2 cursor-pointer" onClick={() => onItemClick('jobs')}>
          <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5-10-5-10 5z" />
            </svg>
          </div>
          <span className="text-xl font-bold text-gray-900 tracking-tight">JobNova</span>
        </div>

        {/* Main Menu */}
        <nav className="flex-1 px-4 space-y-1">
          {SIDEBAR_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => onItemClick(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group ${
                activeItem === item.id 
                  ? 'bg-indigo-100 text-indigo-600 font-semibold' 
                  : 'text-gray-500 hover:bg-gray-50'
              }`}
            >
              <span className={`${activeItem === item.id ? 'text-indigo-600' : 'text-gray-400 group-hover:text-gray-600'}`}>
                {item.icon}
              </span>
              <span>{item.label}</span>
            </button>
          ))}

          <div className="my-6 border-t border-gray-100 mx-4" />

          {SECONDARY_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => onItemClick(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                activeItem === item.id 
                  ? 'bg-indigo-100 text-indigo-600 font-semibold' 
                  : 'text-gray-500 hover:bg-gray-50'
              }`}
            >
              <span className={`${activeItem === item.id ? 'text-indigo-600' : 'text-gray-400'}`}>
                {item.icon}
              </span>
              <span>{item.label}</span>
            </button>
          ))}
        </nav>

        {/* Upgrade CTA */}
        <div className="px-4 pb-8 mt-auto">
          <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl p-5 text-white shadow-lg shadow-indigo-200">
            <h4 className="font-bold text-lg leading-tight mb-1">Upgrade Your Plan</h4>
            <p className="text-xs text-indigo-100 mb-4">Boost your success rate now!</p>
            <button 
              onClick={() => onItemClick('subscription')}
              className="w-full bg-white text-indigo-600 py-2.5 rounded-xl font-semibold text-sm hover:bg-gray-50 transition-colors shadow-sm"
            >
              Subscription
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Bottom Navigation */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 h-16 bg-white border-t border-gray-100 z-50 flex items-center justify-around px-2 shadow-[0_-4px_12px_rgba(0,0,0,0.05)]">
        {SIDEBAR_ITEMS.map((item) => (
          <button
            key={item.id}
            onClick={() => onItemClick(item.id)}
            className={`flex flex-col items-center justify-center w-full h-full transition-colors ${
              activeItem === item.id ? 'text-indigo-600' : 'text-gray-400'
            }`}
          >
            <div className={`p-1 rounded-lg ${activeItem === item.id ? 'bg-indigo-50' : ''}`}>
              {item.icon}
            </div>
            <span className="text-[10px] mt-0.5 font-bold uppercase tracking-tighter">
              {item.label === 'AI Mock Interview' ? 'Mock' : item.label}
            </span>
          </button>
        ))}
        {/* Quick access to Subscription on mobile bottom nav if needed, or just keep secondary items in profile */}
        <button
          onClick={() => onItemClick('subscription')}
          className={`flex flex-col items-center justify-center w-full h-full text-gray-400`}
        >
          <div className="p-1">
            {SECONDARY_ITEMS[0].icon}
          </div>
          <span className="text-[10px] mt-0.5 font-bold uppercase tracking-tighter">PRO</span>
        </button>
      </div>
    </>
  );
};

export default Sidebar;
