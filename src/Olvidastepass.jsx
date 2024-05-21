import React from 'react';
import NavigationBlockuser from './components/ui/nav';
import PasswordError from './components/ui/PasswordError'; // Asegúrate de que la ruta sea correcta

const navigation = [
  { name: 'Inicio', href: '#', current: false }
];

export default function MainComponent() {
  return (
    <div>
      <NavigationBlockuser navigation={navigation} />
      <PasswordError />
    </div>
  );
}
