import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyCraftListItem = ({ craft }) => {
  const {
    _id,
    imageURl,
    item_name,
    price,
    rating,
    customize,
    processingTime,
    stock,
    category
  } = craft;

  const handleDelete = (_id) => {
    console.log(_id);

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        //   Swal.fire({
        //     title: "Deleted!",
        //     text: "Your file has been deleted.",
        //     icon: "success"
        //   });

        fetch(`http://localhost:500/addItem/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }
          });
      }
    });
  };

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
            <p className="text-gray-400 font-bold">
              Customization : {customize}
            </p>
            <p className="text-gray-400 font-bold">Stock status : {stock}</p>
            <p className="text-gray-400 font-bold">
              Processing Time : {processingTime}
            </p>
            <p className="text-gray-400 font-bold">
              Category : {category}
            </p>
            <div className="flex justify-around pt-5">
              <Link to={`/updatecraft/${_id}`}>
                <button className="btn bg-primary font-extrabold text-white ">
                  Update
                </button>
              </Link>
              <button
                className="btn bg-red-500
               font-extrabold text-white "
                onClick={() => handleDelete(_id)}
              >
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
