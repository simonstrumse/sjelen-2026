import SubscribeForm from "@/components/SubscribeForm";
import Logo from "@/components/shared/Logo";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#03d3b1] text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.18),rgba(3,211,177,0.05)_55%,rgba(3,211,177,0)_90%)]" />
        <div className="animate-serene absolute left-1/2 top-1/2 h-[130%] w-[130%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.24)_0%,rgba(3,211,177,0)_70%)]" />
        <div className="animate-serene-delay absolute left-1/2 top-1/2 h-[160%] w-[160%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0%,rgba(3,211,177,0)_82%)]" />
      </div>

      <div className="relative z-10 flex min-h-screen flex-col">
        <header className="flex items-center justify-between px-6 pt-8 md:px-12 md:pt-12">
          <Logo className="h-9 w-auto md:h-12" />
          <span className="text-sm font-semibold tracking-[0.6em] text-white/80 md:text-base">
            2026
          </span>
        </header>

        <div className="flex flex-1 items-center justify-center px-6 pb-20 pt-10 md:px-0">
          <div className="w-full max-w-sm text-center md:max-w-md">
            <SubscribeForm />
          </div>
        </div>
      </div>
    </main>
  );
}
