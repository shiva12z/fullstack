# Modern Portfolio Website

A beautiful, responsive portfolio website built with HTML, CSS, and JavaScript. Features a modern design with smooth animations, mobile-friendly navigation, and interactive elements.

## Features

- 🎨 **Modern Design**: Clean, professional layout with gradient backgrounds and smooth animations
- 📱 **Responsive**: Fully responsive design that works on all devices
- 🚀 **Interactive**: Smooth scrolling, hover effects, and form validation
- 📧 **Contact Form**: Functional contact form with validation and notifications
- 🎯 **SEO Friendly**: Semantic HTML structure and optimized for search engines
- ⚡ **Fast Loading**: Optimized CSS and JavaScript for quick page loads

## Sections

1. **Hero Section**: Eye-catching introduction with call-to-action buttons
2. **About**: Personal information and statistics
3. **Skills**: Technical skills organized by category
4. **Projects**: Featured projects with descriptions and links
5. **Contact**: Contact form and social media links

## Customization Guide

### Personal Information

1. **Name and Title**: Update the hero section in `index.html`
   ```html
   <h1 class="hero-title">Hi, I'm <span class="highlight">Your Name</span></h1>
   <p class="hero-subtitle">Full Stack Developer & Creative Problem Solver</p>
   ```

2. **About Section**: Modify the about text and statistics
   ```html
   <p>I'm a passionate developer with a love for creating meaningful digital experiences...</p>
   <div class="stat">
       <h3>3+</h3>
       <p>Years Experience</p>
   </div>
   ```

3. **Contact Information**: Update contact details in the contact section
   ```html
   <span>your.email@example.com</span>
   <span>+1 (555) 123-4567</span>
   <span>Your City, Country</span>
   ```

### Skills

Add or modify skills in the skills section:

```html
<div class="skill-item">
    <i class="fab fa-react"></i>
    <span>React</span>
</div>
```

Available Font Awesome icons for skills:
- `fab fa-html5` - HTML5
- `fab fa-css3-alt` - CSS3
- `fab fa-js` - JavaScript
- `fab fa-react` - React
- `fab fa-node-js` - Node.js
- `fab fa-python` - Python
- `fab fa-git-alt` - Git
- `fab fa-docker` - Docker
- `fab fa-aws` - AWS
- `fas fa-database` - Database
- `fas fa-server` - Server
- `fas fa-code` - Code Editor

### Projects

Update the projects section with your own projects:

```html
<div class="project-card">
    <div class="project-image">
        <div class="project-placeholder">
            <i class="fas fa-laptop-code"></i>
        </div>
    </div>
    <div class="project-content">
        <h3>Your Project Name</h3>
        <p>Project description goes here...</p>
        <div class="project-tech">
            <span>React</span>
            <span>Node.js</span>
        </div>
        <div class="project-links">
            <a href="#" class="project-link"><i class="fab fa-github"></i> Code</a>
            <a href="#" class="project-link"><i class="fas fa-external-link-alt"></i> Live</a>
        </div>
    </div>
</div>
```

### Social Media Links

Update the social media links in the contact section:

```html
<div class="social-links">
    <a href="https://github.com/yourusername" class="social-link"><i class="fab fa-github"></i></a>
    <a href="https://linkedin.com/in/yourusername" class="social-link"><i class="fab fa-linkedin"></i></a>
    <a href="https://twitter.com/yourusername" class="social-link"><i class="fab fa-twitter"></i></a>
    <a href="https://instagram.com/yourusername" class="social-link"><i class="fab fa-instagram"></i></a>
</div>
```

### Colors and Styling

The main color scheme is defined in `portfolio.css`. You can customize:

- Primary Blue: `#2563eb`
- Secondary Purple: `#7c3aed`
- Accent Yellow: `#fbbf24`
- Text Colors: `#1f2937`, `#6b7280`
- Background Colors: `#f8fafc`, `#ffffff`

### Adding Your Photo

Replace the placeholder in the hero section:

```html
<div class="hero-image">
    <img src="path/to/your/photo.jpg" alt="Your Name" class="profile-image">
</div>
```

Add this CSS for the image:

```css
.profile-image {
    width: 300px;
    height: 300px;
    border-radius: 50%;
    object-fit: cover;
    border: 3px solid rgba(255, 255, 255, 0.2);
}
```

### Project Images

Replace the placeholder icons with actual project screenshots:

```html
<div class="project-image">
    <img src="path/to/project-image.jpg" alt="Project Name" class="project-screenshot">
</div>
```

Add this CSS:

```css
.project-screenshot {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
```

## File Structure

```
portfolio/
├── index.html          # Main HTML file
├── portfolio.css       # Stylesheet
├── portfolio.js        # JavaScript functionality
├── README.md          # This file
└── assets/            # Images and other assets (create this folder)
    ├── profile.jpg
    └── projects/
        ├── project1.jpg
        ├── project2.jpg
        └── project3.jpg
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Performance Tips

1. **Optimize Images**: Compress images before adding them to the project
2. **Minify CSS/JS**: Use minified versions for production
3. **CDN**: The Font Awesome and Google Fonts are loaded from CDN for better performance
4. **Lazy Loading**: Consider adding lazy loading for images if you have many

## Deployment

### GitHub Pages
1. Push your code to a GitHub repository
2. Go to Settings > Pages
3. Select source branch (usually `main`)
4. Your site will be available at `https://username.github.io/repository-name`

### Netlify
1. Drag and drop your project folder to Netlify
2. Your site will be deployed instantly
3. You can connect your GitHub repository for automatic deployments

### Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in your project directory
3. Follow the prompts to deploy

## Customization Examples

### Dark Theme
Add this CSS to create a dark theme:

```css
body {
    background-color: #1f2937;
    color: #f9fafb;
}

.navbar {
    background: rgba(31, 41, 55, 0.95);
}

.hero {
    background: linear-gradient(135deg, #1f2937 0%, #374151 100%);
}
```

### Different Color Schemes
Replace the color variables in CSS:

```css
:root {
    --primary-color: #10b981;    /* Green theme */
    --secondary-color: #059669;
    --accent-color: #f59e0b;
}
```

## Support

If you need help customizing your portfolio:

1. Check the browser console for any JavaScript errors
2. Ensure all file paths are correct
3. Validate your HTML using the W3C validator
4. Test on different devices and browsers

## License

This project is open source and available under the [MIT License](LICENSE).

## Credits

- Font Awesome for icons
- Google Fonts (Inter) for typography
- CSS Grid and Flexbox for layout
- Intersection Observer API for animations

---

**Happy coding! 🚀** 