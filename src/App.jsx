import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Header } from "./components/Header"
import { Footer } from './components/Footer'
import { Contact } from './components/Contact'
import { Details } from './components/Details'
import { ItemListContainer } from './components/ItemListContainer'



function App() {

  return (
    <>
      <BrowserRouter>

        <div className="bg-[#FFF8EA]">
          <Header />
          <Routes>
            <Route exact path='/' element={<ItemListContainer />} />
            <Route exact path='/contact' element={<Contact />} />

          </Routes>

          <Footer />
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
