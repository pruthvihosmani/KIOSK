import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { MongoClient } from 'mongodb';

const uri = 'mongodb://localhost:27017/';
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function connectToDB() {
  try {
    await client.connect();
    console.log('Connected to local MongoDB');

    // Now that you're connected, you can perform database operations here
    // For example, you can retrieve data and pass it as props to your App component

    const db = client.db('RBOSCH');
    const collection = db.collection('PUMPNUMBERS');
    const data = await collection.find({}).toArray();

    // Render your App component with the retrieved data
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
      <React.StrictMode>
        <App data={data} />
      </React.StrictMode>
    );
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  } finally {
    // Close the connection when done
    // await client.close();
  }
}

connectToDB();

reportWebVitals();
