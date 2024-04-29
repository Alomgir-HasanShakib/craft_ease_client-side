import React from "react";
import { Link } from "react-router-dom";

const MyCraftListItem = ({craft}) => {

      const {
            _id,
            imageURl,
            item_name,
            price,
            rating,
            customize,
            processingTime,
            stock
          } = craft;
        
  return (
    <div>
      {" "}
      <div>
        <div className="card max-w-96 h-[479px] shadow-xl">
          <figure>
            <img src={imageURl} alt="User" />
          </figure>
          <div className="card-body">
            <h2 className="text-2xl font-bold text-primary">{item_name}</h2>
            <p className="text-gray-400 font-bold">Price : ${price}</p>
            <p className="text-gray-400 font-bold">Rating : {rating}</p>
            <p className="text-gray-400 font-bold">Customization : {customize}</p>
            <p className="text-gray-400 font-bold">Stock status : {stock}</p>
            <p className="text-gray-400 font-bold">
              Processing Time : {processingTime}
            </p>
            <div className="flex justify-around pt-5">
              <Link to={`/craftdetails/${_id}`}>
                <button className="btn bg-primary font-extrabold text-white ">
                  Update
                </button>
              </Link>
              <button className="btn bg-red-500
               font-extrabold text-white ">
                  Delete
                </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyCraftListItem;
