import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Header } from "./components/Header"
import { Footer } from './components/Footer'



function App() {

  return (
    <>
      <BrowserRouter>

        <div className="h-screen bg-[#FFF8EA] static">
          <Routes>
            <Route exact path='/' element={<Header />} />
          </Routes>
          <div className="w-full absolute bottom-0">

            <Footer />
          </div>
        </div>



      </BrowserRouter>
    </>
  )
}

export default App
