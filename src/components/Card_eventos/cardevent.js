import React from "react";
import PaidIcon from "@mui/icons-material/Paid";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EventIcon from "@mui/icons-material/Event";
import './Card_eventos.css'

export const Cardevent = () => {
    return (
        <div className="cardE_container-d">
            <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjHHM9UVAGubDQU02U1V4rrB2sHVdjWnbQDDByUjYcTkZNQ0AwRvDYeC_xUB5Jn4-DbhMiHdXRQZs9IjuzmYS8cP97PthKdA_pUPugZH153wFupwn_xAOPx1laPpItMO_z0WsIK6Vj_GpTneDChSLFG4P1pk8DTpYTT94EMpT_XH5tsbJ7muR31N09-vw/s320/senderismo.jpg" alt="img" />

            <div className="card_content">
                <h6>Titulo</h6>
                <div className="card_icon">

                    <EventIcon /> <p>25/10/2022</p> <> 10:30</>
                </div>
                <div className="card_icon">
                    <LocationOnIcon /> <p>Ubicacion</p>
                </div>
                <div className="card_icon">
                    <PaidIcon /> <p>Gratis</p>
                </div>



                <div>
                    <h6>Descripcion</h6>
                    <p>Lorem ipsum dolor sit amet, consectetur</p>
                </div>
            </div>
        </div>
    );
};
