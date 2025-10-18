import SubscribeForm from "@/components/SubscribeForm";
import Logo from "@/components/shared/Logo";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#03d3b1] text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.2),rgba(3,211,177,0.05)_55%,rgba(3,211,177,0)_90%)]" />
        <div className="animate-serene absolute left-1/2 top-1/2 h-[130%] w-[130%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.26)_0%,rgba(3,211,177,0)_72%)]" />
        <div className="animate-serene-delay absolute left-1/2 top-1/2 h-[155%] w-[155%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0%,rgba(3,211,177,0)_85%)]" />
      </div>

      <div className="relative z-10 flex min-h-screen flex-col">
        <header className="flex items-center justify-between px-6 pt-8 md:px-12 md:pt-12">
          <Logo className="h-9 w-auto md:h-12" />
          <span className="text-sm font-semibold tracking-[0.6em] text-white/80 md:text-base">
            2026
          </span>
        </header>

        <div className="flex flex-1 items-center justify-center px-6 pb-16 md:px-0">
          <div className="w-full max-w-sm rounded-[32px] border border-white/20 bg-white/[0.08] p-8 backdrop-blur-3xl shadow-[0_40px_120px_rgba(9,66,57,0.35)] transition hover:border-white/30 hover:bg-white/[0.12] sm:max-w-md sm:p-10">
            <SubscribeForm />
          </div>
        </div>
      </div>
    </main>
  );
}
