# React Flash Cards

A modern, responsive flash card application built with React and TypeScript. This project demonstrates core React concepts and modern frontend development practices.

## Features

- 🎴 Interactive flash cards with flip animation
- 📱 Responsive design that works on all devices
- 🌓 Dark mode support
- 📊 Progress tracking
- ⚡ Built with TypeScript for type safety
- 🎨 Modern CSS with custom properties and media queries

## Technologies Used

- React 18
- TypeScript
- Vite
- CSS3 (with modern features like CSS custom properties and media queries)

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/react-flashcards.git
```

2. Navigate to the project directory:
```bash
cd react-flashcards
```

3. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

4. Start the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

5. Open your browser and visit `http://localhost:5173`

## Project Structure

```
src/
├── components/
│   ├── FlashCard.tsx    # Main flash card component
│   └── ProgressBar.tsx  # Progress tracking component
├── data/
│   └── cards.ts        # Flash card data and types
├── App.tsx             # Main application component
├── App.css             # Application styles
├── index.css           # Global styles
└── main.tsx           # Application entry point
```

## Key Features Implementation

### TypeScript Interfaces
The project uses TypeScript interfaces to ensure type safety:
```typescript
export interface Card {
  id: number;
  question: string;
  answer: string;
}
```

### React Hooks
Demonstrates the use of React hooks for state management:
- `useState` for managing card state and navigation
- Custom hook patterns for card navigation logic

### Modern CSS Features
- CSS Custom Properties for theming
- Media queries for responsive design
- Flexbox for layout
- Modern CSS selectors and nesting

### Component Architecture
- Modular component design
- Props interface definitions
- Separation of concerns between data and presentation

## Future Development

Maybe at some point I'll come back and redo the progress bar to (somehow) take up the full width of its container. Or maybe I'll just use some React progress bar component available in npm.

There's also a chance I completely redo this app to incorporate a lot more flashcard functionality (adding, editing, perhaps saving to cookies, etc.). This is tentative as I might choose to create a new flashcard project from scratch. If I do end up making a new repo, I'll update this readme to link there.

## License

This project is licensed under the MIT License - see the LICENSE file for details.