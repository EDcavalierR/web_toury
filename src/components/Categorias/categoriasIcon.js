import React from 'react'


export const CategoriasIcon = ({Icon, title, func}) => {
  return (
    <div className="Categorias_icons" onClick={func} >
         { Icon &&<Icon className="Categoria_box"/>}
        <h3>{title}</h3>



    </div>
    
  )
}
