const fs = require('fs');
const path = require('path');
const { MongoClient } = require('mongodb');
require('dotenv').config({ path: '.env.local' });

const uri = process.env.MONGODB_URI;
if (!uri) {
  console.error("MONGODB_URI is not set.");
  process.exit(1);
}

const client = new MongoClient(uri);

async function migrate() {
  try {
    await client.connect();
    const db = client.db('sellworth');

    // Migrate properties
    const propertiesPath = path.join(process.cwd(), 'src', 'data', 'experimental.json');
    if (fs.existsSync(propertiesPath)) {
      const properties = JSON.parse(fs.readFileSync(propertiesPath, 'utf8'));
      if (properties.length > 0) {
        // Clear existing to avoid duplicates in this one-off migration
        await db.collection('properties').deleteMany({});
        await db.collection('properties').insertMany(properties);
        console.log(`Migrated ${properties.length} properties.`);
      }
    }

    // Migrate collections
    const collectionsPath = path.join(process.cwd(), 'src', 'data', 'collections.json');
    if (fs.existsSync(collectionsPath)) {
      const collections = JSON.parse(fs.readFileSync(collectionsPath, 'utf8'));
      if (collections.length > 0) {
        await db.collection('collections').deleteMany({});
        await db.collection('collections').insertMany(collections);
        console.log(`Migrated ${collections.length} collections.`);
      }
    }

    console.log("Migration complete!");
  } catch (err) {
    console.error("Migration failed", err);
  } finally {
    await client.close();
  }
}

migrate();
