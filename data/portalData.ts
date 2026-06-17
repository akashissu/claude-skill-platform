export type Appointment = {
  id: string;
  doctor: string;
  specialty: string;
  date: string;
  time: string;
  location: string;
  status: 'Confirmed' | 'Check-in open' | 'Follow-up';
};

export type Prescription = {
  id: string;
  name: string;
  dosage: string;
  instructions: string;
  refillDate: string;
  status: 'Active' | 'Refill due' | 'Awaiting approval';
};

export type Message = {
  id: string;
  sender: string;
  role: string;
  sentAt: string;
  preview: string;
  unread: boolean;
};

export type LabResult = {
  id: string;
  name: string;
  value: string;
  reference: string;
  trend: 'Stable' | 'Improving' | 'Needs review';
  updatedAt: string;
};

export type RecordItem = {
  label: string;
  value: string;
};

export const portalOverview = {
  patientName: 'Maya Patel',
  memberId: 'CLN-20481-77',
  careTeam: 'Northside Family Clinic',
  nextVisit: 'Today, 10:30 AM',
  plan: 'Preferred Care PPO',
  securityStatus: 'MFA enabled',
};

export const appointments: Appointment[] = [
  {
    id: 'apt-1',
    doctor: 'Dr. Sofia Ramirez',
    specialty: 'Primary care',
    date: 'Wed, Jun 17',
    time: '10:30 AM',
    location: 'Suite 410 · Video visit ready',
    status: 'Check-in open',
  },
  {
    id: 'apt-2',
    doctor: 'Dr. James Liu',
    specialty: 'Cardiology',
    date: 'Mon, Jun 22',
    time: '2:15 PM',
    location: 'Heart & Vascular Center',
    status: 'Confirmed',
  },
  {
    id: 'apt-3',
    doctor: 'Dr. Priya Shah',
    specialty: 'Dermatology',
    date: 'Thu, Jul 02',
    time: '9:00 AM',
    location: 'Outpatient Clinic B',
    status: 'Follow-up',
  },
];

export const medicalSummary: Record<string, RecordItem[]> = {
  conditions: [
    { label: 'Hypertension', value: 'Controlled · last reviewed 2 weeks ago' },
    { label: 'Seasonal asthma', value: 'No recent flare-ups reported' },
  ],
  allergies: [
    { label: 'Penicillin', value: 'Rash noted in chart' },
    { label: 'Peanuts', value: 'Carries emergency action plan' },
  ],
  vitals: [
    { label: 'Blood pressure', value: '118 / 76 mmHg' },
    { label: 'Resting heart rate', value: '68 bpm' },
    { label: 'BMI', value: '23.4' },
  ],
  documents: [
    { label: 'Immunization record', value: 'Updated Apr 2026' },
    { label: 'Care plan', value: 'Shared with cardiology and PCP' },
  ],
};

export const prescriptions: Prescription[] = [
  {
    id: 'rx-1',
    name: 'Lisinopril',
    dosage: '10 mg · once daily',
    instructions: 'Take in the morning with water.',
    refillDate: 'Refill available Jun 25',
    status: 'Active',
  },
  {
    id: 'rx-2',
    name: 'Albuterol inhaler',
    dosage: '90 mcg · as needed',
    instructions: '2 puffs every 4–6 hours for wheezing.',
    refillDate: 'Request refill by Jun 20',
    status: 'Refill due',
  },
  {
    id: 'rx-3',
    name: 'Vitamin D3',
    dosage: '2000 IU · once daily',
    instructions: 'Take with food.',
    refillDate: 'Pending clinician sign-off',
    status: 'Awaiting approval',
  }
];

export const messages: Message[] = [
  {
    id: 'msg-1',
    sender: 'Dr. Sofia Ramirez',
    role: 'Primary care physician',
    sentAt: '8:05 AM',
    preview: 'Your blood pressure trend looks stable. Please complete eCheck-in before your virtual visit.',
    unread: true,
  },
  {
    id: 'msg-2',
    sender: 'Northside Family Clinic',
    role: 'Care coordination',
    sentAt: 'Yesterday',
    preview: 'We uploaded your annual wellness summary and shared it with your specialists.',
    unread: false,
  },
  {
    id: 'msg-3',
    sender: 'Dr. James Liu',
    role: 'Cardiologist',
    sentAt: 'Mon',
    preview: 'Continue your current exercise plan. We can review your lipid panel during next week\'s visit.',
    unread: false,
  }
];

export const labResults: LabResult[] = [
  {
    id: 'lab-1',
    name: 'A1C',
    value: '5.6%',
    reference: 'Reference < 5.7%',
    trend: 'Stable',
    updatedAt: 'Updated Jun 12',
  },
  {
    id: 'lab-2',
    name: 'LDL Cholesterol',
    value: '92 mg/dL',
    reference: 'Goal < 100 mg/dL',
    trend: 'Improving',
    updatedAt: 'Updated Jun 12',
  },
  {
    id: 'lab-3',
    name: 'Vitamin D',
    value: '24 ng/mL',
    reference: 'Goal 30–100 ng/mL',
    trend: 'Needs review',
    updatedAt: 'Updated Jun 12',
  }
];

export const profileSettings = [
  { label: 'Preferred pharmacy', value: 'Greenleaf Pharmacy · Downtown' },
  { label: 'Communication preferences', value: 'SMS reminders + secure portal messages' },
  { label: 'Emergency contact', value: 'Arjun Patel · (555) 204-8810' },
  { label: 'Privacy controls', value: 'Biometric sign-in available on mobile devices' }
];
