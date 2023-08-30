// const uri = "mongodb+srv://user69:pERBQ4tLPABMNr3w@bosch.pma9lbt.mongodb.net/?retryWrites=true&w=majority";
const fs = require('fs');
const csv = require('csv-parser');
const { MongoClient } = require('mongodb');

const uri = "mongodb+srv://user69:pERBQ4tLPABMNr3w@bosch.pma9lbt.mongodb.net/?retryWrites=true&w=majority";

async function connectToDatabase() {
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

  try {
    await client.connect();
    console.log('Connected to MongoDB');

    const db = client.db('Ganeshji');
    const collection = db.collection('Bosch');

    const rows = [];

    // Read CSV file and populate the rows array
    fs.createReadStream('/Users/pruthvihosmani/Desktop/kiosk/KIOSK/part-number-kiosk/src/Part List line 5.csv')
      .pipe(csv())
      .on('data', (row) => {
        rows.push(row);
      })
      .on('end', async () => {
        try {
          // Insert all rows into the collection
          const insertResult = await collection.insertMany(rows);
          console.log('Documents inserted:', insertResult.insertedCount);
        } catch (error) {
          console.error('Insertion error:', error);
        } finally {
          client.close();
          console.log('Connection closed.');
        }
      });

  } catch (err) {
    console.error('Error connecting to MongoDB:', err);
  }
}

connectToDatabase();

