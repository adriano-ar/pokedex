module.exports = {
    preset: "ts-jest/presets/js-with-ts",
    testEnvironment: "jsdom",
    transform: {
        "^.+\\.ts?$": "ts-jest",
    },
    transformIgnorePatterns: ["<rootDir>/node_modules/"],
    moduleNameMapper: {
        "\\.(css|less|scss)$": "<rootDir>/CSSStub.js",
    },
    automock: false,
    setupFiles: ["./src/setupJest.tsx"],
    verbose: true,
};
