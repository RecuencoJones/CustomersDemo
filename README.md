# Customers Demo

[![Build Status](https://travis-ci.com/RecuencoJones/CustomersDemo.svg?token=aEFEyxH22R2zBRmM2Yab&branch=develop)](https://travis-ci.com/RecuencoJones/CustomersDemo)

## Requirements

- node \>= 6
- npm \>= 3
- docker \>= 17

## Working with the Demo

Before anything, run `npm install` to pull all dependencies.

### Building

`npm run build`

This will generate all application distributables to `dist/` directory.

### Run in development mode

`npm run dev`

This will open your default browser with the application and live reload + hot module replacement features,
which means we can modify our sources and instantly rebuild & reload the application.

### Run the tests

`npm run test`

This will run all test suites and generate unit coverage reports under `test/results/` directory.

- `lcov-report/index.html` visual coverage web report.
- `lcov.info` coverage results in LCOV format.

### Other tasks

- `npm run db`: Run a mock API server based on customers JSON.
- `npm run lint`: Check sources are compliant with the styleguide.
- `npm run doc`: Generate documentation output.

## Dependencies

### Bootstrap 4

The most popular CSS framework which helps building Web UIs in minutes with just some markup and classes.

Even though version 4 is still an alpha version, we get a lot of value and rather modern and good looking styles.
Not only we get tons of classes, but we can also use the variables and mixins from the source in our Sass 
stylesheets, se we can perform better calculations and stick to the styleguide.

### Font Awesome

Used so as to get the header icon. Adding it implies bringing in some more rules to our
webpack configuration, allowing the demo to showcase the power of webpack.

### Angular UI Router

AngularJS itself brings a router provider that is good enough by itself, yet this library
provides a lot more functionality and rather powerful API, directives and providers.

To me it would be essential for any Angular 1 based SPA.

### Lodash

Utility library with many useful methods to work with collections, templates, strings, etc. 

## Tooling

### TypeScript

A superset of JavaScript with Types created by Microsoft, this language has been widely embraced by the community
as it has proved its worth. So much even Angular 2 is fully written in TypeScript.

In this simple demo we have a single model _Customer_ that can have _Orders_.

With TypeScript we can easily create our domain data structures and use them according to their contracts
without fears of changing them in the future, as types allow us to refactor and have type checks.

Not only with the models, but also we will get completion and typesafe checks for external libraries like 
angular, lodash, karma...

### TSLint

Similar yet less powerful than ESLint, it is the recommended linting tool for TypeScript projects.

For this particular project it has been configured to use `standard` styleguide through the module 
`tslint-config-standard` with some overrides.

### TypeDoc

Documentation generator from TypeScript sources. This tool is similar to JSDoc, but we get all the benefits from
TypeScript type definitions, resulting in a better linked documentation web.

### Webpack

Webpack is a popular bundler tool in the JavaScript community, it allows managing all the application files, styles,
templates, etc. and creating JavaScript bundles that can be easily imported in the browser without the need of manually
handling dependencies via ordered script tags.

#### Dev Server

Webpack dev server adds a simple server to the bundler with watch over the source code, every time there is a change it
will update the bundle and reload the application or replace changed modules on-the-fly.

#### CommonsChunkPlugin

With this simple plugin we can configure webpack to extract all the vendor dependencies to a separate file 
from our bundle, hence reducing the size of the main JavaScript file and easening debug.

### Karma, Mocha, Chai, Sinon, Istanbul

This has been the de-facto stack for script-based frontend unit testing. I favour it in spite of Jasmine,
which seems to be an all-in-one tool, as you can get quite more powerful APIs from these libraries. 

Karma provides the runner for the tests and links them with browser environments as well as providing a powerful,
extensible configuration for multiple plugins and integrations.
 
Mocha, chai and sinon provide the API for testing, it includes test case definitions, expectations, assertions, spies, 
mocks and sandboxes, plus a expressive and easy to read syntax for expectations.
 
Istanbul adds the instrumentation necessary for retrieving test coverage, parse sourcemaps and generate reports, the 
most interesting is the LCOV report, which can be later integrated in SonarQube.

There are also new tools coming that could replace them (jest) and would make it a lot easier to work with 
modules and bundlers, configure test coverage and preprocessors... yet I am still researching it and find myself 
more confident with this stack.

### Sass

Sass and Less are very similar preprocessors for CSS, I tend to like and use Sass more, I think it is a really powerful,
from which you can get a lot of good features. In this particular demo, not many of those could be showcased.

To begin with, it allows importing plain CSS or Scss, which is really nice as aforementioned. Nesting is core nowadays 
for maintainable and scalable styles (as a personal note, nesting media queries just feels glorious), variables, sets, 
mixins and templates help reusing functionality, reducing duplicated code and and keep consistancy.

### JSON Server

A zero code mock server that exposes a simple API from json files with mock data through CLI.

For each entity in given JSON it exposes a restful API allowing us to execute all types of actions.

It would just work out of the box with the provided customer JSON, but I wanted to prevent modifications to
it and just use the mocks as a in-memory database. For this purpose we need to create a JS file exporting the
JSON data.

## Implementation insights

### Manual bootstrapping

One of the very first things that I learned and adopted when using angular was to discard the `ng-app` directive. It is
preferable to control the startup of applications by ourselves, and `angular.bootstrap()` provides this.

### Decorators

Even though the application would work perfectly by using traditional angular syntax, I think this is a good way of 
showcasing the power of TypeScript or future ES7. Decorators here are just sugar syntax, but help spotting injectables,
component configurations, etc. at a glance plus keeping related data together.

As a personal note, I find it interesting how just mixing Angular 1.6 + TypeScript + Decorators makes the codebase look
rather modern, almost like Angular 2.

### Directives vs Components

In this application three `angular.components` have been used an no directives. The main difference between them relays 
mainly on the purpose, components make reusing markup blocks easy while directives should be focused around DOM 
manipulations.

Components are also supposed to have their own lifecycle and behave always in a predictable way without state. Angular 
supports this by providing the one-way data bind `<`, preventing child scopes to modify parent scopes and reducing the
amount of watches.

As mentioned, directives should be related to DOM manipulation, hence the availability of link and compile functions. 
In previous Angular versions, directives with isolated scope were used as components.

### Controller As vm

Using a name to refer to a controller is considered a good practice by the Angular community, in particular those
following [John Papa's styleguide](https://github.com/johnpapa/angular-styleguide/blob/master/a1/README.md#controlleras-with-vm). 
From all the reasons, aside from preventing the creation of tons of watches, I also find interesting that it makes 
easier for IDEs to track references and provide completion and refactoring capabilities.

### Responsiveness

Bootstrap provides fluid styles by default, which makes this task easy for any developer. Only some 
styles did require using media queries to adjust them, in particular the new customer form, which to my
likings seems better as a multiline form in smaller devices, whereas inline fits better for larger devices.

## Continuous Integration

So as to run build, linter, doc and tests, TravisCI was chosen since I have already worked with it for other projects.
The integration was really simple, just adding [.travis.yml](./.travis.yml) file with very few configurations and we
get builds per push and pull request checks.

Unfortunately, the public sonarqube instance does not have the required [TypeScript plugin](https://github.com/Pablissimo/SonarTsPlugin), 
but any instance with it could analyze the source code using [the sonar configuration](./sonar-project.properties).

## Dockerizing

```bash
npm run build
docker build -t customers-demo:1.0 .
docker run -it -d --name customers-demo -p 8080:80 customers-demo:1.0
```

Docker is another powerful tool for developing and delivering. For this project a simple docker image
is built from `nginx` so as to serve the web application.

After running the commands above you can browse [http://localhost:8080/](http://localhost:8080) to see it working.

As no actual API exists for the Demo to consume, run the mock API with `npm run db`.
