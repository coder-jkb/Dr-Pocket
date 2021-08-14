import React, { useEffect, useState } from "react";
import SidebarItem from "../widgets/sidebar-item";
import FeatherIcon from "feather-icons-react";

function Home() {
  const [images, setImages] = useState([]);
  const [sidebar, activeSidebar] = useState("Home");

  const getActive = (name) => {
    if (name == sidebar) {
      return true;
    } else {
      return false;
    }
  };

  const setActive = (name) => {
    activeSidebar(name);
  };



  return (
    <div className="flex h-screen">
      <div className="w-48 py-4 pr-4">
        <div className="py-4 px-2 text-2xl">Dr Pocket</div>
        <div onClick={() => activeSidebar("Home")}
            style={{cursor: 'pointer'}}>
          <SidebarItem
            name="Home"
            isActive={getActive("Home")}
            icon="image"
          ></SidebarItem>
        </div>
        <div onClick={() => activeSidebar("Explore")}
            style={{cursor: 'pointer'}}>
          <SidebarItem
            name="Explore"
            isActive={getActive("Explore")}
            icon="search"
          ></SidebarItem>
        </div>
        <div onClick={() => activeSidebar("Settings")} 
            style={{cursor: 'pointer'}}>
          <SidebarItem
            name="Settings"
            isActive={getActive("Settings")}
            icon="settings"
          ></SidebarItem>
        </div>
        <div className="p-4 text-xs">Library</div>
        <div onClick={() => activeSidebar("Favourites")}
            style={{cursor: 'pointer'}}>
          <SidebarItem
            name="Favourites"
            isActive={getActive("Favourites")}
            icon="star"
          ></SidebarItem>
        </div>
      </div>
      <div className="container bg-gray-200 w-1 pt-8"></div>
      <div className="flex flex-col px-4 pt-8 w-screen">
        <div className="flex flex-row justify-between">
        <div className="relative flex w-6/12 flex-wrap items-stretch mb-3">
          <span className="z-10 h-full leading-snug font-normal absolute text-center text-blueGray-300 absolute bg-transparent rounded text-base items-center justify-center m-2">
          <FeatherIcon icon='search' color="gray"/>
          </span>
          <input
            type="text"
            placeholder="Search Here...."
            className="px-6 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full pl-10"
          />
        </div>
        <div><FeatherIcon icon='settings' color="gray" className="mt-2"/></div>
        </div>
        {/* <div className="m-auto text-center">
          <h1 className="text-xl my-2">
            There is nothing here , scan a folder to get started!
          </h1>
        </div> */}
      </div>
    </div>
  );
}

export default Home;
