const FoodCard = ({ item }) => {
  const { image, price, recipe, name } = item;
  return (
    <div>
      <div className="card w-96 h-96 bg-slate-200 shadow-2xl my-4">
        <figure className="px-2 pt-4">
          <img src={image} className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <p className=" absolute right-9  top-9 bg-slate-900 p-2 rounded-xl text-white font-medium text-xl">
            ${price}
          </p>
          <div>
            <h2 className="card-title">{name}</h2>
            <p>{recipe}</p>
          </div>
          <div className="card-actions">
            <button className="btn btn-outline border-0 border-b-4 m-4 bg-slate-300  border-yellow-600">
              Add to card
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
