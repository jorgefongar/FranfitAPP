import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Example from './auth/components/singin.jsx';
import Registroinicial from './Registroinicial.jsx';
import Olvidastepass from './Olvidastepass.jsx'
import Admin from "./admin.jsx"
import InputRevisionUser from "./InputRevisionUser.jsx"
import RevisionUser from "./RevisionUser.jsx"
import RevisionesLista from "./RevisionesLista.jsx"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Example />} />
      <Route path="/Registroinicial" element={<Registroinicial />} />
      <Route path="/Olvidastepass" element={<Olvidastepass />} />
      <Route path="/Admin" element={<Admin />} />
      <Route path="/RevisionUser" element={<InputRevisionUser />} />
      <Route path="/RevisionUserAdmin" element={<RevisionUser />} />
      <Route path="/RevisionesLista" element={<RevisionesLista />} />
    </Routes>
  );
}

export default App;
