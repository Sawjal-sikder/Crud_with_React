import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <>
      <nav>
        <div className="bg-slate-600 flex justify-between items-center p-4 text-white">
            <Link to={'/'} className='text-3xl ps-24 font-medium'> Logo </Link>
          <ul id="nav-mobile" className="flex space-x-4">
            <Link to={'/'} className=''> Product </Link>
            <Link to={'/create'} className=''>Create Product  </Link>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar
