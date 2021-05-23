# GithubUserApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.1.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Unit Test File 

Two Unit Test file Added eg: `pages.component.spec.ts` and `user-details.component.spec.ts`, with one fail and one success.
To run the unit testing please use below command.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## External Libarry
As per instruction used Ng bootstrap, Apart from this used normal bootstrap for grid system, and for Icons used [FontAwesome](https://fontawesome.com/).

## Functionlity
This App contain GitHub User page with repository details fetched using `https://api.github.com/users/userame/repos` and displaying Repo name and description.

## Extra
Added `setTimeOut()` for displaying skeleton loader for 3secs after api call.

