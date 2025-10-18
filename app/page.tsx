import SubscribeForm from "@/components/SubscribeForm";
import Logo from "@/components/shared/Logo";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#03d3b1] text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[#03d3b1]" />
        <div className="animate-serene absolute left-1/2 top-1/2 h-[120%] w-[120%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.32)_0%,rgba(3,211,177,0)_72%)]" />
        <div className="animate-serene-delay absolute left-1/2 top-1/2 h-[150%] w-[150%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.14)_0%,rgba(3,211,177,0)_80%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.12),rgba(3,211,177,0.06)_45%,rgba(3,211,177,0)_85%)]" />
      </div>

      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 py-12 sm:px-10">
        <div className="flex flex-col items-center gap-5 text-center">
          <Logo className="h-12 w-auto md:h-[70px]" />
          <span className="text-[11px] uppercase tracking-[0.4em] text-white/65 md:text-xs">
            Sjelen 2026
          </span>
        </div>

        <section className="mt-10 flex max-w-md flex-col items-center gap-4 text-center md:max-w-lg">
          <h1 className="text-3xl font-medium tracking-tight md:text-4xl">
            Pust inn roen
          </h1>
          <p className="text-base leading-relaxed text-white/85 md:text-lg">
            Meld deg på for å få de første oppdateringene om DELARA sitt 2026-prosjekt Sjelen. Ett pust,
            én e-post, og du er med.
          </p>
        </section>

        <div className="mt-8 w-full max-w-sm md:mt-10">
          <SubscribeForm />
        </div>

        <p className="mt-12 text-center text-[11px] uppercase tracking-[0.32em] text-white/55 md:text-xs">
          Vi sender kun når det føles viktig.
        </p>
      </div>
    </main>
  );
}
