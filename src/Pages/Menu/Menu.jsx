import { Helmet } from 'react-helmet-async';
import CoverImg from '../../Shared/CoverImg';
import menuImg from '../../assets/menu/banner3.jpg'
import dessertImg from '../../assets/menu/dessert-bg.jpeg'
import piza from '../../assets/menu/pizza-bg.jpg'
import salads from '../../assets/menu/salad-bg.jpg'
import soup from '../../assets/menu/soup-bg.jpg'

import SecTitle from '../Home/SecTitle';
import useMenu from '../../Hooks/useMenu';
import MenuCategory from './MenuCategory';

const Menu = () => {
    const [menu] = useMenu();
    
    const offers= menu.filter(item=> item.category === 'offered');
    const desserts = menu.filter(item=> item.category === 'dessert');
    const pizza = menu.filter(item=> item.category === 'pizza');
    const soups = menu.filter(item=> item.category === 'soup');
    const salad = menu.filter(item=> item.category === 'salad');

    return (
        <div>
            <Helmet><title>Boss Restro | Menu</title></Helmet>
            <CoverImg img={menuImg} title={'OUR MENU'} des={'Would you like to try a dish?'}/>
            
            <SecTitle subHeading={"Today's offer"} heading={'---Dont miss---'}></SecTitle>
            <MenuCategory items={offers} title={'offers'}></MenuCategory>

                   {/* desserts  */}

                   <CoverImg img={dessertImg} title={'DESSERTS'} des={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}/>
            <MenuCategory items={desserts} title={'desserts'}></MenuCategory>

            {/* pizza */}
            <CoverImg img={piza} title={'Pizza'} des={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}/>
            <MenuCategory items={pizza} title={'pizza'}></MenuCategory>
            {/* Salads */}
            <CoverImg img={salads} title={'Salads'} des={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}/>
            <MenuCategory items={salad} title={'salad'}></MenuCategory>

            {/* Soups */}
            <CoverImg img={soup} title={'Soups'} des={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}/>
            <MenuCategory items={soups} title={'soups'}></MenuCategory>
        </div>
    );
};

export default Menu;