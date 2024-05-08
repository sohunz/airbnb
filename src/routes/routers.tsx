import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomePage from "../pages/HomePage";
import IconPage from "../pages/IconPage";
import CabinPage from "../pages/CabinPage";
import LakeFrontPage from "../pages/LakeFrontPage";
import BeachFrontPage from "../pages/BeachFrontPage";
import TrendingPage from "../pages/TrendingPage";

export const router = createBrowserRouter([
    {
        path: "",
        element: <App />,
        children: [
            { path: "/", element: <HomePage /> },
            { path: "/icons", element: <IconPage /> },
            { path: "/cabins", element: <CabinPage /> },
            { path: "/lakefront", element: <LakeFrontPage /> },
            { path: "/beachfront", element: <BeachFrontPage /> },
            { path: "/trending", element: <TrendingPage /> },

            // need create more page and add more route
        ],
    },
]);
