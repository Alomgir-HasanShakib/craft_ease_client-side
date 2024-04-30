import { useContext, useState } from "react";
import { AuthContext } from "../Context/Authentication/Authentication";

import Swal from "sweetalert2";
import { Helmet } from "react-helmet";
import { useLoaderData, useLocation, useNavigate } from "react-router-dom";

const UpdateCrafts = () => {
  const craft = useLoaderData();
  const {
    _id,
    imageURl,
    item_name,
    price,
    rating,

    processingTime,

    description,
  } = craft;

  const [category, setCategory] = useState("");
  const [customize, setCustomize] = useState("");
  const [stock, setStock] = useState("");

  // collect category name
  const handleCategory = (e) => {
    const catName = e.target.value;
    setCategory(catName);
  };
  const { user } = useContext(AuthContext);

  // handle customization value
  const handleCustomize = (e) => {
    const isCustomizable = e.target.value;
    setCustomize(isCustomizable);
  };
  // handle stock value
  const handleStock = (e) => {
    const stocked = e.target.value;
    setStock(stocked);
  };

  const location = useLocation();
  const navigate = useNavigate();
  // handle item adding function
  const handleUpdateItem = (e) => {
    e.preventDefault();
    const form = e.target;

    const userName = form.userName.value;
    const email = form.email.value;
    const processingTime = form.processing_time.value;
    const rating = form.rating.value;
    const description = form.description.value;
    const price = form.price.value;
    const item_name = form.item_name.value;
    const imageURl = form.imageUrl.value;

    const result = {
      userName,
      email,
      processingTime,
      rating,
      description,
      price,
      item_name,
      imageURl,
      category,
      stock,
      customize,
    };

    // send data to the database

    fetch(`http://localhost:500/addItem/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(result),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Craft Successfully Update ",
            showClass: {
              popup: `
                animate__animated
                animate__fadeInUp
                animate__faster
              `,
            },
            hideClass: {
              popup: `
                animate__animated
                animate__fadeOutDown
                animate__faster
              `,
            },
          });
          navigate(location?.state ? location?.state : "/mycraftlist");
        }
      });
  };
  return (
    <div className="mt-24">
      <h2 className=" text-xl md:text-6xl font-bold text-primary divider">
        Update Craft
      </h2>
      <div>
        <div>
          <Helmet>
            <title>Update Craft</title>
          </Helmet>
          <form
            className="border border-primary rounded-2xl mt-16"
            onSubmit={handleUpdateItem}
          >
            <div className="w-full p-3 md:p-16 grid grid-cols-4 gap-5">
              <input
                type="text"
                className="input input-bordered   bg-primary text-white col-span-4  md:col-span-2 placeholder:text-gray-300 "
                placeholder="imageURl"
                name="imageUrl"
                defaultValue={imageURl}
              />
              <input
                type="text"
                className="input input-bordered   bg-primary text-white col-span-4 md:col-span-2 placeholder:text-gray-300 "
                placeholder="item_name"
                name="item_name"
                defaultValue={item_name}
              />

              <select
                className="select select-bordered  bg-primary text-white col-span-4 md:col-span-2 placeholder:text-gray-300 "
                name="categoryName"
                onChange={handleCategory}
              >
                <option disabled selected>
                  {craft.category}
                </option>
                <option>Glass Dying & Staining</option>
                <option>Lampworking</option>
                <option>Glass Painting</option>
                <option>Paper Quilling & origami</option>
                <option>Scrapbooking</option>
                <option> Card Making</option>
              </select>
              <textarea
                type="text"
                className="input  bg-primary text-white  placeholder:text-gray-300 col-span-4 md:col-span-2"
                placeholder="short description"
                name="description"
                defaultValue={description}
              ></textarea>

              <input
                type="text"
                className="input  bg-primary text-white  placeholder:text-gray-300  col-span-4 md:col-span-2"
                placeholder="price"
                name="price"
                defaultValue={price}
              />

              <input
                type="text"
                className="input  bg-primary text-white  placeholder:text-gray-300  col-span-4 md:col-span-2"
                placeholder="rating"
                name="rating"
                defaultValue={rating}
              />
              <select
                className="select select-bordered  bg-primary text-white col-span-4 md:col-span-2 placeholder:text-gray-300 "
                name="customization"
                onChange={handleCustomize}
              >
                <option disabled selected>
                  {craft.customize}
                </option>
                <option>Yes</option>
                <option>NO</option>
              </select>
              <input
                type="text"
                className="input  bg-primary text-white  placeholder:text-gray-300  col-span-4 md:col-span-2"
                placeholder="processing_time"
                name="processing_time"
                defaultValue={processingTime}
              />
              <select
                className="select select-bordered  bg-primary text-white col-span-4 md:col-span-2 placeholder:text-gray-300"
                name="stockStatus"
                onChange={handleStock}
              >
                <option disabled selected>
                  {craft.stock}
                </option>
                <option>In stock</option>
                <option> Made to Order</option>
              </select>
              <input
                type="text"
                className="input  bg-primary text-white  placeholder:text-gray-300  col-span-4 md:col-span-2"
                placeholder="User Email"
                name="email"
                value={user?.email}
              />
              <input
                type="text"
                className="input bg-primary placeholder:text-gray-300 text-white  col-span-4 md:col-span-2 "
                placeholder="User name"
                value={user?.displayName}
                name="userName"
              />
              <input
                type="submit"
                value="Update"
                className="btn bg-btn  text-white  font-bold col-span-4 "
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateCrafts;
