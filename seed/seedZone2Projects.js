
require('dotenv').config();
const mongoose = require('mongoose');
const { Project } = require('../models/zone2');
const zone2ProjectsSeedData = require('./zone2ProjectsSeedData');

async function seed() {
  const uri = process.env.MONGO_URI;
  if (!uri) {
    throw new Error('MONGO_URI is not set. Add it to your .env file.');
  }

  await mongoose.connect(uri);
  console.log('Connected for seeding');

  
  await Project.deleteMany({ categoryId: 'projects' });
  console.log("Cleared existing 'projects' category entries");

  await Project.insertMany(zone2ProjectsSeedData);
  console.log(`Inserted ${zone2ProjectsSeedData.length} projects`);

  await mongoose.disconnect();
  console.log('Done');
}

seed().catch((err) => {
  console.error('Seed failed:', err);
  process.exit(1);
});
