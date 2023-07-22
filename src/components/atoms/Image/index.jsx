import React from 'react'
import copylink from "./../../../assets/icons8-link-48.png";
import arrow from "./../../../assets/icons8-back-to-50.png";

export const Image = (props) => {
  if (props.name === "copy-link"){
    return (
      <img src={copylink} width="18px" className='link-icon'/>
    );
  }

  if (props.name === "arrow-left"){
    return (
      <img src={arrow} width="18px" className='link-icon'/>
    );
  }
  return (
    <div>null</div>
  )
}
