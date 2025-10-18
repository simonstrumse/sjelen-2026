import SubscribeForm from "@/components/SubscribeForm";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#03d3b1] text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[#03d3b1]" />
        <div className="animate-serene absolute left-1/2 top-1/2 h-[115%] w-[115%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.28)_0%,rgba(3,211,177,0)_70%)]" />
        <div className="animate-serene-delay absolute left-1/2 top-1/2 h-[140%] w-[140%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.12)_0%,rgba(3,211,177,0)_82%)]" />
      </div>

      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6">
        <div className="flex flex-col items-center gap-10 text-center">
          <span className="text-sm uppercase tracking-[0.5em] text-white/80 md:text-base">
            DELARA 2026
          </span>

          <div className="w-full max-w-xs sm:max-w-sm">
            <SubscribeForm />
          </div>
        </div>
      </div>
    </main>
  );
}
