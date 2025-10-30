import type { LucideIcon } from "lucide-react";

interface LucideIconProps {
    icon: LucideIcon;
    className?: string;
    strokeWidth?: number;
}

export function LucideIcon({ icon: Icon, className, strokeWidth }: LucideIconProps) {
    return <Icon className={className} strokeWidth={strokeWidth} />;
}
