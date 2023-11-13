import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './fonts/NTJosefine.otf'
import './fonts/Boiling-BlackDemo.ttf'
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider } from "@material-tailwind/react";



ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeProvider>
    <NextUIProvider>
      <App />
    </NextUIProvider>
  </ThemeProvider>

)
