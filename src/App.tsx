import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BottomNav from "./components/BottomNav";

const App = () => {
    return (
        <div className="w-full h-screen flex flex-col justify-between">
            <div>
                <div className="fixed w-full bg-white z-10">
                    <Navbar />
                    <BottomNav />
                </div>
                <div className="pt-[246.5px]"> {/* Add padding equal to the height of Navbar */}
                    <Outlet />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default App;
