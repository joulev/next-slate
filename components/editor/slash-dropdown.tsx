export default function SlashDropdown({
  top,
  left,
  query,
}: {
  top: number;
  left: number;
  query: string;
}) {
  return (
    <div
      className="fixed z-10 rounded border border-slate-200 bg-white p-3 transition-all"
      style={{ top, left }}
    >
      The query is {query}
    </div>
  );
}
