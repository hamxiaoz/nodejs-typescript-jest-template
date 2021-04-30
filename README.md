# nodejs-typescript-jest-template

Working Node.js + TypeScript + Jest (unit test) + Express app

## Tech Stack

Code:
- Language: [TypeScript](https://www.typescriptlang.org/), Node.js
- App: express.js
- Data Validation: [express-validator](https://express-validator.github.io/docs/)
- Database: PostgreSQL
- Configuration: .env
- Secrets: Cloud Secret Manager

Development:
- Source control: Git
- Version control: [Git flow](https://nvie.com/posts/a-successful-git-branching-model/)
- IDE: VSCode (see below)
- Formatting: prettier
- Container: docker + docker compose

## Prerequisites

- [Docker](https://docs.docker.com/install/)
- Install node.js with [nvm](https://github.com/creationix/nvm)
- Use [node 14](https://nodejs.org/en/about/releases/) (current node LTS version)
- Use npm, not yarn

## 🚀 Quick start

- `npm i`
- `npm local` run in local

Other scripts:
- `npm test` will run all the tests in the test folder or files with `xxx.test.ts`
- `npm build` build for production
- `npm start` run in production

## Coding Style guide

- TypeScript style guide is driven by eslint rules in this project
- Run `npx typesync` to install missing TypeScript typings for dependencies
- [AirBnB JavaScript Style Guide](https://github.com/airbnb/javascript)
  - naming conventions for variables and methods
  - comments
  - etc

## Docker

Production:
- The app is going to be run in docker in production env.

Local Development:
- For local development, there is a docker-compose file to run local database and local redis (when it's necessary)
  - `docker-compose up` run local db at port 54321 and local redis. Local DB password: 123PWD
- Alternatively, we can connect to cloud resources from dev env.

## TODO

- [ ] ORM
- [ ] logger
- [ ] Swagger
- [ ] Auth