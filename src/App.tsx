import React from "react";
import { useRoutes } from "react-router-dom";
import routes from "./routes";
import Sidebar from "./components/sidebar/Sidebar";
import TopBar from "./components/topbar/Topbar";
import "./App.css"

function App() {
  const router = useRoutes(routes);

  return (
    <>
      <TopBar />
      <div className="container">
        <Sidebar />
        {router}
      </div>
    </>
  );
}

export default App;
