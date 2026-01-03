
import React from 'react';
import { Share2, Heart, Lock, MapPin, Radio, CheckCircle2 } from 'lucide-react';
import { Job } from '../types';

interface JobCardProps {
  job: Job;
  onLike: (id: string) => void;
  onApply: (id: string) => void;
  onMock: (id: string) => void;
  onCardClick: (job: Job) => void;
}

const JobCard: React.FC<JobCardProps> = ({ job, onLike, onApply, onMock, onCardClick }) => {
  const isHighMatch = job.matchPercentage >= 80;
  const radius = 34;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (job.matchPercentage / 100) * circumference;
  
  const activeColor = isHighMatch ? 'text-emerald-500' : 'text-amber-500';
  const trackColor = isHighMatch ? 'text-emerald-50' : 'text-amber-50';

  return (
    <div 
      className="bg-white rounded-[1.5rem] md:rounded-[2rem] p-5 md:p-6 shadow-sm border border-gray-100 hover:shadow-xl hover:border-indigo-100 transition-all duration-300 cursor-pointer relative group flex flex-col md:flex-row gap-4 md:gap-6"
      onClick={() => onCardClick(job)}
    >
      {/* Match Score */}
      <div className="flex md:flex-col items-center justify-between md:justify-center md:min-w-[100px] border-b md:border-b-0 border-gray-50 pb-3 md:pb-0">
        <div className="flex items-center gap-3 md:block text-center">
          <div className="relative w-14 h-14 md:w-20 md:h-20">
            <svg className="w-full h-full transform -rotate-90" viewBox="0 0 80 80">
              <circle cx="40" cy="40" r={radius} stroke="currentColor" strokeWidth="8" fill="transparent" className={trackColor} />
              <circle 
                cx="40" cy="40" r={radius} stroke="currentColor" strokeWidth="8" fill="transparent" 
                strokeDasharray={circumference} style={{ strokeDashoffset: offset }}
                className={`${activeColor} transition-all duration-1000 ease-out`} strokeLinecap="round"
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-base md:text-xl font-black text-gray-900">{job.matchPercentage}%</span>
            </div>
          </div>
          <span className="text-[10px] uppercase tracking-widest font-bold text-gray-400 md:mt-2">Match</span>
        </div>

        <div className="flex md:hidden items-center gap-1">
          <ActionButtons job={job} onLike={onLike} />
        </div>
      </div>

      {/* Info Content */}
      <div className="flex-1 min-w-0 space-y-4">
        <div className="flex items-start justify-between">
          <div className="min-w-0 flex-1">
            <h3 className="text-lg md:text-xl font-bold text-gray-900 group-hover:text-indigo-600 transition-colors truncate">
              {job.title}
            </h3>
            <div className="flex items-center gap-2 mt-1">
              <img src={job.company.logo} alt={job.company.name} className="w-5 h-5 rounded object-cover border border-gray-100" />
              <span className="text-sm font-semibold text-gray-600 truncate">{job.company.name}</span>
              {job.company.isVerified && <CheckCircle2 size={12} className="text-blue-500 shrink-0" />}
            </div>
          </div>
          <div className="hidden md:flex items-center gap-1">
            <ActionButtons job={job} onLike={onLike} />
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2 text-xs text-gray-500">
          <div className="flex items-center gap-1.5 bg-gray-50 px-2.5 py-1 rounded-lg">
            <MapPin size={12} />
            <span>{job.location}</span>
          </div>
          <div className="flex items-center gap-1.5 bg-gray-50 px-2.5 py-1 rounded-lg">
            <Radio size={12} />
            <span>{job.workMode}</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          <Badge text={job.employmentType} />
          <Badge text={job.experience} />
          <Badge text={job.salaryRange} bold />
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between pt-4 border-t border-gray-50 gap-4">
          <div className="flex items-center gap-3">
            <span className="px-2 py-0.5 bg-gray-100 rounded text-[10px] font-bold text-gray-400">{job.postedTime}</span>
            <span className="text-xs font-semibold text-gray-500">{job.applicantCount} applicants</span>
          </div>
          <div className="flex gap-3">
            <button 
              onClick={(e) => { e.stopPropagation(); onApply(job.id); }}
              disabled={job.isApplied}
              className={`flex-1 sm:flex-none px-6 py-2.5 rounded-xl text-xs font-bold transition-all ${
                job.isApplied ? 'bg-gray-100 text-gray-400' : 'bg-white border border-gray-200 text-gray-700 hover:border-indigo-200 hover:bg-indigo-50/20'
              }`}
            >
              {job.isApplied ? 'Applied' : 'Apply'}
            </button>
            <button 
              onClick={(e) => { e.stopPropagation(); onMock(job.id); }}
              className="flex-1 sm:flex-none px-6 py-2.5 bg-[#d4ff4e] text-black rounded-xl text-xs font-black shadow-lg shadow-lime-100 active:scale-95 transition-all"
            >
              Mock Interview
            </button>
          </div>
        </div>
      </div>

      {job.isPremium && (
        <div className="absolute top-4 left-4 bg-indigo-600 text-white text-[9px] px-2 py-0.5 rounded-full font-black shadow-lg shadow-indigo-200 flex items-center gap-1">
          <Lock size={9} /> PREMIUM
        </div>
      )}
    </div>
  );
};

const ActionButtons: React.FC<{ job: Job; onLike: (id: string) => void }> = ({ job, onLike }) => (
  <>
    <button onClick={(e) => e.stopPropagation()} className="p-2 hover:bg-gray-100 rounded-full text-gray-400 transition-colors">
      <Share2 size={18} />
    </button>
    <button 
      onClick={(e) => { e.stopPropagation(); onLike(job.id); }}
      className={`p-2 hover:bg-indigo-50 rounded-full transition-all ${job.isLiked ? 'text-indigo-600' : 'text-gray-400'}`}
    >
      <Heart size={18} fill={job.isLiked ? 'currentColor' : 'none'} />
    </button>
  </>
);

const Badge: React.FC<{ text: string; bold?: boolean }> = ({ text, bold }) => (
  <span className={`px-3 py-1 rounded-lg text-[10px] md:text-xs bg-gray-50 text-gray-500 border border-gray-100 ${bold ? 'font-black text-gray-900' : 'font-medium'}`}>
    {text}
  </span>
);

export default JobCard;
