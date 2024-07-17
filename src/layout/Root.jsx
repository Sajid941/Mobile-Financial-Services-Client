import { Outlet } from "react-router-dom";
import Dashboard from "../components/Dashboard/Dashboard";

const Root = () => {
    return (
        <>
            <div className="lg:flex">
                <Dashboard />
                <main className="lg:flex-1 lg:p-10 px-5">
                    <Outlet />
                </main>
            </div>
        </>
    );
};

export default Root;