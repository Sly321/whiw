# service-dashboard db

## requirements

- [nodejs](https://nodejs.org)
- [docker](https://www.docker.com/)
- [prisma](https://www.prisma.io) install with  `npm i -g prisma`

## commands

### `docker-compose up -d`

creates two docker conainer

- postgres database (running on [http://localhost:5432/](http://localhost:5432/))
- prismagraphql (running on [http://localhost:4466/](http://localhost:4466/))

[documentation](https://www.prisma.io/docs/prisma-server/local-prisma-setup-je3i/)

### `prisma deploy`

deploys the datamodel from the `datamodel.prisma` file into the database. after the deployment you can open [http://localhost:4466/_admin](http://localhost:4466/_admin) to manage your database entries

[documentation](https://www.prisma.io/docs/prisma-cli-and-configuration/prisma-yml-5cy7/)

### `prisma generate`

generates the type definitions and a client implementation for your current `datamodel` into `./generated`, there is current no `tsconfig.json` in this directory and no dependencies installed, so the typings are not recognized by the ide.

[documentation](https://www.prisma.io/docs/1.32/prisma-client/setup/generating-the-client-TYPESCRIPT-r3c2/)

## files

### `datamodel.prisma`

description of the database model

### `prisma.yml`

the description file for the `prisma deploy` command, consumes the `datamodel.prisma` to create a datamodel on a running `postgres` and `prisma-nexus` docker instance