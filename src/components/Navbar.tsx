import { useState, useEffect } from "react";
import { GoSearch } from "react-icons/go";
import { GrLanguage } from "react-icons/gr";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaUserCircle } from "react-icons/fa";
import { NavLink } from "react-router-dom";
const Navbar = () => {
    const [condition, setCondition] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setCondition(false);
            } else {
                setCondition(true);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    return (
        <div className="w-full ">
            {condition && (
                <button type="button" className="w-full ">
                    <div className="extra-topNav bg-slate-400 flex justify-center items-center h-14">
                        <p className="font-meduim  border-b-2 border-black">
                            Learn more about Icons
                        </p>
                    </div>
                </button>
            )}
            <div className="  grid grid-cols-3 justify-between items-center py-5 px-10">
                <div className="max-w-[100px]">
                    <NavLink to="/">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/2560px-Airbnb_Logo_B%C3%A9lo.svg.png"
                            alt=""
                            className="cursor-pointer"
                        />
                    </NavLink>
                </div>
                {!condition ? (
                    <div>
                        <ul className="border shadow flex items-center justify-evenly rounded-full">
                            <li className=" px-5 py-3 cursor-pointer font-semibold text-gray-700">
                                Anywhere
                            </li>
                            <li className="text-gray-400">|</li>
                            <li className=" px-5 py-3 cursor-pointer  font-semibold text-gray-700">
                                Any week
                            </li>
                            <li className="text-gray-400">|</li>
                            <li className="flex items-center   gap-2 pl-5 pr-2 py-1 cursor-pointer text-gray-500">
                                Add guests
                                <span className="bg-[#FF385C] p-2 rounded-full">
                                    <GoSearch color="white" />
                                </span>
                            </li>
                        </ul>
                    </div>
                ) : (
                    <div className="justify-self-center">
                        <div className="flex gap-1 align-middle">
                            <button className="hover:bg-gray-100 py-3 px-5 rounded-full">
                                Stay
                            </button>
                            <button className="hover:bg-gray-100 py-3 px-5 rounded-full">
                                Experiances
                            </button>
                            <button className="hover:bg-gray-100 py-3 px-5 rounded-full">
                                Online Experiances
                            </button>
                        </div>
                    </div>
                )}
                <div className="justify-self-end">
                    <ul className="flex items-center">
                        <li className="font-semibold hover:bg-gray-100 py-3 px-5 rounded-full cursor-pointer">
                            Airbnb your home
                        </li>
                        <li className="font-semibold hover:bg-gray-100 p-4 rounded-full cursor-pointer mr-3">
                            <GrLanguage />
                        </li>
                        <li className="flex items-center gap-3 border rounded-full py-2 px-5 cursor-pointer hover:shadow">
                            <RxHamburgerMenu size={19} />
                            <FaUserCircle size={33} color="gray" />
                        </li>
                    </ul>
                </div>
            </div>
            {condition && (
                <div className="flex  justify-center">
                    <div className="border shadow flex items-center justify-evenly rounded-full w-[848px] box-border">
                        <div className="hover:bg-gray-100 rounded-full px-5 py-3 cursor-pointer font-semibold text-gray-700">
                            <label className="block">Where</label>
                            <input placeholder="Search destinations"></input>
                        </div>
                        <div className="text-gray-400">|</div>
                        <div className=" hover:bg-gray-100 rounded-full px-5 py-3 cursor-pointer  font-semibold text-gray-700">
                            <label className="block">Check in</label>
                            <p>Add dates</p>
                        </div>
                        <div className="text-gray-400">|</div>
                        <div className="hover:bg-gray-100 rounded-full px-5 py-3 cursor-pointer  font-semibold text-gray-700">
                            <label className="block">Check in</label>
                            <p>Add dates</p>
                        </div>
                        <div className="text-gray-400">|</div>
                        <div className="hover:bg-gray-100 rounded-full  flex items-center justify-between gap-2 cursor-pointer text-gray-500">
                            <div className="flex w-max justify-between">
                                <div className="pr-10">
                                    <label className="block">Who</label>
                                    <p>Add guests </p>
                                </div>

                                <span className="bg-[#FF385C] p-4  rounded-full">
                                    <GoSearch color="white" />
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Navbar;
