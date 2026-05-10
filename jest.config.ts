import type { Config } from "jest";
import nextJest from "next/jest.js";

const createJestConfig = nextJest({ dir: "./" });

const config: Config = {
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
    "^framer-motion$": "<rootDir>/src/__mocks__/framer-motion.tsx",
  },
  testMatch: [
    "<rootDir>/src/__tests__/**/*.test.tsx",
    "<rootDir>/src/__tests__/**/*.test.ts",
  ],
  collectCoverageFrom: ["src/components/**/*.tsx", "src/app/**/*.tsx"],
};

export default createJestConfig(config);
