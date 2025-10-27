# CP Academy Website

A modern, responsive training academy website built with Astro, featuring a beautiful gradient design and smooth animations.

## 🌟 Features

- **Modern Design**: Gradient-based UI with smooth animations and transitions
- **Responsive Layout**: Mobile-first approach with optimized navigation for all devices
- **Performance Optimized**: Static site generation with Astro for lightning-fast page loads
- **SEO Friendly**: Built-in SEO optimization with meta tags and semantic HTML
- **Accessibility**: WCAG compliant with proper ARIA labels and keyboard navigation
- **Dynamic Training Catalog**: Browse various training programs with detailed information
- **PDF Brochures**: Downloadable training program brochures
- **Docker Support**: Easy deployment with Docker and nginx

## 🚀 Tech Stack

- **Framework**: [Astro](https://astro.build)
- **Styling**: [Tailwind CSS](https://tailwindcss.com) + [DaisyUI](https://daisyui.com)
- **Deployment**: Docker + Nginx + Caddy
- **CI/CD**: GitHub Actions

## 📁 Project Structure

```text
/
├── public/
│   ├── assets/          # Images, videos, and static assets
│   └── brochures/       # Downloadable PDF brochures
├── src/
│   ├── components/      # Reusable Astro components
│   │   ├── about/       # About page components
│   │   ├── formation/   # Training pages components
│   │   ├── home/        # Homepage components
│   │   ├── Footer.astro
│   │   └── Navbar.astro
│   ├── data/            # Training programs data
│   ├── layouts/         # Page layouts
│   ├── pages/           # Route pages
│   ├── scripts/         # Client-side JavaScript
│   └── styles/          # Global styles
├── nginx.conf           # Nginx configuration
├── dockerfile           # Docker configuration
└── compose.yml          # Docker Compose configuration
```

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 🐳 Docker Deployment

### Build and Run with Docker

```bash
# Build the image
docker build -t cpacademy:latest .

# Run the container
docker run -d -p 3000:80 cpacademy:latest
```

### Using Docker Compose

```bash
# Start the application
docker-compose up -d

# Stop the application
docker-compose down

# Rebuild and restart
docker-compose up -d --build
```

## 🌐 Production Setup

The application is designed to work with a reverse proxy setup:

1. **Caddy**: Handles SSL/TLS certificates and HTTPS
2. **Nginx**: Serves static files with compression and caching
3. **Docker**: Containerizes the application for easy deployment

### Example Caddy Configuration

```caddyfile
your-domain.com {
    reverse_proxy localhost:3000
}
```

## 🎨 Customization

### Gradient Colors

The site uses a consistent gradient theme. To modify the gradient colors, update the Tailwind configuration or the inline gradient values in components:

```css
/* Current gradient */
linear-gradient(90deg, rgba(65, 88, 208, 1) 0%, rgba(199, 81, 192, 1) 50%, rgba(255, 203, 112, 1) 100%)
```

### Training Programs

Training programs are defined in `src/data/formations.ts`. Add or modify programs by editing this file.

## 🔧 Development

### Prerequisites

- Node.js 18.x or higher
- npm or pnpm

### Local Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev
```

The site will be available at `http://localhost:4321`

## 📦 Build for Production

```bash
# Build the project
npm run build

# The output will be in ./dist/
```

## 🚢 Deployment

The project includes a GitHub Actions workflow for automated deployment. The workflow:

1. Builds the Astro site
2. Creates a Docker image
3. Deploys to the production server

## 📄 License

This project is proprietary and confidential.

## 🤝 Contributing

This is a private project. For any inquiries, please contact the project maintainers.

---

Built with ❤️ using [Astro](https://astro.build)
