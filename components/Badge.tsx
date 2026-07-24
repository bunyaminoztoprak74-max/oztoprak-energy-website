export function Badge({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center whitespace-nowrap rounded-[3px] bg-[#0A1628] px-2.5 py-1 text-[10px] font-bold tracking-wide text-white">
      {label}
    </span>
  );
}
