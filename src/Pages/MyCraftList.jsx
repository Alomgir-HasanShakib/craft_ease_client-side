import { useContext } from "react";
import { Helmet } from "react-helmet";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../Context/Authentication/Authentication";
import MyCraftListItem from "../Components/MyCraftList/MyCraftListItem";
// import MyCraftListItem from "../Components/Mycraft/MyCraftListItem";

const MyCraftList = () => {
  const crafts = useLoaderData();
  const { user } = useContext(AuthContext);

  const craftItems = crafts.filter((craft) => craft.email === user.email);

  console.log(craftItems);

  return (
    <div>
      <Helmet>
        <title>MyCraftList</title>
      </Helmet>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-16 px-3">
        {craftItems.map((craft) => (
          <MyCraftListItem key={craft._id} craft={craft}></MyCraftListItem>
        ))}
      </div>
    </div>
  );
};

export default MyCraftList;
