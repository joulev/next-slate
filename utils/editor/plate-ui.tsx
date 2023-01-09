import {
  createPlateUI,
  ELEMENT_PARAGRAPH,
  ELEMENT_H1,
  ELEMENT_H2,
  withProps,
  StyledElement,
} from "@udecode/plate";

export const plateUI = createPlateUI({
  [ELEMENT_H1]: withProps(StyledElement, {
    as: "h1",
    className: "mt-8 mb-4 text-2xl font-bold sm:text-3xl",
  }),
  [ELEMENT_H2]: withProps(StyledElement, {
    as: "h2",
    className: "mt-8 mb-4 text-xl font-bold sm:text-2xl",
  }),
  [ELEMENT_PARAGRAPH]: withProps(StyledElement, { as: "p", className: "mb-4" }),
  // and so on, but let's not style all elements as it's not the main scope. Also other than the above,
  // the default styling by Plate is nice enough.
});
