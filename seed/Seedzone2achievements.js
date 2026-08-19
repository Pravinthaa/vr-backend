require('dotenv').config();
const mongoose = require('mongoose');
const { Achievement } = require('../models/zone2');

function slugify(...parts) {
  return parts
    .filter(Boolean)
    .join('-')
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}


const people = [
  {
    name: 'Dharaneesh S L',
    rollNo: '24Z218',
    class: 'BE CSE THIRD YEAR G1',
    achievements: [
      {
        title: 'HackerRank Orchestrate 2026 – Participant',
        description:
          'Participant in the competitive programming and technical challenge at HackerRank Orchestrate 2026.',
      },
      {
        title: 'CSTF 2.0, CODISSIA – Live Technical Demos',
        description:
          'Demonstrated AI-powered computer vision applications through live technical demos (PosePerfect and CyberFit) at CSTF 2.0, CODISSIA.',
      },
      {
        title: "ECSoC'26 – Contributor",
        description: "Contributor involved in technical and collaborative activities at ECSoC'26.",
      },
      {
        title: 'Technical Member – The EYE (Cybersecurity Club)',
        description: 'Technical Member of The EYE, the cybersecurity club.',
      },
      {
        title: 'Technical Member – Google Developer Group Chennai',
        description: 'Technical Member of Google Developer Group Chennai.',
      },
      {
        title: 'Technical Member – CSE Association, PSG Tech',
        description: 'Technical Member of the CSE Association, PSG Tech.',
      },
      {
        title: 'Machine Learning Intern – SkillCraft Technology',
        description: 'Completed a Machine Learning internship at SkillCraft Technology.',
      },
      {
        title: 'Web Developer Intern – Corizo',
        description: 'Completed a Web Developer internship at Corizo.',
      },
      {
        title: 'AI/ML Intern – Edunet Foundation (AICTE)',
        description: 'Completed an AI/ML internship at Edunet Foundation (AICTE).',
      },
    ],
  },
  {
    name: 'Atul Krishnaa V',
    rollNo: '23Z311',
    class: 'BE CSE FOURTH YEAR G2',
    achievements: [
      {
        title: 'High Commendation – NUS Big Data Analytics & Deep Learning',
        description:
          'Received High Commendation in the Big Data Analytics and Deep Learning programme hosted by the National University of Singapore, emerging in the top 20% of the cohort during the period of the programme.',
      },
    ],
  },
  {
    name: 'Ebonica Saleth V',
    rollNo: '25MZ33',
    class: 'ME CSE SECOND YEAR',
    achievements: [
      {
        title: 'IEEE EMBS Newsletter Article – AI-Driven Brain-Machine Communication',
        description:
          'Contributed an article on "AI-Driven Brain-Machine Communication" to the IEEE EMBS Students Chapter Newsletter on Neuroengineering, IEEE EMBS Students Chapter, PSG College of Technology, during AY 2025–2026.',
      },
    ],
  },
  {
    name: 'Harikesava V B',
    rollNo: '24N211',
    class: 'BE CSE AIML THIRD YEAR',
    achievements: [
      {
        title: 'AI Spectrum Expo – Best Project Award',
        description: 'Winner of the Best Project Award at AI Spectrum Expo.',
      },
    ],
  },
  {
    name: 'M Harrish',
    rollNo: '25N230',
    class: 'BE CSE AIML SECOND YEAR',
    achievements: [
      {
        title: 'NIT Trichy 36-Hour National Hackathon (TCS Foundation)',
        description:
          'Selected as a participant in the 36-hour national-level hackathon at NIT Trichy, conducted by TCS Foundation.',
      },
      {
        title: 'PSG AI Consortium – Consolation Prize',
        description:
          'Secured a consolation prize at the PSG AI Consortium for the project "AI-based crowd management system".',
      },
    ],
  },
  {
    name: 'Chinnathambi',
    rollNo: '25Z312',
    class: 'BE CSE SECOND YEAR G2',
    achievements: [
      {
        title: 'ICAMM 2026 – Paper Presentation',
        description:
          'Presented a paper titled "Adaptive multi-metric predictive load management for cloud based systems using growth rate analysis and sliding window processing" at the Seventh International Conference on Applied Mathematical Models (ICAMM 2026).',
      },
      {
        title: 'Representative – Department of Mathematics',
        description: 'Representative of the Department of Mathematics.',
      },
    ],
  },
  {
    name: 'Sanjana R',
    rollNo: '25Z354',
    class: 'BE CSE SECOND YEAR G2',
    achievements: [
      {
        title: 'Bharathiyar Day Poetry Competition – 1st Place',
        description: 'Secured 1st place in the Bharathiyar Day poetry competition.',
      },
      {
        title: 'Campus Ambassador – E-Cell IIT Bombay',
        description: 'Campus Ambassador for E-Cell IIT Bombay at PSG Tech.',
      },
      {
        title: 'Githeist Competition – 1st Place',
        description: 'Won 1st place and a cash prize of Rs.1000 in the Githeist competition.',
      },
      {
        title: 'Kaviyarangam – Tamizh Thiruvizha',
        description:
          'One of 6 exclusively selected members for Kaviyarangam in Tamizh Thiruvizha at PSG Tech.',
      },
      {
        title: 'District Level Basketball – Runner-Up',
        description: 'District level basketball runner-up.',
      },
      {
        title: 'MSSC Zonals – Throwball Gold Medal',
        description: 'Gold medallist in throwball at MSSC zonals.',
      },
    ],
  },
  {
    name: 'Sahaana Mahalakshme V',
    rollNo: '24Z266',
    class: 'BE CSE THIRD YEAR G1',
    achievements: [
      {
        title: 'AI Fusion Hackathon 2026 – First Prize',
        description:
          'Secured First Prize at the AI Fusion Hackathon 2026 conducted by Thiagarajar College of Engineering, Madurai.',
      },
      {
        title: 'AI For All Ideathon 2026 – Participant',
        description: 'Participated in AI For All Ideathon 2026, conducted by NIT Trichy.',
      },
      {
        title: 'SanDisk Hackathon 2026 – Participant',
        description: 'Participated in SanDisk Hackathon 2026, conducted by PSG iTech.',
      },
      {
        title: 'Google Solution Challenge 2026 – Prototype Recognition',
        description:
          'Recognized for successful prototype submission in Google Solution Challenge 2026: Build with AI.',
      },
    ],
  },
  {
    name: 'Dhana Sree R',
    rollNo: '25MZ02',
    class: 'ME CSE SECOND YEAR',
    achievements: [
      {
        title: 'GATE Qualified',
        description: 'Qualified GATE.',
      },
    ],
  },
  {
    name: 'Rechivarthini S K',
    rollNo: '23Z252',
    class: 'BE CSE FOURTH YEAR G1',
    achievements: [
      {
        title: 'Infinitum 2026 – 2nd Position, AI & Emerging Trends',
        description:
          'Secured 2nd position in the AI & Emerging Trends event at Infinitum 2026, a national-level technical symposium.',
      },
      {
        title: 'TNWISE 2025 Hackathon – Finalist',
        description:
          "Participated and reached the final round in TANCAM's Hackathon for Tamil Nadu Women in Science and Engineering (TNWISE 2025) on the theme Smart Urban Development, conducted by TANCAM in association with Sona College of Technology.",
      },
      {
        title: 'Workshop Convenor – Srishti 2K25',
        description: 'Convened a workshop as part of Srishti 2K25, a national-level technical symposium.',
      },
      {
        title: 'Website Vertical – Srishti 2K25',
        description:
          'Served as a member of the Website Vertical, contributing to the development and management of the Srishti 2K25 website.',
      },
      {
        title: 'Class Representative – 6th Semester',
        description: 'Served as Class Representative for the 6th semester.',
      },
    ],
  },
  {
    name: 'Jeevan Mishael P',
    rollNo: '25Z332',
    class: 'BE CSE SECOND YEAR G2',
    achievements: [
      {
        title: 'Intracollege Chess Competition 2026 – 18th Place',
        description: 'Secured 18th place in the Intracollege Chess Competition 2026.',
      },
      {
        title: 'CodenVibe (CSEA) – 1st Place',
        description: 'Won first place in the CodenVibe event conducted by CSEA.',
      },
    ],
  },
  {
    name: 'Harish Karthic R',
    rollNo: '23Z324',
    class: 'BE CSE FOURTH YEAR G2',
    achievements: [
      {
        title: 'Samsung PRISM Web Agent Hackathon 2025-2026 – Winner',
        description: 'Winner of the Samsung PRISM Web Agent Hackathon 2025-2026.',
      },
    ]
  },
  {
    name: 'Rahul R',
    rollNo: '24Z465',
    class: 'BE CSE FOURTH YEAR G2',
    achievements: [
      {
        title: 'Samsung PRISM Hackathon (National) – Winner',
        description:
          'Participated in the Agentic AI theme and secured 1st Place at the national-level Samsung PRISM Hackathon, winning a ₹30,000 cash prize.',
      },
    ],
  },
  {
    name: 'Shakthi Abinaya Vignesh',
    rollNo: '24N254',
    class: 'BE CSE AIML THIRD YEAR',
    achievements: [
      {
        title: 'MetaxScaler Hackathon – Finalist',
        description:
          'Finalist at the MetaxScaler Hackathon in collaboration with PyTorch and Hugging Face, held at Scaler School of Technology, Bangalore.',
      },
    ],
  },
  {
    name: 'RV Sakthi Adarsha',
    rollNo: '25Z255',
    class: 'BE CSE SECOND YEAR G1',
    achievements: [
      {
        title: 'Hackathon & College Event Participation',
        description: 'Participated in several hackathons and actively participated in college events.',
      },
    ],
  },
];

