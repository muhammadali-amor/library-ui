import {BrowserRouter, Route, Routes} from "react-router-dom";
import {AdminLayout} from "./admin/layout/AdminLayout.jsx";
import { Login } from "./admin/pages/Login.jsx";
import { AdminDashboard } from "./admin/components/AdminDashboard.jsx";
import { Register } from "./admin/pages/Register.jsx";
import UserLayout from "./user/layout/UserLayout.jsx";
import UserMenu from "./user/component/UserMenu.jsx";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login/>}/>
                <Route path="/register" element={<Register/>}/>
                <Route path={"/admin-dashboard"} element={<AdminLayout/>}>
                    <Route index element={<AdminDashboard/>}/>
                </Route>
                 <Route path={"/"} element={<UserLayout/>}>
                     <Route index element={<UserMenu/>}/>
                 </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
