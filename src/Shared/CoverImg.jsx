
const CoverImg = ({img,title,des}) => {
    return (
        <div className="hero h-[600px]" style={{ backgroundImage: `url(${img})` }}>
      
        <div className="hero-content text-center text-neutral-content">
          <div className="w-80% bg-black bg-opacity-50 p-20">
            <h1 className="mb-5 text-5xl font-bold">{title}</h1>
            <p className="mb-5">{des}</p>
            
          </div>
        </div>
      </div>
    );
};

export default CoverImg;