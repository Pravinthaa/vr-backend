const facultySeedData = [
  {
    name: 'Dr.Arul Anand N',
    designation: 'Professor',
    description:
      '9+ years of academic experience and 12+ years in the IT industry, with extensive work in the telecommunications domain for clients including Tellabs Inc, Lucent Technologies, Bell Laboratories, and Verizon Communications. 5+ years as an entrepreneur (CEO, Evolutech Networks Pvt. Ltd) developing telecom products. Areas of interest: Embedded Systems, Internet of Things, Computer Networks, Wireless Sensor Networks, and Computer Vision.',
    photo: 'https://res.cloudinary.com/xrdqr8qu/image/upload/v1787155878/arulanand.jpg',
  },
  {
    name: 'Dr.Santhi V',
    designation: 'Professor',
    description:
      '20+ years of teaching experience and 1 year of industry experience. Areas of interest include Wireless Sensor Networks, Computer Networks, Machine Learning, Distributed Computing, and Data Analytics.',
    photo: 'PLACEHOLDER_PHOTO_URL',
  },
  {
    name: 'Dr.Kavitha C',
    designation: 'Associate Professor',
    description:
      'Received her B.E. in Computer Science and Engineering from Bharathiar University (1998), and M.E. and Ph.D. in Computer Science / Information and Communication Engineering from Anna University (2008, 2017). 17 years of teaching experience. Research interests include Machine Learning and Data Mining. Life member of ACCS and Professional Member of ACM, with around 18 publications in peer-reviewed international journals and conferences.',
    photo: 'PLACEHOLDER_PHOTO_URL',
  },
  {
    name: 'Dr.Saranya K G',
    designation: 'Associate Professor',
    description:
      '7 years of teaching experience, currently Assistant Professor (Sr. Gr.) in the CSE Department. Areas of interest include Information Retrieval, Machine Learning, and Semantic Web technology.',
    photo: 'https://res.cloudinary.com/xrdqr8qu/image/upload/v1787155888/saranya.jpg',
  },
  {
    name: 'Dr.Gopika Rani N',
    designation: 'Assistant Professor (Sl. Gr.)',
    description:
      '20+ years of teaching experience. Areas of interest include Distributed Systems and Cryptography.',
    photo: 'https://res.cloudinary.com/xrdqr8qu/image/upload/v1787155887/gopikarani.jpg',
  },
  {
    name: 'Mr.Ramesh A C',
    designation: 'Assistant Professor (Sl. Gr.)',
    description:
      'Assistant Professor since 2006, with an overarching goal of creating learning materials in Tamil for computer science courses.',
    photo: 'https://res.cloudinary.com/xrdqr8qu/image/upload/v1787155881/ramesh.jpg',
  },
  {
    name: 'Dr.Vijayalakshmi S',
    designation: 'Assistant Professor (Sl. Gr.)',
    description:
      '14 years of teaching experience. Areas of interest include Cryptography and Network Security, Blockchain, Data Mining, and Database Management Systems. Published research papers in national conferences and international journals.',
    photo: 'https://res.cloudinary.com/xrdqr8qu/image/upload/v1787155890/vijayalakshmi.jpg',
  },
  {
    name: 'Dr.Thirumahal R',
    designation: 'Assistant Professor (Sl. Gr.)',
    description:
      '28 years of teaching experience. Areas of interest include Data Integration, Database Management Systems, and Data Mining. Published research papers in national and international conferences and journals.',
    photo: 'https://res.cloudinary.com/xrdqr8qu/image/upload/v1787155881/thirumahal.jpg',
  },
  {
    name: 'Ms.Adlene Anusha J',
    designation: 'Assistant Professor (Sr. Gr.)',
    description:
      'Assistant Professor in the Department of Computer Science and Engineering since June 2016, with a B.E. and M.E. in Computer Science Engineering from Thiagarajar College of Engineering, Madurai. Holds a certificate in LaTeX and Python from IIT Bombay. Published research papers in national and international conferences and journals, with research interest in Multimodal Affective Computing.',
    photo: 'PLACEHOLDER_PHOTO_URL',
  },
  {
    name: 'Dr.Sivaranjani S',
    designation: 'Assistant Professor (Sr. Gr.)',
    description:
      'Around 15 years of teaching experience (School of Engineering, Avinashilingam University) and 2 years of industry experience. Currently an Assistant Professor in the CSE Department at PSG College of Technology. Has organized several conferences, workshops, and an AICTE-sponsored seminar. Research interests include Data Mining, Spatial Databases, and Geographic Information Science.',
    photo: 'https://res.cloudinary.com/xrdqr8qu/image/upload/v1787155877/ssr.jpg',
  },
  {
    name: 'Ms.Amsa Sree Gayathri D',
    designation: 'Assistant Professor (Sr. Gr.)',
    description: 'TODO: add description — no bio text available in the source.',
    photo: 'https://res.cloudinary.com/xrdqr8qu/image/upload/v1787155888/amsa.jpg',
  },
  {
    name: 'Ms.Abirami S K',
    designation: 'Assistant Professor',
    description:
      '5 years of teaching experience, currently an Assistant Professor in the CSE Department at PSG College of Technology. Research interests include Parallel and Distributed Systems, Privacy Preservation, Blockchain Technology, and Cloud Computing.',
    photo: 'https://res.cloudinary.com/xrdqr8qu/image/upload/v1787155885/abirami.jpg',
  },
  {
    name: 'Mr.Veerakumar S',
    designation: 'Assistant Professor',
    description:
      'Assistant Professor since January 2025, with 2 years of industrial experience and 2 years of teaching experience. Completed M.E. in Computer Science & Engineering from Amrita Vishwa Vidyapeetham and B.E. from PSG College of Technology. Areas of interest include DBMS, Data Structures, and Data Mining.',
    photo: 'PLACEHOLDER_PHOTO_URL',
  },
  {
    name: 'Ms.Umarani P',
    designation: 'Assistant Professor',
    description:
      'Assistant Professor since March 2025, with over 2 years of academic experience and more than 3 years of industrial experience. Completed M.E. in Computer Science and Engineering from Government College of Technology (First Class) and B.E. from K.S. Rangasamy College of Technology (First Class - Distinction). Areas of interest include Machine Learning and Data Analytics.',
    photo: 'https://res.cloudinary.com/xrdqr8qu/image/upload/v1787155888/umarani.jpg',
  },
  {
    name: 'Ms.Pavithra K S',
    designation: 'Assistant Professor',
    description:
      'Assistant Professor in the CSE Department with two years of academic experience. GATE-qualified, with an M.E. in Computer Science and Engineering from Coimbatore Institute of Technology (Distinction) and a B.Tech in Information Technology from Kalaignar Karunanidhi Institute of Technology (First Class). Focused on Cyber Security and fostering innovation and research among students.',
    photo: 'https://res.cloudinary.com/xrdqr8qu/image/upload/v1787155884/pavithra.jpg',
  },
  {
    name: 'Ms.Archana K',
    designation: 'Assistant Professor',
    description:
      'Assistant Professor in the CSE Department at PSG College of Technology since June 2025, with 4.5 years of teaching experience. Holds an M.E. in Software Engineering (Distinction) from PSG College of Technology and a B.E. in Computer Science and Engineering from Sri Ramakrishna Engineering College. Published research papers including two Scopus-indexed publications, and is a life member of ISTE and IAENG.',
    photo: 'https://res.cloudinary.com/xrdqr8qu/image/upload/v1787155887/archana.jpg',
  },
  {
    name: 'Mr.Roopak C M',
    designation: 'Assistant Professor',
    description:
      'Assistant Professor in the Department of Computer Science and Engineering, pursuing his Ph.D. from Anna University, Chennai. Completed his M.Tech and B.Tech in Computer Science and Engineering, with over 1 year of teaching and academic experience. His research interests include Deep Learning, Machine Learning, Explainable Artificial Intelligence (XAI), Agentic AI, Data Analytics, and Artificial Intelligence. Passionate about teaching, research, and exploring innovative AI-driven solutions to real-world problems.',
    photo: 'https://res.cloudinary.com/xrdqr8qu/image/upload/v1787155883/roopak.jpg',
  },
  {
    name: 'Ms.K. Sudha',
    designation: 'Assistant Professor',
    description:
      'Obtained her B.E. in Computer Science and Engineering from I.R.T.T., Erode, affiliated with Anna University, Chennai, and her M.E. in Computer Science and Engineering from S.R.S. College of Engineering and Technology, affiliated with Anna University. Currently pursuing her Ph.D. at PSG College of Technology, Anna University, Chennai, with over 11 years of teaching experience in various academic institutions. Research interests include Artificial Intelligence, Machine Learning, Blockchain, Data Science, and 5G Networks. Published 10 research papers in international journals and conference proceedings, including IEEE publications, and has filed 9 patents in emerging technology domains. Subject expertise: Artificial Intelligence, Cloud Computing, Database Management Systems, Operating Systems.',
    photo: 'https://res.cloudinary.com/xrdqr8qu/image/upload/v1787155879/sudha.jpg',
  },
  {
    name: 'Ms.Naga Sudha C M',
    designation: 'Assistant Professor',
    description:
      'Assistant Professor in the CSE Department at PSG College of Technology since December 2025, with three years of teaching experience. Has published book chapters and research papers in reputed journals, and completed NPTEL certifications in IoT and Blockchain.',
    photo: 'https://res.cloudinary.com/xrdqr8qu/image/upload/v1787155884/nagasudha.jpg',
  },
  {
    name: 'Dr.Jayashree L S',
    designation: 'Professor',
    description:
      'Over 25 years of teaching experience and 20+ years of research leadership in Computer Science and Engineering, with expertise in Computer Networks, Wireless Networks, IoT, Edge Computing, and Embedded Machine Learning, and a specialization in IoT-enabled smart wearable systems for healthcare. Authored 300+ publications and led several externally funded R&D initiatives, including as Principal Investigator for DST-SEED, DST-BDTD, and BIRAC-funded projects. Played a key role in establishing PSG CARES (Centre of Excellence for Assistive Technology and Rehabilitation Engineering Solutions) in 2019, taking multiple assistive devices through clinical validation and commercialization. Holds three patents and has guided six Ph.D. scholars to completion. Recipient of the INAE Innovative Project Potential Award, the ISTE National Award, and the Nokia Best Paper Award, among others.',
    photo: 'https://res.cloudinary.com/xrdqr8qu/image/upload/v1787155874/jayashree.jpg',
  },
  {
    name: 'Dr.Karpagam G R',
    designation: 'Professor',
    description:
      '25 years of experience in Computer Science and Engineering at PSG College of Technology. Areas of specialization include Database Management Systems, Data Structures and Algorithms, AI and ML, Service Oriented Architecture, Blockchain, and Security.',
    photo: 'https://res.cloudinary.com/xrdqr8qu/image/upload/f_auto,q_auto/karpagam1',
  },
  {
    name: 'Dr.Indumathi D',
    designation: 'Associate Professor',
    description:
      'Received her B.E. in Computer Science and Engineering from Bharathiar University, and M.S. (by research) and Ph.D. in Computer Science and Engineering from Anna University, Chennai. Areas of interest include Web Search Personalization, Information Retrieval, Artificial Intelligence, and Design of Algorithms.',
    photo: 'https://res.cloudinary.com/xrdqr8qu/image/upload/v1787155883/indhumathi.jpg',
  },
  {
    name: 'Dr.Sathiyapriya K',
    designation: 'Associate Professor',
    description:
      'Received her B.E. in Computer Science and Engineering from Madras University (1999), and M.E. and Ph.D. from Anna University (2009, 2017). 12 years of teaching experience. Research interests include Privacy Preserving Data Mining and Soft Computing. Life member of the Institution of Engineers (India) and Professional Member of ACM, with around 15 publications in peer-reviewed international journals and conferences.',
    photo: 'https://res.cloudinary.com/xrdqr8qu/image/upload/v1787155880/sathyapriya.jpg',
  },
  {
    name: 'Dr.Arul Jothi S',
    designation: 'Assistant Professor (Sl. Gr.)',
    description:
      'Assistant Professor (Selection Grade) in the CSE Department at PSG College of Technology, with teaching experience since 2010. Awarded Ph.D. in 2023 from Anna University, Chennai, for research on outlier detection accuracy in wireless sensor networks. Research interests include anomaly detection in wireless sensor networks, machine learning, deep learning, data analytics, Gen AI, and Edge AI. Active professional member of ACM and CSI.',
    photo: 'https://res.cloudinary.com/xrdqr8qu/image/upload/v1787155881/aruljothi.jpg',
  },
  {
    name: 'Mr.Prakash J',
    designation: 'Assistant Professor (Sr. Gr.)',
    description:
      'Assistant Professor in the CSE Department at PSG College of Technology, pursuing his Ph.D. from Anna University, Chennai. Completed his M.E. in Software Engineering and B.E. in Computer Science & Engineering, along with an internship at Infosys Limited. Over 8 years of teaching and research experience, with 20+ published research papers and book chapters. Research interests include Image Processing, Machine Learning, and Computer Vision Applications.',
    photo: 'PLACEHOLDER_PHOTO_URL',
  },
  {
    name: 'Ms.Priya G',
    designation: 'Assistant Professor',
    description:
      'Holds a B.E. and M.E. in Computer Science and Engineering and an M.B.A. with a Human Resources specialization. Joined PSG College of Technology as an Assistant Professor in June 2023, and cleared UGC NET for Assistant Professor in Computer Science and Applications in April 2023. Aspires to research in Big Data Analytics and Machine Learning.',
    photo: 'https://res.cloudinary.com/xrdqr8qu/image/upload/v1787155884/priya.jpg',
  },
  {
    name: 'Ms.Anne Merin Mathew',
    designation: 'Assistant Professor',
    description: 'TODO: add description — no bio text available in the source.',
    photo: 'PLACEHOLDER_PHOTO_URL',
  },
  {
    name: 'Dr.Suriya S',
    designation: 'Associate Professor',
    description:
      'Completed B.E. in CSE in 2008 (Anna University Rank 31, self-financing colleges) and M.E. in CSE in 2010 at PSG College of Technology as a Gold Medalist, receiving the Best Project Award and Best All Rounder Award. Awarded Ph.D. in 2015. 12 years of teaching experience, with research interests in Grid Computing, Data Mining, and Cloud Computing. Has guided one Ph.D. scholar to completion, with four more currently under supervision.',
    photo: 'PLACEHOLDER_PHOTO_URL',
  },
];

module.exports = facultySeedData;