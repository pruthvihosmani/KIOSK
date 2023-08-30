// const express = require('express');
// const cors = require('cors');
// const { MongoClient } = require('mongodb');

// const app = express();
// const port = 5000;

// app.use(cors());

// const uri = "mongodb+srv://user69:pERBQ4tLPABMNr3w@bosch.pma9lbt.mongodb.net/?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

// app.get('/api/part/:pumpNumber', async (req, res) => {
//   const pumpNumber = req.params.pumpNumber;

//   try {
//     await client.connect();
//     const db = client.db('Ganeshji');
//     const collection = db.collection('Bosch');
    
//     const partInfo = await collection.findOne({ pumpNumber });
//     res.json(partInfo);
//   } catch (error) {
//     console.error('Error:', error);
//     res.status(500).json({ error: 'An error occurred' });
//   }
// });

// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });
const express = require('express');
const cors = require('cors');
const { MongoClient } = require('mongodb');

const app = express();
const port = 3000;

app.use(cors());

const uri = "mongodb+srv://user69:pERBQ4tLPABMNr3w@bosch.pma9lbt.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function connectToDatabase() {
  try {
    await client.connect();
    console.log('Connected to MongoDB');
    return client;
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    throw error;
  }
}

app.get('/api/part/:pumpNumber', async (req, res) => {
  const pumpNumber = req.params.pumpNumber;

  try {
    const client = await connectToDatabase();
    const db = client.db('Ganeshji');
    const collection = db.collection('Bosch');
    
    // Search for the "Pump" string in the specified field
    const partInfo = await collection.findOne({ yourFieldContainingPump: { $regex: 'Pump:', $options: 'i' } });
    
    if (partInfo) {
      res.json(partInfo);
    } else {
      res.json({ message: 'No matching part found' });
    }
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'An error occurred' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
