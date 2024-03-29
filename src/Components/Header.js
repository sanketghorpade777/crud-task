import React from 'react'
import Model from './Design/Model'

function Header() {
  return (
    <div>
   <nav>
  <ul style={{listStyle:'none',display:'flex',justifyContent:'space-between',padding:'10px'}}>
      <li>TODO APP</li>
      <li>Home</li>
      
      <li><Model/></li>

  </ul>
   </nav>
    </div>
  )
}

export default Header