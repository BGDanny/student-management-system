import React from "react";
import { usePageContext } from "../context/PageContext";
import {
    RegisterStudents,
    AddSections,
    AddGrades,
    ViewStudents,
    ViewSections
} from "./AdminMainPage";

export const AdminMain = () => {
    const { page } = usePageContext();

    const renderMainPage = () => {
        switch (page) {
            case 0:
                return <ViewStudents />;
            case 1:
                return <ViewSections />;    
            case 2:
                return <AddSections />;
            case 3:
                return <RegisterStudents />;
            case 4:
                return <AddGrades />;
            default:
                return <ViewStudents />;
        }
    };
    return renderMainPage();
};
