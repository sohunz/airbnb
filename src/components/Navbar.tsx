import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="flex bg-violet-500">
            <Link to="/" className="p-3">
                Home
            </Link>
            <Link to="/about" className="p-3">
                About
            </Link>
            <Link to="/contact" className="p-3">
                Contact
            </Link>
        </div>
    );
};

export default Navbar;
