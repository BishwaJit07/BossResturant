import  { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import CoverImg from '../Shared/CoverImg';
import orderImg from '../assets/shop/banner2.jpg'
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../Hooks/useMenu';

import OrdersItem from './OrdersItem';
import { useParams } from 'react-router-dom';



const Orders = () => {
  const categories = ['salad', 'pizza','soups' ,'desserts', 'drinks']
  const {category} = useParams();
  const intialIndex= categories.indexOf(category)
    const [tabIndex, setTabIndex] = useState(intialIndex);
    const [menu] = useMenu();

   
    const desserts = menu.filter(item=> item.category === 'dessert');
    const pizzas = menu.filter(item=> item.category === 'pizza');
    const soups = menu.filter(item=> item.category === 'soup');
    const salads = menu.filter(item=> item.category === 'salad');
    const drinks = menu.filter(item=> item.category === 'drinks');

    return (
        <div>
             <Helmet><title>Boss Restro | Order Food</title></Helmet>
            <CoverImg img={orderImg} title={'OUR Shop'} des={'Would you like to order a dish?'}/>

            <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
      <TabList className='flex justify-center my-4'>
        <Tab>Salads</Tab>
        <Tab>Pizza</Tab>
        <Tab>Soups</Tab>
        <Tab>Desserts</Tab>
        <Tab>Drinks</Tab>
      </TabList>
      <TabPanel> <OrdersItem items={salads}/> </TabPanel>
      
      <TabPanel>
      <OrdersItem items={pizzas}/>
        </TabPanel>

      <TabPanel>
      <OrdersItem items={soups}/>
     
      </TabPanel>

      <TabPanel>
      <OrdersItem items={desserts}/>
      
     </TabPanel>

      <TabPanel> 
      <OrdersItem items={drinks}/>

  </TabPanel>
    </Tabs>
        </div>
    );
};

export default Orders;