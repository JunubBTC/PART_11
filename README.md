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

For an existing Render service, set these dashboard values under Settings:

- Build Command: `npm ci && npm run build`
- Start Command: `node app.js`
- Health Check Path: `/health`
- Auto-Deploy: off

The deployed service exposes these endpoints:

- `/health` returns `ok` for deployment health checks
- `/version` returns the current application version

Deployed application: add the public Render URL here after creating the service.

## Keeping `main` green

The pipeline runs for opened and updated pull requests targeting `main`. Render
deployment and release tagging run only after the pipeline succeeds on a push
to `main`. A commit message containing `#skip` skips both deployment and
tagging.

The release job uses semantic-version patch bumps and the pinned
`anothrNick/github-tag-action` commit. The repository `GITHUB_TOKEN` must have
read and write access to contents for tags to be created.

Protect `main` in the GitHub repository settings by requiring pull requests and
the `simple-deployment-pipeline` status check before merging. Also enable the
require-branches-to-be-up-to-date option so checks run against the latest
`main` before a merge.
