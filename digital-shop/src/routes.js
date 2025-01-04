import OrgLayout from "./components/Layout/OrgLayout"
import Home from "./pages/Home/Home"
import Login from "./pages/Login/Login"
import VerifyLogin from "./pages/VerifyLogin/VerifyLogin"
import MainProduct from "./pages/MainProduct/MainProduct"
import Cart from "./pages/Cart/Cart"
import OffPage from "./pages/OffPage/OffPage";

let routes=[
    {
        path:'/',
        element:<OrgLayout>
            <Home />
        </OrgLayout>,
        title:"تکنولایف"
    },
    {
        path:'/login',
        element:<Login />,
        title:"ورود | ثبت‌نام"
    },
    {
        path:'/verifying',
        element:<VerifyLogin />,
        title:"ورود | ثبت‌نام"
    },
    {
        path:'/product/:productID',
        element:<OrgLayout><MainProduct /></OrgLayout>,
        title:""
    },
    {
        path:'/cart',
        element:<OrgLayout><Cart /></OrgLayout>,
        title:"سبد خرید"
    },
    {
        path:'/off-page',
        element:<OrgLayout><OffPage /></OrgLayout>,
        title:"تکنو آف"
    },
]
export default routes