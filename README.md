# Algolia Demo App

[https://kylesexample.github.io/algolia-demo/](https://kylesexample.github.io/algolia-demo/)

The purpose of this project is to demonstrate the abilities of Algolia search. The data being searched is movie data provided by Algolia for demo and testing purposes. I chose movies because I felt movie data show off the capabilities of Algolia by allowing a person with vague recollection of a film search by year, actor, or even alternative titles, which frequently include more literal descriptions of a film.

The app was built using webpack to bundle js and scss. Webpack is configured to output to the dist folder, but I copied those files to the root of the directory so github pages would be able to serve them. I thought webpack the best choice to structure the build for when I would wish to add more code and custom functionality on top of what instantsearch.js provides.

The UI functionality is powered by the Algolia instantsearch.js library. The search bar responds to all keystrokes to immediately update results. Refinements for genre and release year are on the left. One aesthetic choice I added was to fade in results, so the results populating wouldn't be as abrupt or jarring.