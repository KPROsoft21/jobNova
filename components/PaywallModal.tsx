
import React from 'react';
import { Lock, X, Sparkles } from 'lucide-react';

interface PaywallModalProps {
  isOpen: boolean;
  onClose: () => void;
  onUpgrade: () => void;
}

const PaywallModal: React.FC<PaywallModalProps> = ({ isOpen, onClose, onUpgrade }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-black/40 backdrop-blur-sm" 
        onClick={onClose} 
      />
      <div className="relative bg-white w-full max-w-md rounded-[2.5rem] overflow-hidden shadow-2xl animate-in zoom-in-95 duration-200 border border-indigo-50">
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 p-2 hover:bg-gray-100 rounded-full transition-colors z-10"
        >
          <X size={20} />
        </button>

        <div className="p-8 pt-12 flex flex-col items-center text-center">
          <div className="w-20 h-20 bg-indigo-50 rounded-3xl flex items-center justify-center mb-6 relative">
            <div className="absolute -top-2 -right-2 bg-amber-400 p-2 rounded-xl shadow-lg">
              <Sparkles size={16} className="text-white" />
            </div>
            <Lock className="text-indigo-600" size={40} />
          </div>

          <h3 className="text-2xl font-black text-gray-900 mb-2">Upgrade to Unlock</h3>
          <p className="text-gray-500 mb-8 px-4">
            Get exclusive access to premium job listings, AI match insights, and priority applications.
          </p>

          <div className="w-full space-y-3 mb-8">
            <FeatureRow text="Unlimited Premium Listings" />
            <FeatureRow text="Detailed AI Skill Gap Analysis" />
            <FeatureRow text="Priority Support & Mock Sessions" />
          </div>

          <button 
            onClick={onUpgrade}
            className="w-full bg-indigo-600 text-white py-4 rounded-2xl font-bold shadow-lg shadow-indigo-200 hover:bg-indigo-700 transition-all mb-3 active:scale-[0.98]"
          >
            Upgrade Your Plan
          </button>
          
          <p className="text-xs text-gray-400">
            Cancel anytime. No commitment.
          </p>
        </div>
      </div>
    </div>
  );
};

const FeatureRow: React.FC<{ text: string }> = ({ text }) => (
  <div className="flex items-center gap-3 text-left bg-gray-50 p-4 rounded-2xl border border-gray-100">
    <div className="w-2 h-2 rounded-full bg-indigo-500" />
    <span className="text-sm font-semibold text-gray-700">{text}</span>
  </div>
);

export default PaywallModal;
