import { Box, Typography, Button } from "@mui/material"
import { useState, useEffect } from "react"
import "../.././styles/tabsPricesStyles.css"
import BlockForList from "./BlockForList"
import React  from 'react';

const priceMain = [{
    buttonTitle:"КОМПЛЕКСНИЙ ДОГЛЯД",
    titleBlockLeft:"ПОРОДА",
    titleBlockRight:"Вартість(грн)",
    priceList: [
        {service:"Йоркширський тер’єр", price:"600"},
        {service:"Мальтійська болонка", price:"600"},
        {service:"Ши-тцу", price:"650"},
        {service:"Шпіц померанський", price:"650"},
        {service:"Той, карликовий або малий пудель", price:"700"},
        {service:"Бішон", price:"750"},
        {service:"Мальтіпу", price:"750"},
        {service:"Йоркіпу", price:"750"},
        {service:"Кавапу", price:"750"},
        {service:"Кокапу", price:"750"},
        {service:"Бішпу (пушон)", price:"750"},
        {service:"Чихуахуа", price:"550"},
        {service:"Той тер‘єр", price:"500"},
        {service:"Мопс", price:"600"},
        {service:"Джек рассел тер’єр", price:"600"},
        {service:"Такса довгошерстна/ жорсткошенрстна", price:"650"},
        {service:"Біверйоркширський тер‘єр", price:"600"},
        {service:"Кокер спанієль", price:"750"},
        {service:"Кавалер кінг чарльз спанієль", price:"700"},
        {service:"Шпіц німецький", price:"680"},
        {service:"Континентальни той-спаніель", price:"700"},
        {service:"Лаготто", price:"900"},
        {service:"Папільон", price:"500"},
        {service:"Японський хін", price:"600"},
        {service:"Пекінес", price:"500"},
        {service:"Китайська хохлата пухова/ гола", price:"550"},
        {service:"Цвергшнауцер", price:"750"},
        {service:"Фокс тер’єр", price:"750"},
        {service:"Скотч тер‘єр", price:"750"},
        {service:"Вест хайленд Вайт тер’єр", price:"850"},
        {service:"Ретривер", price:"1200"},
        {service:"Лабрадудль", price:"1100"},
        {service:"Австралійська вівчарка", price:"1200"},
        {service:"Вельш тер‘єр", price:"900"},
        {service:"Ардель тер‘єр", price:"1300"},
        {service:"Грифон", price:"800"},
        {service:"Хаскі", price:"1400"},
        {service:"Мітельшнауцер", price:"1100"},
        {service:"Різеншнауцер", price:"1400"},
        {service:"Лайка", price:"1400"},
        {service:"Німецька вівчарка", price:"1600"},
        {service:"Коргі", price:"800"},
        {service:"Американська акіта", price:"1500"},
        {service:"Самоїд", price:"1900"},
        {service:"Кане Корсо", price:"1100"},
        {service:"Доберман", price:"1100"},
        {service:"Дог", price:"1300"},
        {service:"Інші породи собак до 8 кг", price:"600"},
        {service:"Інші породи собак 8-15 кг", price:"600-800"},
        {service:"Інші породи собак від 15 кг ", price:"від 800"},
],
    endText:"*Комплексний догляд (стрижка/ стрипінг/ експрес линька — обговорюються побажання клієнта та стан шерсті собаки) - купання шампунем глибокої очистки та шампунем відповідно до типу шерсті, бальзамом (за потреби додаткова маска), обрізання кігтів, чищення параанальних залоз (за потреби), чищення вушок, сушка з укладкою, вичісування, стрижка pet/ стрипінг/ тримінг/ експрес линька — залежно від породи та типу шерсті, парфюм"
}]
const priceAddition = [{
    buttonTitle:"ДОДАТКОВІ ПОСЛУГИ",
    titleBlockLeft:"Додаткова послуга",
    titleBlockRight:"Вартість(грн)",
    priceList: [
        {service:"ВИЧІСУВАННЯ ", price:"350/ год"},
        {service:"МАНІКЮР (Обрізання кігтів, запилення фрезером, зволоження подушечок бальзамом) ", price:"150/ год"},
        {service:"“відкрити очі“", price:"200"},
        {service:"гігієнічна чистка зубів", price:"150"},
        {service:"маска (додатково до вартості основної процедури)", price:"100"},
        {service:"стриппінг", price:"400/ год"},
    ],
    endText:""
}]


