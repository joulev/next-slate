import {
  Plate,
  TEditableProps,
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

const editableProps: TEditableProps = {
  placeholder: "Type something...",
};

export default function Editor({ className }: { className?: string }) {
  return (
    <DndProvider backend={HTML5Backend}>
      <Plate
        editableProps={{ ...editableProps, className }}
        plugins={plugins}
        initialValue={initialValue}
      />
    </DndProvider>
  );
}
