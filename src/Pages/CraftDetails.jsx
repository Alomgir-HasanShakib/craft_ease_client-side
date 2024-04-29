import { useLoaderData, useParams } from "react-router-dom";
import CraftDetail from "../Components/craftDetail/CraftDetail";
import { Helmet } from "react-helmet";

const CraftDetails = () => {
  const crafts = useLoaderData();
  const { _id } = useParams();

  const craftItem = crafts.find((craft) => craft._id === _id);
  const craftitems = [craftItem];
  return (
    <div>
      <Helmet>
        <title>Craft Details</title>
      </Helmet>
      <div className="px-3">
        <h2 className=" text-xl md:text-6xl font-extrabold text-secondary uppercase mt-16 divider divider-start">
          Craft details
        </h2>
        <div className="mt-16">
          {
                craftitems.map(craft => <CraftDetail key={craft._id} craft={craft}></CraftDetail>)
              }
        </div>
      </div>
    </div>
  );
};

export default CraftDetails;
