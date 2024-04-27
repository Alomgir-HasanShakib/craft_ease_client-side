import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";
const Banner = () => {
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper max-h-screen mb-16 rounded-lg"
    >
      <SwiperSlide>
        <img
          className="w-full"
          src="https://i.postimg.cc/NMfsq794/easy-card-ideas-001.jpg"
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="w-full"
          src="https://i.postimg.cc/B6YqqL2G/best-scrapbooking-kits-2aa2e8f.png"
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="w-full"
          src="https://i.postimg.cc/8zRN7nL4/3709.jpg"
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="w-full"
          src="https://i.postimg.cc/3x53JH0W/Glass-Painting-Technique-1200-0323.jpg"
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="w-full"
          src="https://i.postimg.cc/DfN2HG2r/main-qimg-dc44b55ae047895f392305fbac7dfc3a.webp"
          alt=""
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default Banner;
