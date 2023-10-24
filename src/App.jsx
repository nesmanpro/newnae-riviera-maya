import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Header } from "./components/Header"
import { Footer } from './components/Footer'
import { Details } from './components/Details'



function App() {

  return (
    <>
      <BrowserRouter>

        <div className="bg-[#FFF8EA]">
          <Routes>
            <Route exact path='/' element={<Header />} />
          </Routes>
          <Details />
          <Footer />
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
