import React from 'react';
import CategoryTitle from '../../../components/CategoryTitle';
import featuredImg from '../../../assets/home/featured.jpg'
import Container from '../../shared/Container/Container';
import './Featured.css'

const Featured = () => {
    return (
        <div className='featured bg-fixed my-10 pt-8 pb-16 text-white'>
            <CategoryTitle
                heading='FROM OUR MENU'
                subHeading='Check it out'
            ></CategoryTitle>
            <Container>
                <div className='md:flex justify-center items-center gap-10 bg-black bg-opacity-40'>
                    <div>
                        <img src={featuredImg} alt="" />
                    </div>
                    <div className=''>
                        <p>March 20, 2023</p>
                        <p className='uppercase'>WHERE CAN I GET SOME?</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                        <button className='btn btn-outline border-0 border-b-4 mt-4 text-white'>Read More</button>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Featured;