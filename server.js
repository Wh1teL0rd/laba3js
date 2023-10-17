const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Mock database
const zoos = [];

class Zoo {
  constructor(id, name, annualVisitors, numAnimals) {
    this.id = id;
    this.name = name;
    this.annualVisitors = annualVisitors;
    this.numAnimals = numAnimals;
  }
}

app.use(express.static(__dirname));

// Обробник для основної сторінки
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/zoos', (req, res) => {
  res.json(zoos);
});

app.post('/zoos', (req, res) => {
  const data = req.body;
  const id = zoos.length + 1;
  const newZoo = new Zoo(id, data.name, data.annual_visitors, data.num_animals);
  zoos.push(newZoo);
  res.status(201).json(newZoo);
});

app.get('/zoos/:zoo_id', (req, res) => {
  const zooId = parseInt(req.params.zoo_id);
  const zoo = zoos.find(z => z.id === zooId);
  if (zoo) {
    res.json(zoo);
  } else {
    res.status(404).json({ error: 'Zoo not found' });
  }
});

app.put('/zoos/:zoo_id', (req, res) => {
  const zooId = parseInt(req.params.zoo_id);
  const data = req.body;
  const zoo = zoos.find(z => z.id === zooId);
  if (zoo) {
    zoo.name = data.name;
    zoo.annualVisitors = data.annual_visitors;
    zoo.numAnimals = data.num_animals;
    res.json(zoo);
  } else {
    res.status(404).json({ error: 'Zoo not found' });
  }
});

app.delete('/zoos/:zoo_id', (req, res) => {
  const zooId = parseInt(req.params.zoo_id);
  const index = zoos.findIndex(z => z.id === zooId);
  if (index !== -1) {
    zoos.splice(index, 1);
    res.json({ message: 'Zoo deleted' });
  } else {
    res.status(404).json({ error: 'Zoo not found' });
  }
});

const port = 5600;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
