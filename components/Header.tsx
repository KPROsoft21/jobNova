
import React from 'react';
import { TabType } from '../types';

interface HeaderProps {
  activeTab: TabType;
  setActiveTab: (tab: TabType) => void;
  likedCount: number;
  appliedCount: number;
}

const Header: React.FC<HeaderProps> = ({ 
  activeTab, 
  setActiveTab, 
  likedCount, 
  appliedCount
}) => {
  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-gray-100 px-4 md:px-8 py-3 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <div className="w-8 h-8 bg-black rounded-lg flex lg:hidden items-center justify-center shrink-0">
          <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5-10-5-10 5z" />
          </svg>
        </div>
        <span className="text-lg font-bold lg:hidden tracking-tight">JobNova</span>
        <div className="hidden lg:block w-32" /> {/* Spacer for desktop center alignment */}
      </div>

      <div className="flex bg-gray-50 p-1 rounded-full border border-gray-200 scale-90 sm:scale-100">
        <TabItem 
          label="Matched" 
          active={activeTab === 'Matched'} 
          onClick={() => setActiveTab('Matched')} 
        />
        <TabItem 
          label="Liked" 
          count={likedCount} 
          active={activeTab === 'Liked'} 
          onClick={() => setActiveTab('Liked')} 
        />
        <TabItem 
          label="Applied" 
          count={appliedCount} 
          active={activeTab === 'Applied'} 
          onClick={() => setActiveTab('Applied')} 
        />
      </div>

      <div className="flex items-center gap-3">
        <div className="hidden sm:block text-right">
          <p className="text-sm font-semibold">User Account</p>
          <p className="text-xs text-gray-500">Free Plan</p>
        </div>
        <img 
          src="https://picsum.photos/seed/user/100/100" 
          alt="Avatar" 
          className="w-8 h-8 lg:w-10 lg:h-10 rounded-full border-2 border-indigo-50 shadow-sm"
        />
      </div>
    </header>
  );
};

const TabItem: React.FC<{ 
  label: string; 
  count?: number; 
  active: boolean; 
  onClick: () => void;
}> = ({ label, count, active, onClick }) => (
  <button
    onClick={onClick}
    className={`relative flex items-center gap-1.5 px-3 sm:px-6 py-1.5 rounded-full text-[12px] sm:text-sm font-medium transition-all duration-300 ${
      active 
        ? 'bg-white text-indigo-600 shadow-sm border border-indigo-100' 
        : 'text-gray-500 hover:text-gray-800'
    }`}
  >
    {label}
    {count !== undefined && count > 0 && (
      <span className="flex items-center justify-center min-w-[16px] sm:min-w-[20px] h-4 sm:h-5 px-1 rounded-full bg-emerald-500 text-[8px] sm:text-[10px] font-bold text-white shadow-sm ring-2 ring-white">
        {count}
      </span>
    )}
  </button>
);

export default Header;
