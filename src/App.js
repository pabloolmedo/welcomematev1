import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Study from './pages/Study';
import About from './pages/About';
import Home from './pages/Home';
import Navigation from './components/Navbar';
import Footer from './components/Footer';






function App() {
  return (



    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='estudia' element={<Study />} />
        <Route path='trabaja' element={<Study />} />
        <Route path='quienesSomos' element={<About />} />
        <Route path='contactanos' element={<Study />} />

        <Route path='*' element={<Navigate replace to='/' />} />

      </Routes>
      <Footer />
    </BrowserRouter>




  );
}

export default App;
