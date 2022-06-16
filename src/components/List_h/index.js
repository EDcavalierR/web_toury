import React from "react";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import TvIcon from "@mui/icons-material/Tv";
import StarIcon from "@mui/icons-material/Star";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import NetworkWifiIcon from "@mui/icons-material/NetworkWifi";
import BedIcon from "@mui/icons-material/Bed";
import "./list_h.css";

export const ListH = ({ imageUrl, reseña, name, direccion }) => {
    return (

        <div>
           
            <div className="list-container">
                <div className="list-items">
                    <h5>{name}</h5>
                    <div className="list-reseña">
                        <p>{reseña}</p>
                        <StarIcon  />
                        <StarIcon />
                        <StarIcon />
                        <StarIcon />
                        <StarHalfIcon />
                    </div>
                    <p>{direccion} Calle 24</p>


                </div>
                <div className="list-img">
                    <img src={imageUrl} alt="imagen" />
                </div>

               

            </div>
        </div>



    );
};
