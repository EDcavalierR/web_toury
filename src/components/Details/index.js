import React, { useEffect } from "react";
import { Carddetalles } from "../Card_detalles";
import { CardE } from "../Card_eventos";
import { Cardevent } from "../Card_eventos/cardevent";
import { Headerlist } from "../Headerlist";
import { ListH } from "../List_h";
import { ListR } from "../List_r";

import "./styles.css";

//redux
import { useSelector } from "react-redux";

export const Details = () => {
  const generalData = useSelector(state => state.generalReducer)

  useEffect(() => {
    //   console.log(generalData)
  }, [generalData.site])
  
  
    return (
        <div className="Details">
            <Headerlist type={generalData.site.type}/>

            <Carddetalles
                title={generalData.site.name}
                imageUrl={generalData.site.image}
                ubicacion={generalData.site.address}
                description={generalData.site.description}
                quantity={generalData.site.reviewQuantity}
                average={generalData.site.reviewAverage}
                ubication={generalData.site.coordinates}
                reviews={generalData.site.reviews}
                facebook={generalData.site.contact_facebook_show}
                insta={generalData.site.contact_insta}
                phone={generalData.site.contact_phone}
                wsp={generalData.site.contact_wsp}
            />  
            {/* <Cardevent/> */}

            {/* * <ListH 
                name="El cielo"
                imageUrl="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEicC5uP0AgTEsv32wsZdBENmKV8qtX5xvT_gbG6fFYmOiTGpLSaK7aDlMbewvvCu3SPZEFsXIFy3LAjIyskqhHPBIOIlheGfX_dp56dxxHlzoTALPJt9zNNOToG6wsg6kkeCNV4K8dT1LBcDMC_9_OgDF3l98rJLaeJJDK6o20bWTx_cQxXpd__cPtSuA/s320/hotel.jpg"
                reseña="8.5"
            />
            <ListH 
                name="El cielo"
                imageUrl="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEicC5uP0AgTEsv32wsZdBENmKV8qtX5xvT_gbG6fFYmOiTGpLSaK7aDlMbewvvCu3SPZEFsXIFy3LAjIyskqhHPBIOIlheGfX_dp56dxxHlzoTALPJt9zNNOToG6wsg6kkeCNV4K8dT1LBcDMC_9_OgDF3l98rJLaeJJDK6o20bWTx_cQxXpd__cPtSuA/s320/hotel.jpg"
                reseña="8.5"
            />
            <ListH 
                name="El cielo"
                imageUrl="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEicC5uP0AgTEsv32wsZdBENmKV8qtX5xvT_gbG6fFYmOiTGpLSaK7aDlMbewvvCu3SPZEFsXIFy3LAjIyskqhHPBIOIlheGfX_dp56dxxHlzoTALPJt9zNNOToG6wsg6kkeCNV4K8dT1LBcDMC_9_OgDF3l98rJLaeJJDK6o20bWTx_cQxXpd__cPtSuA/s320/hotel.jpg"
                reseña="8.5"
            /> 
            <ListH 
                    name="El cielo"
                    imageUrl="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEicC5uP0AgTEsv32wsZdBENmKV8qtX5xvT_gbG6fFYmOiTGpLSaK7aDlMbewvvCu3SPZEFsXIFy3LAjIyskqhHPBIOIlheGfX_dp56dxxHlzoTALPJt9zNNOToG6wsg6kkeCNV4K8dT1LBcDMC_9_OgDF3l98rJLaeJJDK6o20bWTx_cQxXpd__cPtSuA/s320/hotel.jpg"
                    reseña="8.5"
            /> 
            <ListR
                name="El cielo"
                imageUrl="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEicC5uP0AgTEsv32wsZdBENmKV8qtX5xvT_gbG6fFYmOiTGpLSaK7aDlMbewvvCu3SPZEFsXIFy3LAjIyskqhHPBIOIlheGfX_dp56dxxHlzoTALPJt9zNNOToG6wsg6kkeCNV4K8dT1LBcDMC_9_OgDF3l98rJLaeJJDK6o20bWTx_cQxXpd__cPtSuA/s320/hotel.jpg"
                reseña="8.5"
            />
            <CardE/>  */}
        </div>
    );
};
