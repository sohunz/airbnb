import { GoSearch } from "react-icons/go";
import { GrLanguage } from "react-icons/gr";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {
    return (
        <div className="w-full border">
            <div className="max-w-[1400px] mx-auto flex justify-between items-center py-5">
                <div className="max-w-[100px]">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/2560px-Airbnb_Logo_B%C3%A9lo.svg.png"
                        alt=""
                        className="cursor-pointer"
                    />
                </div>
                <div>
                    <ul className="border shadow flex items-center rounded-full">
                        <li className=" px-5 py-3 cursor-pointer font-semibold text-gray-700">
                            Anywhere
                        </li>
                        <li className="text-gray-400">|</li>
                        <li className=" px-5 py-3 cursor-pointer  font-semibold text-gray-700">
                            Any week
                        </li>
                        <li className="text-gray-400">|</li>
                        <li className="flex items-center gap-2 pl-5 pr-2 py-1 cursor-pointer text-gray-500">
                            Add guests
                            <span className="bg-[#FF385C] p-2 rounded-full">
                                <GoSearch color="white" />
                            </span>
                        </li>
                    </ul>
                </div>
                <div>
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
        </div>
    );
};

export default Navbar;
