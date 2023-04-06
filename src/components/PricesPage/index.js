import { Box, Typography } from "@mui/material"
import PriceList from "./PriceList"
import React  from 'react';
import { Zoom } from "react-awesome-reveal";
function PricesPage(){
    return (
        
        <Box className='container' sx={{
            width:"100%",
            height:"100%",
            display:"flex",
            flexDirection:"column",
            alignItems:"center"
        }}>
           
            <Box name='mainText_block' sx={{
                width: "80%",
                height:"25em",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "space-evenly",

            }}>
            <Zoom triggerOnce>
                <Box name='title'>
                    <Typography sx={{
                        fontFamily: 'OksFree',
                        fontStyle: "normal",
                        fontWeight: "400",
                        fontSize: {xs:"30px", sm:"50px", lg:"70px"},
                        lineHeight: "70px",
                        textAlign: "center",
                    }}>ПАКЕТИ ПОСЛУГ ЗІ СТРИЖКИ СОБАК</Typography>
                </Box>
                <Box name='text'>
                    <Typography sx={{
                        fontFamily: 'Rubik',
                        fontStyle: "normal",
                        fontWeight: "400",
                        fontSize: {xs:"20px", sm:"20px", lg:"30px"},
                        lineHeight: "46px",
                        textAlign: "center",
                    }}>Ви можете замовити від простого підстригання нігтів до повного догляду та спеціальних запитів на зачіску, див. нижче:</Typography>
                </Box>
                </Zoom>
            </Box>

            <PriceList/>

             
        </Box>
       
    )
}


export default PricesPage