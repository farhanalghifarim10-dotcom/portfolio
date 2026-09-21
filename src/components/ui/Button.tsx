import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonProps = React.ComponentPropsWithoutRef<"a"> & {
  href: string;
  variant?: "primary" | "secondary";
};

export default function Button({
  href,
  variant = "primary",
  className,
  children,
  ...props
}: ButtonProps) {
  const styles = cn(
    "inline-flex items-center justify-center rounded-lg px-5 py-3 text-sm font-semibold transition-colors",
    variant === "primary" && "bg-accent text-background hover:opacity-90",
    variant === "secondary" && "border border-border hover:border-muted",
    className
  );

  // Link internal memakai <Link>. File unduhan dan link luar memakai <a> biasa.
  const isInternal = href.startsWith("/") && !props.download;

  if (isInternal) {
    return (
      <Link href={href} className={styles} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <a href={href} className={styles} {...props}>
      {children}
    </a>
  );
}