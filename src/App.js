import React from "react";
import Accordion from "./components/Accordion";

const items = [
  {
    title: "What is React?",
    content: "React is a Frontend Javascript Framework",
  },
  {
    title: "Why use React?",
    content: "React is a favorite JS Library among Engineers",
  },
  {
    title: "How do you use React?",
    content: "You use React by creating components",
  },
];

export default function App() {
  return (
    <div>
      <Accordion items={items} />
    </div>
  );
}
