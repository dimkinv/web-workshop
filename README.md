# Welcome to WEB workshop
In this workshop we will exersice basic Typescript, HMTL and CSS skills. 
In order to start please clone current repository with the `initial ` branch.

You can use the following command for that:
```
git clone -b initial https://github.com/dimkinv/web-workshop.git
```

## Presequisites
1. IDE of choice (I recommend VS Code)
1. Node.js
1. Run the following command after cloning the repo
    1. npm i

## Running the project
`npm start`

This command will run the dev server, it will compile the project and watch the files, for every change of html/js/css file it will reload the page so you will be able to the results. 

## Workshop explanation
In this workshop we will be building a live (remotely updated) page that will display asteroids within the colosest proximity to earth for a day of choice.

The UI should be very simple and the is no assumption of how good it should look.

### UI features
1. User must be able to choose start and end date as search criteria.
1. Should be able to see a table with asteroids for current date.
1. User should be able to sort asteroids by size or proximity to earth.
1. User should be able to favourite asteroids and export them in a json inside a `textarea` element

## Workshop stack
1. Typescript
1. Vanila DOM code without any framework (like Andular, React).
