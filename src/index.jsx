import './style.css'
import ReactDOM from 'react-dom/client'
import App from "./App.jsx"
import Overlay from "./Components/Overlay";

const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render(
  <>
    <App />
    <Overlay />
  </>
);