import { createPlateUI, ELEMENT_PARAGRAPH, ELEMENT_H1, ELEMENT_H2 } from "@udecode/plate";

export const plateUI = createPlateUI({
  [ELEMENT_H1]: props => <h1 {...props} className="mt-6 mb-3 text-2xl font-bold sm:text-3xl" />,
  [ELEMENT_H2]: props => <h2 {...props} className="mt-6 mb-3 text-xl font-bold sm:text-2xl" />,
  [ELEMENT_PARAGRAPH]: props => <p {...props} className="mb-3" />,
  // and so on, but let's not style all elements as it's not the main scope. Also other than the above,
  // the default styling by Plate is nice enough.
});
