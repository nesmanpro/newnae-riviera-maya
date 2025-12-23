// React
import { BrowserRouter, Route, Routes } from 'react-router-dom'

// components
import { Header } from "./components/layouts/Header"
import { Footer } from './components/layouts/Footer'
import { Whatsapp } from './components/layouts/Whatsapp'
import { ItemListContainer } from './components/sections/ItemListContainer'
import { ItemDetailContainer } from './components/sections/ItemDetailContainer'

// pages
import { Contact } from './pages/Contact'
import { Nosotros } from './pages/Nosotros'

import { I18nProvider } from './i18n/I18nProvider'
import { DataProvider } from './context/DataContext'

function App() {
  return (
    <>
      <I18nProvider>
        <DataProvider>
          <BrowserRouter>
            <div className="bg-arenaClaro min-h-screen">
              <Header />

              <Routes>
                <Route path="/" element={<ItemListContainer />} />
                <Route path="/nosotros" element={<Nosotros />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/item/:id" element={<ItemDetailContainer />} />
              </Routes>

              <Whatsapp />
              <Footer />
            </div>
          </BrowserRouter>
        </DataProvider>
      </I18nProvider>
    </>
  )
}

export default App
