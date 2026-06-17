// Navigation
export interface NavItem {
  label: string;
  href: string;
}

// Features
export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
}

// Testimonials
export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
  avatar: string;
  avatarColor: string;
}

// Stats
export interface Stat {
  id: string;
  value: string;
  label: string;
  description: string;
  icon: string;
}

// Pricing
export interface PricingPlan {
  id: string;
  name: string;
  price: number;
  period: string;
  description: string;
  features: string[];
  cta: string;
  highlighted: boolean;
}

// Team
export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  avatar: string;
  color: string;
}

// Download Button
export interface DownloadButtonProps {
  platform: 'ios' | 'android';
  href: string;
}

// App Store Info
export interface AppStoreInfo {
  platform: 'ios' | 'android';
  rating: number;
  reviews: string;
  url: string;
}

// Utility types
export type ClassValue = string | undefined | null | false | ClassValue[];

// Theme
export type Theme = 'light' | 'dark' | 'system';

// Platform
export type Platform = 'ios' | 'android' | 'web' | 'desktop';