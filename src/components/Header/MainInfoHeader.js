import { Box, Button,  } from "@mui/material"
import { useNavigate, Link } from "react-router-dom"
import React  from 'react';
function MainInfoHeader(){
    const navigate = useNavigate()
   

    return(
        <Box name="container" sx={{
            background:"#FEFAE0",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
        }}>
            <Box name="logo" sx={{maxWidth:{xs:"25%", sm:"20%", md:"10%"}}}><Link to="/"><img width="100%" alt="logo" src="../images/Amigos-logo.png"></img></Link></Box>

            <Box name="buttons_list" sx={{
                width: "50%",

            }}>
                <Box name="buttons" sx={{
                    display: "flex",
                    justifyContent: "flex-end",
                }}>
                    <Button onClick={() => navigate("/booking")} name="booking_button" sx={{
                        width:{xs:"50%" ,sm:"40%"},
                        fontSize:{xs:"10px", sm:"13px"},
                        height:"3.5em",
                        background:"#E9AE4A",
                        borderRadius:"24px",
                        color:"#000000",
                        fontFamily: 'Rubik',
                        fontStyle: "normal",
                        fontWeight: "500",
                        lineHeight: "14px",
                        textAlign: "center",
                        "&:hover": {
                            border:"2px solid #000000",
                        },
                    }}>Записатись</Button>
                    <Button onClick={() => navigate('/prices')} name="prices_button" sx={{
                        width:{xs:"50%" ,sm:"40%"},
                        fontSize:{xs:"10px", sm:"13px"},
                        height:"3.5em",
                        border:"2px solid #000000",
                        borderRadius:"24px",
                        color:"#000000",
                        marginLeft: "10px",
                    }}>Ціни</Button>
                </Box>
            </Box>
            {/* {showModal &&(
                <BookingModal handleCloseModal={handleCloseModal} handleSubmit={handleSubmit}/>
            )} */}
        </Box>
    )
}

export default MainInfoHeader