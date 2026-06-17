import { messages } from '@/data/portalData';
import { SectionCard } from '@/components/SectionCard';

export function DoctorMessagesPanel() {
  return (
    <SectionCard title="Doctor messages" eyebrow="Secure inbox" action="Compose">
      <div className="space-y-4">
        {messages.map((message) => (
          <article key={message.id} className="rounded-3xl border border-white/10 bg-slate-950/35 p-4">
            <div className="flex items-start justify-between gap-3">
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-base font-semibold text-white">{message.sender}</h3>
                  {message.unread ? <span className="rounded-full bg-cyan-400 px-2 py-0.5 text-[11px] font-bold text-slate-950">New</span> : null}
                </div>
                <p className="mt-1 text-sm text-cyan-200">{message.role}</p>
              </div>
              <span className="text-sm text-slate-400">{message.sentAt}</span>
            </div>
            <p className="mt-4 text-sm leading-6 text-slate-300">{message.preview}</p>
          </article>
        ))}
      </div>
    </SectionCard>
  );
}
