import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import CategoryTitle from "../../../components/CategoryTitle";

import slide1 from '../../../assets/home/slide1.jpg';
import slide2 from '../../../assets/home/slide2.jpg';
import slide3 from '../../../assets/home/slide3.jpg';
import slide4 from '../../../assets/home/slide4.jpg';
import slide5 from '../../../assets/home/slide5.jpg';
import Container from "../../shared/Container/Container";

const Category = () => {
    return (
        <Container>
            <CategoryTitle
                heading='order online'
                subHeading='From 11:00am to 10:00pm'
            ></CategoryTitle>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                centeredSlides={false}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper mb-16"
            >
                <SwiperSlide>
                    <img src={slide1} alt="" />
                    <h3 className="uppercase drop-shadow text-4xl text-center -mt-16 text-white">Salads</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide2} alt="" />
                    <h3 className="uppercase drop-shadow text-4xl text-center -mt-16 text-white">soups</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide3} alt="" />
                    <h3 className="uppercase drop-shadow text-4xl text-center -mt-16 text-white">pizzas</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide4} alt="" />
                    <h3 className="uppercase drop-shadow text-4xl text-center -mt-16 text-white">desserts</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide5} alt="" />
                    <h3 className="uppercase drop-shadow text-4xl text-center -mt-16 text-white">Salads</h3>
                </SwiperSlide>
            </Swiper>
        </Container>
    );
};

export default Category;