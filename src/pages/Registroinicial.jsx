import React from 'react';
import NavigationBlockuser from '../shared/layout/nav';
import UserRegistrationForm from '../components/ui/DatosIniciales';

const navigation = [
  { name: 'Inicio', href: '#', current: false }
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function MainComponent() {
  return (
    <div>
      <NavigationBlockuser navigation={navigation} />
      <div className="p-4">
        <UserRegistrationForm />
      </div>
    </div>
  );
}
