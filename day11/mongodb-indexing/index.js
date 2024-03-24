// Connect to MongoDB
const { MongoClient } = require("mongodb");
const uri = "mongodb+srv://harshalg:jIUmTYRS86P0aD08@app.wen0ngb.mongodb.net";

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function main() {
  try {
    await client.connect();

    const db = client.db("mydatabase");
    const collection = db.collection("mycollection");

    // Inserting documents into the collection
    await collection.insertMany([
      { name: "Alice", age: 30, location: "New York" },
      { name: "Bob", age: 25, location: "Los Angeles" },
      { name: "Charlie", age: 35, location: "Chicago" },
      { name: "David", age: 28, location: "San Francisco" },
      { name: "Eve", age: 40, location: "Seattle" },
      { name: "Frank", age: 22, location: "Boston" },
      { name: "Grace", age: 33, location: "Denver" },
      { name: "Hannah", age: 27, location: "Austin" },
      { name: "Isaac", age: 31, location: "Miami" },
      { name: "Jack", age: 29, location: "Atlanta" },
    ]);

    // Creating compound index
    await collection.createIndex({ age: 1, location: 1 });

    // Query using compound index
    const compoundIndexQuery = { age: { $gt: 25 }, location: "New York" };
    const compoundIndexCursor = collection.find(compoundIndexQuery);
    const compoundIndexExplain = await compoundIndexCursor.explain();
    console.log("Query using compound index:");
    console.log(compoundIndexExplain);

    // Creating single field index
    await collection.createIndex({ name: 1 });

    // Query using single field index
    const singleFieldIndexQuery = { name: "Bob" };
    const singleFieldIndexCursor = collection.find(singleFieldIndexQuery);
    const singleFieldIndexExplain = await singleFieldIndexCursor.explain();
    console.log("Query using single field index:");
    console.log(singleFieldIndexExplain);

    // Dropping single field index and creating multi-key index on an array field
    await collection.dropIndex("name_1");
    await collection.createIndex({ hobbies: 1 });

    // Query using multi-key index
    const multiKeyIndexQuery = { hobbies: "reading" };
    const multiKeyIndexCursor = collection.find(multiKeyIndexQuery);
    const multiKeyIndexExplain = await multiKeyIndexCursor.explain();
    console.log("Query using multi-key index:");
    console.log(multiKeyIndexExplain);
  } finally {
    await client.close();
  }
}

main().catch(console.error);
