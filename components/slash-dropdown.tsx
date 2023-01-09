import {
  getPluginType,
  usePlateEditorRef,
  ELEMENT_PARAGRAPH,
  ELEMENT_H2,
  ELEMENT_H1,
} from "@udecode/plate";
import { Node, Transforms } from "slate";
import { useSlate } from "slate-react";

function useQuery() {
  const editor = useSlate();
  const selection = editor.selection;
  const str = selection
    ? Node.string(Node.get(editor, selection.anchor.path)).substring(0, selection.anchor.offset)
    : "";
  const query = str.split("/").at(-1);
  if (query === undefined || query.length === str.length) return null; // no / found
  if (query.split(" ").length > 1) return null; // space found
  return query;
}

export default function SlashDropdown({ top, left }: { top: number; left: number }) {
  const editor = useSlate();
  const plateEditor = usePlateEditorRef();
  const query = useQuery();
  if (query === null) return null;
  const queryLower = query.toLowerCase();
  const buttonsToShow = (
    [
      [ELEMENT_H1, "Heading 1", "h1"],
      [ELEMENT_H2, "Heading 2", "h2"],
      [ELEMENT_PARAGRAPH, "Paragraph", "p"],
    ] as const
  ).filter(el => el[2].includes(queryLower) || el[1].toLowerCase().includes(queryLower));
  return (
    <div
      className="fixed z-10 flex w-36 flex-col rounded border p-3 transition-all border-daw-slate-200 bg-daw-white"
      style={{ top, left }}
    >
      {buttonsToShow.length === 0 && <div className="text-gray-400">No results</div>}
      {buttonsToShow.map(([type, label], index) => (
        <button
          key={index}
          onClick={() => {
            Transforms.setNodes(editor, { type: getPluginType(plateEditor, type) });
            new Array(query.length + 1)
              .fill(null)
              .forEach(() => editor.deleteBackward("character")); // why don't this function accept a length param?
          }}
          className="rounded px-2 py-1 text-left transition hover:bg-daw-slate-200"
        >
          {label}
        </button>
      ))}
    </div>
  );
}
