import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import useCart from '../../Hooks/useCart';
import SecTitle from '../Home/SecTitle';
import ChekoutFrom from './ChekoutFrom';


const stripePromise = loadStripe(import.meta.env.VITE_gateway_Key);

const Payment = () => {
    const [cart]= useCart();
    const total = Array.isArray(cart)
    ? cart.reduce((sum, item) => item.price + sum, 0)
    : 0;

     const price = parseFloat(total.toFixed(2))
     
    return (
        <div>
            <SecTitle subHeading='Payment'></SecTitle>
                <Elements stripe={stripePromise}>
                <ChekoutFrom price={price} cart={cart}></ChekoutFrom>
                </Elements>
           
        </div>
    );
};

export default Payment;