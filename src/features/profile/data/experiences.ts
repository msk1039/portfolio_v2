import { Experience } from "../types/experiences";

export const EXPERIENCES: Experience[] = [
  {
    company: "GDGC PCCOE",
    companyLogo: "/images/gdgcpccoe-logo.webp",
    positions: [
      {
        id: "76ce1cbc-7a20-40a5-818c-8334bcefbd83",
        title: "Web Developer",
        year: "08.2024 - 05.2025",
        employmentType: "Club Member",
        icon: "code",
        description:
          "- Developed the official site of club(```https://www.gdgcpccoe.org/```) using Next.js and Supabase.   \n- Integrated postgresql for data user storage and retrieval.\n- Collaborated with the design team to implement UI/UX improvements.",
        skills: [
          "TypeScript",
          "Nextjs",
          "supabase",
          "MongoDB",
        ],
        expanded: true,
      },
      {
        id: "20f8bfe5-b6a3-4b0d-ac2f-6fccd50d417e",
        title: "Designer",
        year: "8.2024 — 5.2025",
        employmentType: "Club Member",
        icon: "design",
        description:
          "- Design posters and social media graphics for events.\n- Create engaging content for social media platforms.\n- Collaborate with the team to ensure brand consistency.",
        skills: [
          "Figma",
          "Canva",

        ],
        expanded: true,
      },
    ],
    // current: true,
  },




  {
    company: "Spectrum 2024",
    companyLogo: "/images/spectrumpccoe25-logo.png",
    positions: [
      {
        id: "30d3a9fb-021d-452a-9d27-83655369b4b9",
        title: "Frontend Developer",
        year: "01.2024 — 2.2024",
        employmentType: "Website team",
        icon: "code",
        description:
          " - Developed the official site of Spectrum 2024 (```https://www.spectrumpccoe25.tech/```) \n - Handeled registrations of 1500 students \n - Integrated payment gateway for registration fees",
        skills: [
          "Typescript",
          "Next.js",
          "Supabase",
          "cashfree payments",
          "Tailwind CSS",
        ],
        expanded: true,
      },
      {
        id: "7586afb2-40e8-49c4-8983-2254c9446540",
        title: "Graphic Designer",
        year: "01.2024 — 2.2024",
        employmentType: "Design team",
        icon: "design",
        description:
          "- Design posters and social media graphics for events.\n- Create design for event banners and goodies \n- Create engaging content for social media platforms.\n- Collaborate with the team to ensure brand consistency.",
        skills: ["Figma", "Canva"],
        expanded: true,
      },
    ],
    // current: true,
  },



  // {
  //   company: "Tung Tung JSC",
  //   companyLogo: "/images/companies/tungtung.webp",
  //   positions: [
  //     {
  //       id: "3e831244-8d8c-41e2-b2ce-7f3946956afd",
  //       title: "Web Developer",
  //       year: "2020 — 2022",
  //       employmentType: "Full-time",
  //       description:
  //         "- Built a scalable design system for consistency and efficiency.\n- Integrated APIs with the Backend Team to enhance functionality.",
  //       icon: "code",
  //       skills: [
  //         "React",
  //         "Redux",
  //         "Storybook",
  //         "Lerna",
  //         "Agile",
  //         "Teamwork",
  //         "Research",
  //       ],
  //     },
  //     {
  //       id: "13bd34c3-db84-4fad-8132-a6c89a42957e",
  //       title: "Mobile Developer",
  //       year: "2019 — 2020",
  //       employmentType: "Full-time",
  //       description:
  //         "- Rebuilt the app with React Native for better UX and performance.\n- Integrated [MoMo](https://momo.vn) and in-app purchases for seamless payments.\n- Optimized deployment for staging and production.\n- Published on App Store and Google Play, ensuring compliance.",
  //       icon: "code",
  //       skills: [
  //         "React Native",
  //         "Redux",
  //         "MoMo Payment API",
  //         "App Store",
  //         "Google Play Store",
  //         "Agile",
  //         "Teamwork",
  //         "Research",
  //       ],
  //       expanded: true,
  //     },
  //     {
  //       id: "73151add-7adf-4035-a237-b5803ceb5478",
  //       title: "UI/UX Designer",
  //       year: "2018 — 2019",
  //       employmentType: "Full-time",
  //       description:
  //         "- Designed a Landing Page for enterprise clients.\n- Redesigned the Online Quiz Platform for a modern look on web and mobile.\n- Redesigned the Pricing interface for individual customers.\n- Enhanced UX by improving usability, navigation, and user flow.",
  //       icon: "design",
  //       skills: ["UI/UX Design", "Sketch"],
  //       expanded: true,
  //     },
  //   ],
  // },
  // {
  //   company: "Freelance",
  //   positions: [
  //     {
  //       id: "f0becfba-057d-40db-b252-739e1654faa1",
  //       title: "Full-stack Developer",
  //       year: "2018 — 2020",
  //       employmentType: "Part-time",
  //       description:
  //         "- Built an order management website with real-time delivery tracking.\n- Developed an e-commerce site for bird's nest products.\n- Created a map to display monitoring station data.\n- Designed a customizable WordPress landing page.",
  //       icon: "code",
  //       skills: [
  //         "Laravel",
  //         "React",
  //         "Express.js",
  //         "Socket.IO",
  //         "MongoDB",
  //         "Firebase",
  //         "Docker",
  //         "NGINX",
  //       ],
  //     },
  //     {
  //       id: "0eecdfcb-028d-41f4-93e9-1269ba7eff7e",
  //       title: "Graphic & UI/UX Designer",
  //       year: "2018 — 2019",
  //       employmentType: "Part-time",
  //       description: "Designed logos, posters, ads, and UI.",
  //       icon: "design",
  //       skills: [
  //         "Creativity",
  //         "UI/UX Design",
  //         "Graphic Design",
  //         "Sketch",
  //         "Adobe Photoshop",
  //         "Adobe Illustrator",
  //       ],
  //     },
  //   ],
  // },
  // {
  //   company: "Education",
  //   positions: [
  //     {
  //       id: "c47f5903-88ae-4512-8a50-0b91b0cf99b6",
  //       title: "University of Science — VNUHCM",
  //       year: "08.2018 — present",
  //       icon: "education",
  //       description:
  //         "- Currently studying for a Bachelor's degree in Information Systems.\n- Language Proficiency: B1 English Level.\n- Achieved several awards, including:\n  - Bronze Medal — 10th Design, Manufacturing, and Application Award 2022 (organized by Ho Chi Minh City Youth Union)\n  - Second Prize — Business Startup Competition 2019 (organized by UEL-VNUHCM)",
  //       skills: [
  //         "C++",
  //         "Java",
  //         "Python",
  //         "Data Structures",
  //         "Algorithms",
  //         "Advanced Databases",
  //         "Systems Design",
  //         "Distributed Systems",
  //         "Software Engineering",
  //         "Self-learning",
  //         "Teamwork",
  //         "Presentation",
  //       ],
  //     },
  //     {
  //       id: "70131ed8-36d9-4e54-8c78-eaed18240eca",
  //       title: "Ly Tu Trong High School for the Gifted — Can Tho City",
  //       year: "08.2015 — 06.2018",
  //       icon: "school",
  //       description:
  //         "- Student of the Specialized Computer Science Program.\n- Granted direct admission to university due to achieving Third Prize at the national level.\n- [Achieved numerous awards](https://baocantho.com.vn/nguyen-chanh-dai-17-tuoi-va-19-giai-thuong-a97348.html) at city and national levels, including:\n  - [Third Prize](https://muctim.tuoitre.vn/cong-cu-ho-tro-viec-day-va-hoc-55107.htm) — National Science and Engineering Fair 2018 (ViSEF)\n  - First Prize — Science and Engineering Fair — Can Tho City 2018\n  - Creativity Award — Binh Duong Hackathon 2017\n  - Consolation Prize — National Youth and Children's Creativity Contest 2016\n  - [First Prize](https://www.youtube.com/watch?v=OYgugvjqU4A) — Youth and Children's Creativity Contest — Can Tho City 2016\n  - Third Prize — National Young Informatics Contest 2016\n- Achieved the title of Outstanding Student from Grade 10-12.\n- Developed a feature using Node.js and Pandoc to recognize multiple-choice questions from .docx files and upload them to an [online quiz platform](https://youtu.be/QjR99wdmTyo) I created.\n- Developed websites based on Laravel framework.\n- Built websites with PHP and MySQL, following the MVC architecture.",
  //       skills: [
  //         "Algorithms",
  //         "C++",
  //         "PHP",
  //         "MySQL",
  //         "Laravel",
  //         "Node.js",
  //         "Pandoc",
  //         "Self-learning",
  //       ],
  //     },
  //     {
  //       id: "36c4c6fb-02d0-48c0-8947-fda6e9a24af7",
  //       title: "Thuan Hung Secondary School",
  //       year: "08.2011 — 06.2015",
  //       icon: "school",
  //       description:
  //         "- Achieved numerous awards at city and national levels:\n  - Consolation Prize — National Young Informatics Contest 2015\n  - Consolation Prize — National Young Informatics Contest 2014\n  - First Prize — Young Informatics Contest — Can Tho City 2014\n- Achieved the title of Outstanding Student from Grade 6-9.\n- Developed websites using the open-source NukeViet CMS.",
  //       skills: [
  //         "Pascal",
  //         "NukeViet",
  //         "HTML",
  //         "CSS",
  //         "JavaScript",
  //         "Self-learning",
  //       ],
  //     },
  //   ],
  // },
];
