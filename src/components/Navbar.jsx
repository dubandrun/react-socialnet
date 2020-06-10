import React from 'react';

const Navbar = () => {
  return (
    <nav className='nav'>
        <ul className='menu'>
          <li className='link'><a className='menu-link' href="#1">Profile</a></li>
          <li className='link'><a className='menu-link' href="#1">Messages</a></li>
          <li className='link'><a className='menu-link' href="#1">News</a></li>
          <li className='link'><a className='menu-link' href="#1">Music</a></li>
          <li className='link'><a className='menu-link' href="#1">Settings</a></li>
        </ul>
    </nav>
  )
}

export default Navbar;