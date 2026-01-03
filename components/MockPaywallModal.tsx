
import React from 'react';
import { X } from 'lucide-react';

interface MockPaywallModalProps {
  isOpen: boolean;
  onClose: () => void;
  onUpgrade: () => void;
}

const MockPaywallModal: React.FC<MockPaywallModalProps> = ({ isOpen, onClose, onUpgrade }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-black/30 backdrop-blur-[2px]" 
        onClick={onClose} 
      />
      
      {/* The Modal Container with the Blue Border from the reference */}
      <div className="relative bg-white w-full max-w-[340px] aspect-[9/16] rounded-[2.5rem] shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-300 flex flex-col border-[3px] border-blue-400">
        
        {/* Header */}
        <div className="pt-10 px-6 pb-4 text-center">
          <h3 className="text-lg font-bold text-gray-800 leading-tight">
            Why is this job a good fit for me?
          </h3>
        </div>

        {/* Blurred Content Area */}
        <div className="flex-1 relative px-6 overflow-hidden">
          {/* Background color blobs for the blur effect */}
          <div className="absolute top-10 right-0 w-32 h-32 bg-purple-200/50 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-0 w-32 h-32 bg-blue-100/50 rounded-full blur-3xl" />
          
          {/* Simulated blurred text lines */}
          <div className="space-y-6 mt-4 blur-[6px] select-none opacity-50">
            <div className="space-y-2">
              <div className="h-3 bg-gray-200 rounded-full w-3/4" />
              <div className="h-3 bg-gray-100 rounded-full w-full" />
              <div className="h-3 bg-gray-100 rounded-full w-5/6" />
            </div>
            <div className="space-y-2">
              <div className="h-3 bg-gray-200 rounded-full w-2/3" />
              <div className="h-3 bg-gray-100 rounded-full w-full" />
              <div className="h-3 bg-gray-100 rounded-full w-4/5" />
            </div>
            <div className="space-y-2">
              <div className="h-3 bg-gray-200 rounded-full w-1/2" />
              <div className="h-3 bg-gray-100 rounded-full w-full" />
            </div>
            <div className="space-y-2">
              <div className="h-3 bg-gray-200 rounded-full w-3/4" />
              <div className="h-3 bg-gray-100 rounded-full w-full" />
            </div>
             <div className="space-y-2">
              <div className="h-3 bg-gray-200 rounded-full w-2/3" />
              <div className="h-3 bg-gray-100 rounded-full w-full" />
            </div>
          </div>

          {/* Overlay gradient to fade out content */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/10 to-white/80" />
        </div>

        {/* Footer with dark button */}
        <div className="p-8 pb-10 flex flex-col items-center">
          <button 
            className="w-full bg-[#1e293b] text-white py-4 rounded-3xl font-bold shadow-lg hover:bg-slate-900 transition-all active:scale-[0.98]"
            onClick={onUpgrade}
          >
            Upgrade to check
          </button>
        </div>

        {/* Optional: Small close button if they want to exit */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-gray-300 hover:text-gray-500 rounded-full transition-colors"
        >
          <X size={20} />
        </button>
      </div>
    </div>
  );
};

export default MockPaywallModal;
