import { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import bottomNav from "../utils/bottomNav";
import { NavList } from "../mocks/NavList";
import { Link } from "react-router-dom";

const BottomNav = () => {
    const { scrollLeft, scrollRight, navRef } = bottomNav();
    const [activeTap, setActiveTap] = useState(null);

    const handleTapClick = (index: any) => {
        setActiveTap(index);
    };

    return (
        <div className="w-full border-b">
            <div className="max-w-[1400px] mx-auto relative flex items-center overflow-x-hidden py-3">
                <button
                    className="w-[40px] h-[40px] absolute left-0 top-7 bottom-0 bg-gray-200 rounded-lg p-2 flex items-center justify-center hover:bg-gray-300 transition duration-300"
                    onClick={scrollLeft}
                >
                    <FiChevronLeft className="text-gray-600 h-5 w-5" />
                </button>
                <button
                    className="w-[40px] h-[40px] absolute right-0 top-7 bottom-0 bg-gray-200 rounded-lg p-2 flex items-center justify-center hover:bg-gray-300 transition duration-300"
                    onClick={scrollRight}
                >
                    <FiChevronRight className="text-gray-600 h-5 w-5" />
                </button>
                <ul
                    className="flex items-center gap-9 overflow-x-auto p-2 mx-10"
                    ref={navRef}
                >
                    {NavList.map((item) => {
                        return (
                            <Link
                                to={`/${item.route}`}
                                className={`cursor-pointer py-2 flex flex-col justify-center items-center  ${
                                    activeTap === item.id
                                        ? "opacity-100 border-b-2 border-black"
                                        : "opacity-70 hover:opacity-100"
                                }`}
                                onClick={() => handleTapClick(item.id)}
                            >
                                <div className="max-w-[24px]">
                                    <img src={item.img} />
                                </div>
                                <p className="text-[13px] text-black font-semibold overflow-hidden whitespace-nowrap">
                                    {item.text}
                                </p>
                            </Link>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
};

export default BottomNav;
