module.exports = {
  testMatch: ["**/__test__/**/*.test.ts"],
  transform: {
    '^.+\\.(t|j)sx?$': ['@swc-node/jest'],
  },
  globals: {
    "ts-jest": {
      tsconfig: "tsconfig.test.json",
    },
  },
}