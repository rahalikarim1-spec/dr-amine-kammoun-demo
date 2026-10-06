import type { SVGProps } from "react";

const base = { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.6, strokeLinecap: "round" as const, strokeLinejoin: "round" as const, "aria-hidden": true };

type P = SVGProps<SVGSVGElement>;

export const PhoneIcon = (p: P) => (<svg {...base} {...p}><path d="M5 4h3.5l1.7 4.2-2.2 1.4a11 11 0 0 0 5.4 5.4l1.4-2.2L19 14.5V18a2 2 0 0 1-2.2 2A15 15 0 0 1 3 6.2 2 2 0 0 1 5 4Z" /></svg>);
export const PinIcon = (p: P) => (<svg {...base} {...p}><path d="M12 21s7-6.2 7-11.5A7 7 0 0 0 5 9.5C5 14.8 12 21 12 21Z" /><circle cx="12" cy="9.5" r="2.5" /></svg>);
export const CalendarIcon = (p: P) => (<svg {...base} {...p}><rect x="3.5" y="5" width="17" height="15" rx="3" /><path d="M8 3v4M16 3v4M3.5 10h17" /></svg>);
export const ArrowIcon = ({ className = "", ...p }: P) => (<svg {...base} {...p} className={`flip-rtl ${className}`}><path d="M5 12h14M13 6l6 6-6 6" /></svg>);
export const ChevronIcon = (p: P) => (<svg {...base} {...p}><path d="m6 9 6 6 6-6" /></svg>);
export const MenuIcon = (p: P) => (<svg {...base} {...p}><path d="M4 7h16M4 12h16M4 17h16" /></svg>);
export const CloseIcon = (p: P) => (<svg {...base} {...p}><path d="M6 6l12 12M18 6 6 18" /></svg>);
export const CheckIcon = (p: P) => (<svg {...base} {...p}><path d="m5 12.5 4.5 4.5L19 7.5" /></svg>);
export const ClockIcon = (p: P) => (<svg {...base} {...p}><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg>);
export const AlertIcon = (p: P) => (<svg {...base} {...p}><path d="M12 4 2.8 19.5h18.4L12 4Z" /><path d="M12 10v4M12 17v.01" /></svg>);
export const InfoIcon = (p: P) => (<svg {...base} {...p}><circle cx="12" cy="12" r="9" /><path d="M12 11v5M12 8v.01" /></svg>);
export const GlobeIcon = (p: P) => (<svg {...base} {...p}><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18" /></svg>);
export const WhatsappIcon = (p: P) => (<svg {...base} {...p}><path d="M4 20l1.2-4A8 8 0 1 1 8 18.8L4 20Z" /><path d="M9 9.5c0 3 2.5 5.5 5.5 5.5l1-1.5-1.8-1-.8.7a3.5 3.5 0 0 1-1.6-1.6l.7-.8-1-1.8L9 9.5Z" /></svg>);
export const ExternalIcon = (p: P) => (<svg {...base} {...p}><path d="M14 5h5v5M19 5l-8 8M18 14v4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4" /></svg>);

/* Cluster icons */
export const GynIcon = (p: P) => (<svg {...base} {...p}><circle cx="12" cy="9" r="5" /><path d="M12 14v7M9 18h6" /></svg>);
export const PregnancyIcon = (p: P) => (<svg {...base} {...p}><path d="M12 20.5S4 15.6 4 9.8A4.3 4.3 0 0 1 12 7.6a4.3 4.3 0 0 1 8 2.2c0 5.8-8 10.7-8 10.7Z" /></svg>);
export const EchoIcon = (p: P) => (<svg {...base} {...p}><path d="M3 17a9 9 0 0 1 18 0" /><path d="M6.5 17a5.5 5.5 0 0 1 11 0" /><path d="M10 17a2 2 0 0 1 4 0" /><path d="M12 21v-1" /></svg>);
export const FertilityIcon = (p: P) => (<svg {...base} {...p}><path d="M12 21v-9" /><path d="M12 12c0-4-2.5-6.5-7-6.5 0 4 2.5 6.5 7 6.5Z" /><path d="M12 14c0-3.3 2-5.5 6-5.5 0 3.3-2 5.5-6 5.5Z" /></svg>);
export const ConditionsIcon = (p: P) => (<svg {...base} {...p}><rect x="4" y="4" width="16" height="16" rx="4" /><path d="M12 8v8M8 12h8" /></svg>);

export const clusterIcon = (cluster: string) =>
  ({ gynecology: GynIcon, pregnancy: PregnancyIcon, ultrasound: EchoIcon, fertility: FertilityIcon, conditions: ConditionsIcon } as Record<string, (p: P) => React.JSX.Element>)[cluster] ?? InfoIcon;

/** Subtle ultrasound-sector motif used as a decorative background. */
export function ArcMotif({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 400" className={className} fill="none" stroke="currentColor" aria-hidden="true">
      {[60, 110, 160, 210, 260, 310].map((r, i) => (
        <path key={r} d={`M ${200 - r} 380 A ${r} ${r} 0 0 1 ${200 + r} 380`} strokeWidth={1.2} opacity={1 - i * 0.12} />
      ))}
      <circle cx="200" cy="380" r="6" fill="currentColor" stroke="none" />
    </svg>
  );
}
