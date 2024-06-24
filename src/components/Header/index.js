import React from 'react'
import './styles.css';

function Header () {
  
  function logout(){
    alert('logout')
  }

  return (
    <div className='navbar'>
      <p className='logo'>FinTrack.</p>
      <p className='logo link' onClick={logout}>LogOut</p>
    </div>
  )
}

export default Header;