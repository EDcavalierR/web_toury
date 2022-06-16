import React, { useEffect, useState } from 'react'
import './headerlist.css'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export const Headerlist = ({type}) => {
    const [typeName, setTypeName] = useState()

    useEffect(() => {
        switch (type) {
            case '0':
                setTypeName("hoteles")
                break;
            case '1':
                setTypeName("restaurantes")
                break;
            case '2':
                setTypeName("parques")
                break;
            case '3':
                setTypeName("cafeterias")
                break;
            case '4':
                setTypeName("museos")
                break;
            case '5':
                setTypeName("recreacion")
                break;
            case '6':
                setTypeName("bares")
                break;
            case '7':
                setTypeName("prestador Turistico")
                break;
            default:
                setTypeName("hoteles")
                break;
        }
    }, [type])
  

    return (
        <div className="headerlist">
            <div >
                <ArrowBackIcon/>


            </div>
            <div className="headerlistittle">
                <h5> Detalles {typeName}</h5>
            </div>
        </div>
    )
}
