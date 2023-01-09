// @ts-check
/** @type {import("prettier").Config} */
module.exports = {
  semi: true,
  printWidth: 100,
  arrowParens: "avoid",
  tabWidth: 2,
  plugins: ["@trivago/prettier-plugin-sort-imports", "prettier-plugin-tailwindcss"],
  pluginSearchDirs: false,
};
