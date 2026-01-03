
import React from 'react';

export interface Job {
  id: string;
  matchPercentage: number;
  title: string;
  company: {
    name: string;
    logo: string;
    isVerified: boolean;
  };
  location: string;
  workMode: 'On-site' | 'Remote' | 'Hybrid';
  employmentType: string;
  experience: string;
  seniority: string;
  salaryRange: string;
  skillsMatched: number;
  totalSkills: number;
  postedTime: string;
  applicantCount: number;
  isLiked: boolean;
  isApplied: boolean;
  isPremium?: boolean;
}

export type TabType = 'Matched' | 'Liked' | 'Applied';

export interface SidebarItem {
  id: string;
  label: string;
  icon: React.ReactNode;
}