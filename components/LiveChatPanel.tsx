'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { ChatMessage } from '@/types';
import { X, Send, Smile, ThumbsUp, Heart } from 'lucide-react';
import { cn, formatTimeAgo } from '@/lib/utils';

interface LiveChatPanelProps {
  messages: ChatMessage[];
  onClose: () => void;
}

const REACTIONS = ['👍', '❤️', '🔥', '🎉', '💡', '👏'];

export function LiveChatPanel({ messages: initialMessages, onClose }: LiveChatPanelProps) {
  const [messages, setMessages] = useState<ChatMessage[]>(initialMessages);
  const [inputValue, setInputValue] = useState('');
  const [showReactions, setShowReactions] = useState(false);
  const [activeTab, setActiveTab] = useState<'chat' | 'qa'>('chat');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = () => {
    if (!inputValue.trim()) return;
    const newMessage: ChatMessage = {
      id: `msg-${Date.now()}`,
      user: {
        name: 'You',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=you',
        isHost: false,
      },
      content: inputValue.trim(),
      timestamp: new Date().toISOString(),
      reactions: [],
    };
    setMessages((prev) => [...prev, newMessage]);
    setInputValue('');
  };

  const handleReaction = (emoji: string) => {
    const newMessage: ChatMessage = {
      id: `msg-${Date.now()}`,
      user: {
        name: 'You',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=you',
        isHost: false,
      },
      content: emoji,
      timestamp: new Date().toISOString(),
      reactions: [],
      isReaction: true,
    };
    setMessages((prev) => [...prev, newMessage]);
    setShowReactions(false);
  };

  return (
    <div className="fixed bottom-24 right-6 z-50 w-80 sm:w-96 bg-gray-900 border border-gray-800 rounded-2xl shadow-2xl shadow-black/50 flex flex-col animate-slide-up overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-gray-800 bg-gray-900">
        <div className="flex items-center gap-2">
          <span className="live-indicator">
            <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse" />
            LIVE CHAT
          </span>
          <span className="text-gray-500 text-xs">{messages.length} messages</span>
        </div>
        <button
          onClick={onClose}
          className="text-gray-500 hover:text-gray-300 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-gray-800">
        {(['chat', 'qa'] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={cn(
              'flex-1 py-2.5 text-sm font-medium transition-all',
              activeTab === tab
                ? 'text-brand-400 border-b-2 border-brand-500'
                : 'text-gray-500 hover:text-gray-300'
            )}
          >
            {tab === 'chat' ? 'Live Chat' : 'Q&A'}
          </button>
        ))}
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3 scrollbar-thin" style={{ maxHeight: '320px', minHeight: '200px' }}>
        {messages.map((message) => (
          <div
            key={message.id}
            className={cn(
              'flex gap-2.5',
              message.isReaction && 'justify-center'
            )}
          >
            {!message.isReaction && (
              <div className="relative w-7 h-7 rounded-full overflow-hidden flex-shrink-0 mt-0.5">
                <Image
                  src={message.user.avatar}
                  alt={message.user.name}
                  fill
                  className="object-cover"
                />
              </div>
            )}
            {message.isReaction ? (
              <span className="text-2xl animate-bounce">{message.content}</span>
            ) : (
              <div className="flex-1 min-w-0">
                <div className="flex items-baseline gap-2 mb-0.5">
                  <span className={cn(
                    'text-xs font-semibold',
                    message.user.isHost ? 'text-brand-400' : 'text-gray-300'
                  )}>
                    {message.user.name}
                    {message.user.isHost && (
                      <span className="ml-1 badge bg-brand-900/50 text-brand-400 border border-brand-800 text-xs py-0">HOST</span>
                    )}
                  </span>
                  <span className="text-gray-600 text-xs">{formatTimeAgo(message.timestamp)}</span>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed break-words">{message.content}</p>
                {message.reactions && message.reactions.length > 0 && (
                  <div className="flex gap-1 mt-1">
                    {message.reactions.map((r, i) => (
                      <span key={i} className="text-xs bg-gray-800 rounded-full px-1.5 py-0.5">{r}</span>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="p-3 border-t border-gray-800">
        <div className="flex items-center gap-2">
          <div className="relative">
            <button
              onClick={() => setShowReactions(!showReactions)}
              className="p-2 text-gray-500 hover:text-gray-300 transition-colors"
            >
              <Smile className="w-5 h-5" />
            </button>
            {showReactions && (
              <div className="absolute bottom-10 left-0 bg-gray-800 border border-gray-700 rounded-xl p-2 flex gap-1 shadow-xl">
                {REACTIONS.map((emoji) => (
                  <button
                    key={emoji}
                    onClick={() => handleReaction(emoji)}
                    className="text-xl hover:scale-125 transition-transform p-1"
                  >
                    {emoji}
                  </button>
                ))}
              </div>
            )}
          </div>
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Say something..."
            className="flex-1 bg-gray-800 border border-gray-700 text-gray-100 placeholder-gray-500 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent"
          />
          <button
            onClick={handleSend}
            disabled={!inputValue.trim()}
            className="p-2 bg-brand-600 hover:bg-brand-700 disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-xl transition-all active:scale-95"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
