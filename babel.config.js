module.exports = {
  presets: ["@babel/preset-env", "@babel/preset-typescript"],
  plugins: [
    [
      "module-resolver",
      {
        root: ["./"],
        extensions: [".ts", ".js"],
        alias: {
          "@": "./src",
          "@config": "./src/config",
          "@types": "./src/types",
          "@constants": "./src/constants",
          "@services": "./src/services",
          "@utils": "./src/utils",
          "@controllers": "./src/controllers",
          "@models": "./src/models",
          "@database": "./src/database",
          "@routers": "./src/routers",
        },
      },
    ],
  ],
};
