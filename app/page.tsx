import { COMPANY_INFO } from "@/lib/constants";
import Image from "next/image";

export default function Home() {
  return (
    <section className="px-4 sm:px-6 lg:px-12 py-5 mx-auto w-full flex flex-col gap-12 min-h-screen">
      <div className="font-serif bg-primary h-[80vh] max-h-[80vh] text-4xl font-bold text-center rounded-3xl">
        <h1>{COMPANY_INFO.slogan}</h1>
      </div>
    </section>
  );
}
