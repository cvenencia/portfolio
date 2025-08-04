interface Resources {
  "autogas": {
    "meta": {
      "title": "Autogas App Project | Carlos Venencia",
      "description": "Showcase of the Autogas App project: web application for data management and document generation for a local vehicle workshop"
    },
    "nav": {
      "hero": "Company",
      "project": "Project",
      "features": "Features",
      "technologies": "Technologies"
    },
    "hero": {
      "description": "Vehicle conversion center to Compressed Natural Gas (CNG) located in <1>Barranquilla, Colombia</1>",
      "link-text": "Company website",
      "logo-alt": "Autogas la 17 logo"
    },
    "project": {
      "title": "Project",
      "subtitle-1": "Company description",
      "description-1": "Autogas la 17 is a company located in Barranquilla, Colombia, dedicated to converting vehicles to natural gas. This line of work involves <1>strict administrative and operational processes that require documentation</1>. Each of these documents includes varied information about the client, the vehicle, inventory items used, and general service data. All this information must be entered correctly in each document. In case of errors, services can be delayed and penalties may be incurred.",
      "subtitle-2": "Problem and solution",
      "description-2": "The company used to manage service-related information through shared <1>Google Sheets</1> files. Although this method worked for a long time, <2>clerical errors were very frequent</2> (more than acceptable). This is why the company decided to develop an application that would allow them to:",
      "list-1": "<0>Consolidate</0> all information in one place. A single database for clients, vehicles, inventory, and more.",
      "list-2": "<0>Automatically generate</0> documentation, pulling data directly from the database.",
      "list-3": "<0>Have a robust system</0> with data validation.",
      "list-4": "<0>Optimize</0> administrative and operational processes.",
      "list-5": "<0>Minimize</0> errors and paper usage."
    },
    "features": {
      "title": "Features",
      "db": {
        "title": "Service database",
        "description": "Unified database to keep records of all services performed, which includes information about clients, vehicles, inventory, invoicing, and more.",
        "services-alt": "Services",
        "clients-alt": "Clients",
        "vehicles-alt": "Vehicles"
      },
      "documents": {
        "title": "Template-based document generation",
        "description": "Templates are Excel files created by an administrator. When adding a template, you can select the service types that will use it. Then, for each open service, a document can be created from the template. The application <1>automatically fills in</1> the service data required by the document in the Excel file. Finally, the file is converted to PDF.",
        "template-form-alt": "Form to add a template in the application",
        "service-alt": "Service page",
        "service-documents-alt": "Service documents. A unique identifier is generated for each document"
      },
      "users": {
        "title": "Authentication and granular permission system",
        "description": "Users log into the application using an email address. The app implements a simplified version of <1>PBAC</1> (Policy-Based Access Control). This means each user can be assigned specific resources and permitted actions, enabling <3>fine-grained control over what each user can do</3> within the application.",
        "user-form-alt": "Form to add a user to the application",
        "login-alt": "Form to log in with an email address. The user receives a login link."
      },
      "events": {
        "title": "Calendar for events and reminders",
        "description": "Integrated calendar in the app for managing events and reminders. Specially useful for the commercial team. The calendar can be viewed in a <1>monthly or weekly</1> view. Events can be all-day or have a start and end time. They can also be linked to a specific service. This enables the <3>automatic generation of reminders</3> for certain services. Events have 2 types and 6 categories with a color-coded legend for easy identification and organization.",
        "month-alt": "Monthly view",
        "week-alt": "Weekly view",
        "event-alt": "Event view",
        "legend-alt": "Color legend"
      }
    },
    "technologies": {
      "title": "Technologies"
    }
  },
  "root": {
    "meta": {
      "title": "Portfolio | Carlos Venencia",
      "description": "Personal portfolio of Carlos Venencia, Full-Stack Developer from Colombia"
    },
    "options": "Options",
    "change-language": "Change language",
    "switch-light": "Switch to light mode",
    "switch-dark": "Switch to dark mode",
    "copy": "Copy",
    "copied": "Copied!",
    "copied-full": "Copied to the clipboard!",
    "nav": {
      "homepage": "Homepage",
      "navigation": "Navigation",
      "about-me": "About me",
      "projects": "Projects",
      "testimonials": "Testimonials",
      "skills": "Skills",
      "credentials": "Credentials",
      "contact": "Contact"
    },
    "hero": {
      "flag-alt": "Colombia's flag",
      "subtitle": "<0>Full-Stack Developer</0> from Colombia"
    },
    "about-me": {
      "title": "About me",
      "description": "I'm a Web developer passionate about technology. I hold a B.S. in Systems Engineering, awarded in February 2023. Ever since, I've been working as a freelancer on various projects, including web scraping programs of varying complexity and web applications."
    },
    "projects": {
      "title": "Projects",
      "autogas": {
        "index-alt": "Screenshot of Autogas App",
        "title": "Autogas App",
        "description": "Data management and document generation web application for local vehicle workshop"
      },
      "outreach-magic": {
        "index-alt": "Outreach Magic logo",
        "title": "Outreach Magic",
        "description": "Freelance Backend developer. Built many APIs and automation tools, deployed using Google Cloud Platform"
      },
      "todo": {
        "index-alt": "Screenshot of Todo App",
        "title": "Todo App",
        "description": "Full-Stack Todo App with user authentication and theme switcher"
      },
      "countries": {
        "index-alt": "Screenshot of Countries",
        "title": "Countries list",
        "description": "Countries API integration with theme switcher"
      }
    },
    "skills": {
      "title": "Skills"
    },
    "testimonials": {
      "title": "Testimonials"
    },
    "credentials": {
      "title": "Credentials",
      "type": {
        "university": "University degree",
        "online-course": "Online Course",
        "certificate": "Certificate"
      },
      "university": {
        "title": "Bachelor of Systems engineering",
        "period": "Jan 2018 - Dec 2022",
        "image-alt": "Logo of Universidad del Norte"
      },
      "react-advanced": {
        "title": "React Advanced",
        "period": "Apr 2024",
        "image-alt": "Logo of WDS React Simplified - Advanced"
      },
      "nextjs": {
        "title": "NextJS",
        "period": "Apr 2024",
        "image-alt": "Logo of WDS React Simplified - NextJS"
      },
      "typescript": {
        "title": "Typescript",
        "period": "May 2024",
        "image-alt": "Logo of WDS Typescript Simplified"
      },
      "pcep": {
        "title": "Python",
        "period": "Apr 2023",
        "image-alt": "Logo of Python Institute"
      }
    }
  }
}

export default Resources;
