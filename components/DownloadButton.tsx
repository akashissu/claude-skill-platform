import type { DownloadButtonProps } from '@/types';

export function DownloadButton({ platform, href }: DownloadButtonProps) {
  const label = platform === 'ios' ? 'Open on iOS' : 'Open on Android';

  return (
    <a href={href} className="btn-secondary w-full justify-center">
      {label}
    </a>
  );
}
