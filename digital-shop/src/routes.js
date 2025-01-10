import OrgLayout from "./components/Layout/OrgLayout"
import Home from "./pages/Home/Home"
import Login from "./pages/Login/Login"
import VerifyLogin from "./pages/VerifyLogin/VerifyLogin"
import MainProduct from "./pages/MainProduct/MainProduct"
import Cart from "./pages/Cart/Cart"
import OffPage from "./pages/OffPage/OffPage";
import BlogPage from "./pages/BlogPage/BlogPage";
import MainBlog from "./pages/MainBlog/MainBlog";
import ProductCategory from './pages/ProductCategory/ProductCategory'
import Shop from "./pages/Shop/Shop";
import Page404 from "./pages/404/404";

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
    {
        path:'/blog',
        element:<OrgLayout><BlogPage /></OrgLayout>,
        title:"وبلاگ"
    },
    {
        path:'/blog/:blogID',
        element:<OrgLayout><MainBlog /></OrgLayout>,
        title:"وبلاگ"
    },
    {
        path:'/product/category/:productCat',
        element:<OrgLayout><ProductCategory /></OrgLayout>,
        title:"دسته بندی محصولات"
    },
    {
        path:'/shop',
        element:<OrgLayout><Shop /></OrgLayout>,
        title:"فروشگاه"
    },
    {
        path:'*',
        element:<OrgLayout><Page404 /></OrgLayout>,
        title:""
    },
]
export default routes