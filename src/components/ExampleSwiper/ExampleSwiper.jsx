import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "./ExampleSwiper.scss";

const images = [
  "/images/leftimg.avif",
  "/images/right-img.avif",
  "/images/leftimg.avif",
  "/images/right-img.avif",
  "/images/leftimg.avif",
  "/images/right-img.avif",
  "/images/leftimg.avif",
  "/images/right-img.avif",
  "/images/leftimg.avif",
  "/images/right-img.avif",
  "/images/leftimg.avif",
  "/images/right-img.avif",
  "/images/leftimg.avif",
  "/images/right-img.avif",
  "/images/leftimg.avif",
  "/images/right-img.avif",
  "/images/leftimg.avif",
  "/images/right-img.avif",
];

const ExampleSwiper = () => {
  return (
    <div className="marquee-wrapper">
      <Swiper
        modules={[Autoplay]}
        loop={true}
        speed={4000} // speed of scroll (higher = slower)
        autoplay={{
          delay: 1, // must not be 0
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
          reverseDirection : true,
        }}
        spaceBetween={40}
        slidesPerView="auto"
        allowTouchMove={false}
        centeredSlides={false}
        grabCursor={false}
      >
        {images.map((src, i) => (
          <SwiperSlide key={i} className="marquee-slide">
            <img src={src} alt={`slide-${i}`} className="marquee-img" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ExampleSwiper;
