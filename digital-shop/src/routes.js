import OrgLayout from "./components/Layout/OrgLayout"
import Home from "./pages/Home/Home"
import Login from "./pages/Login/Login"

let routes=[
    {
        path:'/',
        element:<OrgLayout>
            <Home />
        </OrgLayout>
    },
    {
        path:'/login',
        element:<Login />
    },
]
export default routes