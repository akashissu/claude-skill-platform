import { AgendaSection } from '@/components/AgendaSection';
import { ClosingCTASection } from '@/components/ClosingCTASection';
import { EventHeroSection } from '@/components/EventHeroSection';
import { EventStatsBar } from '@/components/EventStatsBar';
import { LiveChatPanel } from '@/components/LiveChatPanel';
import { NetworkingSection } from '@/components/NetworkingSection';
import { RegistrationSummarySection } from '@/components/RegistrationSummarySection';
import { SpeakerSection } from '@/components/SpeakerSection';
import {
  agendaSessions,
  eventStats,
  initialChatMessages,
  networkingMatches,
  networkingTopics,
  registrationSummary,
  speakers,
} from '@/lib/event-data';

export default function HomePage() {
  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 pb-16 pt-6 sm:px-6 lg:px-8 lg:pb-24 lg:pt-10">
      <EventHeroSection />
      <RegistrationSummarySection summary={registrationSummary} />
      <EventStatsBar stats={eventStats} />

      <section className="grid gap-6 xl:grid-cols-[1.65fr_0.95fr]">
        <AgendaSection sessions={agendaSessions} />
        <LiveChatPanel messages={initialChatMessages} />
      </section>

      <SpeakerSection speakers={speakers} />
      <NetworkingSection matches={networkingMatches} topics={networkingTopics} />
      <ClosingCTASection />
    </div>
  );
}
