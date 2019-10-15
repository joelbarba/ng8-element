# Ng8Element

This generates a "Web Component" that can be reused out of Angular framework within any other web page.
It bootstraps an Angular element (as angular component) into a js file that will expose it into the [customElements](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements) interface

Later you can use the component `<hello-world></hello-world>` wherever in the web.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.0.2.

## Development server

Run `ng serve` to test the component locally.
Run `npm run build` to bundle the component into `concat-build.js` and get it ready to be used externally

## Test

There is a simple external web app in `/random-app` that you can run to see how the component behaves.
