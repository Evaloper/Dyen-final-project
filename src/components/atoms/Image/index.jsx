import React from 'react'
import copylink from "./../../../assets/icons8-link-48.png";

export const Image = (props) => {
  if (props.name === "copy-link"){
    return (
      <img src={copylink} width="18px" className='link-icon'/>
    );
  }
  return (
    <div>null</div>
  )
}