const priceGigiena = [{
    buttonTitle:"ГІГІЄНІЧНИЙ ДОГЛЯД",
    titleBlockLeft:"ПОРОДА",
    titleBlockRight:"Вартість(грн)",
    priceList: [
        {service:"Йоркширський тер’єр", price:"420"},
        {service:"Мальтійська болонка", price:"420"},
        {service:"Ши-тцу", price:"480"},
        {service:"Шпіц померанський", price:"550"},
        {service:"Той, карликовий або малий пудель", price:"600"},
        {service:"Бішон", price:"650"},
        {service:"Мальтіпу", price:"600-650"},
        {service:"Йоркіпу", price:"600-650"},
        {service:"Кавапу", price:"600-650"},
        {service:"Кокапу", price:"600-650"},
        {service:"Бішпу (пушон)", price:"600-700"},
        {service:"Чихуахуа 	", price:"450"},
        {service:"Той тер‘єр", price:"400"},
        {service:"Мопс", price:"500"},
        {service:"Джек рассел тер’єр", price:"500"},
        {service:"Такса довгошерстна/ жорсткошенрстна", price:"550"},
        {service:"Біверйоркширський тер‘єр", price:"500"},
        {service:"Кокер спанієль", price:"600-650"},
        {service:"Кавалер кінг чарльз спанієль", price:"600"},
        {service:"Шпіц німецький", price:"600"},
        {service:"Континентальни той-спаніель", price:"600"},
        {service:"Лаготто", price:"750-800"},
        {service:"Папільон", price:"420"},
        {service:"Японський хін", price:"420"},
        {service:"Пекінес", price:"420"},
        {service:"Акіта-іну", price:"1400"},
        {service:"Шиба-іну", price:"900"},
        {service:"Бордер — колі", price:"1200"},
        {service:"Бігль", price:"600-650"},
        {service:"Китайська хохлата пухова/ гола", price:"420"},
        {service:"Цвергшнауцер", price:"550-600"},
        {service:"Скотч тер‘єр", price:"550-600"},
        {service:"Вест хайленд Вайт тер’єр", price:"700-750"},
        {service:"Лабрадудль", price:"1000-1050"},
        {service:"Австралійська вівчарка", price:"1100"},
        {service:"Вельш тер‘єр", price:"800"},
        {service:"Ардель тер‘єр", price:"1200"},
        {service:"Грифон", price:"700"},
        {service:"Хаскі", price:"1300"},
        {service:"Мітельшнауцер", price:"1000"},
        {service:"Різеншнауцер", price:"1300"},
        {service:"Лайка", price:"1300"},
        {service:"Німецька вівчарка", price:"1500"},
        {service:"Коргі", price:"700"},
        {service:"Американська акіта", price:"1400"},
        {service:"Самоїд", price:"1800"},
        {service:"Кане Корсо", price:"1000"},
        {service:"Доберман", price:"1000"},
        {service:"Дог", price:"1200"},
        {service:"Інші породи собак до 8 кг", price:"450-600"},
        {service:"Інші породи собак 8-15 кг", price:"600-700"},
        {service:"Інші породи собак від 15 кг", price:"Від 700"},
    ],
    endText:"Гігієнічний догляд - купання шампунем глибокого очищення та шампунем відповідно до типу шерсті, бальзамом, обрізання кігтів, чищення параанальних залоз (за потреби), чищення вушок, сушка з укладкою, вичісування, гігієна подушечок лап та обкантовка лап, гігієна інтимної зони, стрижка біля очок або зав’язування бантика, — залежно від породи та типу шерсті, парфум. Стрижка мордочки +100 грн"
}]


const priceCatsAndBunnys = [{
    buttonTitle:"Догляд за котами та кроликами",
    titleBlockLeft:"Догляд котів та кроликів",
    titleBlockRight:"Вартість(грн)",
    priceList: [
        {service:"ВИЧІСУВАННЯ котика", price:"450-500"},
        {service:"ВИЧІСУВАННЯ МЕЙН-КУН", price:"600-650"},
        {service:"СТРИЖКА котика (без купання)", price:"550-600"},
        {service:"СТРИЖКА МЕЙН-КУН", price:"700-750"},
        {service:"СТРИЖКА котика + КУПАННЯ", price:"750-800"},
        {service:"ВИЧІСУВАННЯ котика + КУПАННЯ", price:"850-900"},
        {service:"МЕЙНКУН КОМПЛЕКС З ВИЧІСУВАННЯМ", price:"1100"},
        {service:"МЕЙНКУН КОМПЛЕКС ЗІ СТРИЖКОЮ", price:"1100"},
        {service:"ВИЧІСУВАННЯ КРОЛИКА", price:"400-450"},
        {service:"обрізання кігтиків кролик/ котик", price:"150"},
    ],
    endText:""
}]

