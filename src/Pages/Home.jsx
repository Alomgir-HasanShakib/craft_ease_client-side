import { Helmet } from "react-helmet-async";
import Banner from "../Components/Banner/Banner";


const Home = () => {
  return (
    <div className="mt-16">
      <Helmet>
        <title>HOME</title>
      </Helmet>
      <Banner></Banner>
    </div>
  );
};

export default Home;
