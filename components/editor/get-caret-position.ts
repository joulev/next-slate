// Not perfect, but at least somewhat usable. Why is retrieving caret coordinates such a hard thing
// in JS? It's literally 2023.
export function getCaretPosition() {
  const selection = window.getSelection()!;
  const range = selection.getRangeAt(0);
  const rect = range.getBoundingClientRect();
  return { top: rect.top + rect.height, left: rect.left };
}
