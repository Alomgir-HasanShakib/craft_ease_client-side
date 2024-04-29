import { Link } from "react-router-dom";

const CraftItem = ({ craft }) => {
  const {
    _id,
    userName,
    imageURl,
    item_name,
    price,
    rating,
    customize,
    processingTime,
  } = craft;
  return (
    <div>
      <div className="card max-w-96 h-[479px] shadow-xl">
        <figure>
          <img src={imageURl} alt="User" />
        </figure>
        <div className="card-body">
          <h2 className="text-2xl font-bold text-primary">{item_name}</h2>
          <p className="text-gray-400 font-bold">Price : ${price}</p>
          <p className="text-gray-400 font-bold">Rating : {rating}</p>
          <p className="text-gray-400 font-bold">
            Processing Time : {processingTime}
          </p>
          <div className="card-actions ">
            <Link to={`/craftdetails/${_id}`}>
              <button className="btn bg-btn font-extrabold text-white w-full">
                View Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CraftItem;
