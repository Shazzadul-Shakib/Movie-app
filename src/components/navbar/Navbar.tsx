import { Search } from "lucide-react";
import { Input } from "../ui/input";

const Navbar = () => {
  return (
    <div className="sticky top-0 flex h-[70px] items-center justify-between gap-4 border-b px-4 md:gap-14 md:px-24">
      <div className="flex-1 text-nowrap">
        <h1 className="text-md text-primary font-bold md:text-xl">
          Movie Mania
        </h1>
      </div>
      <div className="flex w-full items-center gap-4 py-2 md:gap-20 lg:gap-4">
        <form className="flex w-full items-center justify-end">
          <div className="relative">
            <Search className="text-muted-foreground absolute left-2.5 top-2.5 h-4 w-4" />
            <Input
              type="search"
              placeholder="Search movies..."
              className="pl-8 sm:w-[400px] md:w-[400px] lg:w-[600px]"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Navbar;
