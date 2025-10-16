import { LucideIcon as LucideIconType } from "lucide-react";

interface LucideIconProps {
    icon: LucideIconType;
    className?: string;
}

export function LucideIcon({ icon: Icon, className }: LucideIconProps) {
    return <Icon className={className} />;
}