const express = require('express');
const path = require('path');
const randomId = require('random-id');
const app = express(),
      bodyParser = require("body-parser");
      port = 3080;
const Promise = require('bluebird');
const AppDAO = require('./dao/AppDao');
const PrincipleRepository = require('./dao/PrincipleRepository');
const ValueRepository = require('./dao/ValueRepository');

// Create DB
const dao = new AppDAO('./database.sqlite3')
const valueRepo = new ValueRepository(dao)
const principleRepo = new PrincipleRepository(dao)
valueRepo.createTable()
principleRepo.createTable()

// place holder for the data
const values = [];

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../source/dist')));

// Get all values
app.get('/api/values', (req, res) => {
  return new Promise((resolve, reject) => {
    valueRepo.getAll().then((rows, err) => {
      if (err) {
        console.log('Error getting values')
        console.log(err)
        reject(err)
      } else {
        res.json(rows)
      }
    })
  })
});

// Create new value
app.post('/api/value', (req, res) => {
  const value = req.body.value;
  return new Promise((resolve, reject) => {
    valueRepo.create(value).then((value, err) => {
      if (err) {
        console.log('Error creating value')
        console.log(err)
        reject(err)
      } else {
        res.json(value)
      }
    })
  })
});

// Delete a value
app.delete('/api/value/:id', (req, res) => {
  const id = req.params.id;
  return new Promise((resolve, reject) => {
    valueRepo.delete(id).then((value, err) => {
      if (err) {
        console.log('Error deleting value')
        console.log(err)
        reject(err)
      } else {
        res.json(value)
      }
    })
  })
});

// Upate a value
app.put('/api/value/:id', (req, res) => {
  const value = {
    id: req.params.id,
    info: req.body.value
  }
  return new Promise((resolve, reject) => {
    valueRepo.update(value).then((value, err) => {
      if (err) {
        console.log('Error creating value')
        console.log(err)
        reject(err)
      } else {
        res.json(value)
      }
    })
  })
});

// Get all principles
app.get('/api/principles', (req, res) => {
  return new Promise((resolve, reject) => {
    principleRepo.getAll().then((rows, err) => {
      if (err) {
        console.log('Error getting principles')
        console.log(err)
        reject(err)
      } else {
        res.json(rows)
      }
    })
  })
});

// Create new principle
app.post('/api/principle', (req, res) => {
  const principle = req.body.principle;
  return new Promise((resolve, reject) => {
    principleRepo.create(principle).then((principle, err) => {
      if (err) {
        console.log('Error creating principle')
        console.log(err)
        reject(err)
      } else {
        res.json(principle)
      }
    })
  })
});

// Delete a principle
app.delete('/api/principle/:id', (req, res) => {
  const id = req.params.id;
  return new Promise((resolve, reject) => {
    principleRepo.delete(id).then((principle, err) => {
      if (err) {
        console.log('Error deleting principle')
        console.log(err)
        reject(err)
      } else {
        res.json(principle)
      }
    })
  })
});

// Upate a principle
app.put('/api/principle/:id', (req, res) => {
  const principle = {
    id: req.params.id,
    info: req.body.principle
  }
  return new Promise((resolve, reject) => {
    principleRepo.update(principle).then((principle, err) => {
      if (err) {
        console.log('Error creating principle')
        console.log(err)
        reject(err)
      } else {
        res.json(principle)
      }
    })
  })
});

app.get('/', (req,res) => {
  res.sendFile(path.join(__dirname, '../source/build/index.html'));
});

app.listen(port, () => {
    console.log(`Server listening on the port::${port}`);
});