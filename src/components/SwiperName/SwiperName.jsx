import React from 'react'
import './SwiperName.scss'
// Import Swiper and required modules
import { Swiper, SwiperSlide } from 'swiper/react'
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

// Import Swiper modules
import { Navigation, Pagination } from 'swiper/modules';
const MySwiperComponent = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      navigation
      pagination={{ clickable: true }}
      spaceBetween={20}
      slidesPerView={1}
      loop
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <div>
          <img src="https://th.bing.com/th/id/OIP.MCLzVoExgXPyNi_V5gb1AwHaE7?w=282&h=188&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="Slide 1" />
          <p>Automotive Healthcare Real Estate</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div>
          <p>70+ industry-recognized awards.</p>
          <img src="https://www.bing.com/images/search?view=detailV2&ccid=uHaqRdiM&id=06CDB8CCAC621BA0846B45913F076EB6EEFFC046&thid=OIP.uHaqRdiMzWSMCR2LzsmhtQHaEZ&mediaurl=https%3a%2f%2fimages.pexels.com%2fphotos%2f1188083%2fpexels-photo-1188083.png%3fcs%3dsrgb%26dl%3dsea-dawn-nature-1188083.jpg%26fm%3djpg&exph=3389&expw=5698&q=images&simid=608048034472147073&FORM=IRPRST&ck=738777525C1D13FF67740BAA9D3D6C5F&selectedIndex=0&itb=0" alt="Slide 2" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div>
          <img src="https://www.bing.com/images/search?view=detailV2&ccid=uHaqRdiM&id=06CDB8CCAC621BA0846B45913F076EB6EEFFC046&thid=OIP.uHaqRdiMzWSMCR2LzsmhtQHaEZ&mediaurl=https%3a%2f%2fimages.pexels.com%2fphotos%2f1188083%2fpexels-photo-1188083.png%3fcs%3dsrgb%26dl%3dsea-dawn-nature-1188083.jpg%26fm%3djpg&exph=3389&expw=5698&q=images&simid=608048034472147073&FORM=IRPRST&ck=738777525C1D13FF67740BAA9D3D6C5F&selectedIndex=0&itb=0" alt="Slide 3" />
          <p>E-commerce 10+ years of expertise</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div>
          <p>2 Engagement Models Classic / Ve</p>
          <img src="path_to_image4.jpg" alt="Slide 4" />
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default MySwiperComponent;

