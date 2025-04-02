interface Card {
  id: number;
  question: string;
  answer: string;
}

const cards: Card[] = [
  {
    id: 1,
    question: "What is JSX?",
    answer: "JSX is a syntax extension for JavaScript that allows you to write HTML-like code within JavaScript. It's commonly used in React to describe what the UI should look like."
  },
  {
    id: 2,
    question: "What is the difference between state and props?", 
    answer: "Props are read-only and passed down from parent components, while state is managed internally by a component and can be updated using setState()."
  },
  {
    id: 3,
    question: "What is the Virtual DOM?",
    answer: "The Virtual DOM is a lightweight copy of the actual DOM. React uses it to improve performance by minimizing direct manipulation of the DOM, only updating what's necessary."
  },
  {
    id: 4,
    question: "What are React Hooks?",
    answer: "Hooks are functions that allow you to use state and other React features in functional components. Common hooks include useState, useEffect, and useContext."
  },
  {
    id: 5,
    question: "What is the useEffect Hook used for?",
    answer: "useEffect is used for handling side effects in functional components, such as data fetching, subscriptions, or manually changing the DOM."
  },
  {
    id: 6,
    question: "What is React Context?",
    answer: "Context provides a way to pass data through the component tree without having to pass props manually at every level. It's useful for sharing global data."
  },
  {
    id: 7,
    question: "What are controlled components?",
    answer: "Controlled components are form elements whose values are controlled by React state. The form data is handled by the React component rather than the DOM."
  },
  {
    id: 8,
    question: "What is prop drilling?",
    answer: "Prop drilling occurs when props are passed through multiple levels of components that don't need the data themselves but only pass it down to lower components."
  },
  {
    id: 9,
    question: "What is the purpose of keys in React lists?",
    answer: "Keys help React identify which items have changed, been added, or been removed in lists. They should be unique among siblings."
  },
  {
    id: 10,
    question: "What is code splitting in React?",
    answer: "Code splitting is the practice of splitting your code into smaller chunks which can be loaded on demand, improving the initial load performance of your app."
  },
  {
    id: 11,
    question: "What is the useCallback Hook?",
    answer: "useCallback is a hook that returns a memoized version of a callback that only changes if one of its dependencies has changed. It's useful for optimizing performance."
  },
  {
    id: 12,
    question: "What is the useMemo Hook?",
    answer: "useMemo is a hook that memoizes expensive computations so they are only re-computed when their dependencies change."
  },
  {
    id: 13,
    question: "What are React fragments?",
    answer: "Fragments let you group multiple children elements without adding extra nodes to the DOM. They're written as <> </> or <Fragment> </Fragment>."
  },
  {
    id: 14,
    question: "What is the useRef Hook?",
    answer: "useRef returns a mutable ref object that persists for the full lifetime of the component. It's commonly used to access DOM elements directly."
  },
  {
    id: 15,
    question: "What is React.memo()?",
    answer: "React.memo is a higher-order component that can be used to wrap components that shouldn't re-render when their props haven't changed."
  },
  {
    id: 16,
    question: "What are custom hooks?",
    answer: "Custom hooks are JavaScript functions that start with 'use' and may call other hooks. They let you extract component logic into reusable functions."
  },
  {
    id: 17,
    question: "What is the useReducer Hook?",
    answer: "useReducer is a hook for managing complex state logic in React applications. It's similar to how Redux works, accepting a reducer function and initial state."
  },
  {
    id: 18,
    question: "What are portals in React?",
    answer: "Portals provide a way to render children into a DOM node that exists outside the DOM hierarchy of the parent component."
  },
  {
    id: 19,
    question: "What is the StrictMode component in React?",
    answer: "StrictMode is a development mode only feature that helps identify potential problems in an application by intentionally double-rendering components."
  },
  {
    id: 20,
    question: "What is the difference between Element and Component in React?",
    answer: "An Element is a plain object describing what you want to appear on the screen, while a Component is a function or class that accepts props and returns Elements."
  }
];

export default cards;
