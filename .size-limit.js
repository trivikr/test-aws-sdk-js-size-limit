module.exports = [
  {
    path: "index.js",
    import: "{ listInstances }",
    limit: "1 kB",
    modifyEsbuildConfig: (config) => {
      config.platform = "browser";
      config.mainFields = ["browser", "module", "main"];
      config.format = "esm";
      config.minify = true;
      return config;
    },
  },
];
