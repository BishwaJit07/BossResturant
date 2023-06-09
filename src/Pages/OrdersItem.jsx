
import FoodCard from '../FoodCard/FoodCard';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper"

//  TODO - pagination here

const OrdersItem = ({items}) => {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };
    return (

      <>
      <Swiper
        pagination={pagination}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><div className='grid grid-cols-1 md:grid-cols-3 gap-10 '>
        
        { items.map(item=> <FoodCard key={item._id} item={item}/>)}
          
          </div></SwiperSlide>
        
      </Swiper>
    </>
        
    );
};

export default OrdersItem;