import { useLoaderData } from "react-router-dom";
import Table from "../Components/Table/Table";

const AllCraft = () => {
  const crafts = useLoaderData();
  console.log(crafts);

  return (
    <div>
      <h2 className="md:text-6xl text-2xl font-bold text-primary text-center mt-16 mb-24">
        ALL CRAFT AND ART{" "}
      </h2>

   <div>
    {
      crafts.map(craft=> <Table key={craft._id} craft={craft} ></Table>)
    }
   </div>
    </div>
  );
};

export default AllCraft;
