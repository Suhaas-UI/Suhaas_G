/**
 * ==============================================================================
 * APPLICATION ENGINE
 * ==============================================================================
 * This script reads configuration from PORTFOLIO_DATA and dynamically renders
 * all sections so the user never has to worry about broken HTML markup.
 * ==============================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  // Ensure PORTFOLIO_DATA is present
  if (typeof window.PORTFOLIO_DATA === 'undefined') {
    console.error('PORTFOLIO_DATA not found. Please ensure portfolio-data.js is loaded.');
    return;
  }

  const { personal, projects, certificates, socials } = window.PORTFOLIO_DATA;

  // 1. Render Personal / Hero Section
  renderPersonalInfo(personal);

  // 2. Render Projects Section
  renderProjects(projects);

  // 3. Render Certificates Section
  renderCertificates(certificates);

  // 4. Render Social Media Links
  renderSocials(socials);

  // 5. Setup Contact Form (Pre-filled mailto handler)
  setupContactForm(personal.contactEmail);

  // 6. Setup Back-to-Top Button
  setupBackToTop();
});

/**
 * Renders the hero and personal information
 */
function renderPersonalInfo(personal) {
  if (!personal) return;

  // Header Brand Name
  const navBrand = document.getElementById('nav-brand-name');
  if (navBrand && personal.name) navBrand.textContent = personal.name;

  // Hero Name
  const heroName = document.getElementById('hero-name');
  if (heroName && personal.name) heroName.textContent = personal.name;

  // Hero Role
  const heroRole = document.getElementById('hero-role');
  if (heroRole && personal.role) heroRole.textContent = personal.role;

  // Status Badge
  const statusBadge = document.getElementById('hero-status-badge');
  if (statusBadge && personal.statusBadge) statusBadge.textContent = personal.statusBadge;

  // Profile Picture
  const pfpImg = document.getElementById('hero-pfp');
  if (pfpImg && personal.profileImage) {
    pfpImg.src = personal.profileImage;
    if (personal.profileImageAlt) pfpImg.alt = personal.profileImageAlt;
  }

  // Soft ambient blurred backdrop (for blurry background effect)
  const blurBg = document.getElementById('portrait-blur-bg');
  if (blurBg && personal.profileImage) {
    blurBg.style.backgroundImage = `url('${personal.profileImage}')`;
  }

  // About Me Paragraphs
  const aboutContainer = document.getElementById('hero-about-me');
  if (aboutContainer && Array.isArray(personal.aboutMe)) {
    aboutContainer.innerHTML = personal.aboutMe
      .map(paragraph => `<p>${escapeHTML(paragraph)}</p>`)
      .join('');
  }

  // Footer Name and Current Year
  const footerName = document.getElementById('footer-name');
  if (footerName && personal.name) footerName.textContent = personal.name;

  const footerYear = document.getElementById('footer-year');
  if (footerYear) footerYear.textContent = new Date().getFullYear();
}

/**
 * Renders the projects cards into the project grid
 */
function renderProjects(projects) {
  const container = document.getElementById('projects-container');
  if (!container) return;

  if (!projects || projects.length === 0) {
    container.innerHTML = `<p class="empty-state">No projects added yet. Check portfolio-data.js to add one!</p>`;
    return;
  }

  container.innerHTML = projects.map(proj => {
    const tagsHtml = (proj.tags || [])
      .map(tag => `<span class="project-tag">${escapeHTML(tag)}</span>`)
      .join('');

    return `
      <article class="project-card" id="${escapeHTML(proj.id || '')}">
        <div class="project-card-top">
          <div class="project-header">
            <h3 class="project-title">
              <a href="${escapeHTML(proj.link)}" target="_blank" rel="noopener noreferrer">
                ${escapeHTML(proj.title)}
              </a>
            </h3>
            <a href="${escapeHTML(proj.link)}" target="_blank" rel="noopener noreferrer" class="project-link-icon" aria-label="Open ${escapeHTML(proj.title)} in new tab">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </a>
          </div>
          <p class="project-description">${escapeHTML(proj.description)}</p>
        </div>

        <div>
          ${tagsHtml ? `<div class="project-tags">${tagsHtml}</div>` : ''}
          <a href="${escapeHTML(proj.link)}" target="_blank" rel="noopener noreferrer" class="project-action-link">
            <span>${escapeHTML(proj.linkLabel || 'View Live Product ↗')}</span>
          </a>
        </div>
      </article>
    `;
  }).join('');
}

/**
 * Renders the certificate cards into the certificates grid
 */
