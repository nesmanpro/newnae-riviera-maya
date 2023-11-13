import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Header } from "./components/Header"
import { Footer } from './components/Footer'
import { Contact } from './pages/Contact'
import { ItemListContainer } from './pages/ItemListContainer'
import { ItemDetailContainer } from './pages/ItemDetailContainer'



function App() {

  return (
    <>
      <BrowserRouter>

        <div className="bg-arenaClaro">
          <Header />
          <Routes>
            <Route exact path='/' element={<ItemListContainer />} />
            <Route exact path='/contact' element={<Contact />} />
            <Route exact path='/item/:id' element={<ItemDetailContainer itemId={4} />} />

          </Routes>

          <Footer />
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
