import React from 'react'
import './styles.css'

const SidebarItem = ({menu}) => {
  return (
    <div className="sideLeftBar-item">
      <p>{menu.name}</p>
    </div>
  );
}

export default SidebarItem