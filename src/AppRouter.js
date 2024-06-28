import React from 'react';
import {Route, Routes} from "react-router-dom";

import {
    ERROR_ROUTE,
    HOME_ROUTE,
} from './utils/PATHS';

import HomePage from './pages/HomePage/HomePage';
import ErrorPage from "./pages/ErrorPage/ErrorPage";

const AppRouter = () => {

    return (
        <Routes>
            <Route path={HOME_ROUTE} element={<HomePage />} />
            <Route path={ERROR_ROUTE} element={<ErrorPage />} />
        </Routes>
    );
};

export default AppRouter;