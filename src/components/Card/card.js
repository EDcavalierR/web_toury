import React from "react";
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import './card.css'

//redux
import { useDispatch } from "react-redux"
import { setSite } from "../../actions/generalActions";

export const Card = ({site}) => {
    const dispatch = useDispatch();

    const setSelectedSite = () => {
        dispatch(setSite(site))
    }

    return <div className="card-container">
        <div className="image-container">
            <img src={site.image} alt="imagen" />
        </div>
        <div className="card-content">
            <div className="card-title">
                <h5>{site.name}</h5>
            </div>
          
            {/* <div className="card-price">
                <p>{price}</p>
            </div> */}

            
            <div className="star-icon">
                {site.reviewQuantity == 0 ? 

                    <p>no se ha calificado aun</p> 

                : 
                    Array.from({length: 5}).map((el, index) => {
                        if(site.reviewAverage == 0){
                            return(
                                <></>
                            )
                        }else if(site.reviewAverage/(index+1) >= 1) {
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
            </div>
        </div>

        <div className="btn">
            <button onClick={() => setSelectedSite()}>
                <a>Ir</a> 

            </button>

        </div>
    </div>;
    
};
