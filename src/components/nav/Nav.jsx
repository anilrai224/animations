import React from 'react'
import './Nav.scss'

const Nav = () => {
    const links =['Home','Portfolio','Contact Us','About Us']
  return (
    <div className='nav'>
        <div className="container">
            <div className="logoContainer">
                LOGO
            </div>
            <ul>
            {links.map((link)=>{
                return <li key={link}>{link}</li>
            })}
            </ul>
        </div>
    </div>
  )
}

export default Nav