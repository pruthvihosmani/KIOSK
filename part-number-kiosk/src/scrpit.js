const { MongoClient } = require('mongodb');
const XLSX = require('xlsx');

const uri = "mongodb+srv://hosamanipruthvi:<password>@cluster0.kwengbl.mongodb.net/test?retryWrites=true&w=majority";

async function run() {
  const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  try {
    // Connect to MongoDB
    await client.connect();

    const database = client.db("your-database"); // Replace with your database name
    const collection = database.collection("Cluster0"); // Replace with your collection name

    // Read Excel data
    const workbook = XLSX.readFile('/Users/pruthvihosmani/Desktop/kiosk/KIOSK/part-number-kiosk/src/Part List line 5.xlsx');
    const sheetName = workbook.SheetNames[0];
    const excelData = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);

    // Insert data into MongoDB
    for (const data of excelData) {
      const result = await collection.insertOne(data);
      console.log(`Inserted data with ID: ${result.insertedId}`);
    }
  } catch (error) {
    console.error('Error:', error);
  } finally {
    // Close the connection
    await client.close();
  }
}

run().catch(console.dir);
