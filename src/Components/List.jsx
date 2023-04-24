import React from 'react'
import { Link } from 'react-router-dom'

export default function List() {
  return (
    <div className='container mx-auto p-2 m-2'>
        <ul className='flex flex-row gap-4'>
            <li className=' px-3 py-1 rounded-lg text-white bg-black'><Link to={'/'}>Home</Link></li>
            <li className=' px-3 py-1 rounded-lg text-white bg-black'><Link to={'/user'}>User</Link></li>
            <li className=' px-3 py-1 rounded-lg text-white bg-black'><Link>Profile</Link></li>
            <li className=' px-3 py-1 rounded-lg text-white bg-black'><Link>About</Link></li>
        </ul>
    </div>
  )
}
