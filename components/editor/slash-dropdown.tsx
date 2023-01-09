import {
  getPluginType,
  usePlateEditorRef,
  ELEMENT_PARAGRAPH,
  ELEMENT_H2,
  ELEMENT_H1,
} from "@udecode/plate";
import { useSlate } from "slate-react";

export default function SlashDropdown({
  top,
  left,
  query,
}: {
  top: number;
  left: number;
  query: string;
}) {
  const editor = useSlate();
  const plateEditor = usePlateEditorRef();
  const buttonsToShow = (
    [
      [ELEMENT_H1, "Heading 1", "h1"],
      [ELEMENT_H2, "Heading 2", "h2"],
      [ELEMENT_PARAGRAPH, "Paragraph", "p"],
    ] as const
  ).filter(el => el[2].includes(query));
  return (
    <div
      className="fixed z-10 flex w-36 flex-col rounded border border-slate-200 bg-white p-3 transition-all"
      style={{ top, left }}
    >
      {buttonsToShow.length === 0 && <div className="text-gray-400">No results</div>}
      {buttonsToShow.map(([type, label], index) => (
        <button
          key={index}
          onClick={() =>
            editor.insertNode({
              type: getPluginType(plateEditor, type),
              children: [{ text: "" }],
            })
          }
          className="rounded px-2 py-1 text-left transition hover:bg-slate-200"
        >
          {label}
        </button>
      ))}
    </div>
  );
}
