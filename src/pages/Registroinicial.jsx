import React from 'react';
import UserRegistrationForm from '../components/ui/DatosIniciales';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function MainComponent() {
  return (
    <div>
      <div className="p-4">
        <UserRegistrationForm />
      </div>
    </div>
  );
}
