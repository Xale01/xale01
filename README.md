👨‍💻 Personal Portfolio - Axel Bénard

Welcome to the source code of my personal portfolio website.
This project is designed to showcase my skills, projects, and educational background as a Computer Science Student at IUT Annecy.

The design features a dark-mode, developer-centric aesthetic inspired by modern IDEs (Integrated Development Environments), utilizing the JetBrains Mono font and code-syntax styling.

🌟 Features

Responsive Design: Fully adaptable layout that works seamlessly on desktops, tablets, and mobile devices.

Developer Aesthetic: Dark theme, code-like typography, and terminal-style introductions.

Interactive UI:

Dynamic cursor glow effect following mouse movement.

Smooth scrolling navigation.

Hover effects on project cards and skill bars.

Project Filtering: Real-time JavaScript filtering system to search projects by technology or keywords.

Project Detail Pages: dedicated pages for major projects (CUBE, Pilot, Survival Island) with deep-dive technical explanations.

Contact Form: Functional contact form integrated with Formspree.

🛠️ Tech Stack

This project is built with Vanilla technologies to demonstrate core web development skills without relying on heavy frameworks.

Technology

Usage

HTML5

Semantic structure and layout.

CSS3

Styling, Flexbox/Grid layouts, CSS Variables, and animations.

JavaScript (ES6+)

DOM manipulation, filtering logic, and form handling.

Google Fonts

JetBrains Mono for the coding aesthetic.

Formspree

Backend service for handling contact form submissions.

📂 Project Structure

├── index.html          # Main landing page
├── style.css           # Global styles and responsive design
├── main.js             # Core JavaScript logic (Navigation, Filter, Form)
├── CV_Benard_Axel.pdf  # Resume file
├── projects/           # Detailed pages for specific projects
│   ├── cube.html
│   ├── pilot.html
│   ├── survival_island.html
│   └── ...
└── project_details.css # Specific styles for project detail pages


🚀 How to Run Locally

Since this is a static website, you don't need a backend server or Node.js to run it.

Clone the repository:

git clone [https://github.com/your-username/your-repo-name.git](https://github.com/your-username/your-repo-name.git)


Navigate to the project folder:

cd your-repo-name


Open the site:
Simply open the index.html file in your preferred web browser.

Tip: For a better experience, use an extension like "Live Server" in VS Code.

⚙️ Configuration (Contact Form)

The contact form uses Formspree. The logic is located in main.js:

const formId = "xgvrepvw"; // Replace with your own Formspree ID if you fork this repo


🎨 Design Philosophy

The site uses a specific color palette stored in CSS variables for easy maintenance:

Background: #0d1117 (GitHub Dark Dimmed style)

Accent Color: #58a6ff (Blue)

Typography: JetBrains Mono (The standard for code readability)

👤 Author

Axel Bénard

LinkedIn: linkedin.com/in/axel-bénard

GitHub: @Xale01

© 2026 Axel Bénard.
