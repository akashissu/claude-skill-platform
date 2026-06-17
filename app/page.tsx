import { AppointmentSection } from '@/components/AppointmentSection';
import { DoctorMessagesPanel } from '@/components/DoctorMessagesPanel';
import { LabResultsSection } from '@/components/LabResultsSection';
import { MedicalSummarySection } from '@/components/MedicalSummarySection';
import { PortalHeader } from '@/components/PortalHeader';
import { PrescriptionPanel } from '@/components/PrescriptionPanel';
import { ProfileSettingsPanel } from '@/components/ProfileSettingsPanel';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.14),_transparent_28%),linear-gradient(180deg,_#020617_0%,_#0f172a_45%,_#111827_100%)] px-4 py-8 text-white sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-6">
        <PortalHeader />

        <section className="grid gap-6 xl:grid-cols-3">
          <AppointmentSection />
          <MedicalSummarySection />
          <PrescriptionPanel />
          <DoctorMessagesPanel />
          <LabResultsSection />
          <ProfileSettingsPanel />
        </section>
      </div>
    </div>
  );
}
