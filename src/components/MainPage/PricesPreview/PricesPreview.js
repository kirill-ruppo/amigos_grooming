import { Box, Typography,  } from "@mui/material"
import React from 'react';
export const pricesPreviewData = [
    {
        title:"Комплексний догляд",
        value:"1",
        startPrice:"від 500грн",
        descriptionList: "Комплексний догляд (стрижка/ стрипінг (тримінг) / експрес линька — обговорюються побажання клієнта та стан шерсті собаки) - купання шампунем глибокого очищення та шампунем відповідно до типу шерсті, бальзамом, обрізання кігтів, чищення параанальних залоз (за потреби), чищення вушок, сушка з укладкою, вичісування, стрижка pet/ стрипінг (тримінг)/ експрес линька — залежно від породи та типу шерсті, парфум",
        
    },
    {
        title:"Гігієнічний догляд",
        value:"2",
        startPrice:"від 350грн",
        descriptionList: "Гігієнічний догляд - купання шампунем глибокого очищення та шампунем відповідно до типу шерсті, бальзамом, обрізання кігтів, чищення параанальних залоз (за потреби), чищення вушок, сушка з укладкою, вичісування, гігієна подушечок лап та обкантовка лап, гігієна інтимної зони, стрижка біля очок або зав’язування бантика, — залежно від породи та типу шерсті, парфум. Стрижка мордочки +100 грн"
    },
    
]
function PricesPreview(){
    return(
        <Box>
            <Box name="our services" sx={{
                width: "100%",
                height: "30em",
                display: "flex",
                justifyContent:"space-around",
                alignItems: "center",
            }}>
                {pricesPreviewData.map(({title, startPrice, descriptionList}) => (
                    <Box sx={{
                        width:"35%",
                        height:"400px",
                        padding:"30px",
                        boxShadow:" 24px 24px 0px 0px rgba(182,100,104,1)",
                        background: "#fff",
                        display: "flex",
                        justifyContent: "space-around",
                        alignItems: "flex-start",
                        flexDirection: "column",
                    }}> 
                            <Typography sx={{
                                fontFamily: 'OksFree',
                                fontStyle: "normal",
                                fontWeight: "400",
                                fontSize: "26px",
                                lineHeight: "27px",
                            }}>{title}</Typography>
                            <Typography sx={{
                                fontFamily:"Rubik",
                                fontStyle: "normal",
                                fontWeight: "400",
                                fontSize: "32px",
                                lineHeight: "27px",
                            }}>{startPrice}</Typography>
                            <Box>
                                {/* {descriptionList.map((element) =>( */}
                                    <Typography sx={{
                                        fontFamily:"Rubik",
                                        fontStyle: "normal",
                                        fontWeight: "400",
                                        fontSize: {md:"12px", lg:"16px"},
                                        lineHeight: "27px",
                                    }}>{descriptionList}</Typography>
                                {/* ))} */}
                            </Box>

                    </Box>
                ))

                }
                
            </Box>

                
        </Box>
    )
}

export default PricesPreview