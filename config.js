System.config({
  baseURL: "/",
  defaultJSExtensions: true,
  paths: {
    "jquery": "./library/jquery-1.11.3.js",
    "angular2/*": "./library/angular2.min.js",
    "*": "*.js",
    "es6-module-loader":'./library/es6-module-loader@0.16.6.js',
    "systemjs":'./library/system@0.16.11.js',
    "traceur":'./library/traceur-runtime@0.0.87.js',
    "system-polyfills":"node_modules/systemjs/dist/system-polyfills.js"
  },

  map: {
    "remote": "library/remote"
  }
});
