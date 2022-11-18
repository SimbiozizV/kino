module.exports = {
  extends: ["prettier", "plugin:prettier/recommended"],
  plugins: ["import", "prettier"],
  parser: "@typescript-eslint/parser",
  settings: {
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"],
    },
    "import/resolver": {
      node: {
        cwd: __dirname,
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    },
    polyfills: [
      "fetch",
      "Promise",
      "Promise.all",
      "Promise.resolve",
      "Promise.reject",
      "MutationObserver",
      "IntersectionObserver",
      "Object.keys",
      "Object.values",
      "Object.entries",
      "Object.assign",
      "Array.includes",
      "Array.from",
      "Array.find",
      "Array.findIndex",
      "String.includes",
      "String.repeat",
      "String.padStart",
      "String.padEnd",
      "String.matchAll",
      "Number.isNaN",
      "Number.isInteger",
      "Number.parseInt",
      "Symbol",
      "Symbol.iterator",
      "Set",
      "Map",
      "Element.closest",
      "Element.matches",
      "window.scrollBy",
      "AbortController",
      "document.querySelector",
    ],
  },
  env: {
    browser: true,
    jest: true,
  },
  globals: {
    __DEV__: false,
  },
  rules: {
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        js: "never",
        jsx: "never",
        ts: "never",
        tsx: "never",
      },
    ],
    "prettier/prettier": ["error"],
    indent: "off",
    "no-alert": "off",
    "no-console": "off",
    "no-empty": "off",
    "no-new": "off",
    "no-loop-func": "off",
    "no-restricted-globals": "off",
    "class-methods-use-this": "off",
    "function-paren-newline": "off",
    "space-before-function-paren": "off",
    "object-curly-newline": "off",
    "no-underscore-dangle": "off",
    "no-self-compare": "off",
    "arrow-parens": "off",
    "arrow-body-style": "off",
    "no-plusplus": "off",
    "no-restricted-exports": "off",
    "no-param-reassign": ["error", { props: false }],
    "no-restricted-syntax": [
      "error",
      "ForInStatement",
      "LabeledStatement",
      "WithStatement",
    ],
    "max-len": [
      "error",
      120,
      4,
      {
        ignoreUrls: true,
        ignoreComments: false,
        ignoreRegExpLiterals: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignorePattern: "<path([sS]*?)/>",
      },
    ],
    "comma-dangle": [
      "error",
      {
        arrays: "always-multiline",
        objects: "always-multiline",
        imports: "only-multiline",
        exports: "only-multiline",
        functions: "only-multiline",
      },
    ],
    "prefer-destructuring": [
      "error",
      {
        VariableDeclarator: {
          array: false,
          object: true,
        },
        AssignmentExpression: {
          array: false,
          object: false,
        },
      },
      {
        enforceForRenamedProperties: false,
      },
    ],
    "import/first": "off",
    "import/prefer-default-export": "off",
    "implicit-arrow-linebreak": "off",
    "wrap-iife": ["error", "any"],
    camelcase: "off",
  },
  overrides: [
    {
      files: ["assets/**/*.{ts,tsx}"],
      parser: "@typescript-eslint/parser",
      plugins: ["@typescript-eslint"],
      extends: ["plugin:@typescript-eslint/recommended"],
      rules: {
        "no-useless-constructor": "off",
        "@typescript-eslint/no-useless-constructor": "error",
        "no-unused-vars": "off",
        "@typescript-eslint/no-unused-vars": [
          "error",
          {
            args: "all",
            argsIgnorePattern: "^_",
            ignoreRestSiblings: true,
          },
        ],
        "no-use-before-define": "off",
        "@typescript-eslint/no-use-before-define": "error",
        "no-shadow": "off",
        "@typescript-eslint/no-shadow": ["error"],
        "@typescript-eslint/ban-ts-comment": "off",
        "@typescript-eslint/no-non-null-assertion": "off",
        "@typescript-eslint/no-empty-function": [
          "error",
          { allow: ["methods"] },
        ],
        "@typescript-eslint/no-inferrable-types": "warn",
      },
    },
    {
      files: ["assets/**/*", "*.test.{js,ts,tsx}"],
      rules: {
        "import/no-extraneous-dependencies": "off",
      },
    },
  ],
};
