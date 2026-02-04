import { CirclePlus } from "lucide-react";
import { Link } from "react-router";

const Navbar = () => {
  return (
    <header className="navbar bg-base-400 shadow-sm border-b border-base-content/20">
      <div className="navbar-start px-4 py-2">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
        </div>
        <a className="btn btn-ghost text-xl">TaskApp</a>
      </div>
      <div className="navbar-end">
        <Link to={'/create'} className="btn btn-success"><CirclePlus /> Create Note</Link>
      </div>
    </header>
  );
};

export default Navbar;
