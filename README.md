# contact list

A simple contact list web app

---
## Requirement
1. The application will show a list of contacts retrieved from
http://jsonplaceholder.typicode.com/users
2. When you click on a contact you will be presented with their business card.
e.g. Something that looks very similar to this
3. Implement a basic search capability.
4. Use a build system of your choosing.
5. Use a template system of your choosing.
6. Create a separate ‘admin’ section that shows some simple reports:
  - How many contacts are there that start with each letter of the alphabet.
7. Additional requirements:
  - Responsive nature, works on various screen sizes.
  - ‘Busy’ indication. I.E. When loading the list
  - Sorting options added to list

---
## Getting started
### Tech Stack
This application is based on the following tools/libraries:
- UI Render: **React/Redux, SASS, Material UI**.
- Bundler: **Webpack**.
- Lint check: **ESlint, eslint-config-airbnb**.
- Web Server: **Express**.

### Setup
1. Clone the project from Git repo.
2. Make sure you have node installed (install Node.js LTS v6.X.X, NPM 3.X).
3. Switch to top level directory.
4. `npm install` (Install necessary npm packages).

---
## Development Mode:

### Run dev mode
Dev mode enables [webpack-dev-middleware](https://webpack.js.org/guides/development/#using-webpack-dev-middleware), will cause `Webpack` to compile files in-memory - code changes are saved and updated when refreshing page in browser.

1. Switch to top level directory.
2. `npm run start:dev` to start web server.
3. Go to browser and hit http://localhost:3000/contacts to launch.


#### Static Analysis (Eslint)
All projects are covered with `eslint` rules to ESS standard in `eslint-config-airbnb`, [details](https://github.com/airbnb/javascript)

Run `npm run check:lint` to do the lint check.

---
## Production Mode:

### Run prod mode
1. Switch to top level directory.
2. Run `npm run build` (to pack web files via Webpack and convert JS into ES5 via Babel).
3. Run `npm start` (to start web server in prod mode).
4. Go to browser and hit http://localhost:3000/contacts to launch.
