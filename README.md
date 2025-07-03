# 🥋 DoBu Martial Arts Web Application

A modern, responsive martial arts website built with pure HTML5, CSS3, and JavaScript. This project demonstrates professional web development practices without relying on external frameworks, showcasing custom implementations of responsive design, interactive navigation, and dynamic content.

![DoBu Martial Arts Banner](https://github.com/user-attachments/assets/af475025-43c3-4758-9c9e-b9b7bd9de9a5)

## 🌐 **Live Demo**
**🔗 [View Live Website](https://shir-hue.github.io/Judo-Martial-Arts-Web-Page/)**

---

## 📋 **Table of Contents**
- [Overview](#overview)
- [Features](#features)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)
- [Installation & Setup](#installation--setup)
- [Development](#development)
- [Deployment](#deployment)
- [Browser Compatibility](#browser-compatibility)
- [Contributing](#contributing)
- [License](#license)
- [Author](#author)

---

## 🎯 **Overview**

DoBu Martial Arts is a comprehensive web application designed for a martial arts academy. The project emphasizes clean code architecture, responsive design principles, and modern web development best practices. Built entirely from scratch without frameworks, it demonstrates deep understanding of core web technologies.

### **Key Objectives**
- ✅ Create a professional, multi-page website using vanilla technologies
- ✅ Implement responsive design across all device types
- ✅ Build interactive components with pure JavaScript
- ✅ Practice modern project organization and version control
- ✅ Deploy production-ready application on GitHub Pages

---

## ✨ **Features**

### **🎨 Design & UI/UX**
- **Responsive Design**: Seamless experience across desktop, tablet, and mobile
- **Modern UI**: Clean, professional design with intuitive navigation
- **Mobile-First**: Hamburger menu and touch-friendly interfaces
- **Custom Animations**: Smooth transitions and interactive elements
- **Accessibility**: Semantic HTML and ARIA labels for screen readers

### **📱 Interactive Components**
- **Dynamic Navigation**: Responsive hamburger menu with smooth animations
- **Contact Form**: Client-side validation and user feedback
- **Scroll-to-Top**: Smooth scrolling with animated button
- **Image Galleries**: Optimized loading and responsive layouts
- **Interactive Maps**: Embedded Google Maps for location services

### **⚡ Performance & SEO**
- **Fast Loading**: Optimized images and efficient CSS/JS
- **SEO Optimized**: Meta tags, structured data, and semantic HTML
- **Cross-Browser**: Compatible with all modern browsers
- **Progressive Enhancement**: Graceful fallbacks for older browsers

---


## � **Project Structure**

```
Judo-Martial-Arts-Web-Page/
├── index.html                 # 🏠 Main homepage (GitHub Pages entry point)
├── css/                       # 🎨 Stylesheets
│   ├── home.css              #   Homepage styles
│   ├── classes.css           #   Classes page styles
│   ├── trainers.css          #   Trainers page styles
│   ├── memberships.css       #   Memberships page styles
│   └── contact.css           #   Contact page styles
├── html/                      # 📄 Additional pages
│   ├── classes.html          #   Martial arts programs
│   ├── trainers.html         #   Instructor profiles
│   ├── memberships.html      #   Pricing and plans
│   └── contact.html          #   Contact form and location
├── img/                       # 🖼️ Images and assets
│   ├── Banner.jpg            #   Hero banners
│   ├── testimonial-*.jpg     #   Customer testimonials
│   ├── Trainer-*.webp        #   Instructor photos
│   ├── class.item.*.jpg      #   Class images
│   └── social-icons/         #   Social media icons
├── js/                        # ⚡ JavaScript files
│   ├── home.js               #   Main functionality & hamburger menu
│   └── script.js             #   Additional utilities
├── .vscode/                   # 🔧 VS Code configuration
│   └── settings.json         #   Development settings
└── README.md                  # 📖 Project documentation
```

### **🌟 Page Overview**

| Page | Purpose | Key Features |
|------|---------|--------------|
| **Home** (`index.html`) | Landing page with hero section | Auto-typing animation, CTA buttons, testimonials |
| **Classes** (`html/classes.html`) | Martial arts programs | Class schedules, program details, timetables |
| **Trainers** (`html/trainers.html`) | Instructor profiles | Staff bios, certifications, specialties |
| **Memberships** (`html/memberships.html`) | Pricing and plans | Membership tiers, facilities, pricing |
| **Contact** (`html/contact.html`) | Contact and location | Contact form, map integration, business hours |

---

## 🛠️ **Technologies Used**

### **Frontend Stack**
- **HTML5**: Semantic markup, accessibility features, SEO optimization
- **CSS3**: Flexbox, Grid, animations, responsive design, custom properties
- **JavaScript (ES6+)**: DOM manipulation, event handling, form validation

### **External Libraries**
- **[Typed.js](https://mattboldt.com/demos/typed-js/)**: Auto-typing animation effects
- **Google Maps API**: Interactive location mapping

### **Development Tools**
- **Git & GitHub**: Version control and repository hosting
- **VS Code**: Code editor with Live Server extension
- **GitHub Pages**: Static site hosting and deployment

---

## 🚀 **Installation & Setup**

### **Prerequisites**
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Git (optional, for cloning)
- Code editor (VS Code recommended)

### **Quick Start**

1. **Clone the repository**
   ```bash
   git clone https://github.com/Shir-hue/Judo-Martial-Arts-Web-Page.git
   cd Judo-Martial-Arts-Web-Page
   ```

2. **Open the project**
   ```bash
   # Option 1: Direct file opening
   firefox index.html
   
   # Option 2: Local server (recommended)
   python3 -m http.server 8000
   # Then visit: http://localhost:8000
   ```

3. **For development with VS Code**
   ```bash
   code .
   # Install Live Server extension
   # Right-click index.html → "Open with Live Server"
   ```

---

## 💻 **Development**

### **File Structure Guidelines**
- **HTML**: Semantic structure, proper nesting, accessibility attributes
- **CSS**: BEM methodology, mobile-first responsive design
- **JavaScript**: ES6+ features, modular functions, event delegation

### **Code Standards**
- ✅ **Responsive Design**: Mobile-first approach with breakpoints
- ✅ **Accessibility**: ARIA labels, semantic HTML, keyboard navigation
- ✅ **Performance**: Optimized images, minified assets, efficient selectors
- ✅ **SEO**: Meta tags, structured data, semantic markup

### **Development Workflow**
1. Make changes to source files
2. Test in multiple browsers and device sizes
3. Validate HTML/CSS using browser dev tools
4. Commit changes with descriptive messages
5. Push to GitHub for automatic deployment

---

## 🌍 **Deployment**

The site is automatically deployed to GitHub Pages when changes are pushed to the main branch.

### **Deployment Process**
1. **Push changes**
   ```bash
   git add .
   git commit -m "Your descriptive commit message"
   git push origin main
   ```

2. **GitHub Pages automatically builds and deploys**
   - Live site: https://shir-hue.github.io/Judo-Martial-Arts-Web-Page/
   - Build time: ~2-5 minutes

### **Custom Domain** (Optional)
To use a custom domain:
1. Add `CNAME` file to repository root
2. Configure DNS settings with your domain provider
3. Enable HTTPS in GitHub Pages settings

---


## 🌐 **Browser Compatibility**

| Browser | Version | Status |
|---------|---------|--------|
| Chrome | 90+ | ✅ Fully Supported |
| Firefox | 88+ | ✅ Fully Supported |
| Safari | 14+ | ✅ Fully Supported |
| Edge | 90+ | ✅ Fully Supported |
| Opera | 76+ | ✅ Fully Supported |

### **Mobile Support**
- ✅ iOS Safari 14+
- ✅ Chrome Mobile 90+
- ✅ Samsung Internet 14+
- ✅ Firefox Mobile 88+

---

## 🤝 **Contributing**

Contributions are welcome! Please follow these steps:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. **Make your changes**
4. **Test thoroughly**
5. **Commit with descriptive messages**
   ```bash
   git commit -m "Add: Your descriptive commit message"
   ```
6. **Push to your fork**
   ```bash
   git push origin feature/your-feature-name
   ```
7. **Open a Pull Request**

### **Code Style Guidelines**
- Use semantic HTML5 elements
- Follow BEM CSS methodology
- Write descriptive commit messages
- Test on multiple browsers and devices
- Ensure accessibility standards compliance

---

## 📄 **License**

This project is developed for **educational and academic purposes only**. 

- ✅ **Allowed**: Learning, studying, academic reference
- ❌ **Not Allowed**: Commercial use, redistribution for profit
- 📚 **Academic Use**: Feel free to reference for educational projects

---

## 👤 **Author**

**Percival Santiago Ignacio**  
*Software Engineering Student*

- 🌐 **GitHub**: [Shir-hue](https://github.com/Shir-hue)
- 📧 **Contact**: Available through GitHub
- 🎓 **Institution**: Software Engineering Program
- 💼 **Portfolio**: [View Other Projects](https://github.com/Shir-hue?tab=repositories)

---

## 🙏 **Acknowledgments**

- **Academic Institution**: For providing the learning framework
- **Open Source Community**: For inspiration and best practices
- **Web Development Community**: For tutorials and documentation
- **DoBu Martial Arts**: For the conceptual inspiration

---

## 📊 **Project Stats**

- **Lines of Code**: ~2,500+
- **Files**: 15+ source files
- **Pages**: 5 fully responsive pages
- **Development Time**: Academic semester project
- **Last Updated**: July 2025

---

**⭐ If you found this project helpful, please consider giving it a star!**

**🔗 [Live Demo](https://shir-hue.github.io/Judo-Martial-Arts-Web-Page/) | [Repository](https://github.com/Shir-hue/Judo-Martial-Arts-Web-Page)**
