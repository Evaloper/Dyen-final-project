import React from 'react'
import { Logo, Icon } from '../../atoms'
import "./index.css"

export const Header = () => {
  return (
    <div className='header'>
        <div className='top-header '>
            <div className='logo'>
                <Logo />
                <div>
                  <Icon name="search"/>
                </div>
                <input type='text' placeholder='Search' />
            </div>
            <div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
        <div></div>
        <div></div>
    </div>
  )
}
