import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Create a new div element
const rootDiv = document.createElement('div');
rootDiv.id = 'root';

// Append it to the document body
document.body.appendChild(rootDiv);

// Create root and render
const root = createRoot(rootDiv);
root.render(
  <StrictMode>
    <App />
  </StrictMode>
)
// createRoot(document.body).render(
//   <StrictMode>
//     <App />
//   </StrictMode>
// )

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>
// )
