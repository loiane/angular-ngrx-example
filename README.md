# AngularNgrxExample

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.1.4.

Demo: https://salmon-sky-0f83f980f.azurestaticapps.net/products

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## NgRx commands

```
ng add @ngrx/schematics@latest
ng add @ngrx/store@latest
ng add @ngrx/store-devtools@latest
ng add @ngrx/effects@latest
ng add @ngrx/entity@latest
ng add @ngrx/data@latest

ng generate @ngrx/schematics:store Product --statePath store --module products.module.ts
ng generate @ngrx/schematics:entity Product --flat false --module products.module.ts
ng generate @ngrx/schematics:effect store/Product --module products.module.ts --api true
ng generate @ngrx/schematics:container Products --state store/product.reducer.ts --stateInterface ProductState
ng generate @ngrx/schematics:selector store/Products

ng generate @ngrx/schematics:action Header
ng generate @ngrx/schematics:reducer Header --module ../header.module.ts
ng generate @ngrx/schematics:selector store/header

ng generate @ngrx/schematics:reducer App --module ../app.module.ts

```
