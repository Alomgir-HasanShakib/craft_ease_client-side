import { Helmet } from "react-helmet-async";
import Banner from "../Components/Banner/Banner";
import { useLoaderData } from "react-router-dom";
import CraftItem from "../Components/CraftItems/CraftItem";

const Home = () => {
  const crafts = useLoaderData()
  return (
    <div className="mt-16">
      <Helmet>
        <title>HOME</title>
      </Helmet>
      <Banner></Banner>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 px-3">
        {
          crafts.map(craft => <CraftItem key={craft._id} craft={craft}></CraftItem>)
        }
      </div>
    </div>
  );
};

export default Home;
