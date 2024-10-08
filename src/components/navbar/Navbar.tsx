import { ChangeEvent } from "react";
import { Search } from "lucide-react";
import { Input } from "../ui/input";
import { Link } from "react-router-dom";
import { NavbarProps } from "@/utils/types";

const Navbar: React.FC<NavbarProps> = ({ setSearchTerm }) => {
  // Search operation handled by onchange value
  const handleOnChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="sticky top-0 flex h-[70px] items-center justify-between gap-4 border-b bg-background bg-opacity-15 px-4 backdrop-blur-sm sm:px-[40px] md:gap-14 lg:px-24">
      <div className="flex-1 text-nowrap">
        <Link to="/" className="text-md font-bold text-primary md:text-xl">
          Movie Mania
        </Link>
      </div>
      <div className="flex w-full items-center gap-4 py-2 lg:gap-10">
        <form className="flex w-full items-center justify-end">
          <div className="relative">
            <Search className="text-muted-foreground absolute left-2.5 top-2.5 h-4 w-4" />
            <Input
              type="search"
              onChange={handleOnChangeSearch}
              placeholder="Search movies..."
              className="w-[200px] pl-8 sm:w-[300px] md:w-[400px] lg:w-[600px]"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Navbar;
