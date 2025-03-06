import {BrowserRouter, Route, Routes} from "react-router-dom";
import {AdminLayout} from "./admin/layout/AdminLayout.jsx";
import { AdminDashboard } from "./admin/components/AdminDashboard.jsx";
import UserLayout from "./user/layout/UserLayout.jsx";
import UserMenu from "./user/component/UserMenu.jsx";
import { ADMIN_URLS } from "./admin/utils/Urls.js";
import { Book } from "./admin/pages/book/Book.jsx";
import { AddBook } from "./admin/pages/book/AddBook.jsx";
import { Login } from "./admin/pages/auth/Login.jsx";
import { Register } from "./admin/pages/auth/Register.jsx";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login/>}/>
                <Route path="/register" element={<Register/>}/>
                <Route path={`${ADMIN_URLS.dashboard}`} element={<AdminLayout/>}>
                    <Route index element={<AdminDashboard/>}/>
                    <Route path={`${ADMIN_URLS.book}`} element={<Book/>}/>
                    <Route path={`${ADMIN_URLS.addBook}`} element={<AddBook/>}/>
                </Route>
                 <Route path={"/"} element={<UserLayout/>}>
                     <Route index element={<UserMenu/>}/>
                 </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
