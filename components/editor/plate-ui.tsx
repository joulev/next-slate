import { createPlateUI, ELEMENT_PARAGRAPH, ELEMENT_H1, ELEMENT_H2 } from "@udecode/plate";
import { withDraggables } from "@udecode/plate-ui-dnd";

export const plateUI = withDraggables(
  createPlateUI({
    [ELEMENT_H1]: props => <h1 {...props} className="mt-6 mb-3 text-2xl font-bold sm:text-3xl" />,
    [ELEMENT_H2]: props => <h2 {...props} className="mt-6 mb-3 text-xl font-bold sm:text-2xl" />,
    [ELEMENT_PARAGRAPH]: props => <p {...props} className="mb-3" />,
    // and so on, but let's not style all elements as it's not the main scope. Also other than the above,
    // the default styling by Plate is nice enough.
  }),
  [
    {
      keys: [ELEMENT_PARAGRAPH],
      level: 0,
    },
    {
      keys: [ELEMENT_PARAGRAPH, ELEMENT_H1, ELEMENT_H2],
      onRenderDragHandle: () => <button type="button">D</button>,
    },
    {
      key: ELEMENT_H1,
      styles: {
        gutterLeft: {
          padding: "2em 0 4px",
          fontSize: "1.875em",
        },
        blockToolbarWrapper: {
          height: "1.3em",
        },
      },
    },
    {
      key: ELEMENT_H2,
      styles: {
        gutterLeft: {
          padding: "1.4em 0 1px",
          fontSize: "1.5em",
        },
        blockToolbarWrapper: {
          height: "1.3em",
        },
      },
    },
    {
      keys: [ELEMENT_PARAGRAPH],
      styles: {
        gutterLeft: {
          padding: "4px 0 0",
        },
      },
    },
  ]
);
