import React, { useEffect, useState } from "react";
import SidebarItem from "../widgets/sidebar-item";
import FeatherIcon from "feather-icons-react";
import Features from "./features";
import Dashboard from "./dashboard";

function Home() {
  const [sidebar, activeSidebar] = useState("Home");

  const getActive = (name) => {
    if (name == sidebar) {
      return true;
    } else {
      return false;
    }
  }


  return (
    <div className="flex h-screen">
      <div className="flex flex-col bg-gray-100 items-center w-28 py-4 pr-4">
        <div className="flex flex-wrap place-content-center">
          <svg width="50" height="50" xmlns="http://www.w3.org/2000/svg">
            <image
              href="https://svgshare.com/i/_Bo.svg"
              height="50"
              width="50"
            />
          </svg>
        </div>
        <div
          onClick={() => activeSidebar("Home")}
          style={{ cursor: "pointer" }}
        >
          <SidebarItem isActive={getActive("Home")} icon="home"></SidebarItem>
        </div>
        <div
          onClick={() => activeSidebar("Explore")}
          style={{ cursor: "pointer" }}
        >
          <SidebarItem
            isActive={getActive("Explore")}
            icon="search"
          ></SidebarItem>
        </div>
        <div
          onClick={() => activeSidebar("Settings")}
          style={{ cursor: "pointer" }}
        >
          <SidebarItem
            isActive={getActive("Settings")}
            icon="settings"
          ></SidebarItem>
        </div>
        <div
          onClick={() => activeSidebar("Favourites")}
          style={{ cursor: "pointer" }}
        >
          <SidebarItem
            isActive={getActive("Favourites")}
            icon="star"
          ></SidebarItem>
        </div>{" "}
        <div
          onClick={() => activeSidebar("Info")}
          style={{ cursor: "pointer" }}
          className="mt-auto"
        >
          <SidebarItem isActive={getActive("Info")} icon="info"></SidebarItem>
        </div>
      </div>
      <div className="flex flex-col w-screen">
        <div className="p-4 bg-gray-100 flex flex-row justify-between">
          <div className="relative flex w-6/12 flex-wrap items-stretch mb-3">
            <span className="z-10 h-full leading-snug font-normal absolute text-center text-blueGray-300 absolute bg-transparent rounded-fulll text-base items-center justify-center m-2">
              <FeatherIcon icon="search" color="gray" />
            </span>
            <input
              type="text"
              placeholder="Search Here...."
              className="px-6 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded-full text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full pl-10"
            />
          </div>
        </div>
        <Features isActive={getActive("Info")}></Features>
        <Dashboard isActive={getActive("Home")}></Dashboard>
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
