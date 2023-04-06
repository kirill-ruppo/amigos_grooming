import { Box, Typography } from "@mui/material"
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram'
import React  from 'react';
function Footer(){
    return (
        <Box name="container" sx={{
            width:"100%",
            height:"3em",
            background:"#B66468",
            marginTop:"25px",
            display:"flex",
            alignItems: "center",
            justifyContent: "center",
        }}>
            <Box name="footer" sx={{
                width:"90%",
                display:"flex",
                justifyContent: "space-between",
                alignItems:"center"
            }}>
                <Typography sx={{
                    fontFamily:"Rubik",
                    color:"#FEFAE0",
                    fontStyle: "normal",
                    fontWeight: "400",
                    fontSize: "12px",
                    lineHeight: "14px",
                }}>2023-2024 Всі права захищені</Typography>

                    <Box name="icon_collection" sx={{
                        display:"flex"
                    }}>
                            <a className="brightLink" href="https://www.facebook.com/profile.php?id=100090310295913"><FacebookIcon sx={{width:{xs:"20px", sm:"inherit"}}}/></a>
                            <a className="brightLink" href="https://instagram.com/amigos.grooming?igshid=YmMyMTA2M2Y="><InstagramIcon sx={{width:{xs:"20px", sm:"inherit"}}}/></a>
                    </Box>
            </Box>
        </Box>
    )
}

export default Footer