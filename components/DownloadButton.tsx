interface DownloadButtonProps {
  label?: string;
  href?: string;
}

export function DownloadButton({ label = 'Learn more', href = '/' }: DownloadButtonProps) {
  return (
    <a href={href} className="btn-secondary">
      {label}
    </a>
  );
}
