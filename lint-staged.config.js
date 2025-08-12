export default {
  "*.{ts,tsx}": () => ["npm run lint --fix", "npm run check-types"],
  "*.{js,json,md}": () => "npm run format",
  "*.scss": () => "npm run stylelint",
};
