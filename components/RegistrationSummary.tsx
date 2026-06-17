'use client';

import { useState } from 'react';
import { CheckCircle, User, Mail, Building, ChevronRight, Shield, Zap } from 'lucide-react';

interface RegistrationSummaryProps {
  isRegistered: boolean;
  onRegister: () => void;
}

export function RegistrationSummary({ isRegistered, onRegister }: RegistrationSummaryProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    role: '',
  });
  const [step, setStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsLoading(false);
    onRegister();
  };

  if (isRegistered) {
    return (
      <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8 text-center">
        <div className="w-16 h-16 bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="w-8 h-8 text-green-400" />
        </div>
        <h3 className="text-2xl font-bold text-white mb-2">You&apos;re Registered!</h3>
        <p className="text-gray-400 mb-6">Welcome to TechSummit 2024. Check your email for access details.</p>
        <div className="space-y-3 text-left mb-6">
          {[
            { label: 'Event Access', value: 'Full 3-Day Pass', icon: Zap },
            { label: 'Sessions', value: '50+ Sessions Unlocked', icon: CheckCircle },
            { label: 'Networking', value: 'Lounge Access Granted', icon: CheckCircle },
            { label: 'Recordings', value: '90-Day Replay Access', icon: CheckCircle },
          ].map(({ label, value, icon: Icon }) => (
            <div key={label} className="flex items-center gap-3 bg-gray-800/50 rounded-xl px-4 py-3">
              <Icon className="w-4 h-4 text-green-400 flex-shrink-0" />
              <div className="flex-1">
                <span className="text-gray-400 text-xs">{label}</span>
                <p className="text-white text-sm font-medium">{value}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center gap-2 text-gray-500 text-xs">
          <Shield className="w-3.5 h-3.5" />
          <span>Your data is secure and never shared</span>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-brand-900 to-brand-800 px-6 py-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-white font-bold text-lg">Register Free</h3>
            <p className="text-brand-300 text-sm">Join 12,000+ attendees</p>
          </div>
          <div className="text-right">
            <p className="text-brand-300 text-xs">Step {step} of 2</p>
            <div className="flex gap-1 mt-1">
              <div className={`w-8 h-1 rounded-full ${step >= 1 ? 'bg-white' : 'bg-brand-700'}`} />
              <div className={`w-8 h-1 rounded-full ${step >= 2 ? 'bg-white' : 'bg-brand-700'}`} />
            </div>
          </div>
        </div>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="p-6">
        {step === 1 ? (
          <div className="space-y-4">
            <div className="relative">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
              <input
                type="text"
                placeholder="Full Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="input-field pl-11"
                required
              />
            </div>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
              <input
                type="email"
                placeholder="Work Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="input-field pl-11"
                required
              />
            </div>
            <button
              type="button"
              onClick={() => formData.name && formData.email && setStep(2)}
              className="btn-primary w-full flex items-center justify-center gap-2"
            >
              Continue <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="relative">
              <Building className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
              <input
                type="text"
                placeholder="Company"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                className="input-field pl-11"
              />
            </div>
            <select
              value={formData.role}
              onChange={(e) => setFormData({ ...formData, role: e.target.value })}
              className="input-field"
            >
              <option value="" disabled>Select your role</option>
              <option value="engineer">Software Engineer</option>
              <option value="manager">Engineering Manager</option>
              <option value="product">Product Manager</option>
              <option value="designer">Designer</option>
              <option value="founder">Founder / CEO</option>
              <option value="other">Other</option>
            </select>
            <button
              type="submit"
              disabled={isLoading}
              className="btn-primary w-full flex items-center justify-center gap-2"
            >
              {isLoading ? (
                <>
                  <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                  Registering...
                </>
              ) : (
                <>
                  <Zap className="w-4 h-4" />
                  Complete Registration
                </>
              )}
            </button>
            <button
              type="button"
              onClick={() => setStep(1)}
              className="w-full text-gray-500 hover:text-gray-300 text-sm transition-colors"
            >
              ← Back
            </button>
          </div>
        )}

        <div className="flex items-center justify-center gap-2 mt-4 text-gray-600 text-xs">
          <Shield className="w-3.5 h-3.5" />
          <span>Free forever. No credit card required.</span>
        </div>
      </form>
    </div>
  );
}
