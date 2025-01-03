import React from "react";
import { FaPizzaSlice } from "react-icons/fa6";
import { IoSearchCircle } from "react-icons/io5";
import { FaBolt } from "react-icons/fa6";
import { FaCartArrowDown } from "react-icons/fa6";

function Navbar() {
  return (
    <div>
      <div className="grid xl:grid-cols-1 grid-cols-1">
        <div className="p-5">
          <div className="py-3 px-3 rounded-xl border w-full bg-gradient-to-r from-white to-blue-300">
            <div className="flex justify-between items-center">
              <div className="flex justify-items-center items-center gap-2">
                <FaPizzaSlice className="w-6 h-6 text-orange-400 hover:text-pink-400" />

                <div style={{ position: "relative" }}>
                  <input
                    className="rounded-3xl py-3 px-3 text-black-500 outline-dotted text-xs w-[350px] pr-10  lg:block md:block"
                    placeholder="search your favorite pizza from menu"
                  />

                  <IoSearchCircle className="w-5 h-5 text-black-300 absolute right-3 top-1/2 transform -translate-y-1/2 lg:block md:block" />
                </div>
              </div>

              <div className="flex justify-center items-center gap-2">
                <FaBolt className="flex justify-items-center w-5 h-5 text-yellow-400 lg:block md:block" />
                <p className="text-sm text-white lg:block md:block">
                  Order now and get it with
                  <span className="text-yellow-200">25 minutes!!</span>
                </p>

                <FaCartArrowDown className="w-8 h-8 rounded-half ring-2  p-1 relative ring-white hover:ring-yellow-300  text-yellow-400" />
                <img
                  className="inline-block w-8 h-8 rounded-full ring-2 ring-white hover:text-yellow-400"
                  src="https://scontent.fkhi22-1.fna.fbcdn.net/v/t39.30808-1/311588260_171045578844781_2381989386211050041_n.jpg?stp=dst-jpg_s100x100&_nc_cat=103&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=vOqTOyVeB2IQ7kNvgENcYYT&_nc_zt=24&_nc_ht=scontent.fkhi22-1.fna&_nc_gid=AS3Y_Rl5-hscHhCw5dHlxI6&oh=00_AYBacR8S7b_kzHKLtCq30MWSnyZel5XsN9PLp38xMq1Lzw&oe=671EC145"
                  alt="user avtar"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
