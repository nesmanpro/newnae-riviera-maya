import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider } from "@material-tailwind/react";
import './i18n.config.js'


ReactDOM.createRoot(document.getElementById('root')).render(

  <ThemeProvider>
    <NextUIProvider>
      <App />
    </NextUIProvider>
  </ThemeProvider>


)
