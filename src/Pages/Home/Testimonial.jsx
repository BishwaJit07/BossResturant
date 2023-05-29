// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation, HashNavigation } from "swiper";
import SecTitle from "./SecTitle";
import { useEffect } from "react";
import { useState } from "react";

import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";
import { AiOutlineComment } from "react-icons/ai";
const Testimonial = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
      });
  }, []);
  return (
    <div>
      <SecTitle
        heading={"---What Our Clients Say---"}
        subHeading={"TESTIMONIALS"}
      ></SecTitle>
      <div>
        <Swiper
          spaceBetween={30}
          hashNavigation={{
            watchState: true,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation, HashNavigation]}
          className="mySwiper w-2/4"
        >
          {reviews.map((review) => (
            <SwiperSlide key={review._id} review={review} data-hash="slide1">
              <div className="w-3/4 mx-auto py-4 flex flex-col justify-center items-center"><AiOutlineComment className="text-6xl"/>
                <Rating
                  
                  style={{ maxWidth: 180 }}
                  value={review.rating}
                  readOnly
                />
                <img src="" alt="" />
                <p>{review.details}</p>
                <p className="text-center pb-2 text-3xl text-yellow-600">
                  {review.name}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;
