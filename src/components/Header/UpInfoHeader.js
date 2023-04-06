import { Box } from "@mui/material"
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import { UpInfoHeaderText } from "./styledComponents";
import React from 'react';
function UpInfoHeader(){
    
    return(
        <Box name="main" sx={{
            width:"100%",
            height:"3em",
            display:"flex",
            background:"#B66468",
            justifyContent: "space-around",
            alignItems: "center",
            color:"#FEFAE0"
        }}>
            <Box name="left">
                <UpInfoHeaderText name="adress">Вул. Малоголосківська 32В</UpInfoHeaderText>
            </Box>

            <Box name="right" sx={{
                width:{xs:"70%", sm:"60%", md:"40%", lg:"30%"}
            }}>
                <Box name="collection_right" sx={{
                    display:"flex",
                    alignItems: "center",
                    justifyContent: "space-around",
                }}>
                    <UpInfoHeaderText name="work_time">Час роботи: з 10:00 до 20:00</UpInfoHeaderText>
                    <UpInfoHeaderText name="phone"><a className="brightLink" href="tel:+380937408606">+380937408606</a></UpInfoHeaderText>
                    <Box name="icon_collection" sx={{
                        display:"flex"
                    }}>
                            <a className="brightLink" href="https://www.facebook.com/profile.php?id=100090310295913"><FacebookIcon sx={{width:{xs:"20px", sm:"inherit"}}}/></a>
                            <a className="brightLink" href="https://instagram.com/amigos.grooming?igshid=YmMyMTA2M2Y="><InstagramIcon sx={{width:{xs:"20px", sm:"inherit"}}}/></a>
                    </Box>
                </Box>
            </Box>


        </Box>
    )
}

export default UpInfoHeader