import './App.css'
import Home from './pages/Home';
import PageNotFound from './pages/PageNotFound';
import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
     <Routes>
      <Route path='/' element={<Home />} />

       <Route path='/*' element={<PageNotFound />} />
     </Routes>
    </>
  )
}

export default App
