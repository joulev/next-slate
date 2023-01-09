import { Plate, TEditableProps } from "@udecode/plate";

const editableProps: TEditableProps = {
  placeholder: "Type something...",
};

export default function Editor({ className }: { className?: string }) {
  return <Plate editableProps={{ ...editableProps, className }} />;
}
