import { Box, Typography } from "@mui/material"
import Slider from "./Slider"
import React  from 'react';
function PhotosPreview(){

    
    return(
        <Box name="container" sx={{
            width:"100%",
            height:"100%",
            paddingBottom:"20px",
            background:"#B66468"
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
                    color:"#FEFAE0",
                }}>Наші роботи</Typography>
            </Box>


            <Box name="slider" sx={{
                textAlign: "center",
            }}>
                <Slider/>
            </Box>
        </Box>
        
    )
}

export default PhotosPreview