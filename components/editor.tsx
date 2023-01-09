import { useState } from "react";
import { createEditor, Descendant } from "slate";
import { Slate, Editable, withReact } from "slate-react";
import { withHistory } from "slate-history";

const initialValue: Descendant[] = [
  { children: [{ text: "This is editable plain text, just like a <textarea>!" }] },
];

export default function Editor({ className }: { className?: string }) {
  const [editor] = useState(() => withReact(withHistory(createEditor())));
  return (
    <Slate editor={editor} value={initialValue}>
      <Editable placeholder="Enter some plain text..." className={className} />
    </Slate>
  );
}
