import React from "react";
import '../index.css'
import QuickFilters from "./QuickFilters";


const Home = () => {  
  // states




  return (
    <div className="h-full">
      {/* Quick FilterChips */}
      <div className="flex ml-12">
        <QuickFilters />
      </div>

    </div>
  );
};
export default Home;