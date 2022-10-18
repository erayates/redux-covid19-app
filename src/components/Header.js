import React from 'react'

function Header() {
  return (
    <div className='header'>
        <img className='header__logo' src='https://cdn-icons-png.flaticon.com/512/2785/2785819.png' alt='covid19-logo'/>
        <h1 className='header__title'>Global and Country Wise Cases of Corona Virus</h1>
        <p className='header__subtitle'>For a Particular country, select a Country from below</p>
    </div>
  )
}

export default Header