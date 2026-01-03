
import React from 'react';
import { 
  Briefcase, 
  UserCircle, 
  FileText, 
  Settings, 
  CreditCard, 
  Zap,
  MessageSquareCode
} from 'lucide-react';
import { Job, SidebarItem } from './types';

export const SIDEBAR_ITEMS: SidebarItem[] = [
  { id: 'jobs', label: 'Jobs', icon: <Briefcase size={20} /> },
  { id: 'mock', label: 'AI Mock Interview', icon: <MessageSquareCode size={20} /> },
  { id: 'resume', label: 'Resume', icon: <FileText size={20} /> },
  { id: 'profile', label: 'Profile', icon: <UserCircle size={20} /> },
  { id: 'setting', label: 'Setting', icon: <Settings size={20} /> },
];

export const SECONDARY_ITEMS: SidebarItem[] = [
  { id: 'subscription', label: 'Subscription', icon: <CreditCard size={20} /> },
  { id: 'credits', label: 'Extra Credits', icon: <Zap size={20} /> },
];

export const MOCK_JOBS: Job[] = [
  {
    id: '1',
    matchPercentage: 64,
    title: 'Web Application Developer',
    company: {
      name: 'Backd Business Funding',
      logo: '/assets/bacd.jpeg',
      isVerified: true
    },
    location: 'Austin, Texas Metropolitan Area',
    workMode: 'On-site',
    employmentType: 'Full time',
    experience: '3+ years exp',
    seniority: 'Mid Level',
    salaryRange: '$65k/yr - $70k/yr',
    skillsMatched: 0,
    totalSkills: 3,
    postedTime: '1 hours ago',
    applicantCount: 25,
    isLiked: false,
    isApplied: false
  },
  {
    id: '2',
    matchPercentage: 80,
    title: 'Software Engineer, Network Infrastructure',
    company: {
      name: 'Cursor AI',
      logo: '/assets/cursor.avif',
      isVerified: true
    },
    location: 'Sunnyvale, CA',
    workMode: 'On-site',
    employmentType: 'Full time',
    experience: '5+ years exp',
    seniority: 'Mid Level',
    salaryRange: '$161k/yr - $239k/yr',
    skillsMatched: 3,
    totalSkills: 3,
    postedTime: '2 hours ago',
    applicantCount: 25,
    isLiked: true,
    isApplied: false
  },
  {
    id: '3',
    matchPercentage: 82,
    title: 'Full-Stack Software Engineer (Web Developer)',
    company: {
      name: 'Simons Foundation',
      logo: '/assets/sf.jpg',
      isVerified: true
    },
    location: 'New York , NY',
    workMode: 'On-site',
    employmentType: 'Full time',
    experience: '5+ years exp',
    seniority: 'Mid Level',
    salaryRange: '$125k/yr - $140k/yr',
    skillsMatched: 2,
    totalSkills: 3,
    postedTime: '2 hours ago',
    applicantCount: 25,
    isLiked: false,
    isApplied: false,
    isPremium: true
  },
  {
    id: '4',
    matchPercentage: 91,
    title: 'UX Designer',
    company: {
      name: 'Google',
      logo: '/assets/google.png',
      isVerified: true
    },
    location: 'Ann Arbor, MI',
    workMode: 'Remote',
    employmentType: 'Internship',
    experience: 'Entry level',
    seniority: 'Junior',
    salaryRange: '$90k/yr - $130k/yr',
    skillsMatched: 3,
    totalSkills: 4,
    postedTime: '3 days ago',
    applicantCount: 27,
    isLiked: false,
    isApplied: true
  }
];
