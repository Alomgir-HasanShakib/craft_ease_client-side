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
      <div>
        <h2 className="md:text-6xl text-primary font-bold mb-24 uppercase underline text-2xl text-center md:text-left">Craft and Art</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 px-3 ">
        {
          crafts.map(craft => <CraftItem key={craft._id} craft={craft}></CraftItem>)
        }
      </div>
    </div>
  );
};

export default Home;
