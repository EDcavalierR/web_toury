import React from "react";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import TvIcon from "@mui/icons-material/Tv";
import StarIcon from "@mui/icons-material/Star";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import NetworkWifiIcon from "@mui/icons-material/NetworkWifi";
import BedIcon from "@mui/icons-material/Bed";
import Phone from "@mui/icons-material/Phone";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Iconoptions } from "../Sidebar/Iconoptions";
import "./Card_detalles.css";
import { Reseñas } from "../Reseñas";

//Map
import Map from "../Map/Map";

const apiKeyMap = 'AIzaSyD25FPh33FnHtEEU7FWJA-yrBPPrYtq-CU'

export const Carddetalles = ({
    title,
    imageUrl,
    body,
    price,
    Icon,
    quantity,
    average,
    reseña,
    ubicacion,
    description,
    ubication,
    mail,
    reviews,
    facebook,
    insta,
    phone,
    wsp
}) => {


    return (
        <div className="Details_container">
            <div className="Details_img">
                <img src={imageUrl} alt="imagen" />
            </div>

            <div className="Details_title">
                <div className="Detailsstar-icon">
                    <h4>{title}</h4>
                    <p> {ubicacion}</p>
                </div>
            </div>

            <p className="linea"></p>

            <div className="Details_description">
                <h5>Description</h5>
                <p>{description}</p>
            </div>
            <p className="linea"></p>
            <div className="Details_reseñas">
                <p style={quantity == 0 ? {display: 'none'} : {display: "flex"}}>{average}</p>
                <div className="Details_reseñas_r Detailsstar-icon_r">
                {quantity == 0 ? 

                    <p>no se ha calificado aun</p> 

                : 

                    Array.from({length: 5}).map((el, index) => {
                        if(average == 0){
                            return(
                                <></>
                            )
                        }else if(average/(index+1) >= 1) {
                            return(
                                <StarIcon/>
                            )
                        }else {
                            return(
                                <StarHalfIcon/>
                            )
                        }
                    })
                }
                <p>{quantity} Calificaciones</p>
                </div>
                <ArrowForwardIcon />
            </div>
            

            <div className="Details_map">
                <h5>Mapa</h5>
                <Map 
                    googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&key=${apiKeyMap}`}
                    coordinates={ubication}
                    containerElement={<div style={{ height: `400px` }} />}
                    mapElement={<div style={{ height: `100%` }} />}
                    loadingElement={<p>Cargando</p>}
                />
            </div>

            <div>
                <h5>Reseñas</h5>
                {reviews?.length == 0 ? 

                    <p>Este sitio aun no tiene reseñas</p> 

                : 
                    reviews?.map((el, index) => {
                        return(
                            <Reseñas key={index} review={el}/>
                        )
                    })
                }
            </div>

            <div className="Details_Contact">
                <h5>Contacto</h5>
                {facebook ? <Iconoptions text={facebook} Icon={FacebookIcon} /> : <></>}
                {insta ? <Iconoptions text={insta} Icon={InstagramIcon} /> : <></>}
                {phone ? <Iconoptions text={phone} Icon={Phone} /> : <></>}
                {wsp ? <Iconoptions text={wsp} Icon={WhatsAppIcon} /> : <></>}
            </div>
        </div>
    );
};
