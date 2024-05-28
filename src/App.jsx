import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Example from './singin';
import Registroinicial from './Registroinicial.jsx';
import Olvidastepass from './Olvidastepass.jsx'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Example />} />
      <Route path="/Registroinicial" element={<Registroinicial />} />
      <Route path="/Olvidastepass" element={<Olvidastepass />} />
    </Routes>
  );
}

export default App;
