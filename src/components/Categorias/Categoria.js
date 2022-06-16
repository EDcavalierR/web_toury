import React from 'react'
import ParkIcon from '@mui/icons-material/Park';
import MuseumIcon from '@mui/icons-material/Museum';
import AttractionsIcon from '@mui/icons-material/Attractions';
import LocalBarIcon from '@mui/icons-material/LocalBar';
import CoffeeIcon from '@mui/icons-material/Coffee';
import StorefrontIcon from '@mui/icons-material/Storefront';
import { CategoriasIcon } from './categoriasIcon';
import './categorias.css'

import { useDispatch } from 'react-redux';
import { setFilterCategory } from '../../actions/generalActions';

export const Categoria = () => {
    const dispatch = useDispatch();

    const handleClick = (id) => {
        dispatch(setFilterCategory(id))
    }
    
    return (  
        <div className="container_Icons">
            
            <CategoriasIcon func={() => handleClick(2)} className="Icons" Icon ={ParkIcon} title="Parques"/>
            <CategoriasIcon func={() => handleClick(4)} Icon ={MuseumIcon} title="Museos"/>
            <CategoriasIcon func={() => handleClick(6)} Icon ={LocalBarIcon } title="Bar"/>
            <CategoriasIcon func={() => handleClick(3)} Icon ={CoffeeIcon} title="Cafeteria"/>
            <CategoriasIcon func={() => handleClick(5)} Icon ={AttractionsIcon} title="Recreacion"/>
            <CategoriasIcon func={() => handleClick(7)} Icon ={StorefrontIcon} title="Prestador turistico"/>
    
        </div>
    )
}
