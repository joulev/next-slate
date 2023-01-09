// @ts-check
/** @type {import("tailwindcss").Config} */
module.exports = {
  content: ["./{pages,components}/**/*.tsx"],
  theme: { extend: {} },
  plugins: [require("tailwind-dark-aware")],
};
