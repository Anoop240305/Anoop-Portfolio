export const profile = {
  name: "Anoop Kamlakar Hattekar",
  shortName: "Anoop Hattekar",
  email: "akhattekar@gmail.com",
  linkedin: "https://linkedin.com/in/anoop-hattekar",
  github: "https://github.com/Anoop240305",
  location: "Pune, Maharashtra, India",
  phone: "+91-8379053662",
};

export const softwareResume = {
  summary:
    "Full-stack software engineer with hands-on production experience building REST APIs, web applications, and backend pipelines using Python and Django. Strong foundation in OOP principles, data structures and algorithms, and debugging complex systems. Focused on microservices architecture and scalable backend design.",
  kpis: [
    { label: "Invoice Review Time Saved", value: "30%", icon: "⚡" },
    { label: "Invoicing Accuracy Improved", value: "25%", icon: "✅" },
    { label: "Manual Ops Hours Saved/Week", value: "3+", icon: "⏱" },
    { label: "SQL Query Performance Gain", value: "35%", icon: "🗄️" },
  ],
  experience: [
    {
      company: "TechB Softwares",
      role: "Software Engineer Intern — Full Stack",
      period: "Feb 2026 – Jun 2026",
      location: "Pune, India",
      points: [
        "Developed 10+ production-grade KPI dashboards in React.js with real-time REST API integration and data visualizations — reducing invoice review time by 30%",
        "Audited and overhauled Django billing logic using OOP design patterns; corrected energy computation formulas — improving invoicing accuracy by 25% across multi-variable rate structures",
        "Integrated third-party REST APIs for automated solar energy data ingestion; orchestrated scheduled jobs via APScheduler, cron, and Django BaseCommand — saving 3+ hrs/week of manual operations",
        "Built end-to-end Playwright automation scripts for repetitive QA workflows and validated API contracts using Postman",
      ],
    },
  ],
  projects: [
    {
      name: "SolarOps Invoicing Platform",
      stack: "React.js, Django, PostgreSQL, Tailwind CSS",
      year: "2026",
      points: [
        "Built and optimized core billing workflows handling invoice generation, tariff calculations, and automated reporting for solar energy operations",
        "Resolved critical billing engine bugs; restructured query-layer data structures to eliminate N+1 patterns — achieving 25% faster report generation",
        "Automated daily energy sync with scheduled background jobs via Django BaseCommand",
        "Built automated video meter-reading extraction using Google Cloud Vision API (OCR), eliminating manual data entry",
      ],
    },
    {
      name: "Inventory Management System",
      stack: "Node.js, Express.js, MySQL, REST API, React.js",
      year: "2025",
      points: [
        "Designed REST APIs with Node.js/Express applying OOP principles; implemented full CRUD across 5+ product categories backed by MySQL",
        "Improved SQL query performance by 35% through indexing and join strategies; reduced data-entry errors by 20% via structured UI form validation",
      ],
    },
  ],
  skills: {
    Languages: ["Python", "JavaScript", "SQL", "C", "C++"],
    Concepts: ["OOP", "Data Structures & Algorithms", "REST APIs", "Microservices"],
    "Web Frameworks": ["Django", "Django REST Framework", "Node.js", "Express.js"],
    Frontend: ["React.js", "Tailwind CSS", "HTML5", "CSS3"],
    Databases: ["PostgreSQL", "MySQL"],
    Tools: ["Git", "GitHub"],
  },
};

