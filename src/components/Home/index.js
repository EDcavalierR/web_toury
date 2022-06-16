import React, { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { deepOrange } from "@mui/material/colors";
import { Button } from "@mui/material";

import "./home.css";
import { CardR } from "../Card_restaurantes/card";
import { Card } from "../Card/card";
import { Categoria } from "../Categorias/Categoria";
import { Eventos } from "../Carousel";
import Clima from "../Clima/Clima";
import { Login } from "../Login";
 
//redux
import { useSelector, useDispatch } from "react-redux";
import { setFilterGeneral } from "../../actions/generalActions";

export const Home = () => {
    const dispatch = useDispatch();

    const generalData = useSelector(state => state.generalReducer)
    const [dataEventsFiltered, setDataEventsFiltered] = useState([])
    const [dataSitesFiltered, setDataSitesFiltered] = useState([])

    const [dataSitesFilteredByCategory, setdataSitesFilteredByCategory] = useState([])

    useEffect(() => { 
        setDataEventsFiltered(generalData.data.dataEvents)
        setDataSitesFiltered(generalData.data.dataSites)
    }, [generalData])

    useEffect(() => { 
        setdataSitesFilteredByCategory(generalData.data.dataSites?.filter(el => el.type == generalData.filterCategory))
    }, [generalData.filterCategory])

    useEffect(() => { 
        setDataEventsFiltered(generalData.data.dataEvents?.filter(el => el.name.toLowerCase().includes(generalData.filterGeneral.toLowerCase())))
        setDataSitesFiltered(generalData.data.dataSites?.filter(el => el.name.toLowerCase().includes(generalData.filterGeneral.toLowerCase())))
    }, [generalData.filterGeneral])

    const setInputText = (value) => {
        dispatch(setFilterGeneral(value.target.value))
    }
    return (
        <div className="Feed">
        
            <div className="header_bienvenida">
                Buenos dias, Juan David &#128526;
                <Avatar
                sx={{ bgcolor: deepOrange[500] }}
                alt="J"
                src="/broken-image.jpg"
                />
            </div>
        

            <p className="header_bienvenida-p">
                Descubre todas las maravillas turisticas que te puede brindar Charalá.
            </p>
            <div className="section_ws">
            <div>
                <Clima />
                </div>
                <div className=" header__buscar">
                <SearchIcon className="lupa" />

                <input type="text" placeholder="buscar" onChange={(value) => setInputText(value)}/>
                </div>
            </div>

            <div className="ver-mas">
                <h5>Eventos </h5>
                
                <p>Ver mas</p>
            </div>

            <div className="containerEvents">
                {dataEventsFiltered?.length > 0 ? 
                    dataEventsFiltered?.map((item, index) => {
                        return(
                            <Eventos key={index} data={item}/>
                        )
                    })
                    : 
                    <h1>no hay eventos</h1>
                }
            </div>


            <div className="ver-mas">
                <h5>Hoteles</h5>
                <p>Ver mas</p>
            </div>

            <div className="Cards-restaurantes">
                {dataSitesFiltered?.length > 0 ? 
                    dataSitesFiltered?.filter(el=> el.type == 0)?.map((item, index) => {
                        return(
                            <Card key={index} site={item}/>
                        )
                    })
                    : 
                    <h1>no hay eventos</h1>
                }
            </div>

            <div className="ver-mas">
                <h5>Restaurantes</h5>
                <p>Ver mas</p>
            </div>

            <div className="Cards-restaurantes hotel">
                {dataSitesFiltered?.length > 0 ? 
                    dataSitesFiltered?.filter(el=> el.type == 1)?.map((item, index) => {
                        return(
                            <Card key={index} site={item}/>
                        )
                    })
                    : 
                    <h1>no hay eventos</h1>
                }
            </div>

            <div className="ver-mas">
                <h5>Categorias</h5>
            </div>

            <Categoria />

            <div className="Cards-restaurantes">
                {generalData?.filterCategory != -1 ? 
                    dataSitesFilteredByCategory?.map((item, index) => {
                        return(
                            <Card key={index} site={item}/>
                        )
                    })
                    : 
                    <></>
                }
            </div>
        </div>
    )
};
