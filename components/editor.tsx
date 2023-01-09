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
import MarkBalloonToolbar from "~/components/balloon-toolbar";
import SlashDropdown from "~/components/slash-dropdown";
import { components } from "~/utils/editor/components";
import { exitBreakPlugin } from "~/utils/editor/exit-break";
import { getCaretPosition } from "~/utils/editor/get-caret-position";
import { initialValue } from "~/utils/editor/initial-value";

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
  const [caretPos, setCaretPos] = useState({ top: 0, left: 0 });
  return (
    <DndProvider backend={HTML5Backend}>
      <Plate
        editableProps={{ className, onKeyDown: _ => setCaretPos(getCaretPosition()) }}
        plugins={plugins}
        initialValue={initialValue}
      >
        <SlashDropdown top={caretPos.top} left={caretPos.left} />
        <MarkBalloonToolbar />
      </Plate>
    </DndProvider>
  );
}