const types = ["КОМПЛЕКСНИЙ ДОГЛЯД", "ДОДАТКОВІ ПОСЛУГИ", "ГІГІЄНІЧНИЙ ДОГЛЯД", "ДОГЛЯД ЗА КОТАМИ ТА КРОЛИКАМИ"]
function PriceList(){
    const [active, setActive] = useState(types[0])
    useEffect(() => {
        // Обновляем заголовок документа с помощью API браузера
        setActive(types[0])
    },[]);
    useEffect(() => {
        setActive(types[0]) 
      }, []);
    return(

        <Box className='main_container' sx={{
            width:{xs:"95%", md:"80%"},
            display:"flex",
            flexDirection:"column",
            alignItems:"center",
        }}>
            
            <Box className='buttons_container' sx={{
                display:"flex",
                width:{xs:"90%", sm:"85%", md:"75%"},
                justifyContent:"space-around",
            }}>
                 
                {types.map((type)=>(
                   
                    <Button key={type} active={active === type} onClick={(e)=> setActive(type)} className={`list-item ${active === type && "active"}`} sx={{
                        width:{xs:"25%", sm:"20%"},
                        height:{xs:"6em", sm:"4em"},
                        background:"#E9AE4A",
                        color:"#000000",
                        borderRadius:"20px 20px 0 0",
                        "&:active": {
                            border:"2px solid #000000",
                            background:"#FEFAE0",
                            borderBottom:"0"
                        },
                        fontFamily: 'Rubik',
                        fontStyle: "normal",
                        fontWeight: "500",
                        fontSize: { xs:"8px", sm:"10px", md:"13px"},
                        lineHeight: "17px",
                        textAlign: "center",
                    }}>{type}</Button>
                   
                ))

                }
                
                
            </Box>
           
            

            <Box className='priceList' sx={{
                width:"100%"
            }}>
                <Box className='priceList_elements'>
                    <Box className='priceList_headings'>
                        <Typography className="left"></Typography>
                        <Typography className="right"></Typography>
                    </Box>
                    
                    <Box className='priceList_prices'>
                        <Box className='priceList_prices_element'>
                            {active === "КОМПЛЕКСНИЙ ДОГЛЯД" ? priceMain.map(({buttonTitle, titleBlockLeft, titleBlockRight, priceList, endText})=> {
                                return <BlockForList buttonTitle={buttonTitle}  titleBlockLeft={titleBlockLeft} titleBlockRight={titleBlockRight} priceList={priceList} endText={endText}>{buttonTitle}</BlockForList>
                            }) 
                            : active === "ДОДАТКОВІ ПОСЛУГИ" ? priceAddition.map(({buttonTitle, titleBlockLeft, titleBlockRight, priceList, endText})=> {
                                return <BlockForList buttonTitle={buttonTitle}  titleBlockLeft={titleBlockLeft} titleBlockRight={titleBlockRight} priceList={priceList} endText={endText}>{buttonTitle}</BlockForList>
                            }) 
                            : active === "ГІГІЄНІЧНИЙ ДОГЛЯД" ? priceGigiena.map(({buttonTitle, titleBlockLeft, titleBlockRight, priceList, endText})=> {
                                return <BlockForList buttonTitle={buttonTitle}  titleBlockLeft={titleBlockLeft} titleBlockRight={titleBlockRight} priceList={priceList} endText={endText}>{buttonTitle}</BlockForList>
                            })
                            : priceCatsAndBunnys.map(({buttonTitle, titleBlockLeft, titleBlockRight, priceList, endText})=> {
                                return <BlockForList buttonTitle={buttonTitle}  titleBlockLeft={titleBlockLeft} titleBlockRight={titleBlockRight} priceList={priceList} endText={endText}>{buttonTitle}</BlockForList>
                            })  
                           
                            }
                       </Box>
                    </Box>
                    
                </Box>
            </Box>
           
        </Box>
        
        
    )
}

export default PriceList