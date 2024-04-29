import { useContext, useState } from "react";
import { AuthContext } from "../Context/Authentication/Authentication";

import Swal from "sweetalert2";
import { Helmet } from "react-helmet";

const AddCraft = () => {
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

  // handle item adding function
  const handleAddItem = (e) => {
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

    fetch("http://localhost:500/addItem", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(result),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Data Successfully Added to the DataBase",
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
        }
      });
  };

  return (
    <div>
      <Helmet>
        <title>Add Craft</title>
      </Helmet>
      <form
        className='bg-[url("https://i.postimg.cc/c1TnTbR5/wave-haikei.png")] bg-cover bg-center rounded-lg '
        onSubmit={handleAddItem}
      >
        <div className="w-full p-3 md:p-16 grid grid-cols-4 gap-5">
          <input
            type="text"
            className="input input-bordered   bg-primary text-white col-span-4  md:col-span-2 placeholder:text-gray-300 "
            placeholder="imageURl"
            name="imageUrl"
          />
          <input
            type="text"
            className="input input-bordered   bg-primary text-white col-span-4 md:col-span-2 placeholder:text-gray-300 "
            placeholder="item_name"
            name="item_name"
          />

          <select
            className="select select-bordered  bg-primary text-white col-span-4 md:col-span-2 placeholder:text-gray-300 "
            name="categoryName"
            onChange={handleCategory}
          >
            <option disabled selected>
              Sub Category Name
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
          ></textarea>

          <input
            type="text"
            className="input  bg-primary text-white  placeholder:text-gray-300  col-span-4 md:col-span-2"
            placeholder="price"
            name="price"
          />

          <input
            type="text"
            className="input  bg-primary text-white  placeholder:text-gray-300  col-span-4 md:col-span-2"
            placeholder="rating"
            name="rating"
          />
          <select
            className="select select-bordered  bg-primary text-white col-span-4 md:col-span-2 placeholder:text-gray-300 "
            name="customization"
            onChange={handleCustomize}
          >
            <option disabled selected>
              Customization
            </option>
            <option>Yes</option>
            <option>NO</option>
          </select>
          <input
            type="text"
            className="input  bg-primary text-white  placeholder:text-gray-300  col-span-4 md:col-span-2"
            placeholder="processing_time"
            name="processing_time"
          />
          <select
            className="select select-bordered  bg-primary text-white col-span-4 md:col-span-2 placeholder:text-gray-300"
            name="stockStatus"
            onChange={handleStock}
          >
            <option disabled selected>
              stockStatus
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
            className="input bg-primary placeholder:text-gray-300 text-white  col-span-4 md:col-span-2"
            placeholder="User name"
            value={user?.displayName}
            name="userName"
          />
          <input
            type="submit"
            value="Upload"
            className="btn bg-white hover:bg-btn hover:text-white text-btn border-white font-bold col-span-4 "
          />
        </div>
      </form>
    </div>
  );
};

export default AddCraft;
