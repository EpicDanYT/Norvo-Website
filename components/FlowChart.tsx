type Step = { title: string; body: string };

// Arrow connector: horizontal between desktop columns, vertical on mobile.
function Connector() {
  return (
    <>
      <div className="hidden items-center justify-center lg:flex" aria-hidden>
        <svg width="40" height="24" viewBox="0 0 40 24" fill="none">
          <path d="M2 12h30M24 4l8 8-8 8" stroke="#D9A24B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      <div className="flex justify-center py-2 lg:hidden" aria-hidden>
        <svg width="24" height="32" viewBox="0 0 24 32" fill="none">
          <path d="M12 2v22M4 16l8 8 8-8" stroke="#D9A24B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </>
  );
}

export default function FlowChart({ steps }: { steps: readonly Step[] }) {
  return (
    <ol className="flex flex-col lg:flex-row lg:items-stretch">
      {steps.map((s, i) => (
        <li key={s.title} className="contents">
          <div className="flex flex-1 flex-col rounded-3xl border border-line bg-white/[0.03] p-7 transition-colors hover:border-amber/60 sm:p-8">
            <span className="display text-3xl text-amber">{String(i + 1).padStart(2, "0")}</span>
            <h3 className="mt-3 text-xl font-semibold text-white sm:text-2xl">{s.title}</h3>
            <p className="mt-3 body-text text-base sm:text-lg">{s.body}</p>
          </div>
          {i < steps.length - 1 && <Connector />}
        </li>
      ))}
    </ol>
  );
}
