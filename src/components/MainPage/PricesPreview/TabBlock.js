import { Box, Tab, Typography } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { useState } from "react";
import { pricesPreviewData } from "./PricesPreview";
import React  from 'react';
function TabBlock(){

    const [value, setValue] = useState('1')

    const handleChange = (event, newValue) =>{
        setValue(newValue)
    }
    return(
        <Box>
            <TabContext value={value} centered>
                <Box sx={{
                    width:"100%",
                    padding: "10px 0 10px 0",

                }}>
                    <TabList onChange={handleChange} centered scrollButtons="auto" TabScrollButtonProps={{sx:{ color:"#B66468"}}} TabIndicatorProps={{sx:{background:"#B66468"}}} sx={{
                        justifyContent: "center",
                        border: "2px solid",
                    }}>
                        {pricesPreviewData.map(({value, title})=>(
                            <Tab value={value} label={title}  sx={{
                                fontFamily: 'OksFree',
                                "&:focus-within":{
                                    color:"#B66468",
                                }
                            }}></Tab>
                        ))}
                    </TabList>
                </Box>
                <Box>


                {pricesPreviewData.map(({value, title, startPrice, descriptionList})=>(
                    
                        <TabPanel value={value} label={title} sx={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "center",
                            alignItems: "center",
                            padding:"0"
                        }}>
                                <Box sx={{
                                    width:{xs:"80%", sm:"65%"},
                                    height:"353px",
                                    boxShadow:" 24px 24px 0px 0px rgba(182,100,104,1)",
                                    background: "#fff",
                                    display: "flex",
                                    justifyContent: "space-around",
                                    alignItems: "flex-start",
                                    flexDirection: "column",
                                    padding:"20px",
                                }}> 
                                        <Typography sx={{
                                            fontStyle: "normal",
                                            fontWeight: "400",
                                            fontSize: "40px",
                                            lineHeight: "27px",
                                        }}>{startPrice}</Typography>
                                        <Box>
                                            {/* {descriptionList.map((element) =>( */}
                                                <Typography sx={{
                                                    fontStyle: "normal",
                                                    fontWeight: "400",
                                                    fontSize: {xs:"12px", sm:"16px"},
                                                    lineHeight: "30px",
                                                }}>{descriptionList}</Typography>
                                            {/* ))} */}
                                        </Box>

                                </Box>
                        </TabPanel>
                ))}
                </Box>
            </TabContext>
        </Box>
    )
}

export default TabBlock