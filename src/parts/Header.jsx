import React from "react";
import Button from "../utils/Button";
import BrandIcon from "./IconText";

function Header(props) {
  const getNavLinkClass = (path) => {
    const activeClass =
      props.location.pathname === path
        ? "text-primary px-4 hover:underline hover:underline-offset-2 active"
        : "text-secondary px-4 hover:underline hover:underline-offset-2";

    return `${activeClass}`;
  };
  return (
    <header className="border-b-[1px] border-gray200 w-full relative">
      <nav className="bg-white border-gray-200">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 h-[80px]">
          <BrandIcon />
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white font-sans">
              <li className={getNavLinkClass("/")}>
                <Button type="link" href="/">
                  Home
                </Button>
              </li>
              <li className={getNavLinkClass("/browse-by")}>
                <Button type="link" href="/browse-by">
                  Browse By
                </Button>
              </li>
              <li className={getNavLinkClass("/stories")}>
                <Button type="link" href="/stories">
                  Stories
                </Button>
              </li>
              <li className={getNavLinkClass("/agents")}>
                <Button type="link" href="/agents">
                  Agents
                </Button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
