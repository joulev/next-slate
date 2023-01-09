import {
  BalloonToolbar,
  getPluginType,
  MARK_BOLD,
  MARK_ITALIC,
  MARK_UNDERLINE,
  MarkToolbarButton,
  usePlateEditorRef,
} from "@udecode/plate";

export default function MarkBalloonToolbar() {
  const editor = usePlateEditorRef();
  // Looks like it's currently impossible to style <BalloonToolbar> with Tailwind. If we want to have
  // custom styling, we apparently have to make our own BalloonToolbar based on
  // https://github.com/udecode/plate/blob/main/packages/ui/toolbar/src/BalloonToolbar/BalloonToolbar.tsx
  return (
    <BalloonToolbar>
      <MarkToolbarButton
        type={getPluginType(editor, MARK_BOLD)}
        icon={<span className="font-bold">B</span>}
      />
      <MarkToolbarButton
        type={getPluginType(editor, MARK_ITALIC)}
        icon={<span className="italic">I</span>}
      />
      <MarkToolbarButton
        type={getPluginType(editor, MARK_UNDERLINE)}
        icon={<span className="underline">U</span>}
      />
    </BalloonToolbar>
  );
}
