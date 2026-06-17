'use client';

import { useState, useRef, useEffect } from 'react';
import { ChatMessage } from '@/types';
import { Send, Smile, Hash } from 'lucide-react';
import { cn } from '@/lib/utils';

const initialMessages: ChatMessage[] = [
  { id: '1', user: 'Alex K.', message: 'This session is incredible! The AI demo just blew my mind 🤯', timestamp: '2:14 PM', isOwn: false, avatar: 'A' },
  { id: '2', user: 'Maria S.', message: 'Agreed! The latency numbers are impressive. Anyone know what infra they\'re running?', timestamp: '2:15 PM', isOwn: false, avatar: 'M' },
  { id: '3', user: 'Dev_Raj', message: 'Probably Kubernetes on GKE based on the architecture slide', timestamp: '2:15 PM', isOwn: false, avatar: 'D' },
  { id: '4', user: 'You', message: 'Great point! I\'m going to try this in my project', timestamp: '2:16 PM', isOwn: true, avatar: 'Y' },
  { id: '5', user: 'Chen Wei', message: 'The Q&A is starting! Get your questions ready 🙋', timestamp: '2:17 PM', isOwn: false, avatar: 'C' },
  { id: '6', user: 'Priya N.', message: 'Does anyone have the link to the GitHub repo she mentioned?', timestamp: '2:18 PM', isOwn: false, avatar: 'P' },
  { id: '7', user: 'TechFan99', message: 'github.com/sarahchen/ai-production-demo — she shared it in the slides', timestamp: '2:18 PM', isOwn: false, avatar: 'T' },
];

const reactions = ['👍', '🔥', '🤯', '👏', '💡', '❤️'];

export function LiveChatPanel() {
  const [messages, setMessages] = useState<ChatMessage[]>(initialMessages);
  const [input, setInput] = useState('');
  const [activeChannel, setActiveChannel] = useState<'main' | 'qa' | 'networking'>('main');
  const [showReactions, setShowReactions] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const sendMessage = () => {
    if (!input.trim()) return;
    const newMessage: ChatMessage = {
      id: Date.now().toString(),
      user: 'You',
      message: input.trim(),
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      isOwn: true,
      avatar: 'Y',
    };
    setMessages((prev) => [...prev, newMessage]);
    setInput('');
  };

  const sendReaction = (emoji: string) => {
    const newMessage: ChatMessage = {
      id: Date.now().toString(),
      user: 'You',
      message: emoji,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      isOwn: true,
      avatar: 'Y',
    };
    setMessages((prev) => [...prev, newMessage]);
    setShowReactions(false);
  };

  return (
    <div className="glass-card flex flex-col h-[600px] xl:h-[700px]">
      {/* Header */}
      <div className="p-4 border-b border-white/10">
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-semibold text-white">Live Chat</h3>
          <div className="flex items-center gap-1.5 text-xs text-gray-400">
            <span className="w-2 h-2 bg-green-500 rounded-full" />
            {messages.length + 1}k online
          </div>
        </div>
        {/* Channel Tabs */}
        <div className="flex gap-1">
          {(['main', 'qa', 'networking'] as const).map((channel) => (
            <button
              key={channel}
              onClick={() => setActiveChannel(channel)}
              className={cn(
                'flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-medium capitalize transition-all duration-200',
                activeChannel === channel
                  ? 'bg-brand-600 text-white'
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
              )}
            >
              <Hash className="w-3 h-3" />
              {channel}
            </button>
          ))}
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={cn('flex gap-2', msg.isOwn && 'flex-row-reverse')}
          >
            <div
              className={cn(
                'w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold text-white flex-shrink-0',
                msg.isOwn ? 'bg-brand-600' : 'bg-gradient-to-br from-gray-600 to-gray-700'
              )}
            >
              {msg.avatar}
            </div>
            <div className={cn('max-w-[80%]', msg.isOwn && 'items-end flex flex-col')}>
              {!msg.isOwn && (
                <span className="text-xs text-gray-500 mb-0.5">{msg.user}</span>
              )}
              <div
                className={cn(
                  'px-3 py-2 rounded-2xl text-sm',
                  msg.isOwn
                    ? 'bg-brand-600 text-white rounded-tr-sm'
                    : 'bg-white/10 text-gray-200 rounded-tl-sm'
                )}
              >
                {msg.message}
              </div>
              <span className="text-xs text-gray-600 mt-0.5">{msg.timestamp}</span>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Reactions */}
      {showReactions && (
        <div className="px-4 py-2 border-t border-white/10 flex gap-2">
          {reactions.map((emoji) => (
            <button
              key={emoji}
              onClick={() => sendReaction(emoji)}
              className="text-xl hover:scale-125 transition-transform"
            >
              {emoji}
            </button>
          ))}
        </div>
      )}

      {/* Input */}
      <div className="p-4 border-t border-white/10">
        <div className="flex gap-2">
          <button
            onClick={() => setShowReactions(!showReactions)}
            className="text-gray-400 hover:text-brand-400 transition-colors flex-shrink-0"
          >
            <Smile className="w-5 h-5" />
          </button>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
            placeholder="Say something..."
            className="flex-1 bg-gray-800 border border-gray-700 rounded-xl px-3 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-brand-500 transition-colors"
          />
          <button
            onClick={sendMessage}
            disabled={!input.trim()}
            className="bg-brand-600 hover:bg-brand-500 disabled:opacity-50 disabled:cursor-not-allowed text-white p-2 rounded-xl transition-colors flex-shrink-0"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
