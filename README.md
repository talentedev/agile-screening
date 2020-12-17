# Agile Screening Task

## Setup

### Prerequisites

- Install the latest version of [Docker](https://docs.docker.com/install/) and [Docker Compose](https://docs.docker.com/compose/install/).
On MacOS and Windows, both are bundled inside the Docker Desktop application.
- **Using a Linux operating system like Ubuntu is strongly recommended.**
- On Windows, make sure to use a *bash-like* terminal.
- Clone the project using `git clone https://github.com/talentedev/agile-screening.git` inside
your working directory.

### First steps

Run the following commands to run project

```bash
$ docker-compose up
```

### Services

* `vue-ui` - http://localhost:8080 - The vuejs front application
* `nodejs-server` - http://node-api:3080 - The node api where all the logic lives with SQLite

### Available commands

Open a terminal in the `vue-ui` service
```bash
$ docker-compose exec vue-ui bash
```

Open a terminal in the `nodejs-server` service
```bash
$ docker-compose exec nodejs-server bash
```

Populate a database in `nodejs-server` terminal
```bash
$ node ./fixtures.js
```

To run lint and unit test in `vue-ui` terminal
```bash
$ ./node_modules/.bin/nps lint
$ ./node_modules/.bin/nps test
```

## Screen Record

[![Watch the video]](https://drive.google.com/file/d/1YLZHubEtLc-FR8qqgkZAZAGSVCEyQ2Mm/view?usp=sharing)