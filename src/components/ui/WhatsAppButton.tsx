import { whatsappUrl } from "@/lib/site";

type WhatsAppButtonProps = {
  label: string;
  message?: string;
  className?: string;
  variant?: "primary" | "secondary" | "dark";
};

const variants = {
  primary:
    "bg-bordo text-paper hover:bg-bordo/90 focus-visible:outline-bordo",
  secondary:
    "bg-transparent text-brown border border-brown/30 hover:border-bordo hover:text-bordo focus-visible:outline-bordo",
  dark: "bg-paper text-shadow-green hover:bg-paper/90 focus-visible:outline-paper",
} as const;

export function WhatsAppButton({
  label,
  message,
  className = "",
  variant = "primary",
}: WhatsAppButtonProps) {
  return (
    <a
      href={whatsappUrl(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center rounded-full px-7 py-3.5 font-body text-base font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${variants[variant]} ${className}`}
    >
      {label}
    </a>
  );
}
