import { useLoaderData } from "react-router-dom";
import Table from "../Components/Table/Table";

const AllCraft = () => {
  const crafts = useLoaderData();
  console.log(crafts);

  return (
    <div>
      <Helmet>
        <title>All Craft</title>
      </Helmet>
      <h2 className="md:text-6xl text-2xl font-bold text-primary text-center mt-16 mb-24">
        ALL CRAFT AND ART{" "}
      </h2>

      <div className="overflow-x-auto bg-secondary">
        <table className="table text-white text-xs md:text-xl">
          {/* head */}
          <thead className="bg-primary text-white">
            <tr>
              <th>Item_name</th>
              <th>Rating</th>
              <th>userName</th>
              <th>Customizable</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {crafts.map((craft) => (
              <tr>
                <td className="bg-secondary">{craft.item_name}</td>
                <td className="bg-primary">{craft.rating}</td>
                <td className="bg-secondary">{craft.userName}</td>
                <td className="bg-primary">{craft.customize}</td>
                <td className="bg-secondary">
                  <Table key={craft._id} craft={craft}></Table>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllCraft;