// ---------------------------------------------------------------------------
// Flatten into Achievement documents, matching Zone2Achievement exactly
// exactly (categoryId, slug, title, description, name, rollNo, class /
// categoryId, slug, name, club, class, position, year)
// ---------------------------------------------------------------------------
const achievementDocs = people.flatMap((p) =>
  p.achievements.map((a, idx) => ({
    categoryId: 'achievements',
    slug: slugify(p.name, p.rollNo, p.achievements.length > 1 ? idx + 1 : ''),
    title: a.title,
    description: a.description,
    name: p.name,
    rollNo: p.rollNo,
    class: p.class,
  }))
);


async function seed() {
  const uri = process.env.MONGO_URI;
  if (!uri) {
    throw new Error('MONGO_URI is not set. Add it to your .env file.');
  }

  try {
    await mongoose.connect(uri);
    console.log('Connected to MongoDB');

    let achievementsUpserted = 0;
    for (const doc of achievementDocs) {
      await Achievement.findOneAndUpdate(
        { slug: doc.slug },
        { $set: doc },
        { upsert: true, new: true, setDefaultsOnInsert: true }
      );
      achievementsUpserted++;
    }


    console.log(`Seeded/updated ${achievementsUpserted} achievement documents.`);
  } catch (err) {
    console.error('Seed failed:', err);
    process.exitCode = 1;
  } finally {
    await mongoose.disconnect();
  }
}

seed();