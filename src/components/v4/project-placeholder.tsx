// Shown instead of a screenshot until one exists: a small terminal window
// with the project name and its data flow.
export default function ProjectPlaceholder({ title, architecture }: { title: string; architecture?: string }) {
  return (
    <div
      aria-hidden
      className="flex h-full min-h-[220px] w-full flex-col rounded border border-white/10 bg-[#0d1f3a] font-mono text-[13px]"
    >
      <div className="flex items-center gap-1.5 border-b border-white/10 px-4 py-3">
        <span className="size-2.5 rounded-full bg-white/15" />
        <span className="size-2.5 rounded-full bg-white/15" />
        <span className="size-2.5 rounded-full bg-white/15" />
        <span className="ml-3 text-muted-foreground">~/{title.toLowerCase()}</span>
      </div>
      <div className="flex flex-1 flex-col justify-center gap-3 px-6 py-8">
        <p className="text-3xl font-medium text-primary sm:text-4xl">{title}</p>
        {architecture && (
          <p className="text-muted-foreground">
            <span className="text-primary">$</span> {architecture}
          </p>
        )}
      </div>
    </div>
  );
}
