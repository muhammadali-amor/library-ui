import {BrowserRouter, Route, Routes} from "react-router-dom";
import {AdminLayout} from "./admin/layout/AdminLayout.jsx";
import Dashboard from "./admin/component/Dashboard.jsx";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={"/admin-dashboard"} element={<AdminLayout/>}>
                    <Route index element={<Dashboard/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
