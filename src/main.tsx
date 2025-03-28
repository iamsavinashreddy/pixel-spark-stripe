
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Make sure there's an element with id "root" in the DOM
const rootElement = document.getElementById("root");
if (!rootElement) {
  const rootDiv = document.createElement("div");
  rootDiv.id = "root";
  document.body.appendChild(rootDiv);
}

createRoot(document.getElementById("root")!).render(<App />);
