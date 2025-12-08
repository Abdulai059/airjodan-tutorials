import Cta from "./Cta";
import Infor from "./Infor";

import Navbar from "./Navbar";
import Pricing from "./Pricing";
import Shoes from "./Shoes";

function Homepage() {
  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0 z-0 bg-[url('/bg/bg-2.png')] bg-cover bg-center"></div>

      <div className="z-10">
        <Navbar />

        <div className="relative top-60 mt-20 w-full max-w-lg md:left-290 md:mt-32 lg:mt-40">
          <Pricing />
        </div>

        <div className="absolute bottom-0 w-full px-8">
          <div className="flex items-center justify-between">
            <Shoes />
            <Cta />
            <Infor />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
