const { MongoClient } = require('mongodb');
require('dotenv').config({ path: '.env.local' });

const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    const db = client.db('sellworth');
    const result = await db.collection('collections').deleteMany({
      id: { $in: ["bptp-gaia-residences-sector-102", "ireo-the-corridors-sector-67a"] }
    });
    console.log(`Deleted ${result.deletedCount} items.`);
  } catch (err) {
    console.error(err);
  } finally {
    await client.close();
  }
}

run();
