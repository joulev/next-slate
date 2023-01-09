import {
  getPluginType,
  usePlateEditorRef,
  ELEMENT_PARAGRAPH,
  ELEMENT_H2,
  ELEMENT_H1,
} from "@udecode/plate";
import { Transforms } from "slate";
import { useSlate } from "slate-react";

export default function SlashDropdown({
  top,
  left,
  query,
  onClick,
}: {
  top: number;
  left: number;
  query: string;
  onClick: () => void;
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
          onClick={() => {
            Transforms.setNodes(editor, { type: getPluginType(plateEditor, type) });
            new Array(query.length + 1)
              .fill(null)
              .forEach(() => editor.deleteBackward("character")); // why don't this function accept a length param?
            onClick();
          }}
          className="rounded px-2 py-1 text-left transition hover:bg-slate-200"
        >
          {label}
        </button>
      ))}
    </div>
  );
}
