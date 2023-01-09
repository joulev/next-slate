// @ts-check
/** @type {import("tailwindcss").Config} */
module.exports = {
  content: ["./{pages,components,utils}/**/*.tsx"],
  theme: { extend: {} },
  plugins: [require("tailwind-dark-aware")],
};
