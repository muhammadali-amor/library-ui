import {BrowserRouter, Route, Routes} from "react-router-dom";
import {AdminLayout} from "./admin/layout/AdminLayout.jsx";
// import {AdminDashboard} from "./admin/components/AdminDashboard.jsx";
// import {UserLayout} from "./user/layout/UserLayout.jsx";
// import {UserMenu} from "./user/component/UserMenu.jsx";
import { Login } from "./admin/pages/Login.jsx";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login/>}/>
                 <Route path={"/admin-dashboard"} element={<AdminLayout/>}>
                    {/* <Route index element={<AdminDashboard/>}/> */}
                </Route>
                {/* <Route path={"/"} element={<UserLayout/>}> */}
                    {/* <Route index element={<UserMenu/>}/> */}
                {/* </Route> */}
            </Routes>
        </BrowserRouter>
    )
}

export default App
