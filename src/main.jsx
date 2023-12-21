import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider } from "@material-tailwind/react";
import { I18nProvider } from './I18nProvider'



ReactDOM.createRoot(document.getElementById('root')).render(

  <ThemeProvider>
    <I18nProvider>
      <NextUIProvider>
        <App />
      </NextUIProvider>
    </I18nProvider>

  </ThemeProvider>


)
