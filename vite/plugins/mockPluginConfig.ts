import { viteMockServe } from "vite-plugin-mock";

export const setupMockPlugin = function (isBuild: Boolean) {
  return viteMockServe({
    mockPath: "mock",
    localEnabled: !isBuild,
  });
};
