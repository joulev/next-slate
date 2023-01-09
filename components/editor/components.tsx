import {
  ELEMENT_PARAGRAPH,
  ELEMENT_H1,
  ELEMENT_H2,
  withPlaceholders as plateWithPlaceholders,
} from "@udecode/plate";
import { withDraggables as plateWithDraggables } from "@udecode/plate-ui-dnd";
import { plateUI } from "./plate-ui";

type Components = typeof plateUI;

function withDraggables(components: Components) {
  return plateWithDraggables(components, [
    { keys: [ELEMENT_PARAGRAPH], level: 0 },
    {
      keys: [ELEMENT_PARAGRAPH, ELEMENT_H1, ELEMENT_H2],
      onRenderDragHandle: () => (
        <button type="button" className="text-slate-500 transition hover:text-slate-900">
          {/** @source Lucide Icon */}
          <svg
            className="h-4 w-4 fill-none stroke-current stroke-2 [stroke-linecap:round] [stroke-linejoin:round]"
            viewBox="0 0 24 24"
          >
            <circle cx="9" cy="12" r="1"></circle>
            <circle cx="9" cy="5" r="1"></circle>
            <circle cx="9" cy="19" r="1"></circle>
            <circle cx="15" cy="12" r="1"></circle>
            <circle cx="15" cy="5" r="1"></circle>
            <circle cx="15" cy="19" r="1"></circle>
          </svg>
        </button>
      ),
    },
    { key: ELEMENT_H1, styles: { gutterLeft: { marginTop: "2.5rem" } } },
    { key: ELEMENT_H2, styles: { gutterLeft: { marginTop: "2.5rem" } } },
  ]);
}

function withPlaceholders(components: Components) {
  return plateWithPlaceholders(components, [
    { key: ELEMENT_PARAGRAPH, placeholder: "Type something or / for actions", hideOnBlur: false },
    { key: ELEMENT_H1, placeholder: "Untitled", hideOnBlur: false },
    { key: ELEMENT_H2, placeholder: "Untitled", hideOnBlur: false },
  ]);
}

export const components = withPlaceholders(withDraggables(plateUI));
