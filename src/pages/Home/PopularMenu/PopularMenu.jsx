import React from 'react';
import CategoryTitle from '../../../components/CategoryTitle';
import useMenu from '../../../hooks/useMenu';
import MenuItem from '../../shared/MenuItem/MenuItem';
import Container from '../../shared/Container/Container';

const PopularMenu = () => {
    const [menu, loading] = useMenu();
    const popularItems = !loading && menu.filter(item => item.category === 'popular');
    return (
        <div className="mb-20">
            <Container>
                <CategoryTitle
                    subHeading='Check it out'
                    heading='FROM OUR MENU'
                ></CategoryTitle>
                <div className='grid md:grid-cols-2 gap-10'>
                    {!loading &&
                        popularItems.map(item => <MenuItem
                            key={item._id}
                            item={item}
                        ></MenuItem>)
                    }
                </div>
            </Container>
        </div>
    );
};

export default PopularMenu;