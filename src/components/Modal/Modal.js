import React, { useEffect } from 'react'

import CloseIcon from '@mui/icons-material/Close';
import './modal.css'

import { useDispatch, useSelector } from "react-redux";
import { setShowModal } from "../../actions/generalActions";

export const Modal = () => {
    const dispatch = useDispatch()
    const generalData = useSelector(state => state.generalReducer)

    useEffect(() => {
        console.log(generalData.showModal)
    }, [generalData.showModal])
    
    const handleClick = (state) => {
        dispatch(setShowModal(state))
    }

    return(
        // Crear un modal para ingresar un nuevo evento
        <div className='containerModal' style={!generalData.showModal ? {display: 'none'} : {}}>
            <div className='modal'>
                <div onClick={() => handleClick(false)} className='containerButtonModal'>
                    <CloseIcon sx={{ color: '#fff', fontSize: 25}} />
                </div>




            </div>
        </div>
    )
}
