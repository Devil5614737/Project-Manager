import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div style={{
      width:"100vw",
      height:'100vh',
      display:'grid',
      placeContent:'center'
    }}>
        <h1>Not found</h1>
        <Link to='/' className='text-center'>go to login</Link>
    </div>
  )
}

export default NotFound