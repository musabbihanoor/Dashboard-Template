import React from "react";
import Navbar from "./Navbar";
import { AlertProvider } from "../../context/AlertContext";
import { NavigationLeft } from "./NavigationBar/NavigationLeft";
import NavigationTop from "./NavigationBar/NavigationTop";

export const Layout = ({ children, isAuthenticated }) => {
  return (
    <AlertProvider>
      {/* <div className="relative h-screen w-screen flex overflow-hidden font-poppins font-semibold text-text-primary">

        <NavigationLeft />
        <div className="w-full">
          <Navbar />
          <div className="p-10 overflow-auto h-screen pb-32 bg-light-grey">
            {children}
          </div>
        </div>
      </div> */}

      <div className="relative h-screen w-screen flex overflow-hidden font-poppins font-semibold text-text-primary">
        <div className="w-full">
          <Navbar />
          <NavigationTop />
          <div className="p-10 overflow-auto h-screen pb-32 bg-light-grey">
            {children}
          </div>
        </div>
      </div>
    </AlertProvider>
  );
};
