import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    asu,
    finiq,
    coep,
    aspnet ,
    aws,
    azure,
    csharp,
    databricks,
    java,
    kafka,
    kubernetes,
    mysql,
    python,
    awsarchitect,
  awssecurity,
  awscloudop

  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "Project",
      title: "Project",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Data Engineer",
      icon: mobile,
    },
    {
      title: "Cloud Developer",
      icon: creator,
    },
  ];

  const Certification = [
    {
      title: "AWS Certified Solutions Architect – Associate",
      icon: awsarchitect,
      link: "https://www.credly.com/badges/6d56d39d-3f00-476e-9bce-45df82e3088f/public_url"
    },
    {
      title: "AWS Academy Graduate - AWS Academy Cloud Security Foundations",
      icon: awssecurity,
      link:"https://www.credly.com/badges/0cc747fa-d049-4415-a6aa-fb1b01eb132c/public_url"
    },
    {
      title: "AWS Academy Graduate - AWS Academy Cloud Operations",
      icon: awscloudop,
      link: "https://www.credly.com/badges/6d56d39d-3f00-476e-9bce-45df82e3088f/public_url"
    },
   
  ];

  
  const technologies = [
    
    {
      name: "JAVA",
      icon: java,
    },
   
    {
      name: "python",
      icon: python,
    },
    {
      name: "C#",
      icon: csharp,
    },
    // {
    //   name: "ASP.Net",
    //   icon: aspnet,
    // },
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
   
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "MySQL",
      icon: mysql,
    },
   
    {
      name: "AWS",
      icon: aws,
    },
    // {
    //   name: "Azure",
    //   icon: azure,
    // },
    
    // {
    //   name: "Databricks",
    //   icon: databricks,
    // },
    {
      name: "git",
      icon: git,
    },
    {
      name: "docker",
      icon: docker,
    },
    // {
    //   name: "Kafka",
    //   icon: kafka,
    // },
    // {
    //   name: "Kubernetes",
    //   icon: kubernetes,
    // },
    
   

  ];
  
  const experiences = [
    {
      title: "Research Aide",
      company_name: "Arizona State University",
      icon: asu,
      iconBg: "#383E56",
      date: "May 2023 - August 2023",
      points: [
        "Collaborated with a Grad Research Associate to utilize Time Series Methods (Linear Regression, AR, MA, ARIMA), Machine Learning methods (Random Forest, Support Vector Machine, XGboosting), and Deep Learning methods (Neural Network, LSTM) in constructing consumption prediction models for 4,000 users in 104 weekly periods.",
        "Engineered an ETL pipeline to systematically extract data from Reddit, transforming it, and loading it into a centralized database for further analysis and utilization."
      ],
    },
    {
      title: "Software Developer (SDE)",
      company_name: "FinIQ Consulting India Pvt. Ltd., Pune, India",
      icon: finiq,
      iconBg: "#E6DEDD",
      date: "July 2018 - June 2022",
      points: [
        "Developed and implemented the DOR module, a core integration component for the RFQ, front-office order, and execution management system for fixed income bonds. This module facilitates seamless integration with Bloomberg via FIX protocol utilizing Java, ASP.NET, and WebSockets, resulting in a 60% increase in operational efficiency.",
        "Built a configurable reporting module using ASP.NET and SQL, enabling users to generate custom reports demonstrating trade data, leveraging efficient database design and query optimization techniques to minimize 90% of manual efforts.",
        "Built user interfaces using JavaScript for 5 projects within the Bonds team.",
        "Developed a content-based bond recommendation system, utilizing machine learning algorithms to analyze bond attributes and user profiles. This system resulted in a 40% increase in conversion rate.",
        "Mentored a team of 10+ juniors, providing guidance in software development best practices and agile methodologies.",
        "Developed a high-performance order automation application for shares and bonds using JavaScript and C#, incorporating execution management, position blotter, and real-time price discovery, achieving a 90-second reduction in transaction time.",
        "Automated user CRUD operations by integrating with Oracle Unified Directory (OUD) using LDAP protocol. Created complex SQL stored procedures to process and manage user data, streamlining user data management.",
        "Engineered REST APIs with HMAC-SHA256 encryption for secure communication with BondBlox’s REST APIs. Facilitated CRUD operations for accounts and orders, as well as managed funding and withdrawal requests.",
        "Resolved various vulnerability issues in the bond system, including handling authentication and SQL injection."
      ],
    },
    {
      title: "Software Developer Intern",
      company_name: "FinIQ Consulting India Pvt. Ltd., Pune, India",
      icon: finiq,
      iconBg: "#E6DEDD",
      date: "May 2017 - July 2017",
      points: [
        "Created dynamic pricing visualizations for financial derivatives leveraging Spring Boot and D3.js.",
        "Developed a mathematical pricing model for financial derivatives in Python, to determine fair values and assess risk."
      ],
    }
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Video Transcriber",
      description:
        "Developed scalable microservices architecture, encompassing a Gateway service, Authentication service, Video Transcriber Converter service, and Email Notification service for a distributed video processing system. Leveraged RabbitMQ for asynchronous communication between services and utilized MongoDB for persistent storage.",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "RabbitMQ",
          color: "green-text-gradient",
        },
        {
          name: "PMongoDB",
          color: "pink-text-gradient",
        },
        {
          name: "Docker",
          color: "blue-text-gradient",
        },
        {
          name: "Kubernetes",
          color: "green-text-gradient",
        },
        {
          name: "MySQL",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/sushmitahalasawade/Video-Transcriber",
    },
    {
      name: "E-Commerce Microservices Architecture",
      description:
        "Implemented advanced system design principles, such as API Gateway, Service Discovery, Distributed Tracing, Circuit Breaking, Monitoring, and Logging, to optimize scalability, reliability, and performance of an application. Ensured robust security measures by implementing OAuth2 authentication with KeyCloak and utilized Apache Kafka for efficient event-driven communication.",
      tags: [
        {
          name: "Spring Boot",
          color: "blue-text-gradient",
        },
        {
          name: "Apache Kafka",
          color: "green-text-gradient",
        },
        {
          name: "KeyCloack",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/sushmitahalasawade/E-Commerce-Microservices-Architecture",
    },
    {
      name: "EMOUSIC: Machine Learning Based Music Player",
      description:
        "Built EMOUSIC, a smart music player utilizing machine learning (Random Forest algorithm, 96.33% accuracy) to analyze user mood, activities, timing, and listening history for personalized playlist generation. Implemented the application using Android Studio, leveraging R script for data analysis and algorithm development (Random Forest, J48), and integrated Microsoft Cognitive Services and Google APIs for enhanced functionality.",
      tags: [
        {
          name: "Android",
          color: "blue-text-gradient",
        },
        {
          name: "Python",
          color: "green-text-gradient",
        },
        {
          name: "R",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/sushmitahalasawade/EMOUSIC-Machine-Learning-Based-Music-Player",
    },
    {
      name: "Book Exchange Portal",
      description:
        "The online platform developed using Node.js, Express, and MongoDB facilitates seamless book exchanges among enthusiasts. Features like user authentication, book management, and exchange handling promote community engagement and reading culture. Emphasizing security, the project employs JWT authentication and bcrypt.js password hashing to safeguard user data, ensuring a secure environment for exchanges.",
      tags: [
        {
          name: "Node.js",
          color: "blue-text-gradient",
        },
        {
          name: "Express",
          color: "green-text-gradient",
        },
        {
          name: "MongoDB",
          color: "pink-text-gradient",
        },
        {
          name: "JWT",
          color: "blue-text-gradient",
        }
      ],
      image: tripguide,
      source_code_link: "https://github.com/sushmitahalasawade/Book-Exchange-Portal",
    },
    
    {
      name: "Weather Data Analysis",
      description:
        "Leveraged PySpark for weather data analysis, implementing linear regression and auto regression to uncover patterns and predict future values. Utilized data visualization techniques to explore relationships and extract valuable insights into weather patterns and trends with practical applications across industries.",
      tags: [
        {
          name: "PySpark",
          color: "blue-text-gradient",
        },
        {
          name: "Spark",
          color: "green-text-gradient",
        },
        {
          name: "Pandas",
          color: "pink-text-gradient",
        },
        {
          name: "Matplotlib",
          color: "blue-text-gradient",
        },
        {
          name: "Seaborn",
          color: "green-text-gradient",
        },
        {
          name: "Delta lake",
          color: "pink-text-gradient",
        },
        {
          name: "Tableau",
          color: "blue-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/sushmitahalasawade/Weather-Data-Analysis",
    },
    {
      name: "Heart disease prediction",
      description:
        "Implemented a classification model for heart disease prediction using Scikit-Learn. Constructed pipeline for data preprocessing and model training, incorporating standard scaling and decision tree classification. Utilized StratifiedKFold for data splitting and GridSearchCV for hyperparameter tuning. Evaluated model performance through cross-validation",
      tags: [
        {
          name: "Machine learning",
          color: "blue-text-gradient",
        },
        {
          name: "Python",
          color: "green-text-gradient",
        },
        {
          name: "Scikit-Learn",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/sushmitahalasawade/Heart-Disease-Prediction",
    },
    {
      name: "Syllabus Generator",
      description:
        "The Syllabus Generator is a department-centric system designed to facilitate the creation and management of course syllabi within a university. The project includes conceptual schema design using NORMA. Couchbase-NoSQL was utilized to implement the database in JSON format, providing flexibility and scalability. Various functionalities are implemented using queries, stored procedures, functions, and triggers to enable instructors to add, update, or modify syllabi under the supervision of the Program Chair. ",
      tags: [
        {
          name: "SQL",
          color: "blue-text-gradient",
        },
        {
          name: "Couchbase(NoSQL)",
          color: "green-text-gradient",
        },
        {
          name: "NORMA",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/sushmitahalasawade/Syllabus-Generator",
    },
    
    {
      name: "Implementation of grep command in C",
      description:
        "The implementation of the grep command in C allows users to search specified input files for lines containing a match to a given pattern (whole word). When a match is found within a line, the program copies that line to standard output by default or produces the requested output based on specified options. Input files are provided as command-line arguments, enabling flexible and efficient searching across multiple files simultaneously.",
      tags: [
        {
          name: "C",
          color: "blue-text-gradient",
        }
      ],
      image: tripguide,
      source_code_link: "https://github.com/sushmitahalasawade/grep-command",
    },
   
  ];

  const courses = [
    
    {
      university_name: "Arizona State University",
      icon: asu,
      iconBg: "#E6DEDD",
      date: "Aug 2023 - May 2024",
      points: [
        "AI into CyberSecurity",
        "Middleware Programming and Data Seurity",
        "Cloud Architecture",
        "Cloud Security and Operations"
       ],
    },
    {
      university_name: "Arizona State University",
      icon: asu,
      iconBg: "#E6DEDD",
      date: "Aug 2022 - May 2023",
      points: [
        "Analyzing Big Data",
        "Advanced Database Management Systems",
        "Advanced Big Data Analytics/AI",
        "Data Visualization & Reporting"
      ],
    },
    {
      university_name: "College of Engineering Pune (COEP)",
      icon: coep,
      iconBg: "#E6DEDD",
      date: "Aug 2017 - May 2018",
      points: [
        "Web Systems and Technologies",
        "Cyber Security, Forensics and Legal Perspective",
        "Information Retrieval",
        "Software Testing and Quality Assurance"
      ],
    },
    {
      university_name: "College of Engineering Pune (COEP)",
      icon: coep,
      iconBg: "#E6DEDD",
      date: "Aug 2016 - May 2017",
      points: [
        "Cloud and Big Data Platform",
        "Algorithms and Complexity",
        "Network Architecture and Wireless Protocol",
        "Human Computer Interaction"
      ],
    }
  ];
  
  export { services, technologies, experiences, testimonials, projects, Certification, courses };