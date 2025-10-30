"use client";

import Link from "next/link";
import Image from "next/image";
import { COMPANY_INFO, SERVICES, NAV_LINKS } from "@/lib/constants";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { LucideIcon } from "@/components/ui/lucide-icon";

export default function Footer() {
    const currentYear = new Date().getFullYear();
    const mainServices = SERVICES.slice(0, 4);

    const links = NAV_LINKS.filter(link => link.label !== "Contact") || [];

    return (
        <footer className="w-full bg-card border-t border-border/50 mt-auto">
            <div className="max-w-7xl mx-auto px-5 lg:px-8 py-12 lg:py-16">
                {/* Contenu principal du footer */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
                    
                    {/* Colonne 1 : À propos */}
                    <div className="space-y-4">
                        <Link href="/" className="flex items-center gap-2 group w-fit">
                            <Image
                                src="/images/logo.png"
                                alt="Logo ETS. KING"
                                width={60}
                                height={85}
                                className="p-1 -mt-2"
                            />
                            <h2 className="text-lg font-black font-sans">
                                ETS. KING
                            </h2>
                        </Link>
                        
                        <p className="text-sm text-muted-foreground leading-relaxed font-sans">
                            {COMPANY_INFO.description}
                        </p>
                        
                        <div className="flex items-center gap-2 text-xs font-semibold text-primary">
                            <div className="px-3 py-1 bg-primary/10 rounded-full font-sans">
                                Depuis 2010
                            </div>
                        </div>
                    </div>

                    {/* Colonne 2 : Services */}
                    <div className="space-y-4">
                        <h3 className="text-base font-bold font-sans">
                            Nos Services
                        </h3>
                        <ul className="space-y-2.5 font-sans">
                            {mainServices.map((service) => (
                                <li key={service.id}>
                                    <Link
                                        href={`/services#${service.id}`}
                                        className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200 flex items-center gap-2 group"
                                    >
                                        <span className="text-base group-hover:translate-x-1 transition-transform duration-200">
                                            <LucideIcon icon={service.icon} className="size-4" />
                                        </span>
                                        <span>{service.title}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        <Link 
                            href="/services"
                            className="text-sm font-sans font-semibold text-primary hover:underline inline-block mt-2"
                        >
                            Voir tous nos services →
                        </Link>
                    </div>

                    {/* Colonne 3 : Liens rapides */}
                    <div className="space-y-4">
                        <h3 className="text-base font-bold font-sans">
                            Liens Rapides
                        </h3>
                        <ul className="space-y-2.5 font-sans">
                            {links.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200 inline-block"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                            <li>
                                <Link
                                    href="/contact"
                                    className="text-sm font-semibold text-primary hover:underline inline-block"
                                >
                                    Demander un devis gratuit
                                </Link>
                            </li>
                        </ul>

                        {/* Horaires */}
                        <div className="pt-4 space-y-2 font-sans">
                            <div className="flex items-center gap-2 text-sm">
                                <Clock className="size-4 text-primary flex-shrink-0" />
                                <span className="font-semibold text-foreground">Horaires</span>
                            </div>
                            <div className="text-xs text-muted-foreground space-y-1 pl-6">
                                <p>Lun - Ven : {COMPANY_INFO.openingHours.weekdays}</p>
                                <p>Samedi : {COMPANY_INFO.openingHours.saturday}</p>
                                <p>Dimanche : {COMPANY_INFO.openingHours.sunday}</p>
                            </div>
                        </div>
                    </div>

                    {/* Colonne 4 : Contact */}
                    <div className="space-y-4 font-sans">
                        <h3 className="text-base font-bold font-sans">
                            Nous Contacter
                        </h3>
                        
                        <div className="space-y-3">
                            {/* Téléphones */}
                            <div className="space-y-2">
                                <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
                                    <Phone className="size-4 text-primary flex-shrink-0" />
                                    <span>Téléphone</span>
                                </div>
                                <div className="space-y-1 pl-6">
                                    {COMPANY_INFO.phoneFormatted.map((phone, index) => (
                                        <a
                                            key={index}
                                            href={`tel:${phone.replace(/\s/g, '')}`}
                                            className="text-xs text-muted-foreground hover:text-primary transition-colors duration-200 block"
                                        >
                                            {phone}
                                        </a>
                                    ))}
                                </div>
                            </div>

                            {/* Emails */}
                            <div className="space-y-2">
                                <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
                                    <Mail className="size-4 text-primary flex-shrink-0" />
                                    <span>Email</span>
                                </div>
                                <div className="space-y-1 pl-6">
                                    {COMPANY_INFO.emails.slice(0, 2).map((email, index) => (
                                        <a
                                            key={index}
                                            href={`mailto:${email}`}
                                            className="text-xs text-muted-foreground hover:text-primary transition-colors duration-200 block break-all"
                                        >
                                            {email}
                                        </a>
                                    ))}
                                </div>
                            </div>

                            {/* Adresse */}
                            <div className="space-y-2">
                                <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
                                    <MapPin className="size-4 text-primary flex-shrink-0" />
                                    <span>Adresse</span>
                                </div>
                                <div className="pl-6">
                                    <p className="text-xs text-muted-foreground">
                                        {COMPANY_INFO.address}
                                    </p>
                                    <p className="text-xs text-muted-foreground">
                                        {COMPANY_INFO.city}, {COMPANY_INFO.country}
                                    </p>
                                    <p className="text-xs text-muted-foreground mt-1">
                                        {COMPANY_INFO.postalBox}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Séparateur */}
                <div className="border-t border-border/50 mt-12 pt-8">
                    <div className="flex font-sans flex-col md:flex-row justify-between items-center gap-4">
                        {/* Copyright */}
                        <p className="text-xs text-muted-foreground text-center md:text-left">
                            © {currentYear} {COMPANY_INFO.legalName}. Tous droits réservés.
                        </p>

                        {/* Informations légales */}
                        <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-muted-foreground">
                            <span>RC : {COMPANY_INFO.registre}</span>
                            <span className="hidden md:inline">•</span>
                            <span>CC : {COMPANY_INFO.accountNumber}</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}