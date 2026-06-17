'use client';

import { useMemo, useState } from 'react';
import type { ChatMessage } from '@/types';

export function LiveChatPanel({ messages }: { messages: ChatMessage[] }) {
  const [chatMessages, setChatMessages] = useState(messages);
  const [draft, setDraft] = useState('');

  const attendeeCount = useMemo(
    () => chatMessages.filter((message) => message.role === 'Attendee').length,
    [chatMessages],
  );

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const trimmed = draft.trim();
    if (!trimmed) {
      return;
    }

    const timestamp = new Intl.DateTimeFormat('en', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
      timeZone: 'UTC',
    }).format(new Date());

    setChatMessages((current) => [
      ...current,
      {
        id: `local-${current.length + 1}`,
        author: 'You',
        role: 'Attendee',
        time: timestamp,
        message: trimmed,
      },
    ]);
    setDraft('');
  };

  return (
    <section id="chat" className="section-shell flex h-full flex-col">
      <div className="mb-6 flex items-start justify-between gap-4">
        <div>
          <p className="eyebrow">Live chat panel</p>
          <h2 className="mt-3 text-3xl font-bold text-white">Real-time discussion with a simple local composer.</h2>
        </div>
        <div className="panel-muted min-w-[150px] text-right">
          <p className="grid-label">Active attendees</p>
          <p className="mt-2 text-2xl font-bold text-white">{attendeeCount}</p>
        </div>
      </div>

      <div className="panel flex-1 overflow-hidden p-0">
        <div className="border-b border-white/10 px-5 py-4 text-sm text-slate-300">
          Moderated chat for Q&A, intros, and session reactions.
        </div>

        <div className="flex max-h-[480px] flex-col gap-4 overflow-y-auto px-5 py-5">
          {chatMessages.map((message) => (
            <article
              key={message.id}
              className={`rounded-2xl border p-4 ${
                message.highlighted
                  ? 'border-primary-400/30 bg-primary-500/10'
                  : 'border-white/10 bg-white/5'
              }`}
            >
              <div className="flex items-center justify-between gap-3 text-xs uppercase tracking-[0.18em] text-slate-400">
                <span>{message.author} · {message.role}</span>
                <span>{message.time} UTC</span>
              </div>
              <p className="mt-3 text-sm leading-6 text-slate-100">{message.message}</p>
            </article>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="border-t border-white/10 p-5">
          <label htmlFor="chat-message" className="grid-label">
            Post a message
          </label>
          <div className="mt-3 flex flex-col gap-3 sm:flex-row">
            <input
              id="chat-message"
              value={draft}
              onChange={(event) => setDraft(event.target.value)}
              placeholder="Share a takeaway or ask a question..."
              className="min-h-12 flex-1 rounded-full border border-white/10 bg-slate-950 px-4 py-3 text-sm text-white outline-none ring-0 transition placeholder:text-slate-500 focus:border-primary-400"
            />
            <button type="submit" className="btn-primary sm:min-w-[140px]">
              Send
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
