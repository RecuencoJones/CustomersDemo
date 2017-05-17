# Customers Demo

## Requirements

- node \>= 6
- npm \>= 3
- docker \>= 17

## Working with the Demo

`npm install`

### Building

`npm run build`

This will generate all application distributables to `dist/` directory.

### Run in development mode

`npm run dev`

This will open your default browser with the application and live reload + hot module replacement features,
which means we can modify our sources and instantly rebuild & reload the application.

### Run the tests

`npm run test`

### Other tasks

`npm run db`
`npm run lint`
`npm run doc`
`npm run test:coverage`

## Dependencies

### Bootstrap 4

The most popular CSS framework which helps building Web UIs in minutes with just some markup and classes.

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

### Webpack

Webpack is a popular bundler tool in the JavaScript community, it allows managing all the application files, styles,
templates, etc. and creating JavaScript bundles that can be easily imported in the browser without the need of manually
handling dependencies via ordered script tags.

#### CommonsChunkPlugin

With this simple plugin we can configure webpack to extract all the vendor dependencies to a separate file 
from our bundle, hence reducing the size of the main JavaScript file and easening debug.

### TSLint

Similar yet less powerful than ESLint, it is the recommended linting tool for TypeScript projects.

For this particular project it has been configured to use `standard` styleguide through the module 
`tslint-config-standard` with some overrides.

### TypeDoc

Documentation generator from TypeScript sources. This tool is similar to JSDoc, but we get all the benefits from
TypeScript type definitions, resulting in a better linked documentation web.

### Karma, Chai, Sinon

### Sass

### JSON Server

A zero code mock server that exposes a simple API from json files with mock data through CLI.

For each entity in given JSON it exposes a restful API allowing us to execute all types of actions.

It would just work out of the box with the provided customer JSON, but I wanted to prevent modifications to
it and just use the mocks as a in-memory database. For this purpose we need to create a JS file exporting the
JSON data.

## Code insights

### Manual bootstrapping

### Decorators

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
