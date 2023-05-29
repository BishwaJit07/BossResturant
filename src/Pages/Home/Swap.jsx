import { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import menu1 from '../../assets/home/slide1.jpg';
import menu2 from '../../assets/home/slide2.jpg';
import menu3 from '../../assets/home/slide3.jpg';
import menu4 from '../../assets/home/slide4.jpg';
import menu5 from '../../assets/home/slide5.jpg';

// import required modules
import { Pagination, Navigation } from "swiper";
import SecTitle from "./SecTitle";

const Swap = () => {
    const [swiperRef, setSwiperRef] = useState(null);


   

    return (
        <div>
            <>
        <SecTitle heading={"---From 11:00am to 10:00pm---"} subHeading={"ORDER ONLINE"}>

        </SecTitle>
      <Swiper
        onSwiper={setSwiperRef}
        slidesPerView={3}
        centeredSlides={false}
        spaceBetween={30}
        pagination={{
          type: "fraction",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img src={menu1} alt="" /> <h3 className="text-center -mt-12 text-3xl text-white">SalaDs</h3></SwiperSlide>
        <SwiperSlide><img src={menu2} alt="" /><h3 className="text-center -mt-12 text-3xl text-white">PizzA</h3></SwiperSlide>
        <SwiperSlide><img src={menu3} alt="" /><h3 className="text-center -mt-12 text-3xl text-white">SouPs</h3></SwiperSlide>
        <SwiperSlide><img src={menu4} alt="" /><h3 className="text-center -mt-12 text-3xl text-white">CakE</h3></SwiperSlide>
        <SwiperSlide><img src={menu5} alt="" /><h3 className="text-center -mt-12 text-3xl text-white">SalaDs</h3></SwiperSlide>
      </Swiper>

     
    </>
        </div>
    );
};

export default Swap;