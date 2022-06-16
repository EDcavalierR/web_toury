import React from "react";
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import './card.css'



export const CardR = ({ title, imageUrl, body, price, Icon, average }) => {

    const setSite = () => {

    }

    return <div className="card-container">
        <div className="image-container">
            <img src={imageUrl} alt="imagen" />
        </div>
        <div className="card-content">


            <div className="card-title">
                <h5>{title}</h5>
            </div>
          
            <div className="card-price">
                <p>{price}</p>
            </div>
            <div className="card-price">
                <p>{body}</p>
            </div>

            
            <div className="star-icon">
                {[0,0,0,0,0].map((el, index) => {
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
                })}
            </div>
        </div>

        <div className="btn">
            <button onClick={setSite}>
                <a>Ir</a> 

            </button>

        </div>
    </div>;
    
};
