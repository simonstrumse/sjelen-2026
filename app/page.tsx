import SubscribeForm from "@/components/SubscribeForm";
import Logo from "@/components/shared/Logo";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#03d3b1] text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[#03d3b1]" />
        <div className="animate-serene absolute left-1/2 top-1/2 h-[140%] w-[140%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.35)_0%,rgba(3,211,177,0)_70%)]" />
        <div className="animate-serene-delay absolute left-1/2 top-1/2 h-[160%] w-[160%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.18)_0%,rgba(3,211,177,0)_80%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.18),rgba(3,211,177,0.08)_45%,rgba(3,211,177,0)_85%)]" />
      </div>

      <div className="relative z-10 flex min-h-screen items-center px-6 py-20 sm:px-10">
        <div className="mx-auto flex w-full max-w-3xl flex-col gap-12 rounded-[32px] border border-white/10 bg-white/5 p-10 backdrop-blur-3xl md:gap-16 md:p-16">
          <header className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <Logo className="md:h-14" />
            <div className="text-right text-xs font-semibold uppercase tracking-[0.5em] text-white/70 md:text-sm">
              Sjelen 2026
            </div>
          </header>

          <section className="space-y-5 text-left">
            <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
              Pust inn roen.
            </h1>
            <p className="max-w-xl text-base text-white/80 md:text-lg">
              Meld deg på for å få de første oppdateringene om DELARA sitt 2026-prosjekt Sjelen. Ett pust, én e-post, og du er med.
            </p>
          </section>

          <SubscribeForm />

          <p className="text-center text-xs uppercase tracking-[0.4em] text-white/50 md:text-sm">
            Vi sender kun når det føles viktig.
          </p>
        </div>
      </div>
    </main>
  );
}
