import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Header } from "./components/Header"

function App() {

  return (
    <>
      <BrowserRouter>
        <div className="h-screen bg-gray-900">
          <Routes>
            <Route exact path='/' element={<Header />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
