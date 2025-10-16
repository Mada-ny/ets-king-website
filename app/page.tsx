"use client"

import { COMPANY_INFO } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";

export default function Home() {
  return (
    <section className="px-4 sm:px-6 lg:px-12 py-5 mx-auto w-full flex flex-col gap-12">
      <motion.div 
        className="relative bg-primary h-[70vh] md:h-[50vh] lg:h-[70vh] xl:h-[80vh] max-h-[100vh] rounded-3xl overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Image
          src="/images/hero1.webp"
          alt={`Vue extérieure du siège d'une entreprise, bâtiment moderne`}
          fill
          className="object-cover"
          priority
        />

        <div className="absolute inset-0 bg-gradient-to-br from-foreground/70 via-foreground/50 to-foreground/30" />

        <motion.div 
          className="absolute inset-0 flex flex-col justify-center px-4 sm:px-6 lg:px-12 font-serif"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.4, ease: "easeOut" }}
        >
          <h1 className="text-4xl text-center md:text-left md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-4 max-w-3xl">
            {COMPANY_INFO.slogan}
          </h1>
          
          <motion.div 
            className="mt-6 md:mt-4 px-3 md:px-0 flex flex-col md:flex-row gap-4 font-sans"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5, ease: "easeOut" }}
          >
            <Button asChild size={"lg"} 
                className="font-extrabold text-lg md:text-xl lg:text-2xl
                py-6 lg:py-8"
            >
              <Link href="/contact" aria-label="Demander un devis gratuit">
                  Demander un devis gratuit
              </Link>
            </Button>
            <Button variant={"secondary"} asChild size={"lg"} 
                className="font-extrabold text-lg md:text-xl lg:text-2xl
                py-6 lg:py-8"
            >
              <Link href="/services" aria-label="Voir nos services">
                  Voir nos services
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
