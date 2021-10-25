const { defaults: tsJestPresets } = require("ts-jest/presets");

module.exports = {
    preset: "ts-jest",
    transform: { ...tsJestPresets.transform },
    testMatch: ["**/__unit_tests__/*.(spec|test).ts"]
}