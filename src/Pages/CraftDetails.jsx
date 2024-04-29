import { useLoaderData, useParams } from "react-router-dom";
import CraftDetail from "../Components/craftDetail/CraftDetail";

const CraftDetails = () => {
  const crafts = useLoaderData();
  const { _id } = useParams();

  const craftItem = crafts.find((craft) => craft._id === _id);

  console.log(craftItem);
  return <div>
      <div>
            <h2 className="text-6xl font-extrabold text-secondary uppercase mt-16 divider divider-start">Craft details</h2>
            <div>
              {
                craftItem.map(craft => <CraftDetail key={craft._id} craft={craft}></CraftDetail>)
              }
            </div>
      </div>
  </div>;
};

export default CraftDetails;
