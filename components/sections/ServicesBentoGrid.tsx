import { ArrowUpRight, Check } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { SERVICES } from "@/lib/constants";
import { LucideIcon } from "../ui/lucide-icon";

// Mapping des illustrations par ID de service
const serviceIllustrations: Record<string, string> = {
    "fourniture-installation": "/illustrations/package.svg",
    "depannage": "/illustrations/maintenance.svg",
    "installation-reseaux": "/illustrations/network.svg",
    "securite-electronique": "/illustrations/security.svg",
};

// Mapping des backgrounds par index
const bgColors = [
    "bg-primary/10",
    "bg-accent/5",
    "bg-secondary/25",
    "bg-muted/60",
];

const featuredServices = SERVICES.slice(0, 4);

export default function ServicesBentoSection() {
    return (
        <section className="px-4 sm:px-6 lg:px-12 py-16 lg:py-20 mx-auto w-full bg-muted/20">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-14">
                    <h2 className="font-serif font-bold text-3xl md:text-4xl lg:text-5xl mb-4">
                        {"Nos domaines d'intervention"}
                    </h2>
                    <p className="text-muted-foreground font-sans md:text-lg lg:text-xl max-w-2xl mx-auto">
                        Des solutions complètes pour tous vos besoins professionnels
                    </p>
                </div>

                {/* Bento Grid */}
                <div className="grid lg:grid-cols-7 gap-6 lg:gap-8">
                    {featuredServices.map((service, index) => {
                        // Premier et dernier prennent 4 colonnes
                        const isLarge = index === 0 || index === 3;
                        
                        return (
                        <Link
                            key={service.id}
                            href={`/services#${service.id}`}
                            className={`
                            group relative overflow-hidden rounded-3xl p-8 lg:p-10
                            ${bgColors[index]}
                            hover:shadow transition-all duration-300
                            border-2 border-transparent
                            ${isLarge ? 'lg:col-span-4' : 'lg:col-span-3'}
                            `}
                        >

                            <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-background flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                <ArrowUpRight className="w-5 h-5 text-foreground" />
                            </div>

                            <div className="relative z-10">
                                <div className="w-12 h-12 rounded-xl bg-white/60 flex items-center justify-center mb-6">
                                    <LucideIcon icon={service.icon} className="w-6 h-6 text-primary" strokeWidth={2.5} />
                                </div>

                                <h3 className="text-2xl lg:text-3xl font-bold mb-4 font-sans">
                                    {service.title}
                                </h3>

                                <p className="text-muted-foreground mb-6 leading-relaxed font-sans">
                                    {service.shortDescription}
                                </p>

                                <ul className="space-y-3">
                                    {service.features.slice(0, 3).map((feature, idx) => (
                                        <li key={idx} className="flex items-start gap-3 font-sans font-semibold">
                                            <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                                                <Check className="w-3 h-3 text-primary" strokeWidth={3} />
                                            </div>
                                            <span className="text-sm text-foreground/80">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Illustration bottom-right */}
                            {serviceIllustrations[service.id] && (
                                <div className={`absolute bottom-0 right-0 opacity-20 group-hover:opacity-30 transition-opacity
                                    ${service.id === 'depannage' ? 'w-30 h-30' : 'w-40 h-40'}`}>
                                    <Image
                                        src={serviceIllustrations[service.id]}
                                        alt={service.title}
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                            )}
                        </Link>
                        );
                    })}
                </div>

                {/* CTA Button */}
                <div className="text-center mt-12">
                    <Link
                        href="/services"
                        className="inline-flex font-sans items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-bold text-lg rounded-xl hover:bg-primary/90 transition-colors shadow-lg"
                    >
                        Découvrir tous nos services
                        <ArrowUpRight className="w-5 h-5" />
                    </Link>
                </div>
            </div>
        </section>
    );
}