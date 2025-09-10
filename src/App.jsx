import './App.css'
import Home from './pages/Home';
import PageNotFound from './pages/PageNotFound';
import { Route, Routes } from 'react-router-dom'
import '@fortawesome/fontawesome-free/css/all.min.css';

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
