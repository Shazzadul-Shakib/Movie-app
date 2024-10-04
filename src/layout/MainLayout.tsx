import { useState } from "react";
import Navbar from "@/components/navbar/Navbar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div>
      <Navbar setSearchTerm={setSearchTerm} />
      <Outlet context={{ searchTerm }} />
    </div>
  );
};

export default MainLayout;
