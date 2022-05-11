import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './banner.css'
import banner1 from '../../../image/banner1.png'
import banner2 from '../../../image/banner2.png'
import banner3 from '../../../image/banner3.png'
const Banner = () => {
    return (
        <div>
            <Carousel className='carosel' animationHandler="fade" showArrows={true} showThumbs={false} autoPlay={true} infiniteLoop={true
            }>
                <div>
                    <img src={banner1} alt=' ' />
                    <p className="legend bg-primary banner-text fs-1 font-weight-bold">Perfume is the art that makes memory speak.</p>
                </div>
                <div>
                    <img src={banner2} alt=' ' />
                    <p className="legend bg-primary banner-text fs-1 font-weight-bold">Perfume is a story in odour, sometimes poetry in memory.</p>
                </div>
                <div>
                    <img src={banner3} alt=' ' />
                    <p className="legend bg-primary banner-text fs-1 font-weight-bold">Fragrance makes us dream.</p>
                </div>
            </Carousel>
        </div>
    );
};

export default Banner;