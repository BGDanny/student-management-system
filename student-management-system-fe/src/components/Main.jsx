import React from "react";
import { usePageContext } from "../context/PageContext";
import {
    AllCourses,
    Dashboard,
    Discussions,
    EditAccount,
    Finance
} from "./MainPage";

import GpaCalculator from "./MainPage/GpaCalculator";

export const Main = () => {
    const { page } = usePageContext();

    const renderMainPage = () => {
        switch (page) {
            case 0:
                return <Dashboard />;
            case 1:
                return <AllCourses />;
            case 2:
                return <Finance />;
            case 3:
                return <Discussions />;
            case 4: 
                return <GpaCalculator />
            case 5:
                return <EditAccount />;
            default:
                return <Dashboard />;
        }
    };
    return renderMainPage();
};
