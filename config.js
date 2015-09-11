System.config({
  baseURL: "/",
  defaultJSExtensions: true,
  paths: {
    "jquery": "./library/jquery-1.11.3.js",
    "angular2/*": "./library/angular2.min.js",
    "*": "*.js"
  },

  map: {
    "remote": "library/remote"
  }
});
