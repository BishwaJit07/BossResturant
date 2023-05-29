

import feature from '../../../assets/home/featured.jpg'
import SecTitle from '../SecTitle';

const Features = () => {
    return (
        <div >
            <div    className='text-white p-4' style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${feature})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center',backgroundAttachment: 'fixed', width: '100%', height: '50%' }}>
            <SecTitle heading={'---Check it out---'} subHeading={'FROM OUR MENU'}></SecTitle>
            <div className='flex flex-col md:flex-row justify-center items-center ' >
                <img src={feature} alt="" className='w-96 m-4 rounded-xl'/>
                <div> <h2 className='text-3xl'>March 20, 2023
                  WHERE CAN I GET SOME?</h2>
                  <p className='text-2xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>  <button className="btn glass ">Read More</button></div>
            </div>
            </div>
        </div>
    );
};

export default Features;