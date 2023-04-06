import {  Box, Button, Grid, Typography, Modal } from "@mui/material"
import "../../styles/formStyles.css"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import emailjs from '@emailjs/browser';
import React  from 'react';
import { Zoom, Slide } from "react-awesome-reveal";
function ResultModal ({showModal, closeModal}){
    const navigate = useNavigate()
    return (
        <Modal open={showModal} onClose={closeModal}>
        <Box sx={{width:"100%", height:"100%", position:"absolute", display:"flex", justifyContent:"center", alignItems:"center"}}>
            <Box sx={{maxWidth:{xs:"300px",sm:"400px"}, height:"280px", background:"#B66468", display:"flex", justifyContent:"center", alignItems:"center", flexDirection: "column", borderRadius: {xs:"40px", sm:"65px"}}}>
                <Typography sx={{
                    fontFamily:"Rubik",
                    fontStyle: "normal",
                    fontWeight: 500,
                    fontSize: "30px",
                    lineHeight: "36px",
                    textAlign: "center",
                    color: "#FEFAE0",
                }}>
                    ВАШУ ЗАЯВКУ ВІДПРАВЛЕНО!
                </Typography>
                <Typography sx={{
                    fontFamily:"Rubik",
                    fontStyle: "normal",
                    fontWeight: 400,
                    fontSize: "19px",
                    lineHeight: "23px",
                    textAlign: "center",
                    color:"#FEFAE0",
                    padding:"30px",
                }}>
                Зачекайте , скоро наш адміністратор з вами зв’яжеться
                </Typography>

                <Button sx={{
                    width:"45%",
                    background:"inherit",
                    border:"2px solid #FEFAE0",
                    fontFamily:"Rubik",
                    color:"#FEFAE0",
                    borderRadius:"20px",
                    "&:hover": {
                        border:"0",
                        background:"#FEFAE0",
                        color:"#B66468"
                    }
                }} onClick={() => navigate("/")}>На головну</Button>
            </Box>
        </Box>
        </Modal>
    )
}

function BookingPage(){
    const [result, showResult] = useState(false)
    const handleClose = () => showResult(false);
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_sa5isy8', 'template_ykhh803', e.target, '-WMqnPrguK2JeYJF6')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
          showResult(true)
      };
      setTimeout(()=> {
        showResult(false)
      }, 5000)

    return(
        <>
        <ResultModal showModal={result} closeModal={handleClose}/>
        <Box sx={{
            width:"100%",
            height:"55em",
            marginTop:"50px",
            display:"flex",
            justifyContent:"center",
            alignItems: "center",
            flexDirection:"column"
        }}>

            
            <Box name='mainText_block' sx={{
                width: "80%",
                height:"28em",
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
                    }}>Записатись на прийом</Typography>
                </Box>
                <Box name='text'>
                    <Typography sx={{
                        fontFamily: 'Rubik',
                        fontStyle: "normal",
                        fontWeight: "400",
                        fontSize: {xs:"20px", sm:"20px", lg:"30px"},
                        lineHeight: "46px",
                        textAlign: "center",
                    }}>Щоб записатися на прийом в Amigos, а також отримати відповіді на загальні питання, зателефонуйте нам за номером <a className="blackLink" href="tel:+380937408606">+38 093 740 8606 </a> або заповніть контактну форму нижче для зворотного дзвінка.</Typography>
                </Box>
                </Zoom>
            </Box>

            
            <Box className="form_body" sx={{width:"80%"}}>
            <form onSubmit={sendEmail}>
            <Slide triggerOnce>
                <Grid container spacing={3} sx={{justifyContent:"center"}}>
                    
                        <Grid item md={6} xs={12}>
                            <input className="form_input" type="text" name="name" placeholder="Введіть ваше ім'я" required/>
                        </Grid>
                        <Grid item md={6} xs={12}>
                            <input className="form_input" type="text" name="number" placeholder="Введіть ваш номер" required/>
                        </Grid>
                        <Grid item md={6} xs={12}>
                            <input className="form_input" type="text" name="dog_breed" placeholder="Введіть породу собаки" required/>
                        </Grid>
                        <Grid item md={6} xs={12}>
                            <input className="form_input" type="text" name="dog_name" placeholder="Введіть ім'я собаки" required/>
                        </Grid>
                        <Grid item xs={12}>
                            <input className="form_input message" type="text" name="message" placeholder="Повідомлення/запитання" />
                        </Grid>
               
                    <Button type="submit" sx={{
                        margin:"20px 0 0 20px",
                        width:"50%",
                        height:"4em",
                        background:"#B66468",
                        color:"#FEFAE0",
                        borderRadius:"50px",
                        "&:hover":{
                            background:"#FEFAE0",
                            color:"#000000",
                            border:"2px solid #000000"
                        }
                    }}>Надіслати</Button>
                </Grid>
                </Slide>
            </form>
            </Box>
        </Box>
        </>

    )
}

export default BookingPage