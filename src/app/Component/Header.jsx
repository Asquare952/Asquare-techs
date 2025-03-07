"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import navLinks from "./utils/headerLinks";
import Sidebar from "./Sidebar";
import { IoCartOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { FiUser } from "react-icons/fi";
import { IoIosMenu } from "react-icons/io";
import ProfileDropdown from "./ProfileDropdown";

const Header = () => {
  const [Navlinks, setNavLinks] = useState(navLinks);
  const [Value, setValue] = useState(0);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [showDropDown, setShowDropDown] = useState(false);
  const {} = Navlinks[Value];
  const handleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  const toggleDropDown = (e) => {
    e.stopPropagation();
    setShowDropDown(!showDropDown);
  };
  // click outside to close drop-down
  useEffect(() => {
    const handleOutsideClick = () => {
      setShowDropDown(false);
    };
    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <>
      <header className=" shadow-md bg-white-200 sticky w-full top-0 left-0 z-[1000] py-8">
        <section className="container flex justify-between items-center">
          <div className="flex items-center gap-3 text-lg">
            <IoIosMenu
              className=" lg:hidden text-2xl"
              onClick={handleSidebar}
            />
            <h3 className=" font-medium text-lg">Logo</h3>
          </div>
          <nav className="hidden lg:flex gap-12">
            {Navlinks.map((items, index) => {
              return (
                <Link
                  key={items.id}
                  href={items.path}
                  onClick={() => setValue(index)}
                  className=""
                >
                  {items.title}
                </Link>
              );
            })}
          </nav>
          <div className="flex items-center gap-6">
            <div className="hidden md:flex md:relative">
              <CiSearch className=" absolute left-[200px] z-10 top-[13px] cursor-pointer" />
              <form className="">
                <input
                  type="search"
                  className=" bg-greyShades-400 py-2 pl-5 pr-4 rounded header-placeholder outline-none"
                  placeholder="What are you looking for"
                />
              </form>
            </div>
            <div>
              <CiSearch className=" text-2xl cursor-pointer md:hidden" />
            </div>
            <div className="flex items-center gap-4">
              <IoCartOutline className=" text-2xl cursor-pointer" />
              <div className=" relative">
                <FiUser
                  className=" text-2xl cursor-pointer"
                  onClick={toggleDropDown}
                />
                {showDropDown && (
                  <>
                    <div
                      className="fixed inset-0 bg-black bg-opacity-0 z-10"
                      onClick={() => setIsSidebarOpen(false)}
                    ></div>
                    <ProfileDropdown
                      dropDown={true}
                      closeDropDown={() => setIsSidebarOpen(false)}
                    />
                  </>
                )}
              </div>
            </div>
          </div>
        </section>
        
      </header>

      <Sidebar
        isOpen={isSidebarOpen}
        toggleSidebar={handleSidebar}
        links={Navlinks}
        Value={Value}
      />
    </>
  );
};

export default Header;