function renderCertificates(certificates) {
  const container = document.getElementById('certificates-container');
  if (!container) return;

  if (!certificates || certificates.length === 0) {
    container.innerHTML = `<p class="empty-state">No certificates added yet. Check portfolio-data.js to add one!</p>`;
    return;
  }

  container.innerHTML = certificates.map(cert => {
    return `
      <article class="cert-card" id="${escapeHTML(cert.id || '')}">
        <div class="cert-image-wrap">
          <img 
            src="${escapeHTML(cert.image)}" 
            alt="${escapeHTML(cert.imageAlt || cert.title)}" 
            class="cert-image" 
            loading="lazy" 
          />
        </div>
        <div class="cert-content">
          <div class="cert-meta">
            <span class="cert-issuer">${escapeHTML(cert.issuer || '')}</span>
            <span class="cert-date">${escapeHTML(cert.date || '')}</span>
          </div>
          <h3 class="cert-name">${escapeHTML(cert.title)}</h3>
          
          ${cert.projectLink ? `
          <div class="cert-project-link-box">
            <a 
              href="${escapeHTML(cert.projectLink)}" 
              target="_blank" 
              rel="noopener noreferrer" 
              class="cert-project-link"
              aria-label="View project for ${escapeHTML(cert.title)}"
            >
              <span>${escapeHTML(cert.projectLinkLabel || 'View Associated Project ↗')}</span>
            </a>
          </div>
          ` : ''}
        </div>
      </article>
    `;
  }).join('');
}

/**
 * Renders the social media links right below the contact section
 */
function renderSocials(socials) {
  const container = document.getElementById('socials-container');
  if (!container) return;

  if (!socials || socials.length === 0) {
    container.innerHTML = '';
    return;
  }

  container.innerHTML = socials.map(s => {
    return `
      <li>
        <a 
          href="${escapeHTML(s.url)}" 
          target="_blank" 
          rel="noopener noreferrer" 
          class="social-link-btn"
          aria-label="${escapeHTML(s.ariaLabel || s.platform)}"
        >
          ${s.svgIcon || ''}
          <span>${escapeHTML(s.platform)}</span>
        </a>
      </li>
    `;
  }).join('');
}

/**
 * Contact form submission via EmailJS (sends a real email, no mail app needed)
 */
function setupContactForm(recipientEmail) {
  const form = document.getElementById('contact-form');
  const feedback = document.getElementById('form-feedback');
  const submitBtn = document.getElementById('contact-submit-btn');
  if (!form) return;

  const EMAILJS_SERVICE_ID = 'service_hk7l3pl';
  const EMAILJS_TEMPLATE_ID = 'template_garfur8';

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const nameInput = document.getElementById('contact-name');
    const messageInput = document.getElementById('contact-message');

    const name = nameInput ? nameInput.value.trim() : '';
    const message = messageInput ? messageInput.value.trim() : '';

    if (!name || !message) {
      showFeedback('Please fill out both your name and description before sending.', false);
      return;
    }

    if (typeof emailjs === 'undefined') {
      showFeedback('Something went wrong loading the email service. Please refresh and try again.', false);
      return;
    }

    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.style.opacity = '0.7';
    }
    showFeedback('Sending your message…', true);

    emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, { name, message })
      .then(() => {
        showFeedback(
          `Thank you, ${escapeHTML(name)}! Your message has been sent successfully. I'll get back to you soon.`,
          true
        );
        form.reset();
      })
      .catch((error) => {
        console.error('EmailJS send failed:', error);
        showFeedback(
          `Sorry, something went wrong sending your message. Please try again, or email me directly at ${escapeHTML(recipientEmail || 'suhaasg1230@gmail.com')}.`,
          false
        );
      })
      .finally(() => {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.style.opacity = '';
        }
      });
  });

  function showFeedback(msg, isSuccess, isHtml = false) {
    if (!feedback) return;
    if (isHtml) {
      feedback.innerHTML = msg;
    } else {
      feedback.textContent = msg;
    }
    feedback.className = `form-feedback ${isSuccess ? 'success' : 'error'}`;
    feedback.style.display = 'block';

    if (isSuccess) {
      setTimeout(() => {
        feedback.style.display = 'none';
      }, 12000);
    }
  }
}

/**
 * Back to top button setup
 */
function setupBackToTop() {
  const btn = document.getElementById('back-to-top-btn');
  if (!btn) return;

  btn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

/**
 * Helper to escape HTML and prevent injection
 */
function escapeHTML(str) {
  if (typeof str !== 'string') return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
