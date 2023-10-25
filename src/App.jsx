import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Header } from "./components/Header"
import { Footer } from './components/Footer'
import { Details } from './components/Details'
import { Contact } from './components/Contact'



function App() {

  return (
    <>
      <BrowserRouter>

        <div className="bg-[#FFF8EA]">
          <Header />
          <Routes>
            <Route exact path='/' element={<Details />} />
            <Route exact path='/contact' element={<Contact />} />

          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
