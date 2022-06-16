import React from 'react'
import '../styles.css'

export const Headericons = ({Icon, title}) => {
  return (
    <div className="header__icons">
        { Icon &&<Icon className="header__box"/>}
        <h3>{title}</h3>

    </div>
  )
}
