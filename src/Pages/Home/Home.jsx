
import { Helmet } from 'react-helmet-async';
import Banner from './Banner';
import Features from './Features/Features';

import PopularMenu from './PopularMenu';
import Swap from './Swap';
import Testimonial from './Testimonial';




const Home = () => {
    return (
        <div>
            <Helmet><title>Boss Restro | Home</title></Helmet>
          <Banner/>
         <Swap/>
         <PopularMenu/>
         <Features/>
         <Testimonial/>
        </div>
    );
};

export default Home;