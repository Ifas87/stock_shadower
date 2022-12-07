import './App.css';
import Container from "./components/Container/Container"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Adder from './components/Adder/Adder';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Container />}></Route>

        <Route path="/add" element={<Adder/>}></Route>

        <Route path="/about"></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
