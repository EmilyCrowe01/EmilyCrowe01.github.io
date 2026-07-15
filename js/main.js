// Typewriter effect
const name = "Emily Crowe";
const el = document.getElementById('hero-name');
let i = 0;

el.innerHTML = '<span class="cursor"></span>';

function type() {
    if (i < name.length) {
        el.innerHTML = name.slice(0, i + 1) + '<span class="cursor"></span>';
        i++;
        setTimeout(type, i === 1 ? 300 : 80 + Math.random() * 40);
    } else {
        setTimeout(() => {
            el.querySelector('.cursor').style.display = 'none';
        }, 2200);
    }
}

setTimeout(type, 600);

const projectsList = document.getElementById('projects-list');

projects.forEach(function (p) {
    const card = document.createElement('a');
    card.className = 'project-card';
    card.href = 'project.html?name=' + p.slug;
    card.innerHTML = `
    <div class="app-icon" style="background:${p.iconGradient}">
        ${p.icon ? `<img src="${p.icon}" alt="${p.name} icon" />` : ''}
    </div>
    <div class="project-info">
      <div class="project-header">
        <span class="project-name">${p.name}</span>
        <span class="project-badge">${p.badge}</span>
      </div>
      <p class="project-desc">${p.desc}</p>
      <div class="tech-tags">
        ${p.tech.map(function (t) { return `<span class="tech-tag">${t}</span>`; }).join('')}
      </div>
      <div class="project-links">
        ${p.links.map(function (l) { return `<a class="proj-link ${l.cls || ''}" href="${l.href}" target="_blank">${l.label}</a>`; }).join('')}
      </div>
      <span class="card-hint">${'ontouchstart' in window ? 'tap' : 'click'} for more details →</span>
    </div>
  `;
    projectsList.appendChild(card);
});

const skills = [
    {
        category: "Mobile",
        items: ["Swift", "SwiftUI", "iOS Development", "SwiftData", "Swift Charts", "Animations", "AV Foundation"]
    },
    {
        category: "Web",
        items: ["HTML & CSS", "JavaScript", "Next.js", "Vercel", "Vercel Chron", "Neon", "Resend", "Bcrypt"]
    },
    {
        category: "Design & Visual",
        items: ["UI/UX Design", "Final Cut Pro"]
    },
    {
        category: "Dev Tools",
        items: ["Git & GitHub", "Xcode", "VSCode", "TestFlight", "npm", "iTerm/Terminal"]
    },
    {
        category: "Music & Audio",
        items: ["Logic Pro X", "Pro Tools", "Sibelius", "Audio Engineering", "Music Composition"]
    }
]

const skillsGrid = document.getElementById('skills-grid');

skills.forEach(function (group) {
    const groupEl = document.createElement('div');
    groupEl.className = 'skill-group';
    groupEl.innerHTML = `<div class="skill-category">${group.category}</div>`;

    const pillsEl = document.createElement('div');
    pillsEl.className = 'skill-pills';

    group.items.forEach(function (item) {
        const pill = document.createElement('span');
        pill.className = 'skill-pill';
        pill.textContent = item;
        pillsEl.appendChild(pill);
    });

    groupEl.appendChild(pillsEl);
    skillsGrid.appendChild(groupEl);
});

const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
        if (e.isIntersecting) {
            e.target.classList.add('visible');
        }
    });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(function (el) {
    observer.observe(el);
});

const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');

hamburger.addEventListener('click', function () {
    mobileMenu.classList.toggle('active');
});

document.querySelectorAll('.mobile-link').forEach(function (link) {
    link.addEventListener('click', function () {
        mobileMenu.classList.remove('active');
    });
});