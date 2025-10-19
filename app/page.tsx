import SubscribeForm from "@/components/SubscribeForm";
import Logo from "@/components/shared/Logo";

export default function Home() {
  return (
    <main className="stone-surface relative min-h-screen overflow-hidden text-white">
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
