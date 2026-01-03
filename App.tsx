
import React, { useState, useMemo } from 'react';
import { 
  RefreshCw, 
  ChevronDown, 
  Search,
  ArrowUpDown,
  Briefcase
} from 'lucide-react';
import { MOCK_JOBS } from './constants';
import { Job, TabType } from './types';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import JobCard from './components/JobCard';
import RightPanel from './components/RightPanel';
import PaywallModal from './components/PaywallModal';
import MockPaywallModal from './components/MockPaywallModal';
import PaymentPage from './components/PaymentPage';
import JobDetails from './components/JobDetails';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<'board' | 'payment' | 'details'>('board');
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [activeSidebarItem, setActiveSidebarItem] = useState('jobs');
  const [activeTab, setActiveTab] = useState<TabType>('Matched');
  const [jobs, setJobs] = useState<Job[]>(MOCK_JOBS);
  const [isPaywallOpen, setIsPaywallOpen] = useState(false);
  const [isMockPaywallOpen, setIsMockPaywallOpen] = useState(false);

  const likedCount = useMemo(() => jobs.filter(j => j.isLiked).length, [jobs]);
  const appliedCount = useMemo(() => jobs.filter(j => j.isApplied).length, [jobs]);

  const filteredJobs = useMemo(() => {
    if (activeTab === 'Liked') return jobs.filter(j => j.isLiked);
    if (activeTab === 'Applied') return jobs.filter(j => j.isApplied);
    return [...jobs].sort((a, b) => b.matchPercentage - a.matchPercentage);
  }, [jobs, activeTab]);

  const handleLike = (id: string) => {
    setJobs(prev => prev.map(job => 
      job.id === id ? { ...job, isLiked: !job.isLiked } : job
    ));
  };

  const handleApply = (id: string) => {
    setJobs(prev => prev.map(job => 
      job.id === id ? { ...job, isApplied: true, applicantCount: job.applicantCount + 1 } : job
    ));
  };

  const handleMock = (id: string) => {
    setIsMockPaywallOpen(true);
  };

  const handleCardClick = (job: Job) => {
    if (job.isPremium) {
      setIsPaywallOpen(true);
    } else {
      setSelectedJob(job);
      setCurrentView('details');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const navigateToPayment = () => {
    setIsPaywallOpen(false);
    setIsMockPaywallOpen(false);
    setCurrentView('payment');
  };

  if (currentView === 'payment') {
    return (
      <PaymentPage 
        onBack={() => setCurrentView('board')} 
        onSuccess={() => {
          alert("Payment Successful! Welcome to Pro.");
          setCurrentView('board');
        }}
      />
    );
  }

  return (
    <div className="min-h-screen bg-[#f8f9fc] flex flex-col lg:flex-row">
      <Sidebar 
        activeItem={activeSidebarItem} 
        onItemClick={(id) => {
          if (id === 'subscription') {
            navigateToPayment();
          } else {
            setActiveSidebarItem(id);
            setCurrentView('board');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }
        }} 
      />

      <div className="flex-1 lg:pl-64 flex flex-col min-w-0 pb-20 lg:pb-0">
        <Header 
          activeTab={activeTab} 
          setActiveTab={(tab) => {
            setActiveTab(tab);
            setCurrentView('board');
          }}
          likedCount={likedCount} 
          appliedCount={appliedCount}
        />

        <main className="flex-1 w-full max-w-[1600px] mx-auto px-4 md:px-6 lg:px-8 py-4 lg:py-8 flex flex-col lg:flex-row gap-6 lg:gap-8">
          {currentView === 'details' && selectedJob ? (
            <JobDetails 
              job={selectedJob} 
              onBack={() => setCurrentView('board')}
              onLike={handleLike}
              onApply={handleApply}
              onMock={() => handleMock(selectedJob.id)}
            />
          ) : (
            <>
              <div className="flex-1 min-w-0 space-y-6">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                  <button className="w-full md:w-auto px-8 py-3.5 bg-indigo-500 text-white rounded-full font-bold flex items-center justify-center gap-2 shadow-lg shadow-indigo-100 hover:bg-indigo-600 transition-all active:scale-95">
                    <RefreshCw size={18} />
                    <span>Change Job Reference</span>
                  </button>

                  <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
                    <div className="relative w-full sm:w-64">
                       <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                       <input 
                        type="text" 
                        placeholder="Search titles..." 
                        className="w-full pl-11 pr-4 py-3 bg-white border border-gray-100 rounded-2xl text-sm focus:ring-2 focus:ring-indigo-100 transition-all outline-none"
                       />
                    </div>
                    <button className="w-full sm:w-auto flex items-center justify-center gap-2 px-4 py-3 bg-white border border-gray-100 rounded-2xl text-sm font-semibold text-gray-700 shadow-sm hover:bg-gray-50">
                      <ArrowUpDown size={16} />
                      <span>Sort By</span>
                      <ChevronDown size={16} className="text-gray-400" />
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4 lg:gap-5">
                  {filteredJobs.length > 0 ? (
                    filteredJobs.map((job) => (
                      <JobCard 
                        key={job.id} 
                        job={job} 
                        onLike={handleLike}
                        onApply={handleApply}
                        onMock={handleMock}
                        onCardClick={handleCardClick}
                      />
                    ))
                  ) : (
                    <div className="bg-white rounded-[2rem] p-12 lg:p-20 text-center border-2 border-dashed border-gray-200">
                      <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4 text-gray-300">
                        <Briefcase size={32} />
                      </div>
                      <h3 className="text-lg font-bold text-gray-900">No matching jobs</h3>
                      <p className="text-gray-500 mt-1">Try adjusting your filters or tabs.</p>
                    </div>
                  )}
                </div>
              </div>

              <RightPanel />
            </>
          )}
        </main>
      </div>

      <PaywallModal 
        isOpen={isPaywallOpen} 
        onClose={() => setIsPaywallOpen(false)} 
        onUpgrade={navigateToPayment}
      />

      <MockPaywallModal
        isOpen={isMockPaywallOpen}
        onClose={() => setIsMockPaywallOpen(false)}
        onUpgrade={navigateToPayment}
      />
    </div>
  );
};

export default App;
