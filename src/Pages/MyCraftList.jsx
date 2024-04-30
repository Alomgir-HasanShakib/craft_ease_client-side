import { useContext, useState } from "react";
import { Helmet } from "react-helmet";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../Context/Authentication/Authentication";
import MyCraftListItem from "../Components/MyCraftList/MyCraftListItem";
// import MyCraftListItem from "../Components/Mycraft/MyCraftListItem";

const MyCraftList = () => {
  const crafts = useLoaderData();
  const { user } = useContext(AuthContext);

  const loadedCraftItems = crafts.filter((craft) => craft.email === user.email);
  const [craftItems, setCraftItems] = useState(loadedCraftItems);

  const [filterCraft, setFilterCraft] = useState("All");
  const filterData = craftItems.filter(
    (craft) => filterCraft === "All" || craft.customize === filterCraft
  );

  return (
    <div>
      <Helmet>
        <title>MyCraftList</title>
      </Helmet>

      <div className="mt-16 flex justify-center">
        <details className="dropdown">
          <summary className="m-1 btn bg-btn text-white">Customizeable</summary>
          <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
            <li>
              <a onClick={() => setFilterCraft("All")}>All</a>
            </li>
            <li>
              <a onClick={() => setFilterCraft("Yes")}>Yes</a>
            </li>
            <li>
              <a onClick={() => setFilterCraft("NO")}>No</a>
            </li>
          </ul>
        </details>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-16 px-3">
        {filterData.map((craft) => (
          <MyCraftListItem
            key={craft._id}
            craft={craft}
            craftItems={craftItems}
            setCraftItems={setCraftItems}
          ></MyCraftListItem>
        ))}
      </div>
    </div>
  );
};

export default MyCraftList;
