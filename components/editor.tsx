import {
  Plate,
  createPlugins,
  createBasicElementsPlugin,
  createBasicMarksPlugin,
  createNodeIdPlugin,
  createExitBreakPlugin,
} from "@udecode/plate";
import { createDndPlugin } from "@udecode/plate-ui-dnd";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { initialValue } from "~/components/editor/initial-value";
import { components } from "~/components/editor/components";
import { exitBreakPlugin } from "~/components/editor/exit-break";
import { useState } from "react";

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
  return (
    <DndProvider backend={HTML5Backend}>
      {slashQuery === null ? <div>null</div> : <div>({slashQuery})</div>}
      <Plate
        editableProps={{
          className,
          onKeyDown: e => {
            switch (e.key) {
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
                if (e.key.length === 1) setSlashQuery(slashQuery + e.key);
            }
          },
        }}
        plugins={plugins}
        initialValue={initialValue}
      />
    </DndProvider>
  );
}
