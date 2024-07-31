import logo from "./logo.svg";
import "./App.css";
import Sidebar, { SidebarProvider } from "./sidebar/Sidebar";
import { HashRouter, Routes, Route } from "react-router-dom";
import Mapbox from "./map/map";
import "mapbox-gl/dist/mapbox-gl.css";
import Staff from "./staff/staff";
import React from "react";

function App() {
  const [activeMenu, setActiveMenu] = React.useState("");
  return (
    <HashRouter>
      <SidebarProvider
        value={{
          active: activeMenu,
          setActive: setActiveMenu,
        }}
      >
        <div className="App">
          <div>
            <Sidebar />
          </div>
          <div>
            <Routes>
              <Route path="/" Component={Mapbox} />
              <Route path="/staffs" Component={Staff} />
            </Routes>
          </div>
        </div>
      </SidebarProvider>
    </HashRouter>
  );
}

export default App;
