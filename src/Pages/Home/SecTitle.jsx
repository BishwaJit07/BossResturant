

const SecTitle = ({heading,subHeading}) => {
    return (
        <div className='text-center py-2 md:w-3/12 mx-auto'>
             <h3 className=' pb-2 text-yellow-500 font-medium text-xl'>{heading}</h3>
             <p className='text-4xl font-semibold uppercase py-1
              border-y-2'>{subHeading}</p>
        </div>
    );
};

export default SecTitle;