import React, { useEffect, useState } from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
import GiftGridItem from "./GiftGridItem";

const GiftGrid = ({ category }) => {

    const { data: images, loading } = useFetchGifs( category )

    return(
        <>
            <h3> { category } </h3>
            { loading && <p className = "animate__animated animate__flash">Loading...</p> }
            <div className = "card-grid">
                    { 
                        images.map( ( image ) => <GiftGridItem key = { image.id } { ...image } />)
                    }
            </div>
        </>
    )
}

export default GiftGrid