import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Example from './auth/components/singin.jsx';
import Registroinicial from './pages/Registroinicial.jsx';
import Olvidastepass from './pages/Olvidastepass.jsx';
import Admin from "./pages/admin.jsx";
import InputRevisionUser from "./pages/InputRevisionUser.jsx";
import RevisionUser from "./pages/RevisionUser.jsx";
import RevisionesLista from "./pages/RevisionesLista.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Example />} />
      <Route path="/Registroinicial" element={<Registroinicial />} />
      <Route path="/Olvidastepass" element={<Olvidastepass />} />
      <Route path="/Admin" element={<Admin />} />
      <Route path="/RevisionUser" element={<InputRevisionUser />} />
      <Route path="/RevisionUserAdmin/:userId" element={<RevisionUser />} />
      <Route path="/RevisionesLista" element={<RevisionesLista />} />
    </Routes>
  );
}

export default App;
