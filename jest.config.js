module.exports = {
  testMatch: ["**/__test__/**/*.test.ts"],
  transform: {
    '^.+\\.(t|j)sx?$': ['@swc-node/jest'],
  },
  testTimeout: 20000,
  globals: {
    "ts-jest": {
      tsconfig: "tsconfig.test.json",
    },
  },
}