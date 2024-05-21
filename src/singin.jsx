/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import {Input} from './components/ui/Input.tsx'
import {Button} from './components/ui/Button.tsx'
import {Label} from './components/ui/Label.tsx'
import {Titulo2} from './components/ui/titulo2.tsx'
export default function login() {
  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-white">
        <body class="h-full">
        ```
      */}
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-21 w-auto"
            src="LOGO.png"
            alt="Your Company"
          />
          <Titulo2>Bienvenido a Franfit!</Titulo2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <Label htmlFor='email'>
              Dirección de correo
              </Label>
              <div className="mt-2">
                <Input 
                id='email'
                name='email'
                type='email'
                required
                
                placeholder='  Dirección de correo' />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
              <Label htmlFor='password'>
              Contraseña
              </Label>
                <div className="text-sm">
                  <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                    Olvidaste tu ccontraseña?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <Input 
                id='password'
                name='password'
                type='password'
                required
                
                placeholder='  ******'/>
              </div>
            </div>
            <Button type='submit'>ACCEDER</Button>
            <div>
              
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Aun no eres parte del erquipo?{' '}
            <a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
              Unete!
            </a>
          </p>
        </div>
      </div>
    </>
  )
}
