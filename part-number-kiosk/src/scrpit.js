const MongoClient = require('mongodb').MongoClient;

// Use the environment variable to get the connection string
const uri = process.env.MONGODB_ATLAS_URI;

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function connectToDB() {
  try {
    await client.connect();
    console.log("Connected to MongoDB Atlas");

    // Perform database operations here

  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  } finally {
    // Close the connection when done
    // await client.close();
  }
}

connectToDB();
