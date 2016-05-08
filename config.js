System.config({
  baseURL: "/",
  defaultJSExtensions: true,
  transpiler: "ts",
  typescriptOptions: {
    "module": "system",
    "noImplicitAny": true,
    "typeCheck": true,
    "tsconfig": true
  },
  paths: {
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*"
  },
  packages: {
    "/": {
      "defaultExtension": "js",
      map: {
        ts: 'github:frankwallis/plugin-typescript@4.0.9'
      }
    }
  },

  map: {
    "ts": "github:frankwallis/plugin-typescript@4.0.9",
    "typescript": "npm:typescript@1.8.10",
    "github:frankwallis/plugin-typescript@4.0.9": {
      "typescript": "npm:typescript@1.8.10"
    },
    "github:jspm/nodelibs-os@0.1.0": {
      "os-browserify": "npm:os-browserify@0.1.2"
    },
    "npm:os-browserify@0.1.2": {
      "os": "github:jspm/nodelibs-os@0.1.0"
    },
    "npm:typescript@1.8.10": {
      "os": "github:jspm/nodelibs-os@0.1.0"
    }
  }
});
