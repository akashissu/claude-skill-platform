import type { DownloadButtonProps } from '@/types';

export function DownloadButton({ platform, href }: DownloadButtonProps) {
  const isIOS = platform === 'ios';

  return (
    <a
      href={href}
      className="group inline-flex items-center gap-4 bg-white dark:bg-gray-900 hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-900 dark:text-white rounded-2xl px-6 py-4 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-white/20 min-w-[200px]"
      aria-label={isIOS ? 'Download on the App Store' : 'Get it on Google Play'}
    >
      {/* Icon */}
      <div className="flex-shrink-0">
        {isIOS ? (
          <svg
            className="w-8 h-8 text-gray-900 dark:text-white group-hover:scale-110 transition-transform duration-200"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
          </svg>
        ) : (
          <svg
            className="w-8 h-8 group-hover:scale-110 transition-transform duration-200"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path d="M3.18 23.76c.3.17.64.24.99.19l12.6-7.27-2.79-2.79-10.8 9.87z" fill="#EA4335" />
            <path d="M21.54 10.27c-.52-.44-1.22-.71-2.04-.71H4.5c-.82 0-1.52.27-2.04.71L12 15.91l9.54-5.64z" fill="#FBBC04" />
            <path d="M2.46 10.27C2.17 10.71 2 11.28 2 11.96v.08c0 .68.17 1.25.46 1.69L12 15.91 2.46 10.27z" fill="#4285F4" />
            <path d="M16.77 16.68L4.17 23.95c.35.05.69-.02.99-.19l12.6-7.27-1-.81z" fill="#34A853" />
            <path d="M21.54 13.73c.29-.44.46-1.01.46-1.69v-.08c0-.68-.17-1.25-.46-1.69L12 15.91l9.54 5.64-.54-.32c.29-.44.54-.9.54-1.5z" fill="#EA4335" />
          </svg>
        )}
      </div>

      {/* Text */}
      <div>
        <p className="text-xs text-gray-500 dark:text-gray-400 leading-none mb-0.5">
          {isIOS ? 'Download on the' : 'Get it on'}
        </p>
        <p className="text-base font-bold text-gray-900 dark:text-white leading-none">
          {isIOS ? 'App Store' : 'Google Play'}
        </p>
      </div>
    </a>
  );
}