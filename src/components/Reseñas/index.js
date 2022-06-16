import React from "react";
import Avatar from "@mui/material/Avatar";
import { deepOrange } from "@mui/material/colors";
import StarIcon from "@mui/icons-material/Star";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import "./reseñas.css";

export const Reseñas = ({review}) => {
    return (
        <div>
            <div className="reseñas_container">
                <div>
                    <Avatar
                        sx={{ bgcolor: deepOrange[500] }}
                        alt="Jemy Sharp"
                        src="/broken-image.jpg"
                    />
                </div>
                <div className="reseñas_author">
                    <h5>{review.user_name}</h5>
                    <p>{review.date.split('T')[0]}</p>
                </div>
                <div className="Detailsstar-icon">
                    {Array.from({length: 5}).map((el, index) => {
                        if(review.calification == 0){
                            return(
                                <></>
                            )
                        }else if(review.calification/(index+1) >= 1) {
                            return(
                                <StarIcon/>
                            )
                        }else {
                            return(
                                <StarHalfIcon/>
                            )
                        }
                    })}
                </div>
            </div>

            <div className="reseñas_text">
                <p>{review.description}</p>  
            </div>
        </div>
    );
};
