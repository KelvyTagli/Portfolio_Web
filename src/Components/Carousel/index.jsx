import { Container } from "./styles";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

import { register } from "swiper/element";


import html from '../../assets/html-5.svg'
import javascript from '../../assets/JavaScript-logo.png'
import cshap from '../../assets/c-afiado-logotipo.svg'
import react from '../../assets/react.svg'
import css from '../../assets/css-logo.svg'

import { Autoplay } from "swiper/modules";

register();

export function Carousel() {

    const Skills = [
        {ID: '1', Image: html, language: 'HTML'},
        {ID: '2', Image: css, language: 'CSS'},
        {ID: '3', Image: javascript, language: 'JAVASCRIPT'},
        {ID: '4', Image: cshap, language: 'C#'},
        {ID: '5', Image: react, language: 'REACT'},
    ]
    
    return(
        <Container>
            <Swiper slidesPerView={1}
                    modules={[Autoplay]}
                    navigation
                    autoplay={{delay:2000}}
                    className="swiper"
            >
                {Skills.map((item) => (
                    <SwiperSlide key={item.ID}>
                        <img src={item.Image} alt="" className="IMG"/>
                        <p className="language">{item.language}</p>
                    </SwiperSlide>
                ))}
            </Swiper>
        </Container>
    )
}