// import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
    return (
        <div className="w-full h-screen flex flex-col justify-between">
            <div>
                <Navbar />
                {/* <Outlet /> */}
            </div>
            <Footer />
        </div>
    );
};

export default App;
