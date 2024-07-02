import React from 'react';

interface Props extends React.HTMLAttributes<HTMLHeadingElement> { }

export function Titulo2({ children, ...props }: Props) {
  return (
    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900"
      {...props}
    >
      {children}
    </h2>


  )

}

export default Titulo2;