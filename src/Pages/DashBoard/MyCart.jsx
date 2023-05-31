import React from 'react';
import useCart from '../../Hooks/useCart';
import Table from './Table';


const MyCart = () => {
    const [cart]= useCart();
    const total = Array.isArray(cart)
    ? cart.reduce((sum, item) => item.price + sum, 0)
    : 0;
    return (
        <div className=' uppercase'>
            <div className='flex justify-around'><h3 className='text-3xl'>Total Orders:{cart.length}</h3>
            <h3 className='text-3xl'>Total Price:${total}</h3>
            <button className="btn btn-outline btn-warning btn-sm">Pay</button></div>
            <Table/>
        </div>
    );
};

export default MyCart;