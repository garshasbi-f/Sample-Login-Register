import React from 'react';
import NoPageImg from "../assets/noPage.gif";
import "../index.css"

const NoPage = () => {
  return (
    <div className="center">
        <img src={NoPageImg} alt="" />
        <p style={{fontSize: 22 , fontWeight: 'bold' , color: 'rgb(94, 199, 255)'}}>Page not found ...</p>
    </div>
  )
}

export default NoPage