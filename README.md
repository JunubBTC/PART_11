# Full Stack open CI/CD

This repository is used for the CI/CD module of the Full Stack Open course

## Commands

Start by running `npm install` inside the project folder

`npm start` to run the webpack dev server
`npm test` to run tests
`npm run eslint` to run eslint
`npm run build` to make a production build
`npm run start-prod` to run your production build

## Deployment

This project includes a Render Blueprint in `render.yaml`. Create a Render web
service from the Blueprint, then configure its Deploy Hook as the GitHub
repository secret `RENDER_DEPLOY_HOOK`. Pushes to `main` will trigger a Render
deployment after linting, tests, the production build, and end-to-end tests
pass.

The deployed service exposes these endpoints:

- `/health` returns `ok` for deployment health checks
- `/version` returns the current application version

Deployed application: add the public Render URL here after creating the service.
