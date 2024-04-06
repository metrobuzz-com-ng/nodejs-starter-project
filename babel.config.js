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
        },
      },
    ],
  ],
};
