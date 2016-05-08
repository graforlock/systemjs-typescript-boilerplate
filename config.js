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
      "map": {
        "ts": "github:frankwallis/plugin-typescript@4.0.9"
      }
    }
  },
  map: {
    "jquery": "//code.jquery.com/jquery-2.2.3.min.js",
    "rxjs": "./node_modules/rxjs/bundles/Rx.umd.js",
    "ts": "github:frankwallis/plugin-typescript@4.0.9",
    "ts-runtime": "npm:babel-runtime@5.8.38",
    "typescript": "npm:typescript@1.8.10",
    "github:frankwallis/plugin-typescript@4.0.9": {
      "typescript": "npm:typescript@1.8.10"
    },
    "github:jspm/nodelibs-assert@0.1.0": {
      "assert": "npm:assert@1.3.0"
    },
    "github:jspm/nodelibs-os@0.1.0": {
      "os-browserify": "npm:os-browserify@0.1.2"
    },
    "github:jspm/nodelibs-process@0.1.2": {
      "process": "npm:process@0.11.3"
    },
    "github:jspm/nodelibs-util@0.1.0": {
      "util": "npm:util@0.10.3"
    },
    "npm:assert@1.3.0": {
      "util": "npm:util@0.10.3"
    },
    "npm:babel-runtime@5.8.38": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:inherits@2.0.1": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:os-browserify@0.1.2": {
      "os": "github:jspm/nodelibs-os@0.1.0"
    },
    "npm:process@0.11.3": {
      "assert": "github:jspm/nodelibs-assert@0.1.0"
    },
    "npm:typescript@1.8.10": {
      "os": "github:jspm/nodelibs-os@0.1.0"
    },
    "npm:util@0.10.3": {
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    }
  }
});
