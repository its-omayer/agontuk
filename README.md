# Agontuk Blog

A modern, full-featured blog application built with **Next.js 14**, **TypeScript**, and **Tailwind CSS**. This project features a clean, component-based architecture with dark mode support, dynamic content rendering, and optimized performance.

## 🚀 Features

- **Next.js 14** with App Router for optimal performance
- **TypeScript** for type-safe development
- **Tailwind CSS** for rapid UI development
- **Dark/Light Mode** with system preference detection
- **Responsive Design** for all device sizes
- **Component-based Architecture** with reusable UI components
- **Custom Hooks** for state management
- **Context API** for global state
- **Optimized Performance** with code splitting and lazy loading

## 📁 Project Structure

```
agontuk/
├── app/                    # Next.js app router (pages, layouts, routes)
├── components/            # Reusable UI components
│   ├── ui/               # Basic UI components (buttons, cards, etc.)
│   ├── layout/           # Layout components (header, footer, sidebar)
│   └── blog/             # Blog-specific components
├── contexts/              # React context providers
├── data/                  # Data models, types, and utilities
├── hooks/                 # Custom React hooks
├── lib/                   # Utility functions and external libraries
├── public/                # Static assets (images, icons, fonts)
├── styles/                # Global styles and Tailwind configurations
└── configuration/         # Build and project configurations
```

## 🛠️ Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS + CSS Modules
- **Package Manager:** npm
- **Build Tool:** Vite (via Next.js)
- **Version Control:** Git

## 🚦 Getting Started

### Prerequisites
- Node.js 18.17 or later
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/its-omayer/agontuk.git
   cd agontuk
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   Edit `.env.local` with your configuration.

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

## 📦 Configuration Files

- `next.config.mjs` - Next.js configuration
- `tailwind.config.ts` - Tailwind CSS configuration
- `tsconfig.json` - TypeScript configuration
- `postcss.config.mjs` - PostCSS configuration
- `components.json` - UI components configuration

## 🎨 Styling

This project uses:
- **Tailwind CSS** for utility-first styling
- **CSS Modules** for component-scoped styles
- **Custom CSS variables** for theming
- **Responsive design** with mobile-first approach

## 🔧 Development

### Code Style
- ESLint for code linting
- Prettier for code formatting
- TypeScript strict mode enabled

### Commit Guidelines
This project follows conventional commit messages.

### Component Development
Components are organized by feature and type. Each component should:
- Be placed in the appropriate directory
- Include proper TypeScript types
- Have clear prop interfaces
- Include basic documentation

## 🌙 Dark Mode

The application supports dark/light mode with:
- System preference detection
- Manual toggle option
- Persistent user preference

## 📱 Responsive Design

- Mobile-first approach
- Breakpoints: sm, md, lg, xl, 2xl
- Fluid typography and spacing
- Responsive images and components

## 🧪 Testing

Run tests with:
```bash
npm test
# or
yarn test
```

## 🏗️ Build and Deploy

### Build for Production
```bash
npm run build
```

### Deploy to Vercel
This project is optimized for Vercel deployment:
1. Push to GitHub
2. Import project in Vercel
3. Configure environment variables
4. Deploy

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

Omayer - [GitHub](https://github.com/its-omayer)

Project Link: [https://github.com/its-omayer/agontuk](https://github.com/its-omayer/agontuk)

## 🙏 Acknowledgments

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [React Documentation](https://reactjs.org/docs)

---

**Note:** This project is under active development. Features and structure may change.

---

⭐ Star this repo if you find it useful!
