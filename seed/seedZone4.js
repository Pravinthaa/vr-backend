require('dotenv').config();
const mongoose = require('mongoose');
const FacultyProfile = require('../models/zone4');
const facultySeedData = require('./facultySeedData');

async function seed() {
  const uri = process.env.MONGO_URI;
  if (!uri) {
    throw new Error('MONGO_URI is not set. Add it to your .env file.');
  }

  await mongoose.connect(uri);
  console.log('Connected for seeding');

  await FacultyProfile.deleteMany({});
  console.log('Cleared existing faculty collection');

  await FacultyProfile.insertMany(facultySeedData);
  console.log(`Inserted ${facultySeedData.length} faculty profiles`);

  await mongoose.disconnect();
  console.log('Done');
}

seed().catch((err) => {
  console.error('Seed failed:', err);
  process.exit(1);
});
