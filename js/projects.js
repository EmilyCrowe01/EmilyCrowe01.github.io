const projects = [
  {
    name: "IBSAid",
    icon: "images/ibsaid-images/ibsaid-logo.png",
    badge: "Live on App Store",
    desc: "IBSAid is an app designed to support individuals with IBS or IBS like symptoms by helping them track tolerable foods, manage symptoms, and focus on wellness through guided breathing.",
    longDesc: "IBSAid started as a personal project. I have IBS myself and couldn't find a free, simple tool that actually covered everything I needed. So I built one. The app lets you track foods you can and can't tolerate, log digestive episodes with details like timing and consistency, and access guided breathing exercises for the anxiety and panic that can come with a bad flare-up. I wanted it to feel calm, approachable, and easy to use because the last thing you need when you're not feeling well is a complicated app.",
    behind: "The guided breathing feature was the biggest technical challenge. Building smooth, looping animations that stay perfectly in sync with the breathing rhythm took a lot of iteration. I also built the entire data layer with SwiftData, which meant thinking carefully about how to structure and persist health-related information efficiently. This project taught me SwiftData storage, animation, and how to write clean efficient code that doesn't make the app feel slow. I'm proud of the entire app, but especially that it exists for free for people who need it.",
    tech: ["SwiftUI", "Swift", "SwiftData", "Swift Charts", "Animations", "Xcode"],
    iconGradient: "linear-gradient(135deg, #0ABFBC, #0A8F8C)",
    accentColor: "#0ABFBC",
    video: "ud1NCPbbn-s",
    screenshots: ["images/ibsaid-images/Home.png", "images/ibsaid-images/Food list.png", "images/ibsaid-images/Breathe.png", "images/ibsaid-images/Digestion.png"],
    slug: "ibsaid",
    links: [
      { label: "App Store download", href: "https://apps.apple.com/us/app/ibsaid/id6757767192", cls: "appstore" },
      { label: "Support", href: "ibsaidsupport.html" }
    ]
  },
  {
    name: "Pawgress",
    icon: "images/pawgress-images/pawgress-logo.png",
    badge: "Open Source",
    desc: "Pawgress helps individuals by providing simple daily tasks to inspire users to better themselves in different aspects of life.",
    longDesc: "Pawgress is a cute app focused on helping users through small daily tasks. As users progress, a virtual pet of their choice supports them at each task completion. The user unlocks special prizes for their pets, making daily life better for them and their furry friend.",
    behind: "When building Pawgress, I wanted to create something to showcase JSON use across views and data persistance. Utilizing the capabilities of JSON, I was able to create a group that included completed days, revealed rewards, etc. This app also took a lot of user design from backgrounds to reward decor items and even the design of the virtual pet themselves. My favorite part of building Pawgress was seeing it really come to life with audio inclusion. I created the background music as well as added sound effects across the app, really tying the whole project together.",
    tech: ["SwiftUI", "Swift", "JSON", "AV Foundation"],
    iconGradient: "none",
    accentColor: "#FF8C42",
    video: "UV41e9b2mx8",
    screenshots: ["images/pawgress-images/pawgress-test1.png"],
    slug: "pawgress",
    links: [
      { label: "GitHub", href: "https://github.com/EmilyCrowe01/Pawgress" }
    ]
  },
    {
    name: "Admin Dashboard",
    icon: null,
    badge: "Client Work",
    desc: "A custom admin dashboard built for JP Alfonso Studios, featuring newsletter management and a scalable foundation for future tools.",
    longDesc: "A fully functional admin dashboard built for JP Alfonso Studios, a tattoo studio based in Atlanta, GA. The dashboard includes a secure login and dedicated pages for managing the studio's automated newsletter which is built to be expanded as the studio's needs grow.",
    behind: "This was one of my first projects using Next.js. Over several weeks I worked closely with both the client and my dev team to make sure every requirement was covered. The authentication was built with Bcrypt, and the newsletter automation integrates Resend and Vercel Cron to handle scheduled email sending. It was my first real experience collaborating professionally on a technical project and I learned a lot about building for someone else's needs, not just my own.",
    tech: ["Next.js", "Vercel", "Vercel Chron", "Neon", "Resend", "Bcrypt", "VSCode"],
    iconGradient: "linear-gradient(135deg, #111111, #1a1a1a, #E8400A)",
    accentColor: "#E8400A",
    video: null,
    screenshots: null,
    slug: "admin-page",
    links: [
      { label: "Check out their website", href: "https://jpalfonso-studios-site.vercel.app" }
    ]
  },
   {
    name: "Automated Newsletter",
    icon: null,
    badge: "Client Work",
    desc: "An AI-powered newsletter system built for JP Alfonso Studios. The staff fills out a form, Claude writes the newsletter, and it goes out automatically to subscribers.",
    longDesc: "JP Alfonso Studios wanted a way to send a professional monthly newsletter without pulling their artists away from clients to write it. This system lets staff log into the admin dashboard, fill out a simple form choosing a template and providing key info, and the rest is handled automatically. Claude generates the newsletter based on the form input, which is then sent to the client via Resend for review with options to edit, request a full rewrite, or approve it. Once approved, it sends to all newsletter subscribers at the scheduled day and time. Templates are built in HTML that renders correctly in email clients, and everything is stored in Neon.",
    behind: "This project had a lot of moving parts. Integrating Vercel Cron, the Claude API, Resend, and Neon into a single seamless workflow meant every piece had to communicate reliably. One broken link and the whole pipeline fails, so error handling and testing were just as important as building the features themselves. Building HTML email templates was its own challenge since email clients are notoriously inconsistent and getting layouts to render correctly across all of them took real patience. The end result is a system a non-technical person can use in minutes, saving the studio an estimated $1,000+ in billable artist time every month.",
    tech: ["Next.js", "Vercel", "Vercel Chron", "Neon", "Resend", "Bcrypt", "VSCode"],
    iconGradient: "linear-gradient(135deg, #E8400A, #1a1a1a, #111111)",
    accentColor: "#E8400A",
    video: null,
    screenshots: null,
    slug: "auto-newsletter",
    links: [
      { label: "Check out their website", href: "https://jpalfonso-studios-site.vercel.app" }
    ]
  }
]