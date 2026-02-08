module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",

  transform: {
    "^.+\\.tsx?$": ["ts-jest", { tsconfig: "tsconfig.app.json" }],
  },

  moduleFileExtensions: ["ts", "tsx", "js", "jsx"],

  setupFilesAfterEnv: ["<rootDir>/src/setupTests.ts"],
};
