import Home from "./pages/Home/Home"
import Users from "./pages/Users/Users"
import NewUser from "./pages/NewUser/NewUser"
import Products from "./pages/Products/Products"
let routes=[
    {path:"/",element:<Home />},
    {path:"/users",element:<Users />},
    {path:"/newUser",element:<NewUser />},
    {path:"/products",element:<Products />},
]
export default routes