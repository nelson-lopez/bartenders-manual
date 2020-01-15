# Bartenders Manual

[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=nelson-lopez_bartenders-manual&metric=alert_status)](https://sonarcloud.io/dashboard?id=nelson-lopez_bartenders-manual)

This is a tool for browsing a catalog of drinks based off of a customers preference in style of cocktail.

## Project Structure

This application follows the usual MVC structure, you can expect all model/controller configurations to live inside the server folder built with the [Nest.js](https://nestjs.com/) framework. The view is a [React.js](https://reactjs.org/) app living inside the client folder.

## Motivation

This idea was made with a constant need for reference as a cocktail enthusiast and former bartender to help remember drinks based off their respective families. The goal is to transition this into a React-Native app once the current App is fully fleshed out.

## Please Note

This project is currently undergoing several changes to both architecture and build. Several features might not be fully available until further releases.

## Running the Project

### Pre-requisites

1. [Docker](https://docs.docker.com/v17.09/engine/installation/)

### Installation

1. `git clone https://github.com/nelson-lopez/bartenders-manual`
2. `cd bartenders-manual`
3. `docker-compose up`
4. In an alternate terminal cd into bartenders-manual/client 
5. `yarn install`
6. `yarn start`


#### PGAdmin4

1. `open localhost:5050`
2. `credentials for PGAdmin log in: email - "dev-test@gmail.com" password - "password"`
3. `database credentials: database name: "db" username - "postgres" password - "postgres"`

#### Endpoints for API

All REST endpoints should be documented via Swagger at `localhost:3000/api` once the container is up and running.

## Contributing

Do you have _any_ suggestions? Did I miss out on something you absolutely think is **needed**? Well then [open an issue](https://github.com/nelson-lopez/bartenders-manual/issues), or better yet, [a pull request](https://github.com/nelson-lopez/bartenders-manual/pulls)! I'll be happy to look over any topics and try to help figure out how to test them or to merge any PRs that add to the value of the repository.

## Change log

The change log can be found on the [Releases page](https://github.com/nelson-lopez/bartenders-manual/releases).

## Authors and license

[Nelson Lopez](https://nelson-lopez.now.sh/).

MIT License, see the included [License.md](LICENSE) file.
