import React from 'react';
import {Outlet} from "react-router-dom";
import UserNavbar from "../component/UserNavbar.jsx";
import './UserLayout.css'

const UserLayout = () => {
    return (
        <div>
            <UserNavbar/>
            <Outlet/>
        </div>
    );
};

export default UserLayout;