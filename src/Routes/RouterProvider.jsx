import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import SendMoney from "../components/SendMoney/SendMoney";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        children: [
            {
                path: 'sendMoney',
                element: <SendMoney />
            }
        ]
    }
])

export default router;