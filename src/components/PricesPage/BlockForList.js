import { Box, Typography } from "@mui/material"
import React  from 'react';
function BlockForList({buttonTitle, titleBlockLeft, titleBlockRight, priceList, endText}){
    
    return(
        <Box sx={{
            width:"100%",
            height:"100%",
            background:"#B66468",
            borderRadius:{xs:"20px", sx:"50px", md:"100px"},
            
        }}>
            <Box sx={{
                width:"100%",
                display:"flex",
                height:"4em",
                alignItems:"center",
                justifyContent:"space-evenly",
                
            }}>
                <Typography sx={{
                    fontFamily: 'Rubik',
                    fontStyle: "normal",
                    fontWeight: "500",
                    fontSize: {xs:"20px", sm:"32px"},
                    lineHeight: "38px",
                    textAlign: "center",
                    color: "#FEFAE0",
                }}>{titleBlockLeft}</Typography>
                <Typography sx={{
                    fontFamily: 'Rubik',
                    fontStyle: "normal",
                    fontWeight: "500",
                    fontSize: {xs:"20px", sm:"32px"},
                    lineHeight: "38px",
                    textAlign: "center",
                    color: "#FEFAE0",
                }}>{titleBlockRight}</Typography>
            </Box>

            <Box sx={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                paddingBottom: "50px",
            }}>
                {priceList.map(({service, price})=> (
                    <Box sx={{
                        width:"80%",
                        display:"flex",
                        height:"100%",
                        alignItems:"center",
                        justifyContent:"space-between",
                        borderBottom:"2px solid #FEFAE0",
                        padding:"20px"
                    }}>
                        <Box sx={{
                            width:"50%"
                        }}>
                            <Typography sx={{
                                fontFamily: 'Rubik',
                                fontStyle: "normal",
                                fontWeight: "500",
                                fontSize: "17px",
                                lineHeight: "20px",
                                textAlign: "center",
                                color: "#FEFAE0"
                            }}>{service}</Typography>
                        </Box>
                        
                        <Box sx={{
                            width:"50%"
                        }}>
                            <Typography sx={{
                                fontFamily: 'Rubik',
                                fontStyle: "normal",
                                fontWeight: "500",
                                fontSize: "17px",
                                lineHeight: "20px",
                                textAlign: "center",
                                color: "#FEFAE0",
                                
                            }}>{price}</Typography>
                        </Box>
                        
                    </Box>
                ))

                }
                {endText === "" ? <></> : <Box sx={{
                    width:"80%",
                    height:"15em",
                    display:"flex",
                    alignItems:"center",
                }}>
                    <Typography sx={{
                        fontFamily: 'Rubik',
                        fontStyle: "normal",
                        fontWeight: "400",
                        fontSize: {xs:"12px", sm:"17px"},
                        lineHeight: "20px",
                        color:"#FEFAE0"
                    }}>{endText}</Typography>
                </Box>}
                
            </Box>

        </Box>
    )
}

export default BlockForList