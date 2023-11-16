import React from "react";
import '../index.css'
import QuickFilters from "./QuickFilters";
import { Explore } from "./";
import { ToastContainer } from "react-toastify";


const Home = () => {
  // states




  return (
    <div className="h-full">
      {/* Quick FilterChips */}
      <div className="flex flex-col ml-12">
        <QuickFilters />
        <div className="w-full p-2">
          <Explore />
        </div>
      </div>

    </div>
  );
};
export default Home;