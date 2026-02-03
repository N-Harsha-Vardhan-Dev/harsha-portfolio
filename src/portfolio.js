/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Harsha Vardhan",
  title: "Hi all, I'm Harsha",
  subTitle: emoji(
    "Backend & Machine Learning Engineer 🚀  focused on building scalable APIs, data driven systems and applied ML solutions."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1Dp4Z3o03JbEfR0Iuy9w0QtuCDZlfrr3S/view?usp=drive_link", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/N-Harsha-Vardhan-Dev",
  linkedin: "https://www.linkedin.com/in/harsha-vardhan-nandineni-82b51b280/",
  gmail: "harsha.nandineni@gmail.com",
  gitlab: "https://gitlab.com/harshathemonsta-group",
  // facebook: "https://www.facebook.com/profile.php?id=100040439077332",
  // medium: "https://medium.com/@harsha.nandineni",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle:
    "Backend engineering and applied machine learning with a research-driven approach",
  skills: [
    emoji(
      "⚡ Strong Python programming foundation with experience in clean and maintainable code"
    ),
    emoji(
      "⚡ Backend engineering using FastAPI, REST APIs, authentication, and database systems (SQL and NoSQL)"
    ),
    emoji(
      "⚡ Applied machine learning and AI with focus on NLP, LLMs, and data-driven solutions"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {skillName: "Python", fontAwesomeClassname: "fab fa-python"},
    {
      skillName: "Data Structures & Algorithms",
      fontAwesomeClassname: "fas fa-code"
    },
    {skillName: "FastAPI", fontAwesomeClassname: "fas fa-server"},
    {skillName: "Machine Learning", fontAwesomeClassname: "fas fa-brain"},
    {skillName: "Deep Learning", fontAwesomeClassname: "fas fa-network-wired"},
    {skillName: "PyTorch", fontAwesomeClassname: "fas fa-fire"},
    {skillName: "Hugging Face", fontAwesomeClassname: "fas fa-robot"},
    {skillName: "SQL", fontAwesomeClassname: "fas fa-database"},
    {skillName: "MongoDB", fontAwesomeClassname: "fas fa-leaf"},
    {skillName: "Git & Github", fontAwesomeClassname: "fab fa-git-alt"}
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName:
        "Rajiv Gandhi University of Knowledge Technologies – Idupulapaya",
      logo: require("./assets/images/rguLogo.png"),
      subHeader: "B.Tech in Computer Science & Engineering",
      duration: "2022 – 2026",
      desc: "Focused on backend systems, machine learning, and data science.",
      descBullets: [
        "CGPA: 9.25",
        "Relevant coursework: Machine Learning, DBMS, Operating Systems, Data Structures, Software Engineering"
      ]
    },
    {
      schoolName:
        "Rajiv Gandhi University of Knowledge Technologies – Idupulapaya",
      logo: require("./assets/images/rguLogo.png"),
      subHeader: "Pre-University Course (PUC)",
      duration: "2020 – 2022",
      descBullets: ["CGPA: 9.9"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {Stack: "Python Programming", progressPercentage: "85%"}, //Insert stack or technology you have experience in
    {Stack: "Backend Engineering", progressPercentage: "80%"}, //Insert relative proficiency in percentage
    {Stack: "Machine Learning & AI", progressPercentage: "75%"}
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Backend Developer Intern",
      company: "Learn Square Technologies",
      date: "May 2025 - July 2025",
      companylogo: require("./assets/images/learnSquareLogo.png"),
      desc: "Worked on backend APIs and data workflows for a delivery tracking system.",
      descBullets: [
        "Developed REST APIs using FastAPI with role-based authentication",
        "Worked with MongoDB for order tracking and complaint management",
        "Collaborated with cross-functional teams during development"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "AI, ML, and Backend Systems",
  projects: [
    {
      projectName: "AI-Powered HR Chatbot (RAG)",
      image: require("./assets/images/ragLogo.webp"),
      projectDesc:
        "Built a full-stack RAG chatbot using FastAPI and Streamlit to answer queries from private PDF knowledge bases using semantic search and LLMs.",
      footerLink: [{name: "GitHub", url: ""}]
    },
    {
      projectName: "JARVIS – Multimodal Desktop Assistant",
      image: require("./assets/images/jarvisLogo.webp"),
      projectDesc:
        "Developed a multimodal assistant combining voice, OCR, and LLM reasoning with vector-based memory using ChromaDB, reducing response latency by ~30%.",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/N-Harsha-Vardhan-Dev/jarvis_desktop_assistant"
        }
      ]
    },
    {
      projectName: "AI Grammar Correction Bot (Linga Bot)",
      image: require("./assets/images/grammarBotLogo.webp"),
      projectDesc:
        "Fine-tuned a T5-small model on the WikiAuto dataset for grammar correction and deployed it using FastAPI with JWT authentication.",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/N-Harsha-Vardhan-Dev/t5-small-linga"
        },
        {
          name: "Hugging Face",
          url: "https://huggingface.co/Harshathemonster/t5-small-updated"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle: "Certifications, research, and extracurricular activities",

  achievementsCards: [
    {
      title: "IBM Machine Learning Specialization",
      subtitle: "Completed professional ML specialization via Coursera",
      image: require("./assets/images/ibmLogo.png"),
      footerLink: [
        {
          name: "Certifications",
          url: "https://drive.google.com/drive/folders/1ZfvsqiPxgKXzvMa-uhrh4-E39T3Z_-vJ"
        }
      ]
    },
    {
      title: "Generative AI & ChatGPT",
      subtitle:
        "GeeksforGeeks certification on LLMs and real-world GenAI applications",
      image: require("./assets/images/gfgLogo.png"),
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/157_nQ6Hsov6oiMkmw2YI3kCz6hKcjLDw/view?usp=sharing/"
        },
        {
          name: "Website Link",
          url: "https://www.geeksforgeeks.org/certificate/26ab5a5abaa94eebf998825c6c71a945"
        }
      ]
    },
    {
      title: "Open Source Contributor – mlxtend",
      subtitle:
        "Contributed multiple pull requests including bug fixes, documentation updates, and feature improvements",
      image: require("./assets/images/github.webp"),
      imageAlt: "mlxtend Project",
      footerLink: [
        {
          name: "Pull Requests",
          url: "https://github.com/rasbt/mlxtend/pulls?q=is%3Apr+author%3AN-Harsha-Vardhan-Dev+is%3Amerged"
        },
        {name: "Repository", url: "https://github.com/rasbt/mlxtend"}
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Open to collaborations, projects, and discussions. My inbox is always open.",
  number: "+91-6300520145",
  email_address: "harsha.nandineni@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
