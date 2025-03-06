import * as React from 'react';
import PropTypes from 'prop-types';
import {createTheme} from '@mui/material/styles';
import DashboardIcon from '@mui/icons-material/Dashboard';
import Groups3Icon from '@mui/icons-material/Groups3';
import {AppProvider} from '@toolpad/core/AppProvider';
import {DashboardLayout} from '@toolpad/core/DashboardLayout';
import {Outlet, useNavigate} from "react-router-dom";
import { GiBookshelf } from "react-icons/gi";
import { ADMIN_URLS } from '../utils/Urls';

const NAVIGATION = [
    {
        kind: 'header',
        title: 'Main items',
    },
    {
        segment: 'dashboard',
        title: 'Dashboard',
        icon: <DashboardIcon/>,
    },
    {
        segment: 'dashboard/users',
        title: 'Users',
        icon: <Groups3Icon/>,
    },
    {
        segment: `${ADMIN_URLS.book}`,
        title: 'Kitoblar',
        icon: <GiBookshelf />,
    },
];

const demoTheme = createTheme({
    cssVariables: {
        colorSchemeSelector: 'data-toolpad-color-scheme',
    },
    colorSchemes: {light: true, dark: true},
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 600,
            lg: 1200,
            xl: 1536,
        },
    },
});

 
export const AdminLayout = (props) => {
    const n = useNavigate()
    const {window} = props;

    const [pathname, setPathname] = React.useState('/dashboard');
    const router = React.useMemo(() => {
        return {
            pathname,
            searchParams: new URLSearchParams(),
            navigate: (path) => {
                setPathname(String(path))
                n(path)
            },
        };
    }, [pathname]);

    const demoWindow = window !== undefined ? window() : undefined;

    let tok = sessionStorage.getItem("__token?_")
    tok = "oo"
    return (
        tok != null ? <AppProvider
            navigation={NAVIGATION}
            router={router}
            theme={demoTheme}
            window={demoWindow}
        >
            <DashboardLayout>
                <Outlet/>
            </DashboardLayout>
        </AppProvider> : n('/auth/login')
    );
}

AdminLayout.propTypes = {
    window: PropTypes.func,
};