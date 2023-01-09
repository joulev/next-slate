import {
  Plate,
  TEditableProps,
  createPlugins,
  createBasicElementsPlugin,
  createBasicMarksPlugin,
  createNodeIdPlugin,
} from "@udecode/plate";
import { createDndPlugin } from "@udecode/plate-ui-dnd";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { initialValue } from "~/components/editor/initial-value";
import { plateUI } from "~/components/editor/plate-ui";

const plugins = createPlugins(
  [
    createBasicElementsPlugin(),
    createBasicMarksPlugin(),
    createNodeIdPlugin(),
    createDndPlugin({ options: { enableScroller: true } }),
  ],
  { components: plateUI }
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
