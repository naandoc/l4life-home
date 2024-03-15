const { MongoClient, ServerApiVersion } = require("mongodb");
const uri =
  "mongodb+srv://maicundog8080:lS8tl59KDCUa41C7@f4life-moradia.apn9aej.mongodb.net/?retryWrites=true&w=majority&appName=f4life-moradia";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);
