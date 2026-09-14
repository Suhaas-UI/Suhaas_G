# Personal Resume & Portfolio Website

A clean, modern, and friendly personal portfolio and resume website built with HTML5, CSS3, and JavaScript. Designed to be lightweight, responsive, and effortlessly modifiable.

---

## 🌟 Features Included

1. **Hero & About Me Section**:
   - **Left side**: Your name, headline/title, status badge, and an **About Me** card detailing who you are and what you aim for.
   - **Right side**: Profile picture (PFP) with a soft mint accent glow and friendly badge.
2. **Projects Section**:
   - Responsive cards with project titles, descriptions, technology badges, and direct links taking visitors straight to the live product/demo.
3. **Certificates Section**:
   - Clean credential cards displaying the certificate image preview, certificate name, issuing organization, and a direct link to the associated project.
4. **Contact Me Section**:
   - Interactive contact form asking for the visitor's **Name** and **Description / Reason for reaching out**.
   - Generates a **pre-filled email** (`mailto:`) formatted with their name and message ready to send with one click.
5. **Social Media Links (Right under Section 4)**:
   - Clean, branded buttons for GitHub, LinkedIn, X (Twitter), Instagram, etc., with links embedded directly into the names and icons.
6. **Footer**:
   - Minimalist footer with copyright and a smooth back-to-top button.

---

## 🚀 How to Run Locally

You can run this project with zero dependencies or build tools!

### Option A: Double-Click
Simply open `index.html` in any web browser (Chrome, Edge, Firefox, Safari).

### Option B: Local Python Server (Recommended)
Open PowerShell or Terminal in this folder and run:
```powershell
python -m http.server 8000
```
Then visit: `http://localhost:8000` in your browser.

---

## ✏️ How to Modify & Add New Content

All your data is conveniently stored in **`portfolio-data.js`**. You don't need to touch complex HTML layout tags to add new items!

### 1. Update Your Name, Bio, and Profile Photo
Open `portfolio-data.js` and edit the `personal` object:
```javascript
personal: {
  name: "Your Name",
  role: "Your Title or Specialization",
  statusBadge: "Available for new opportunities",
  aboutMe: [
    "Write a few lines about your background, what drives you, and what you love creating.",
    "Share what you aim for in your career, future goals, and what problems you want to solve."
  ],
  profileImage: "assets/your-photo.jpg", // Place your photo in the assets folder!
  contactEmail: "your-real-email@domain.com"
}
```

### 2. Add or Edit Projects
To add a new project, copy an existing block inside `projects: [...]` in `portfolio-data.js`:
```javascript
{
  id: "project-4",
  title: "My Amazing Project",
  description: "A short 1-2 sentence description explaining what your product does.",
  tags: ["React", "Python", "API"],
  link: "https://your-project-link.com",
  linkLabel: "View Live Product ↗"
}
```

### 3. Add or Edit Certificates
To add a new certificate, copy an existing block inside `certificates: [...]` in `portfolio-data.js`:
```javascript
{
  id: "cert-3",
  title: "Cloud Architecture Professional",
  issuer: "AWS / Google Cloud",
  date: "2026",
  image: "assets/my-cert-image.png", // Or an image URL
  projectLink: "https://github.com/your-username/associated-project",
  projectLinkLabel: "View Associated Project ↗"
}
```

### 4. Update Social Media Links
In `portfolio-data.js`, update the `url` fields inside the `socials` array with your actual profile links:
```javascript
{
  platform: "GitHub",
  url: "https://github.com/yourusername",
  ...
}
```

---

## 🎨 Changing The Theme or Colors

The website uses CSS variables in **`style.css`**. If you ever want to adjust the mint accent color, just edit the `:root` variables at the top of `style.css`:
```css
:root {
  --primary: #10b981;        /* Main mint accent */
  --primary-hover: #059669;  /* Darker mint for hover */
  --primary-subtle: #ecfdf5; /* Soft mint background tint */
}
```

---

## 🌐 Free Deployment Options

- **GitHub Pages**: Push this repo to GitHub, go to `Settings > Pages`, and choose `Deploy from Branch: main`.
- **Netlify**: Drag and drop this folder directly into [Netlify Drop](https://app.netlify.com/drop) for an instant live URL in 10 seconds.
- **Vercel**: Connect your GitHub repository or use `vercel deploy`.
