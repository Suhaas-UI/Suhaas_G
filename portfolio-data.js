/**
 * ==============================================================================
 * PORTFOLIO DATA CONFIGURATION
 * ==============================================================================
 * Edit this file to update your personal details, projects, certificates,
 * and social media links.
 * 
 * To add new items, simply copy an existing block and change the values!
 * Everything will automatically update on the website.
 * ==============================================================================
 */

const PORTFOLIO_DATA = {
  // ----------------------------------------------------------------------------
  // 1. PERSONAL INFORMATION (Hero Section)
  // ----------------------------------------------------------------------------
  personal: {
    name: "Suhaas G",
    role: "Developer | UI Designer",
    statusBadge: "Looking for new opportunities",

    // About Me: What you do and what you aim for
    aboutMe: [
      "Hello, I'm Suhaas I'm currently a student learning software development and exploring web development and UI design. I'm building my skills through learning, experimenting, and working on personal projects.",
      "I'm always looking for opportunities to learn from real-world projects, gain experience, and grow as a developer. I'm open to internships, entry-level opportunities, and collaborations where I can contribute and learn along the way."
    ],

    // Profile Picture (Using your uploaded photo in assets/profile.jpg)
    profileImage: "profile.jpg",
    profileImageAlt: "Profile Picture",

    // Your receiving email address for the pre-filled contact form
    contactEmail: "suhaasg1230@gmail.com"
  },

  // ----------------------------------------------------------------------------
  // 2. PROJECTS SECTION
  // ----------------------------------------------------------------------------
  // Add as many projects as you like. Each card links directly to your product.
  projects: [
    {
      id: "project-1",
      title: "Namma 90s",
      description: "Namma 90s - it is a nostalgic Kannada music player which was inspired by saloon.wtf , A retro Kannada music site.",
      tags: ["HTML", "Js", "internal CSS"],
      link: "https://suhaas-ui.github.io/Namma-90s/",
      linkLabel: "View Live Product ↗"
    },

    {
      id: "project-2",
      title: "---",
      description: "---.",
      tags: ["---", "---", "---"],
      link: "https://github.com",
      linkLabel: "View Live Product ↗"
    }
  ],

  // ----------------------------------------------------------------------------
  // 3. CERTIFICATES SECTION
  // ----------------------------------------------------------------------------
  // You can add as many certificates as you want here (3, 4, 5, 10+)!
  // The layout will automatically adapt into clean rows.
  certificates: [
    {
      id: "cert-1",
      title: "Cyberverse",
      issuer: "Cyberverse Foundation",
      date: "2025",
      image: "cyber.jpeg",
      imageAlt: "Full Stack Web Development Certificate",
      // Link to the specific project created for this certification:

    },
    {
      id: "cert-2",
      title: "UI/UX design",
      issuer: "Seshadripuram Degree college",
      date: "2025",
      image: "UI.jpeg",
      imageAlt: "UI/UX Design Certificate",
      // Link to the specific project created for this certification:
      projectLink: "https://www.figma.com/proto/3sh0eYn3FR8upEPeW4cDWV/Untitled?node-id=2-2&p=f&t=eITZmINJuuoqVgve-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=2%3A2",
      projectLinkLabel: "View Associated Project ↗"
    },
    {
      id: "cert-3",
      title: "Ai tools workshop",
      issuer: "Be10x",
      date: "2026",
      image: "be10x.jpeg",
      imageAlt: "Cloud Architecture and Scalable APIs Certificate",
      // Link to the specific project created for this certification:
    }

  ],

  // ----------------------------------------------------------------------------
  // 4. SOCIAL MEDIA PLATFORMS
  // ----------------------------------------------------------------------------
  // Links are embedded into clean, accessible brand icons & labels.
  socials: [
    {
      platform: "GitHub",
      url: "https://github.com/Suhaas-UI",
      ariaLabel: "Visit my GitHub profile",
      svgIcon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
      </svg>`
    },
    {
      platform: "LinkedIn",
      url: "https://www.linkedin.com/in/suhaas-g-759045437",
      ariaLabel: "Visit my LinkedIn profile",
      svgIcon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9h2.77v8.37H6.46v-8.37M7.85 6.47a1.63 1.63 0 1 0 0 3.26 1.63 1.63 0 0 0 0-3.26z"/>
      </svg>`
    },
    {
      platform: "Email",
      url: "mailto:suhaasg1230@gmail.com",
      ariaLabel: "Send an email to suhaasg1230@gmail.com",
      svgIcon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <rect width="20" height="16" x="2" y="4" rx="2"></rect>
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
      </svg>`
    }
  ]
};

// Export to window object for zero-build static browser access
window.PORTFOLIO_DATA = PORTFOLIO_DATA;
