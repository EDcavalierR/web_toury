import React from "react";
import EventIcon from "@mui/icons-material/Event";
import './carousel.css'

export const Eventos = (props) => {
    return (
        <div className="containerCard">
            <img
                src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjHHM9UVAGubDQU02U1V4rrB2sHVdjWnbQDDByUjYcTkZNQ0AwRvDYeC_xUB5Jn4-DbhMiHdXRQZs9IjuzmYS8cP97PthKdA_pUPugZH153wFupwn_xAOPx1laPpItMO_z0WsIK6Vj_GpTneDChSLFG4P1pk8DTpYTT94EMpT_XH5tsbJ7muR31N09-vw/s8000/senderismo.jpg"
                alt=""
            />

            <h6 className="textEventsName">{props.data.name}</h6>
            <div className="containerEventsCalendar">
                <EventIcon fontSize="small"/><span className="textEventsDate">{props.data.date.split('T')[0]}</span>
            </div>
        </div>
    );
};
