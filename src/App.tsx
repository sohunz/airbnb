import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BottomNav from "./components/BottomNav";

const App = () => {
    return (
        <div className="w-full h-screen flex flex-col justify-between">
            <div>
                <Navbar />
                <BottomNav />
                <div className="max-w-[1400px] mx-auto mt-5">
                    <Outlet />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default App;
