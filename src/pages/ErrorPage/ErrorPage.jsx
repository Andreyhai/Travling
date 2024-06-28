import React, {Fragment} from 'react';
import {Link} from "react-router-dom";
import {HOME_ROUTE} from "../../utils/PATHS";

const ErrorPage = () => {
    return (
        <Fragment>
            ErrorPage
            <Link to={HOME_ROUTE}>to HomePage</Link>
        </Fragment>
    );
};

export default ErrorPage;