import { Link } from "react-router-dom";

const CraftDetail = ({ craft }) => {
  const {
    _id,

    imageURl,
    item_name,
    price,
    rating,
    customize,
    processingTime,
    description,
    userName,
  } = craft;
  return (
    <div>
      <div className="grid grid-cols-4 bg-base-100 shadow-xl">
        <figure className="col-span-4 md:col-span-2">
          <img className="w-full" src={imageURl} alt="Album" />
        </figure>
        <div className="card-body col-span-4 md:col-span-2">
          <h2 className=" text-3xl font-bold text-primary">{item_name}</h2>
          <p className="text-gray-500 font-medium md:text-xl">
            <span className=" text-btn">Description</span> :{description}
          </p>
          <p className="text-gray-500 font-medium md:text-xl">
            Rating : {rating}
          </p>
          <p className="text-gray-500 font-medium md:text-xl">
            Price : $ {price}
          </p>
          <p className="text-gray-500 font-medium md:text-xl">
            Processing Time : {processingTime}
          </p>
          <p className=" font-medium md:text-xl text-secondary">
            Customizable :{customize}
          </p>
          <p className="text-gray-500 font-medium md:text-xl">
            User Name :{userName}
          </p>
          <div className="card-actions justify-end">
            <Link to="/">
              {" "}
              <button className="btn btn-primary">Back</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CraftDetail;
