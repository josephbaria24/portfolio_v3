// components/global-blur-background.tsx
export default function GlobalBlurBackground() {
    return (
      <>
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.05] via-transparent to-rose-500/[0.05] blur-3xl pointer-events-none z-0" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-[#030303]/80 pointer-events-none z-0" />
      </>
    );
  }
  