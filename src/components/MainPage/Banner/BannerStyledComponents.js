import { Box, Button, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const BannerContainer = styled(Box)(({ src, theme }) => ({
  background: `url(${src})`, 
  backgroundSize:"cover", 
  backgroundRepeat:"no-repeat",
  display: "flex",
  justifyContent: "flex-start",
  alignItems:"center",
  width: "100%",
  height: "900px",
  // background: "#dca15e78",
  [theme.breakpoints.down("lg")]: {
    height: "670px",
  },
  [theme.breakpoints.down("md")]: {
    height: "470px",
  },
  [theme.breakpoints.down("sm")]: {
    height: "340px",
    alignItems:"center",
  },
 
}));

export const BannerShopButton = styled(Button)(({ theme }) => ({
  width:"20%",
  padding: "20px 100px",
  color:"black",
  fontWeight: "regular",
  fontSize: "16px",
  border:"2px solid black",
  [theme.breakpoints.down("md")]: {
    padding: "15px 50px",
    fontSize: "12px",
  },
  [theme.breakpoints.down("sm")]: {
    width:"40%",
    padding: "10px 0px",
    fontSize: "10px",
  },
  "&:hover": {
    color: "#00000",
  },
}));

export const BannerImage = styled("img")(({ src, theme }) => ({
  src: `url(${src})`,
  
  // width: "380px", //"600px",
  // [theme.breakpoints.down("lg")]: {
  //   width: "300px", //"500px",
  // },
  // [theme.breakpoints.down("md")]: {
  //   width: "220px", //"300px",
  // },
  // [theme.breakpoints.down("sm")]: {
  //   width: "200px", //"320px",
  // },

  width: "600px",
  [theme.breakpoints.down("lg")]: {
    width: "500px",
  },
  [theme.breakpoints.down("md")]: {
    width: "300px",
  },
  [theme.breakpoints.down("sm")]: {
    width: "100%",
  },
}));

export const BannerTitle = styled(Typography)(({ theme }) => ({
  lineHeight: "43px",
  fontSize: "51px",
  color: "#00000",
  fontFamily: 'OksFree',
  fontStyle:"normal",
  fontWeight:"400px",
  marginBottom: "20px",
  [theme.breakpoints.down("lg")]: {
    fontSize: "38px",
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "34px",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "30px",
  },
}));

export const BannerDescription = styled(Typography)(({ theme }) => ({
  fontFamily:"Rubik",
  fontSize:"26px",
  lineHeight: "43px",
  letterSpacing: 1.25,
  marginBottom: "3em",
  [theme.breakpoints.down("md")]: {
    lineHeight: "20px",
    letterSpacing: 1.15,
    marginBottom: "1.5em",
    fontSize:"15px",
  },
}));

export const BannerContent = styled(Box)(({theme}) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  width:"35%",
  padding: "0 0 0 100px",
  [theme.breakpoints.down("sm")]: {
    width:"70%",
    padding: "10px",
  },
}));

