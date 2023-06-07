
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import useCart from '../../Hooks/useCart';
import Table from './Table';


const MyCart = () => {
    const [cart]= useCart();
    const total = Array.isArray(cart)
    ? cart.reduce((sum, item) => item.price + sum, 0)
    : 0;
    return (
        <div>
            <Helmet><title>Boss Restro | MyCart</title></Helmet>
        <div className=' uppercase'>
            <div className='flex justify-around'><h3 className='text-3xl'>Total Orders:{cart.length}</h3>
            <h3 className='text-3xl'>Total Price:${total}</h3>
            <Link to="/dashboard/payhistory" className="btn btn-outline btn-warning btn-sm">Pay</Link></div>
            <Table/>
        </div>
        </div>
    );
};

export default MyCart;