import {
    BannerContainer,
    BannerContent,
    BannerTitle,
    BannerDescription,
    BannerShopButton,
  } from "./BannerStyledComponents";
import { useNavigate } from "react-router-dom";
import React  from 'react';
import { Fade, Slide } from "react-awesome-reveal";
function Banner(){
  const navigate = useNavigate()
    return(
  
    <Fade duration={4000} delay={2} triggerOnce>
    <BannerContainer src="../images/banner.jpg">
    
      <BannerContent>
        <Slide direction="left" triggerOnce>
        <BannerTitle variant="h2">ЗАВІТАЙТЕ У “Amigos”</BannerTitle>
          <BannerDescription variant="subtitle">
            "Amigos" - з турботою про друзів
          </BannerDescription>
          <BannerShopButton onClick={() => navigate("/booking")}>
            Записатись
          </BannerShopButton>
          </Slide>
      </BannerContent>
    </BannerContainer>
    </Fade>

    )
}

export default Banner