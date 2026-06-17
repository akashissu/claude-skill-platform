'use client';

import { useState } from 'react';
import { Check, X, User, Mail, Building, Globe } from 'lucide-react';

interface RegistrationSummaryProps {
  onClose: () => void;
  onRegister: () => void;
}

const ticketTypes = [
  { id: 'free', label: 'Free Pass', price: 0, features: ['Live streams', 'Chat access', 'Networking'] },
  { id: 'pro', label: 'Pro Pass', price: 49, features: ['Everything in Free', 'Workshop access', 'Session recordings', 'Certificate'] },
  { id: 'vip', label: 'VIP Pass', price: 149, features: ['Everything in Pro', '1:1 Speaker sessions', 'Exclusive lounge', 'Swag kit'] },
];

export function RegistrationSummary({ onClose, onRegister }: RegistrationSummaryProps) {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [selectedTicket, setSelectedTicket] = useState('free');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    country: '',
    role: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Invalid email';
    if (!formData.company.trim()) newErrors.company = 'Company is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (step === 1) setStep(2);
    else if (step === 2 && validate()) setStep(3);
  };

  const selectedTicketData = ticketTypes.find((t) => t.id === selectedTicket)!;

  return (
    <div className="glass-card p-6 animate-slide-up">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-bold text-white">Register for TechSummit 2024</h2>
          <p className="text-gray-400 text-sm">Step {step} of 3</p>
        </div>
        <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors">
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Progress */}
      <div className="flex gap-2 mb-6">
        {[1, 2, 3].map((s) => (
          <div
            key={s}
            className={`flex-1 h-1.5 rounded-full transition-all duration-300 ${
              s <= step ? 'bg-brand-500' : 'bg-gray-700'
            }`}
          />
        ))}
      </div>

      {/* Step 1: Ticket Selection */}
      {step === 1 && (
        <div className="space-y-3">
          <h3 className="text-white font-semibold mb-4">Choose Your Pass</h3>
          {ticketTypes.map((ticket) => (
            <div
              key={ticket.id}
              onClick={() => setSelectedTicket(ticket.id)}
              className={`p-4 rounded-xl border cursor-pointer transition-all duration-200 ${
                selectedTicket === ticket.id
                  ? 'border-brand-500 bg-brand-600/10'
                  : 'border-white/10 bg-white/5 hover:border-white/20'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                  <div
                    className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                      selectedTicket === ticket.id ? 'border-brand-500 bg-brand-500' : 'border-gray-600'
                    }`}
                  >
                    {selectedTicket === ticket.id && <div className="w-2 h-2 bg-white rounded-full" />}
                  </div>
                  <span className="font-semibold text-white">{ticket.label}</span>
                </div>
                <span className="text-brand-400 font-bold">
                  {ticket.price === 0 ? 'FREE' : `$${ticket.price}`}
                </span>
              </div>
              <ul className="space-y-1 ml-7">
                {ticket.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-gray-400 text-sm">
                    <Check className="w-3.5 h-3.5 text-green-400 flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}

      {/* Step 2: Personal Info */}
      {step === 2 && (
        <div className="space-y-4">
          <h3 className="text-white font-semibold mb-4">Your Information</h3>
          {[
            { key: 'name', label: 'Full Name', icon: <User className="w-4 h-4" />, placeholder: 'Jane Doe' },
            { key: 'email', label: 'Email Address', icon: <Mail className="w-4 h-4" />, placeholder: 'jane@example.com' },
            { key: 'company', label: 'Company', icon: <Building className="w-4 h-4" />, placeholder: 'Acme Corp' },
            { key: 'country', label: 'Country', icon: <Globe className="w-4 h-4" />, placeholder: 'United States' },
            { key: 'role', label: 'Job Title', icon: <User className="w-4 h-4" />, placeholder: 'Software Engineer' },
          ].map((field) => (
            <div key={field.key}>
              <label className="block text-sm font-medium text-gray-300 mb-1.5">{field.label}</label>
              <div className="relative">
                <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">{field.icon}</div>
                <input
                  type="text"
                  placeholder={field.placeholder}
                  value={formData[field.key as keyof typeof formData]}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, [field.key]: e.target.value }))
                  }
                  className={`w-full bg-gray-800 border rounded-lg pl-10 pr-4 py-2.5 text-white placeholder-gray-500 focus:outline-none transition-colors text-sm ${
                    errors[field.key] ? 'border-red-500 focus:border-red-400' : 'border-gray-700 focus:border-brand-500'
                  }`}
                />
              </div>
              {errors[field.key] && (
                <p className="text-red-400 text-xs mt-1">{errors[field.key]}</p>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Step 3: Confirmation */}
      {step === 3 && (
        <div className="text-center py-4">
          <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <Check className="w-8 h-8 text-green-400" />
          </div>
          <h3 className="text-xl font-bold text-white mb-2">You&apos;re all set!</h3>
          <p className="text-gray-400 mb-6">
            Confirm your registration for TechSummit 2024
          </p>
          <div className="glass-card p-4 text-left mb-6">
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-400">Name</span>
                <span className="text-white font-medium">{formData.name || 'Not provided'}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Email</span>
                <span className="text-white font-medium">{formData.email || 'Not provided'}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Pass Type</span>
                <span className="text-brand-400 font-semibold">{selectedTicketData.label}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Total</span>
                <span className="text-white font-bold">
                  {selectedTicketData.price === 0 ? 'FREE' : `$${selectedTicketData.price}`}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Actions */}
      <div className="flex gap-3 mt-6">
        {step > 1 && (
          <button
            onClick={() => setStep((prev) => (prev - 1) as 1 | 2 | 3)}
            className="btn-secondary flex-1"
          >
            Back
          </button>
        )}
        {step < 3 ? (
          <button onClick={handleNext} className="btn-primary flex-1">
            Continue
          </button>
        ) : (
          <button onClick={onRegister} className="btn-primary flex-1">
            Complete Registration
          </button>
        )}
      </div>
    </div>
  );
}
