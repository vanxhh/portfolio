import { Routes, Route } from "react-router-dom";
import './App.css';
import Nav from './components/Nav';
import Home from './components/Home';
import About from "./components/About";
import Connect from "./components/Connect";

const App = () => {

  return (
    <main className='app'>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/connect' element={<Connect />} />
      </Routes>
    </main>
  );
}

export default App;