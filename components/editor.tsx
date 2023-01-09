import {
  Plate,
  createPlugins,
  createBasicElementsPlugin,
  createBasicMarksPlugin,
  createNodeIdPlugin,
  createExitBreakPlugin,
} from "@udecode/plate";
import { createDndPlugin } from "@udecode/plate-ui-dnd";
import { useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { components } from "~/utils/editor/components";
import { exitBreakPlugin } from "~/utils/editor/exit-break";
import { getCaretPosition } from "~/utils/editor/get-caret-position";
import { initialValue } from "~/utils/editor/initial-value";
import SlashDropdown from "~/utils/editor/slash-dropdown";

const plugins = createPlugins(
  [
    createBasicElementsPlugin(),
    createBasicMarksPlugin(),
    createNodeIdPlugin(),
    createDndPlugin({ options: { enableScroller: true } }),
    createExitBreakPlugin(exitBreakPlugin),
  ],
  { components }
);

export default function Editor({ className }: { className?: string }) {
  const [slashQuery, setSlashQuery] = useState<string | null>(null);
  const [caretPos, setCaretPos] = useState({ top: 0, left: 0 });
  return (
    <DndProvider backend={HTML5Backend}>
      <Plate
        editableProps={{
          className,
          onKeyDown: e => {
            setCaretPos(getCaretPosition());
            // this is a very simplified version
            switch (e.key) {
              case "ArrowDown":
              case "ArrowUp":
                if (slashQuery !== null) e.preventDefault();
                break;
              case "/":
                setSlashQuery("");
                break;
              case "Enter":
              case " ":
                setSlashQuery(null);
                break;
              case "Backspace":
                if (slashQuery && slashQuery.length > 0) setSlashQuery(slashQuery.slice(0, -1));
                else setSlashQuery(null);
                break;
              default:
                if (e.key.length === 1 && slashQuery !== null) setSlashQuery(slashQuery + e.key);
            }
          },
        }}
        plugins={plugins}
        initialValue={initialValue}
      >
        {slashQuery !== null && (
          <SlashDropdown
            top={caretPos.top}
            left={caretPos.left}
            query={slashQuery}
            onClick={() => setSlashQuery(null)}
          />
        )}
      </Plate>
    </DndProvider>
  );
}
