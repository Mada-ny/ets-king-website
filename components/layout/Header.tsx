"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "../ui/button";
import { NAV_LINKS } from "@/lib/constants";
import { SendHorizontal, Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";

export default function Header() {
    const pathname = usePathname();
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const links = NAV_LINKS.filter(link => link.label !== "Contact") || [];
    const contactLink = NAV_LINKS.find(link => link.label === "Contact");

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // Toujours visible en haut de la page
            if (currentScrollY < 10) {
                setIsVisible(true);
            } 
            // Scroll vers le bas : cacher
            else if (currentScrollY > lastScrollY && currentScrollY > 100) {
                setIsVisible(false);
            } 
            // Scroll vers le haut : afficher
            else if (currentScrollY < lastScrollY) {
                setIsVisible(true);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    // Gestion du menu mobile
    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [pathname]);

    // Empêcher le scroll quand le menu est ouvert
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMobileMenuOpen]);

    return (
        <>
            <header className={cn(
                "w-full fixed top-0 left-0 z-50 px-4 sm:px-6 lg:px-10 py-1 transition-all duration-400 ease-in-out",
                isVisible ? "translate-y-0" : "-translate-y-full",
                lastScrollY > 10
                    ? "bg-card/95 shadow-sm border-b border-border/50 backdrop-blur-sm"
                    : "bg-transparent"
            )}>
                <div className="mx-auto py-2 md:py-3 w-full max-w-full flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-2 group">
                        <div className="relative">
                            <Image
                                src="/images/logo.png"
                                alt="Logo ETS. KING"
                                width={70}
                                height={100}
                                priority
                                className="p-1 -mt-2 md:w-[70px]"
                            />
                        </div>
                        <h1 className="text-xl hidden md:block font-black font-sans">
                            ETS. KING
                        </h1>
                    </Link>

                    <nav className="hidden md:flex gap-5 items-center" aria-label="Navigation principale">
                        {links.map(link =>  {
                            const isActive = pathname === link.href;
                            
                            return (
                                <Link 
                                    key={link.label}
                                    href={link.href}
                                    aria-current={isActive ? "page" : undefined}
                                    className={cn(
                                        "font-semibold rounded-full font-sans",
                                        "text-base lg:text-lg",
                                        "px-3 sm:px-4 lg:px-5 py-1.5 lg:py-2",
                                        "transition-all duration-200 ease-in-out",
                                        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",  
                                        isActive 
                                            ? "bg-primary text-primary-foreground shadow-sm" 
                                            : "bg-muted text-foreground hover:bg-primary hover:text-primary-foreground hover:shadow-sm"
                                    )}
                                >
                                    {link.label}
                                </Link>
                            );
                        })}
                    </nav>

                    {contactLink && (
                        <Button asChild size={"lg"} 
                            className="hidden md:flex font-extrabold text-base lg:text-lg 
                            transition-all duration-200 ease-in-out
                            hover:shadow-lg hover:shadow-primary/20
                            py-6 gap-2
                            relative overflow-hidden
                            before:absolute before:inset-0 
                            before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent
                            before:translate-x-[-100%] hover:before:translate-x-[100%]
                            before:transition-transform before:duration-700"
                        >
                            <Link href={contactLink.href} className="flex items-center gap-2">
                                <SendHorizontal className="size-5" />
                                Nous Contacter
                            </Link>
                        </Button>
                    )}

                    {/* Bouton Menu Mobile */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="md:hidden p-2 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-200"
                        aria-label={isMobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
                        aria-expanded={isMobileMenuOpen}
                    >
                        {isMobileMenuOpen ? (
                            <X className="size-6" />
                        ) : (
                            <Menu className="size-6" />
                        )}
                    </button>
                </div>
            </header>

            {/* Menu Mobile */}
            <div
                className={cn(
                    "fixed inset-0 z-40 md:hidden transition-all duration-300 ease-in-out",
                    isMobileMenuOpen 
                        ? "opacity-100 pointer-events-auto" 
                        : "opacity-0 pointer-events-none"
                )}
            >
                {/* Overlay */}
                <div 
                    className={cn(
                        "absolute inset-0 bg-background/80 backdrop-blur-sm transition-opacity duration-300",
                        isMobileMenuOpen ? "opacity-100" : "opacity-0"
                    )}
                    onClick={() => setIsMobileMenuOpen(false)}
                />

                {/* Menu Content */}
                <nav
                    className={cn(
                        "absolute top-[80px] md:top-[88px] right-0 w-full max-w-sm h-[calc(100vh-80px)] md:h-[calc(100vh-88px)]",
                        "bg-card border-l border-border shadow-2xl",
                        "transition-transform duration-300 ease-in-out",
                        "flex flex-col",
                        isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
                    )}
                    aria-label="Navigation mobile"
                >
                    <div className="flex-1 overflow-y-auto p-6">
                        <div className="flex flex-col gap-3">
                            {links.map(link => {
                                const isActive = pathname === link.href;
                                
                                return (
                                    <Link
                                        key={link.label}
                                        href={link.href}
                                        aria-current={isActive ? "page" : undefined}
                                        className={cn(
                                            "font-semibold rounded-xl font-sans text-lg",
                                            "px-6 py-4 relative",
                                            "transition-all duration-200 ease-in-out",
                                            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                                            isActive
                                                ? "bg-primary text-primary-foreground shadow-sm"
                                                : "bg-muted text-foreground hover:bg-primary hover:text-primary-foreground"
                                        )}
                                    >
                                        {link.label}
                                        {isActive && (
                                            <span className="absolute left-2 top-1/2 -translate-y-1/2 w-1 h-8 bg-primary-foreground rounded-full" />
                                        )}
                                    </Link>
                                );
                            })}
                        </div>
                    </div>

                    {contactLink && (
                        <div className="p-6 border-t border-border bg-card/50">
                            <Button asChild size="lg" className="w-full font-extrabold text-lg py-6 gap-2">
                                <Link href={contactLink.href} className="flex items-center justify-center gap-2">
                                    <SendHorizontal className="size-5" />
                                    Nous Contacter
                                </Link>
                            </Button>
                        </div>
                    )}
                </nav>
            </div>
        </>
    );
}
