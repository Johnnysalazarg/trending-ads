import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function CameraIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 40 40" {...base} {...props}>
      <path d="M6 14a3 3 0 0 1 3-3h4l2-3h10l2 3h4a3 3 0 0 1 3 3v15a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3Z" />
      <circle cx="20" cy="21.5" r="6" />
      <path d="M29 14.5h2" />
    </svg>
  );
}

export function ChatIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 40 40" {...base} {...props}>
      <path d="M8 10h24a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2H16l-6 5v-5H8a2 2 0 0 1-2-2V12a2 2 0 0 1 2-2Z" />
      <path d="M13 18h14M13 23h9" />
    </svg>
  );
}

export function ScissorsIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 40 40" {...base} {...props}>
      <circle cx="11" cy="12" r="3.2" />
      <circle cx="11" cy="28" r="3.2" />
      <path d="M13.4 14.2 31 30M13.4 25.8 31 10" />
    </svg>
  );
}

export function BrushIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 40 40" {...base} {...props}>
      <path d="M27 8c3 0 5.5 2.5 5.5 5.5 0 4-4.5 6-9 10l-4-4c4-4.5 6-9 10-9 .8 0-2.5-2.5-2.5-2.5Z" />
      <path d="M19.5 19.5 10 29c-1.2 1.2-3.4 1-3-1 .6-3 2.4-8.3 5.5-11.4a4 4 0 0 1 5.6 0Z" />
    </svg>
  );
}

export function CodeIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 40 40" {...base} {...props}>
      <path d="M15 12 6 20l9 8M25 12l9 8-9 8M22 9l-4 22" />
    </svg>
  );
}

export function ChartIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 40 40" {...base} {...props}>
      <path d="M7 33V7M7 33h26" />
      <path d="M12 27v-7M19 27V14M26 27v-11M33 27V19" />
    </svg>
  );
}

export function WhatsAppIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 32 32" fill="currentColor" {...props}>
      <path d="M16.02 3C9.4 3 4 8.4 4 15.02c0 2.36.65 4.56 1.78 6.44L4 29l7.72-1.73a11.97 11.97 0 0 0 4.3.8h.01c6.62 0 12.02-5.4 12.02-12.02C28.05 8.4 22.65 3 16.02 3Zm0 21.86h-.01a9.9 9.9 0 0 1-5.05-1.38l-.36-.21-3.75.84.85-3.66-.24-.38a9.85 9.85 0 0 1-1.5-5.25c0-5.47 4.45-9.92 9.93-9.92 2.65 0 5.14 1.04 7.02 2.92a9.85 9.85 0 0 1 2.9 6.99c0 5.47-4.45 9.92-9.93 9.92h.14Zm5.44-7.44c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.24-.46-2.37-1.47-.87-.78-1.46-1.74-1.63-2.04-.17-.3-.02-.46.13-.6.13-.13.3-.35.44-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.21-.24-.58-.49-.5-.67-.5h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.35.19 1.86.12.57-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.13-.27-.2-.57-.35Z" />
    </svg>
  );
}

export function InstagramIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...base} strokeWidth={1.5} {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function TikTokIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M16.6 5.2c-.7-.7-1.1-1.6-1.2-2.6h-3v13.4a2.7 2.7 0 1 1-1.9-2.6V9.9a5.7 5.7 0 1 0 4.9 5.6V9.3a6.9 6.9 0 0 0 4 1.3V7.6c-1 0-1.9-.4-2.8-.9Z" />
    </svg>
  );
}

export const serviceIcons = {
  camera: CameraIcon,
  chat: ChatIcon,
  scissors: ScissorsIcon,
  brush: BrushIcon,
  code: CodeIcon,
  chart: ChartIcon,
};
