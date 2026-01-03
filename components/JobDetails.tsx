
import React from 'react';
import { 
  ArrowLeft, Share2, Heart, ArrowUpRight, 
  MapPin, Radio, Clock, Calendar, Briefcase, 
  DollarSign, BarChart3, CheckCircle2, AlertCircle,
  Globe, Users, Twitter, Linkedin
} from 'lucide-react';
import { Job } from '../types';

interface JobDetailsProps {
  job: Job;
  onBack: () => void;
  onLike: (id: string) => void;
  onApply: (id: string) => void;
  onMock: () => void;
}

const JobDetails: React.FC<JobDetailsProps> = ({ job, onBack, onLike, onApply, onMock }) => {
  return (
    <div className="w-full max-w-7xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500 pb-20">
      {/* Top Bar */}
      <div className="flex flex-wrap items-center justify-between mb-6 lg:mb-10 gap-4">
        <div className="flex items-center gap-3 md:gap-4">
          <button onClick={onBack} className="p-3 bg-white border border-gray-100 rounded-full text-gray-400 hover:text-indigo-600 transition-all shadow-sm">
            <ArrowLeft size={20} />
          </button>
          <span className="bg-indigo-100 text-indigo-600 px-4 py-2 rounded-full text-xs md:text-sm font-black shadow-sm">
            {job.applicantCount} applicants
          </span>
        </div>
        
        <div className="flex items-center gap-2 md:gap-3 ml-auto">
          <button className="p-3 bg-white border border-gray-100 rounded-full text-gray-400 hover:bg-gray-50 transition-all shadow-sm">
            <Share2 size={20} />
          </button>
          <button onClick={() => onLike(job.id)} className={`p-3 bg-white border border-gray-100 rounded-full shadow-sm transition-all ${job.isLiked ? 'text-indigo-600 border-indigo-100' : 'text-gray-400 hover:bg-gray-50'}`}>
            <Heart size={20} fill={job.isLiked ? 'currentColor' : 'none'} />
          </button>
          <button onClick={() => onApply(job.id)} className="bg-black text-white px-6 md:px-10 py-3 rounded-full text-sm font-black flex items-center gap-2 hover:bg-gray-800 transition-all shadow-lg active:scale-95">
            Apply <span className="hidden sm:inline">Now</span> <ArrowUpRight size={18} />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-4 gap-6 lg:gap-10">
        {/* Main Column */}
        <div className="xl:col-span-3 space-y-6 lg:space-y-8">
          <div className="bg-white rounded-[2rem] lg:rounded-[3rem] p-6 md:p-12 shadow-sm border border-gray-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-50/20 blur-[100px] -z-10" />

            {/* Header Content */}
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-12">
              <div className="flex items-start gap-5 lg:gap-8">
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-[1.5rem] lg:rounded-[2rem] overflow-hidden bg-white border border-gray-100 shadow-sm p-1 shrink-0 flex items-center justify-center">
                  <img src={job.company.logo} alt={job.company.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <span className="bg-indigo-50 text-indigo-500 text-[10px] font-black uppercase px-3 py-1 rounded-full mb-3 inline-block tracking-widest">
                    Live - {job.postedTime}
                  </span>
                  <h1 className="text-2xl md:text-4xl font-black text-gray-900 leading-tight mb-2 tracking-tight">{job.title}</h1>
                  <p className="text-gray-500 text-lg font-bold">{job.company.name}</p>
                  <div className="flex flex-wrap items-center gap-4 mt-4 text-xs lg:text-sm text-gray-400 font-bold uppercase tracking-tighter">
                    <div className="flex items-center gap-1.5"><MapPin size={14} /> {job.location}</div>
                    <div className="hidden sm:block w-1 h-1 rounded-full bg-indigo-200" />
                    <div className="flex items-center gap-1.5"><Radio size={14} /> {job.workMode}</div>
                    <div className="hidden sm:block w-1 h-1 rounded-full bg-indigo-200" />
                    <div className="flex items-center gap-1.5"><Calendar size={14} /> 3 days ago</div>
                  </div>
                </div>
              </div>

              {/* Match Indicator */}
              <div className="flex md:flex-col items-center justify-center gap-3">
                <div className="relative w-20 h-20 md:w-28 md:h-28">
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 80 80">
                    <circle cx="40" cy="40" r="34" stroke="#f1f5f9" strokeWidth="6" fill="transparent" />
                    <circle 
                      cx="40" cy="40" r="34" stroke="#d4ff4e" strokeWidth="6" fill="transparent" 
                      strokeDasharray={213.6} strokeDashoffset={213.6 - (job.matchPercentage / 100) * 213.6}
                      strokeLinecap="round" className="transition-all duration-1000"
                    />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-xl md:text-3xl font-black text-gray-900 leading-none">{job.matchPercentage}%</span>
                    <span className="text-[9px] md:text-[10px] uppercase font-bold text-gray-400 mt-1">Match</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-12 border-y border-gray-50 py-10">
              <Stat icon={<MapPin size={18} />} label="Location" value="United States" />
              <Stat icon={<Briefcase size={18} />} label="Job Type" value={job.employmentType} />
              <Stat icon={<Radio size={18} />} label="Work Mode" value={job.workMode} />
              <Stat icon={<Clock size={18} />} label="Experience" value={job.experience} />
              <Stat icon={<DollarSign size={18} />} label="Salary" value={job.salaryRange} />
              <Stat icon={<BarChart3 size={18} />} label="Seniority" value={job.seniority} />
            </div>

            {/* AI Call to Action */}
            <div className="bg-[#d4ff4e] rounded-[2rem] lg:rounded-[2.5rem] p-8 lg:p-12 mb-12 flex flex-col lg:flex-row items-center gap-10 relative overflow-hidden group">
               <div className="absolute top-0 right-0 w-64 h-64 bg-white/20 blur-3xl -z-0" />
               <div className="flex-1 space-y-4 relative z-10 text-center lg:text-left">
                  <h2 className="text-2xl md:text-3xl font-black text-black leading-tight uppercase tracking-tighter">Maximize your interview success</h2>
                  <p className="text-black/60 font-semibold max-w-xl">Our AI platform simulates real interview scenarios tailored to this specific role, helping you perfect every response.</p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 opacity-80">
                    <PromoItem title="Tailored" body="Questions specific to this role's needs." />
                    <PromoItem title="Analysis" body="Instant AI feedback on your speaking." />
                    <PromoItem title="Success" body="90% higher pass rate for active users." />
                  </div>
               </div>
               <button onClick={onMock} className="shrink-0 bg-black text-white px-10 py-5 rounded-2xl font-black shadow-2xl hover:bg-gray-900 active:scale-95 transition-all relative z-10">
                 Start Mock Session
               </button>
            </div>

            {/* Qualifications & Details */}
            <div className="space-y-12">
               <section>
                 <h2 className="text-2xl font-black text-gray-900 mb-6 uppercase tracking-tight">Essential Skills</h2>
                 <div className="flex flex-wrap gap-3">
                   {['Figma', 'React', 'Tailwind CSS', 'TypeScript', 'Node.js', 'System Design'].map(s => (
                     <span key={s} className="px-5 py-2.5 bg-gray-50 border border-gray-100 rounded-xl text-xs font-bold text-gray-700">{s}</span>
                   ))}
                 </div>
               </section>

               <section className="grid md:grid-cols-2 gap-10">
                 <div className="space-y-4">
                   <h3 className="text-xl font-black text-gray-900 tracking-tight">Requirements</h3>
                   <ul className="space-y-3 list-disc pl-5 text-sm text-gray-500 font-medium leading-relaxed">
                     <li>5+ years of software development experience</li>
                     <li>Expertise in modern frontend frameworks</li>
                     <li>Experience with scalable backend architectures</li>
                     <li>Excellent communication and leadership skills</li>
                   </ul>
                 </div>
                 <div className="space-y-4">
                   <h3 className="text-xl font-black text-gray-900 tracking-tight">Benefits</h3>
                   <ul className="space-y-3 text-sm text-gray-500 font-medium">
                     <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-emerald-500" /> Remote-first culture</li>
                     <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-emerald-500" /> Full health & dental coverage</li>
                     <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-emerald-500" /> Competitive equity package</li>
                     <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-emerald-500" /> Annual learning budget</li>
                   </ul>
                 </div>
               </section>

               <section className="pt-10 border-t border-gray-50">
                 <h3 className="text-xl font-black text-gray-900 mb-6">About the Company</h3>
                 <div className="flex flex-col sm:flex-row gap-6 mb-8">
                   <div className="w-20 h-20 bg-gray-100 rounded-2xl shrink-0" />
                   <div className="space-y-3">
                     <h4 className="text-2xl font-black text-gray-900">{job.company.name}</h4>
                     <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs font-bold text-gray-400 uppercase">
                       <span className="flex items-center gap-1.5"><Calendar size={14} /> Est. 1979</span>
                       <span className="flex items-center gap-1.5"><Users size={14} /> 1000+ employees</span>
                       <span className="flex items-center gap-1.5"><Globe size={14} /> Google.com</span>
                     </div>
                     <div className="flex gap-2 pt-2">
                       <button className="p-2 bg-gray-900 text-white rounded-lg hover:bg-black transition-colors"><Twitter size={14} /></button>
                       <button className="p-2 bg-gray-900 text-white rounded-lg hover:bg-black transition-colors"><Linkedin size={14} /></button>
                     </div>
                   </div>
                 </div>
                 <p className="text-sm text-gray-500 leading-relaxed font-medium">
                   We are a global leader in technology, committed to building the future through innovative software solutions. Join our team and help us shape the next generation of products used by millions worldwide.
                 </p>
               </section>
            </div>
          </div>
        </div>

        {/* Desktop Sidebar (Stacked on mobile/tablet) */}
        <div className="space-y-6">
          <div className="bg-white rounded-[2rem] p-8 border border-gray-100 shadow-sm sticky top-24">
            <h3 className="text-sm font-black text-gray-900 mb-8 uppercase tracking-widest text-center border-b border-gray-50 pb-4">AI Fit Insights</h3>
            
            <div className="grid grid-cols-2 gap-3 mb-8">
              <MiniRing score={93} label="Education" />
              <MiniRing score={80} label="Work Exp" />
              <MiniRing score={93} label="Skills" />
              <MiniRing score={44} label="Exp. Level" />
            </div>

            <div className="space-y-6">
              <InsightBlock title="Past Performance" status="success" desc="Your historical project success rate is very high for this role's specific tech stack." />
              <InsightBlock title="Skills Coverage" status="success" desc="You possess 5 out of 6 core skills required for this position." />
              <InsightBlock title="Education Match" status="warning" desc="Your degree is in a related field, but not exactly computer science." />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Stat: React.FC<{ icon: React.ReactNode; label: string; value: string }> = ({ icon, label, value }) => (
  <div className="flex items-center gap-4 group">
    <div className="w-10 h-10 rounded-xl bg-gray-50 text-gray-400 flex items-center justify-center group-hover:bg-indigo-50 group-hover:text-indigo-500 transition-colors">
      {icon}
    </div>
    <div>
      <p className="text-[10px] font-black uppercase text-gray-400 tracking-wider leading-none mb-1">{label}</p>
      <p className="text-sm font-bold text-gray-700">{value}</p>
    </div>
  </div>
);

const PromoItem: React.FC<{ title: string; body: string }> = ({ title, body }) => (
  <div className="text-left">
    <h4 className="text-[10px] font-black uppercase text-black mb-1">{title}</h4>
    <p className="text-[10px] leading-tight font-medium text-black/50">{body}</p>
  </div>
);

const MiniRing: React.FC<{ score: number; label: string }> = ({ score, label }) => (
  <div className="bg-gray-50 rounded-2xl p-4 border border-gray-100 flex flex-col items-center">
    <div className="relative w-12 h-12 mb-2">
      <svg className="w-full h-full transform -rotate-90" viewBox="0 0 40 40">
        <circle cx="20" cy="20" r="17" stroke="#e2e8f0" strokeWidth="4" fill="transparent" />
        <circle cx="20" cy="20" r="17" stroke="#818cf8" strokeWidth="4" fill="transparent" strokeDasharray={106.8} strokeDashoffset={106.8 - (score/100)*106.8} strokeLinecap="round" />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-[10px] font-black text-gray-900">{score}%</span>
      </div>
    </div>
    <span className="text-[9px] font-black text-gray-500 uppercase tracking-tighter">{label}</span>
  </div>
);

const InsightBlock: React.FC<{ title: string; desc: string; status: 'success' | 'warning' }> = ({ title, desc, status }) => (
  <div className="space-y-1.5 p-1">
    <div className="flex items-center gap-2">
      <h4 className="text-[10px] font-black text-gray-900 uppercase tracking-tight">{title}</h4>
      {status === 'success' ? <CheckCircle2 size={12} className="text-emerald-500" /> : <AlertCircle size={12} className="text-amber-500" />}
    </div>
    <p className="text-[10px] leading-relaxed text-gray-500 font-semibold">{desc}</p>
  </div>
);

export default JobDetails;
