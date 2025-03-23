# Next.js Starter Template

A modern, feature-rich starter template for Next.js applications with TypeScript, Tailwind CSS, and more.

## Features

- ⚡️ **Next.js 15** with App Router
- 🔍 **TypeScript** for type safety
- 🎨 **Tailwind CSS** for utility-first styling
- 📑 **ESLint & Prettier** for code formatting
- 🧩 **Reusable Components** for rapid UI development
- 📱 **Responsive Layouts** for all device sizes
- 🔄 **State Management** with Zustand
- 🌐 **API Integration** with Axios
- ⚙️ **Path Aliases** for cleaner imports

## Getting Started

### Prerequisites

- Node.js 18.17.0 or higher
- npm or yarn or pnpm

### Installation

1. Clone the repository:

```bash
git clone https://github.com/panteleiza/mcp-nextjs-app.git
cd mcp-nextjs-app
```

2. Install dependencies:

```bash
npm install
# or
yarn
# or
pnpm install
```

3. Start the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Project Structure

```
mcp-nextjs-app/
├── public/             # Static assets
├── src/
│   ├── app/            # App Router pages
│   ├── components/     # UI components
│   │   ├── layout/     # Layout components
│   │   └── ui/         # UI components
│   ├── hooks/          # Custom hooks
│   ├── lib/            # Utility functions
│   ├── store/          # State management
│   ├── styles/         # Global styles
│   └── types/          # TypeScript types
├── .eslintrc.json      # ESLint configuration
├── .prettierrc         # Prettier configuration
├── next.config.js      # Next.js configuration
├── postcss.config.js   # PostCSS configuration
├── tailwind.config.js  # Tailwind CSS configuration
└── tsconfig.json       # TypeScript configuration
```

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the application for production
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint to check code quality
- `npm run format` - Format code with Prettier

## Customization

### Styling

This template uses Tailwind CSS for styling. You can customize the design by modifying the `tailwind.config.js` file.

### Components

The template includes several reusable UI components in the `src/components` directory. You can customize these components or create new ones to suit your needs.

### State Management

For state management, this template uses Zustand. You can create new stores in the `src/store` directory.

## Learn More

To learn more about the technologies used in this template, check out the following resources:

- [Next.js Documentation](https://nextjs.org/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Zustand Documentation](https://github.com/pmndrs/zustand)

## License

This project is licensed under the MIT License - see the LICENSE file for details.