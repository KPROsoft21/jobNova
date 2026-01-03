
import React from 'react';
import { Sparkles, ArrowRight, Target, BrainCircuit, Rocket } from 'lucide-react';

const RightPanel: React.FC = () => {
  return (
    <div className="hidden xl:block w-80 space-y-6 shrink-0">
      <div className="bg-gradient-to-br from-indigo-50/50 to-white p-6 rounded-[2rem] border border-indigo-100 sticky top-24">
        <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-4">
          <Sparkles className="text-indigo-600" size={24} />
        </div>
        
        <h2 className="text-xl font-extrabold text-gray-900 leading-tight mb-3">
          Ace Your Interviews with AI-Powered Mock Sessions!
        </h2>
        
        <p className="text-sm text-gray-600 mb-6 leading-relaxed">
          Struggling with interview nerves or unsure how to prepare? Let our cutting-edge AI mock interviews help you shine!
        </p>

        <div className="space-y-6 mb-8">
          <FeatureItem 
            icon={<Target size={18} className="text-indigo-600" />}
            title="Job-Specific Simulations"
            desc="Practice with questions tailored to your target role."
          />
          <FeatureItem 
            icon={<BrainCircuit size={18} className="text-emerald-500" />}
            title="Actionable Feedback"
            desc="Get detailed analysis and improvement suggestions."
          />
          <FeatureItem 
            icon={<Rocket size={18} className="text-amber-500" />}
            title="Boost Success Rates"
            desc="Perfect your skills and land your dream job."
          />
        </div>

        <button className="w-full bg-gray-900 text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-black transition-all group shadow-xl shadow-gray-200">
          <span>Mock Interview</span>
          <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
};

const FeatureItem: React.FC<{ icon: React.ReactNode; title: string; desc: string }> = ({ icon, title, desc }) => (
  <div className="flex gap-3">
    <div className="shrink-0 p-1">{icon}</div>
    <div>
      <h4 className="text-sm font-bold text-gray-900">{title}</h4>
      <p className="text-xs text-gray-500 leading-normal">{desc}</p>
    </div>
  </div>
);

export default RightPanel;
