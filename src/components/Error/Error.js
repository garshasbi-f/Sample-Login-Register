import React from 'react';
import errorImg from "../../assets/error.gif";
import "../../index.css";

const Error = () => {
  return (
    <div className="center">
        <img src={errorImg} alt="" />
        <p style={{fontSize: 22 , fontWeight: 'bold' , color: `#892c2c` , marginTop: -45}}>Something went wrong ...</p>
    </div>
  )
}

export default Error