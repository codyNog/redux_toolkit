module.exports = {
  // The root of your source code, typically /src
  // `<rootDir>` is a token Jest substitutes
  roots: ["<rootDir>"],

  // Jest transformations -- this adds support for TypeScript
  // using ts-jest
  transform: {
    "^.+\\.tsx?$": "ts-jest"
  },

  // Test spec file resolution pattern
  // Matches parent folder `__tests__` and filename
  // should contain `test` or `spec`.
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",

  // Module file extensions for importing
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],

  moduleNameMapper: {
    "~(.*)$": "<rootDir>/src/$1",
    "\\.(css|less)$": "identity-obj-proxy"
  },
  testPathIgnorePatterns: ["/__tests__/mocks"],

  modulePaths: ["<rootDir>"],
  globals: {
    "ts-jest": {
      tsconfig: "tsconfig.jest.json"
    }
  }
};
