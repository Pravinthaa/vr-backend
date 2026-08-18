
const mongoose = require('mongoose');


const categorySchema = new mongoose.Schema(
  {
    id: {
      
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    number: { type: String, required: true, trim: true }, 
    name: { type: String, required: true, trim: true },
    tagline: { type: String, required: true, trim: true },
    description: { type: String, required: true, trim: true },
    count: { type: String, default: '0' }, 
    icon: { type: String, trim: true }, 
  },
  {
    timestamps: true,
    collection: 'zone2_categories',
  }
);


const projectSchema = new mongoose.Schema(
  {
    categoryId: {
      
      type: String,
      required: true,
      trim: true,
    },
    slug: {
      
      type: String,
      required: true,
      trim: true,
    },
    name: { type: String, required: true, trim: true },
    year: { type: String, trim: true },
    tags: { type: [String], default: [] },
    shortDesc: { type: String, trim: true },
    problemStatement: { type: String, required: true },
    solutionOverview: { type: String, required: true },
    techStack: { type: [String], default: [] },
  },
  {
    timestamps: true,
    collection: 'zone2_projects',
  }
);


projectSchema.index({ categoryId: 1, slug: 1 }, { unique: true });


const secretarySchema = new mongoose.Schema(
  {
    categoryId: {
      
      type: String,
      required: true,
      default: 'secretaries',
      trim: true,
    },
    slug: {
      
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    name: { type: String, required: true, trim: true },
    club: { type: String, required: true, trim: true },
    class: { type: String, trim: true }, 
    position: { type: String, required: true, trim: true },
    year: { type: String, trim: true }, 
  },
  {
    timestamps: true,
    collection: 'zone2_secretaries',
  }
);


const achievementSchema = new mongoose.Schema(
  {
    categoryId: {
      
      type: String,
      required: true,
      default: 'achievements',
      trim: true,
    },
    slug: {
      
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    title: { type: String, required: true, trim: true },
    description: { type: String, required: true, trim: true },
    name: { type: String, required: true, trim: true }, 
    rollNo: { type: String, required: true, trim: true },
    class: { type: String, required: true, trim: true }, 
  },
  {
    timestamps: true,
    collection: 'zone2_achievements',
  }
);

const Category = mongoose.model('Zone2Category', categorySchema);
const Project = mongoose.model('Zone2Project', projectSchema);
const Secretary = mongoose.model('Zone2Secretary', secretarySchema);
const Achievement = mongoose.model('Zone2Achievement', achievementSchema);

module.exports = { Category, Project, Secretary, Achievement };
