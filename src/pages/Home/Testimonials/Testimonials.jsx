import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import Container from '../../shared/Container/Container';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { FaQuoteLeft } from "react-icons/fa";

const Testimonials = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div>
            <Container>
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                    {
                        reviews.map(review => <SwiperSlide
                            key={review._id}>
                            <div className='p-20 flex flex-col justify-center items-center'>
                                <Rating
                                    style={{ maxWidth: 100 }}
                                    value={review.rating}
                                    readOnly
                                />
                                <FaQuoteLeft className='font-extrabold text-4xl my-4'></FaQuoteLeft>
                                <p className='py-2'>{review.details}</p>
                                <h3 className='text-orange-500 text-2xl'>{review.name}</h3>
                            </div>
                        </SwiperSlide>)
                    }
                </Swiper>
            </Container>
        </div>
    );
};

export default Testimonials;