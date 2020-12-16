# agile-screening
Screening task

## Setup
Run the following commands to run project

```bash
$ docker-compose up
```

To open server terminal
```bash
$ docker-compose exec nodejs-server bash
```

To populate database in terminal
```bash
$ node ./fixtures.js
```

To run lint an unit test
```bash
$ docker-compose exec vue-ui bash
$ ./node_modules/.bin/nps lint
$ ./node_modules/.bin/nps test
```