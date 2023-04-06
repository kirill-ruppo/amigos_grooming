import IconsBlock from "./IconsBlock"
import Banner from "./Banner/Banner"
import PricesPreview from "./PricesPreview/PricesPreview"
import PhotosPreview from "./PhotosPreview/PhotosPreview"
import LocationBlock from "./LocationBlock/LocationBlock"
import TabBlock from "./PricesPreview/TabBlock"
import { useMediaQuery, Box, Typography, Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useNavigate } from "react-router-dom"
import React  from 'react';
import { Fade } from "react-awesome-reveal";
function MainPage(){
    const navigate = useNavigate()
    const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
    return(
        <>
            <Banner/>
            <Fade triggerOnce direction="up">
            <Box name="title" sx={{
                width:"100%",
                height:"9em",
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
                }}>Послуги</Typography>
            </Box>
            {isDesktop ? <PricesPreview/> : <TabBlock/>}
            <Box name="button" sx={{
                width:"100%",
                height:"8em",
                display:"flex",
                justifyContent:"center",
                alignItems:"center"
            }}>
                <Button onClick={() => navigate('/prices')}  sx={{
                    width:{xs:"50%", sm:"30%"},
                    height:"4em",
                    color:"#B66468",
                    border:"2px solid #B66468",
                    "&:hover": {
                        background:"#B66468",
                        color:"#FEFAE0"
                    },
                }}>Переглянути ціни</Button>
            </Box>
            <PhotosPreview/>
            <IconsBlock/>
            <LocationBlock/>
            </Fade>
        </>
    )
}

export default MainPage