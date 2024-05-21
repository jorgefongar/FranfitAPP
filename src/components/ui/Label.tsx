import React from "react";

interface Props extends React.LabelHTMLAttributes<HTMLLabelElement>{}

export function Label ({children, ...props}: Props){
return(
    <label
    className="block text-sm font-bold leading-6 text-gray-500"
    {...props}
    >
    {children}
              </label>

);



}

export default Label;