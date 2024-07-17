import { CiMenuBurger } from "react-icons/ci";
import logo from "../../../public/flash_cash_logo.png"
import { NavLink } from "react-router-dom";
import "./Dashboard.css"

const Dashboard = () => {
    return (
        <div className="drawer lg:drawer-open lg:p-4 border-r lg:w-96 ">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex w-full ">
                {/* Page content here */}
                <label htmlFor="my-drawer-2" className="btn btn-ghost drawer-button lg:hidden  ">
                    <CiMenuBurger size={20} />
                </label>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                <div className="bg-white p-4 min-h-screen w-80 lg:min-h-[90%] lg:shadow-md border lg:rounded-lg lg:fixed z-10">
                    <div className="flex justify-center items-center">
                        <img src={logo} alt="logo" className="w-10" />
                        <h3 className="text-2xl font-bold">Flash Cash</h3>
                    </div>
                    <ul className="text-base-content flex flex-col gap-2 mt-10 font-medium pl-3">
                        {/* Sidebar content here */}
                        <li><NavLink to="balance">Balance Inquiry</NavLink></li>
                        <li><NavLink to="sendMoney">Send Money</NavLink></li>
                        <li><NavLink to="cashOut">Cash Out</NavLink></li>
                        <li><NavLink to="cashIn">Cash In</NavLink></li>
                        <li><NavLink to="transHistory">Transactions History</NavLink></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;