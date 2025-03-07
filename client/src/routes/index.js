import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import RegisterUser from "../pages/RegisterUser";
import CheckEmailPage from "../pages/CheckEmailPage";
import CheckPasswordPage from "../pages/CheckPasswordPage";
import Home from "../pages/Home";
import MessagePage from "../components/MessagePage";
import { AuthLayouts } from "../layout";

const router = createBrowserRouter([
    {
        path: "/",
        element:  <App/>,
        children:[
            {
                path:"register",
                element: <AuthLayouts> <RegisterUser/> </AuthLayouts>
            },
            {
                path:"email",
                element: <AuthLayouts> <CheckEmailPage/> </AuthLayouts> 
            },
            {
                path:"password",
                element:  <AuthLayouts>  <CheckPasswordPage/> </AuthLayouts>
            },
            {
                path:"",
                element: <Home/>,
                children:[
                    {
                        path: ":userId",
                        element: <MessagePage/>

                    }
                ]
            }
        ]
    }
]);
export default router;