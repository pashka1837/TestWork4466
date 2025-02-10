/** @type {import('stylelint').Config} */
 const config = {
    extends: ["stylelint-config-standard-scss"],
    rules: {
    'selector-class-pattern': "^[a-z][a-zA-Z]+$"
  }
  };

  export default config