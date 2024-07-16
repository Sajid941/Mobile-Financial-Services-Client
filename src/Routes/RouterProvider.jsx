import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Dashboard from "../pages/Dashboard/Dashboard";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        children:[
            {
                path:'/',
                element:<Dashboard/>
            }
        ]
    }
])

export default router;