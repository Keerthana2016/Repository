# SOWTHAS Fashion Academy Website

## 🎨 About This Website

A modern, elegant website for SOWTHAS Fashion Academy - a professional fashion and tailoring training institute. Built with React, featuring a dark purple/pink gradient theme inspired by modern web design trends.

## ✨ Features

- **Hero Section** - Eye-catching introduction with academy stats
- **About Section** - Founder's story and academy mission
- **Why Choose Us** - Key features and benefits
- **Courses** - 6 comprehensive fashion & tailoring courses
- **Gallery** - Real graduation ceremony photos from 2026
- **Testimonials** - Student success stories and reviews
- **Contact Form** - Enrollment form with academy information
- **Responsive Design** - Works perfectly on all devices
- **Modern UI** - Built with Shadcn/UI components and Tailwind CSS

## 🚀 Technology Stack

- **Frontend Framework**: React 19
- **Styling**: Tailwind CSS
- **UI Components**: Shadcn/UI
- **Icons**: Lucide React
- **Build Tool**: Create React App with CRACO

## 📦 Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- Yarn package manager

### Steps to Run Locally

1. **Extract the ZIP file**
   ```bash
   unzip sowthas-academy-website.zip
   cd sowthas-academy-website
   ```

2. **Install Dependencies**
   ```bash
   yarn install
   ```

3. **Start Development Server**
   ```bash
   yarn start
   ```

4. **Open in Browser**
   - The website will automatically open at `http://localhost:3000`

## 📁 Project Structure

```
sowthas-academy-website/
├── public/               # Static files
├── src/
│   ├── components/       # React components
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Features.jsx
│   │   ├── Courses.jsx
│   │   ├── Gallery.jsx
│   │   ├── Testimonials.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── components/ui/    # Shadcn UI components
│   ├── data/
│   │   └── mock.js       # All website data (courses, testimonials, etc.)
│   ├── hooks/            # React hooks
│   ├── App.js            # Main app component
│   ├── App.css           # Global styles
│   └── index.css         # Tailwind imports
├── package.json
└── tailwind.config.js
```

## 🎨 Customization Guide

### Updating Content

All website content is stored in `/src/data/mock.js`. You can easily update:

- **Courses**: Add/edit course details, prices, images
- **Testimonials**: Update student reviews and ratings
- **Stats**: Modify student numbers, ratings, success rates
- **Gallery Images**: Add more graduation photos
- **Contact Info**: Update email, phone, address

### Changing Colors

The color scheme is defined in `tailwind.config.js` and uses:
- Purple gradients: `from-purple-600 to-pink-600`
- Dark backgrounds: `bg-gray-900`, `bg-gray-800`

### Adding New Sections

1. Create a new component in `/src/components/`
2. Import it in `/src/App.js`
3. Add navigation link in `/src/components/Navbar.jsx`

## 🌐 Deployment

### Build for Production

```bash
yarn build
```

This creates an optimized production build in the `build/` folder.

### Deployment Options

- **Vercel**: Connect your GitHub repo to Vercel for automatic deployments
- **Netlify**: Drag and drop the `build` folder to Netlify
- **Traditional Hosting**: Upload the `build` folder contents to your web host

## 📸 Real Images Included

The website includes actual graduation ceremony photos from SOWTHAS Fashion Academy:
- Graduation ceremony group photos
- Certificate distribution moments
- Batch 2026 graduation celebration
- Students with their course completion certificates

## 🎯 Key Highlights

✅ Fully responsive design
✅ Modern dark theme with gradients
✅ Smooth scrolling navigation
✅ Interactive hover effects
✅ Real academy images in gallery
✅ Professional course presentation
✅ Student testimonials
✅ Contact/enrollment form
✅ Social media integration ready

## 💡 Support & Customization

For any customization requests or technical support:
- Email: info@sowthasfashion.com
- Phone: +91 98765 43210

## 📝 License

© 2024 SOWTHAS Fashion Academy. All rights reserved.

---

**Built with ❤️ for empowering women through fashion education**
