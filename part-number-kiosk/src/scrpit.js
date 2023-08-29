const MongoClient = require('mongodb').MongoClient;

// Replace 'your-local-uri' with the connection string to your local MongoDB instance
const uri = 'mongodb://localhost:27017/RBOSCH.PUMPNUMBERS';

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function connectToDB() {
  try {
    await client.connect();
    console.log('Connected to MongoDB Compass');

    // Perform database operations here

  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  } finally {
    // Close the connection when done
    // await client.close();
  }
}

connectToDB();
