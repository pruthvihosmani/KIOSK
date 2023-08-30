const { MongoClient } = require('mongodb');

// MongoDB connection string
// const uri = "mongodb+srv://pruthvi:7dyQRD2cjYOGNc8L@bosch.pma9lbt.mongodb.net/?retryWrites=true&w=majority";
const uri = "mongodb+srv://pruthvi:7dyQRD2cjYOGNc8L@bosch.pma9lbt.mongodb.net/?retryWrites=true&w=majority";
async function connectToDatabase() {
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

  try {
    await client.connect();
    console.log('Connected to MongoDB');

    // Now you can perform database operations using the 'client'
    const db = client.db('GANESHJI'); // Replace 'mydatabase' with your database name
    const collection = db.collection('Bosch'); // Replace 'mycollection' with your collection name

    // Perform database operations here
    const result = await collection.insertOne({ name: 'John', age: 30 });
    console.log('Document inserted:', result.insertedId);

    const documents = await collection.find({}).toArray();
    console.log('Documents:', documents);

  } catch (err) {
    console.error('Error connecting to MongoDB:', err);
  } finally {
    // Always remember to close the connection
    await client.close();
    console.log('Connection closed.');
  }
}

connectToDatabase();
