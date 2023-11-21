import { useState } from "react";
import './App.css';
import Nav from './components/Nav';
import Home from './components/Home';

const App = () => {
  const [active, setActive] = useState("home");

  return (
    <main className='app'>
      {/* <Nav active={active} setActive={setActive} /> */}
      <Home />
    </main>
  );
}

export default App;