export const embeddedResume = {
  summary:
    "Embedded systems enthusiast with strong foundation in firmware development using C/C++ on ESP32, STM32, Arduino, PIC18F, and 8051 platforms. Experienced in peripheral interfacing, real-time control, and hardware-level debugging. Passionate about hardware-software integration with strong electronics fundamentals.",
  kpis: [
    { label: "MCU Platforms", value: "5+", icon: "🔧" },
    { label: "Protocols Mastered", value: "UART/SPI/I2C", icon: "📡" },
    { label: "Gov. Copyright Holder", value: "2025", icon: "🏛️" },
    { label: "Autonomous Bot Built", value: "PID", icon: "🤖" },
  ],
  experience: [
    {
      company: "TechB Softwares",
      role: "Full Stack Developer Intern",
      period: "Feb 2026 – Present",
      location: "Pune, India",
      points: [
        "Worked on backend logic and data processing in Python/Django for energy-based applications involving real-time data handling",
        "Designed and integrated REST APIs ensuring reliable communication between frontend and backend systems; used Git for version control and code reviews",
        "Gained exposure to scalable system design, debugging, and handling production-level codebases",
      ],
    },
  ],
  projects: [
    {
      name: "Line Follower Pick & Drop Rescue Bot",
      stack: "ESP32, Raspberry Pi, Embedded C, PID, UART, USART, I2C",
      year: "2026",
      points: [
        "Designed autonomous rescue bot using ESP32 as main controller and Raspberry Pi for real-time camera processing; implemented PID-based control for precise line following",
        "Implemented Bluetooth wireless communication between ESP32 and control interface; integrated PWM motor control, ADC, GPIO, and timers",
        "Applied UART, USART, and I2C protocols for inter-module data exchange; performed hardware-firmware validation via logic analyzer and oscilloscope",
      ],
    },
    {
      name: "Smart Wheelchair System",
      stack: "Arduino Nano, Embedded C/C++, I2C, PWM, Interrupts",
      year: "2024",
      points: [
        "Developed interrupt-driven firmware in Embedded C/C++ for motor control using PWM and real-time input handling; implemented built-in diagnostics for fault detection",
        "Interfaced motor drivers and sensors using I2C; performed serial debugging and oscilloscope-based signal verification",
        "Recognized with Government of India Copyright (Reg. No: LD-20250167659) for innovation in embedded assistive technology",
      ],
    },
  ],
  skills: {
    Programming: ["C", "C++", "Embedded C", "Data Structures"],
    "MCUs (8/16/32-bit)": ["ESP32", "STM32", "Arduino", "8051", "PIC18F"],
    Protocols: ["UART", "USART", "SPI", "I2C", "Bluetooth"],
    Peripherals: ["ADC", "PWM", "Timers", "GPIO"],
    "Test Equipment": ["MSO", "DSO", "Oscilloscope", "Logic Analyzer", "Multimeter"],
    Tools: ["Keil uVision", "STM32CubeIDE", "Arduino IDE", "Git", "GitHub"],
    OS: ["Linux (Ubuntu)"],
  },
};

export const achievements = [
  {
    title: "Off-Campus Hackathon Winner",
    year: "2025",
    detail: "Won TechB Softwares' competitive hackathon among external participants; awarded a paid internship for outstanding technical performance",
    icon: "🏆",
  },
  {
    title: "Project Competition Winner",
    year: "2024",
    detail: "Ranked 1st at institutional level; selected for SPPU State-level Competition among 100+ teams",
    icon: "🥇",
  },
  {
    title: "Government of India Copyright",
    year: "2025",
    detail: "Reg. No: LD-20250167659 — Recognized for innovation in embedded assistive technology (Smart Wheelchair System)",
    icon: "🏛️",
  },
  {
    title: "Event Management Lead — Utkarsh 2k26",
    year: "2026",
    detail: "Led end-to-end event operations for a state-level project competition with 200+ participating groups from across India",
    icon: "🎯",
  },
];

export const education = {
  degree: "Bachelor of Engineering — Electronics and Telecommunication",
  institution: "PCET's Pimpri Chinchwad College of Engineering and Research",
  cgpa: "9.1 / 10.0",
  expected: "Expected June 2027",
  hsc: {
    institution: "JK Junior College of Science",
    score: "76.67%",
    year: "February 2023",
  },
};
