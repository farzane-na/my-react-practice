import Home from "./pages/Home/Home"
import Users from "./pages/Users/Users"
import NewUser from "./pages/NewUser/NewUser"
import Products from "./pages/Products/Products" 
import MainUser from "./components/MainUser/MainUser"
let routes=[
    {path:"/",element:<Home />},
    {path:"/users",element:<Users />},
    {path:"/users/:id",element:<MainUser />},
    {path:"/newUser",element:<NewUser />},
    {path:"/products",element:<Products />},
]
export default routes