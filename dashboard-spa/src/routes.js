import Home from "./pages/Home/Home"
import Users from "./pages/Users/Users"
import NewUser from "./pages/NewUser/NewUser"
import Products from "./pages/Products/Products" 
import MainUser from "./components/MainUser/MainUser"
import Mainproduct from "./components/MainProduct/MainProduct"
import Orders from "./pages/Orders/Orders"
import MainOrder from "./components/MainOrder/MainOrder"
import Report from "./pages/Report/Report"
import Analysis from "./pages/Analysis/Analysis"
import Email from "./pages/Email/Email"

let routes=[
    {path:"/",element:<Home />},
    {path:"/users",element:<Users />},
    {path:"/users/:id",element:<MainUser />},
    {path:"/newUser",element:<NewUser />},
    {path:"/products",element:<Products />},
    {path:"/products/:id",element:<Mainproduct />},
    {path:"/orders",element:<Orders />},
    {path:"/orders/:id",element:<MainOrder />},
    {path:"/reports",element:<Report />},
    {path:"/analysis",element:<Analysis />},
    {path:"/emails",element:<Email />},
]
export default routes