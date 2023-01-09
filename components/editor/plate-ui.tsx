import { createPlateUI, ELEMENT_PARAGRAPH, ELEMENT_H1, ELEMENT_H2 } from "@udecode/plate";
import { withDraggables } from "@udecode/plate-ui-dnd";

export const plateUI = withDraggables(
  createPlateUI({
    [ELEMENT_H1]: props => <h1 {...props} className="mt-8 mb-4 text-2xl font-bold sm:text-3xl" />,
    [ELEMENT_H2]: props => <h2 {...props} className="mt-8 mb-4 text-xl font-bold sm:text-2xl" />,
    [ELEMENT_PARAGRAPH]: props => <p {...props} className="mb-4" />,
    // and so on, but let's not style all elements as it's not the main scope. Also other than the above,
    // the default styling by Plate is nice enough.
  }),
  [
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
  ]
);
