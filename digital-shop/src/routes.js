import OrgLayout from "./components/Layout/OrgLayout"
import Home from "./pages/Home/Home"
import Login from "./pages/Login/Login"

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
]
export default routes