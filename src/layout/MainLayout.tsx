import { useState } from "react";
import Navbar from "@/components/navbar/Navbar";
import { Outlet } from "react-router-dom";

const MainLayout: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  return (
    <div>
      <Navbar setSearchTerm={setSearchTerm} />  {/* Pass search term setter to Navbar */}
      <Outlet context={{ searchTerm }} />  {/* Provide search term as outlet context */}
    </div>
  );
};

export default MainLayout;
