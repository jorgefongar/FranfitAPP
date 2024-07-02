import React from 'react';
import PasswordError from '../components/ui/PasswordError';

const navigation = [
  { name: 'Inicio', href: '#', current: false }
];

export default function MainComponent() {
  return (
    <div>
      <PasswordError />
    </div>
  );
}
