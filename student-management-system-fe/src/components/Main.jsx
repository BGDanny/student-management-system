import React from "react";
import { usePageContext } from "../context/PageContext";
import {
    AllCourses,
    Dashboard,
    Discussions,
    EditAccount,
    Finance,
    EnrollCourses,
    StudentInformation,
    ViewGrades
} from "./MainPage";

import GpaCalculator from "./MainPage/GpaCalculator";

export const Main = () => {
    const { page } = usePageContext();

    const renderMainPage = () => {
        switch (page) {
            case 0:
                return <Dashboard />;
            case 1:
                return <ViewGrades />;
            case 2: 
                return <EnrollCourses />
            case 3:
                return <Finance />;
            case 4:
                return <Discussions />;
            case 5: 
                return <GpaCalculator />
            case 6:
                return <EditAccount />;
            case 7:
                return <StudentInformation />
            default:
                return <Dashboard />;
        }
    };
    return renderMainPage();
};
