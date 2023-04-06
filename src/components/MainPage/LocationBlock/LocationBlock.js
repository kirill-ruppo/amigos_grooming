import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api"
import "../../../styles/mapStyles.css"
import { useMemo } from "react";
import { Box, Typography } from "@mui/material";
import React  from 'react';

function LocationBlock(){
    const center = useMemo(() => ({lat: 49.86757225558472, lng: 24.002640240524695}), [])
    // const loc = {lat: 49.86757225558472, lng: 24.002640240524695}
    const {isLoaded} = useLoadScript({
        googleMapsApiKey:"AIzaSyDKBMAKQAbcXC0EyJjPsrA5OCfa9vf-YOI"
    });
    if(!isLoaded) return <div>Loading...</div>
    return (
        <Box sx={{
            width:"100%"
        }}>
            <Box name="title" sx={{
                width:"100%",
                height:"10em",
                display:"flex",
                justifyContent:"center",
                alignItems:"center"
            }}>
                <Typography sx={{
                    fontFamily: 'OksFree',
                    fontStyle: "normal",
                    fontWeight: "400",
                    fontSize: "45px",
                    lineHeight: "27px",
                    color:"#00000",
                }}>Amigos на карті</Typography>
            </Box>
       

            <Box name="map" sx={{
                width:"90%",
                margin:"0 auto"
            }}>
                <GoogleMap zoom={15} center={center} mapContainerClassName="map-container"> 
                <Marker position={center}></Marker>
                </GoogleMap>
                
            </Box>
        </Box>
       
    )
}

export default LocationBlock