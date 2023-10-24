import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Header } from "./components/Header"
import { Footer } from './components/Footer'



function App() {

  return (
    <>
      <BrowserRouter>
        <div className="h-screen bg-[#FFF8EA]">
          <Routes>
            <Route exact path='/' element={<Header />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
