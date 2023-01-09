import {
  Plate,
  TEditableProps,
  createPlugins,
  createBlockquotePlugin,
  createCodeBlockPlugin,
  createHeadingPlugin,
  createParagraphPlugin,
  createBasicMarksPlugin,
} from "@udecode/plate";
import { initialValue } from "~/components/editor/initial-value";
import { plateUI } from "~/components/editor/plate-ui";

const plugins = createPlugins(
  [
    createBlockquotePlugin(),
    createCodeBlockPlugin(),
    createHeadingPlugin(),
    createParagraphPlugin(),
    createBasicMarksPlugin(),
  ],
  { components: plateUI }
);

const editableProps: TEditableProps = {
  placeholder: "Type something...",
};

export default function Editor({ className }: { className?: string }) {
  return (
    <Plate
      editableProps={{ ...editableProps, className }}
      plugins={plugins}
      initialValue={initialValue}
    />
  );
}
