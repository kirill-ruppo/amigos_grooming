import { Box, Typography } from "@mui/material"
import React from 'react';
function IconsBlock(){
    return(
        <Box name="container" sx={{
            width:"100%",
            height:{xs:"650px", md:"300px"},
            background:"#dca15e78",
            display: "flex",
            alignItems: "center",
        }}>
            <Box sx={{
                width: "100%",
                height:"90%",
                display: "flex",
                flexDirection: {xs:"column", md:"row"},
                justifyContent: "space-evenly",
                alignItems: "center",
            }}>
                <Box sx={{
                    width: {xs:"100%", md:"20%"},
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "space-between",
                    height: "60%",


                }}>
                        <img alt="time" src="../images/icon_time.svg"></img>
                        <Typography sx={{
                            fontFamily: 'Rubik',
                            fontStyle: "normal",
                            fontWeight: "400",
                            fontSize: "17px",
                            lineHeight: "23px",
                        }}>10:00 - 20:00</Typography>
                        <Typography sx={{
                            fontFamily: 'Rubik',
                            fontStyle: "normal",
                            fontWeight: "400",
                            fontSize: "17px",
                            lineHeight: "23px",
                        }}>БЕЗ ВИХІДНИХ</Typography>
                </Box>
                <Box sx={{
                     width: {xs:"100%", md:"35%"},
                    display: "flex",
                    height: "50%",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "space-between",
                    borderLeft:{md:"2px solid", sm:"0px"} ,
                    borderRight:{md:"2px solid", sm:"0px"} ,
                    borderTop:{md:"0px", sm:"2px solid"},
                    borderBottom:{md:"0px", sm:"2px solid"},
                    padding:{xs:"40px 0 40px 0", md:"0 40px 0 40px"},
                    margin: {xs:"20px 0 20px 0"},
                }}>
                        <img alt="time" src="../images/icon_location.svg"></img>
                        <Typography sx={{
                            fontFamily: 'Rubik',
                            fontStyle: "normal",
                            fontWeight: "400",
                            fontSize: "17px",
                            lineHeight: "23px",
                        }}>м. Львів , вул. Малоголосківська 32В</Typography>
                </Box>
                <Box sx={{
                    width: {xs:"100%", md:"20%"},
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    height: "50%",
                    justifyContent: "space-between",
                }}>
                        <img alt="time" src="../images/icon_phone.svg"></img>
                        <Typography sx={{
                            fontFamily: 'Rubik',
                            fontStyle: "normal",
                            fontWeight: "400",
                            fontSize: "17px",
                            lineHeight: "23px",
                        }}><a className="blackLink" href="tel:+38 093 740 8606">+38 093 740 8606</a></Typography>
                </Box>
            </Box>
        </Box>
    )
}
export default IconsBlock