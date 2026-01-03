
import React, { useState } from 'react';
import { ArrowLeft, CreditCard, ShieldCheck, CheckCircle2 } from 'lucide-react';

interface PaymentPageProps {
  onBack: () => void;
  onSuccess: () => void;
}

const PaymentPage: React.FC<PaymentPageProps> = ({ onBack, onSuccess }) => {
  const [isProcessing, setIsProcessing] = useState(false);

  const handlePay = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      onSuccess();
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-6 lg:py-12 px-4">
      <div className="w-full max-w-4xl">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-gray-500 hover:text-gray-900 transition-colors mb-6 lg:mb-8 group"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          <span className="font-semibold text-sm">Back to Dashboard</span>
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-8">
          {/* Form Side */}
          <div className="lg:col-span-3 space-y-6 order-2 lg:order-1">
            <div className="bg-white rounded-[1.5rem] lg:rounded-[2.5rem] p-6 lg:p-8 shadow-sm border border-gray-100">
              <h2 className="text-xl lg:text-2xl font-black text-gray-900 mb-6">Payment Method</h2>
              
              <form onSubmit={handlePay} className="space-y-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-gray-400 uppercase ml-1">Cardholder Name</label>
                  <input 
                    required
                    type="text" 
                    placeholder="John Doe" 
                    className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-indigo-100 outline-none transition-all font-medium text-sm lg:text-base"
                  />
                </div>

                <div className="space-y-1.5 relative">
                  <label className="text-xs font-bold text-gray-400 uppercase ml-1">Card Number</label>
                  <div className="relative">
                    <input 
                      required
                      type="text" 
                      placeholder="0000 0000 0000 0000" 
                      className="w-full pl-14 pr-5 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-indigo-100 outline-none transition-all font-medium text-sm lg:text-base"
                    />
                    <CreditCard className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-gray-400 uppercase ml-1">Expiry Date</label>
                    <input 
                      required
                      type="text" 
                      placeholder="MM/YY" 
                      className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-indigo-100 outline-none transition-all font-medium text-sm lg:text-base"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-gray-400 uppercase ml-1">CVC / CVV</label>
                    <input 
                      required
                      type="password" 
                      placeholder="***" 
                      maxLength={3}
                      className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-indigo-100 outline-none transition-all font-medium text-sm lg:text-base"
                    />
                  </div>
                </div>

                <button 
                  disabled={isProcessing}
                  className="w-full bg-indigo-600 text-white py-4 lg:py-5 rounded-[1.5rem] lg:rounded-[2rem] font-black lg:text-lg shadow-xl shadow-indigo-100 hover:bg-indigo-700 transition-all active:scale-[0.98] disabled:bg-indigo-300 flex items-center justify-center gap-3"
                >
                  {isProcessing ? (
                    <div className="w-6 h-6 border-4 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      <ShieldCheck size={22} />
                      <span>Pay $19.00</span>
                    </>
                  )}
                </button>
              </form>
            </div>

            <div className="flex items-center justify-center gap-6 opacity-50 pb-10 lg:pb-0">
              <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" className="h-3 lg:h-4" alt="Visa" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" className="h-4 lg:h-6" alt="Mastercard" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" className="h-3 lg:h-4" alt="Paypal" />
            </div>
          </div>

          {/* Order Side */}
          <div className="lg:col-span-2 order-1 lg:order-2">
            <div className="bg-indigo-600 rounded-[1.5rem] lg:rounded-[2.5rem] p-6 lg:p-8 text-white shadow-2xl shadow-indigo-200">
              <div className="flex justify-between items-start mb-6 lg:mb-8">
                <div>
                  <h3 className="text-lg lg:text-xl font-black">JobNova Pro</h3>
                  <p className="text-indigo-100 text-xs lg:text-sm">Monthly Subscription</p>
                </div>
                <div className="bg-white/20 p-2 rounded-xl backdrop-blur-sm">
                  <CheckCircle2 size={24} />
                </div>
              </div>

              <div className="space-y-3 lg:space-y-4 mb-8 lg:mb-10">
                <Benefit text="Unlimited Mock Interviews" />
                <Benefit text="Premium Job Insights" />
                <Benefit text="AI Resume Optimization" />
              </div>

              <div className="border-t border-white/10 pt-4 lg:pt-6 space-y-2">
                <div className="flex justify-between text-xs lg:text-sm text-indigo-100">
                  <span>Subtotal</span>
                  <span>$19.00</span>
                </div>
                <div className="flex justify-between text-lg lg:text-2xl font-black mt-4 pt-4 border-t border-white/10">
                  <span>Total</span>
                  <span>$19.00</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Benefit: React.FC<{ text: string }> = ({ text }) => (
  <div className="flex items-center gap-3">
    <div className="w-5 h-5 rounded-full bg-emerald-400 flex items-center justify-center shrink-0">
      <CheckCircle2 size={12} className="text-indigo-900" />
    </div>
    <span className="text-xs lg:text-sm font-semibold">{text}</span>
  </div>
);

export default PaymentPage;
