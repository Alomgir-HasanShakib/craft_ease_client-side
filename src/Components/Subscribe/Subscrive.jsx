import { Typewriter } from "react-simple-typewriter";

const Subscrive = () => {
  return (
    <div className="bg-[url('https://i.postimg.cc/HkCPPy2x/cool-background-1.png')] min-h-56 bg-cover bg-center  mt-24 rounded-xl p-4 md:p-16 grid grid-cols-2 gap-5">
      <div className="col-span-2
       md:col-span-1">
        <h2 className="text-orange-200 font-extrabold text-3xl capitalize">
          Subscribe us to know more about {""}
       
         <span className="text-white"> <Typewriter
          
          words={["Design", "Service", "New Art", "New Craft"]}
          loop
          cursor
          cursorStyle="_"
          typeSpeed={150}
          deleteSpeed={100}
          delaySpeed={1000}
          // onLoopDone={handleDone}
          // onType={handleType}
          
        /></span>
        </h2>
      </div>
      <div className="join col-span-2
       md:col-span-1">
        <input
          className="input input-bordered join-item  w-full"
          placeholder="Email"
        />
        <button className="btn join-item rounded-r-full bg-btn text-white">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default Subscrive;
