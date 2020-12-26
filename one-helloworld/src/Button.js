import React from 'react';
import App from './app';



const Button = ({title = "No Content"}) => (
    <div>
    <button className="button"> {title}</button>


    </div>
);

export default Button;