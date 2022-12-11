import React from "react";
import { usePageContext } from "../context/PageContext";
import {
    RegisterStudents,
    AddSections,
    AddGrades,
    ViewStudents,
} from "./AdminMainPage";

export const AdminMain = () => {
    const { page } = usePageContext();

    const renderMainPage = () => {
        switch (page) {
            case 0:
                return <ViewStudents />;
            case 1:
                return <AddSections />;
            case 2:
                return <RegisterStudents />;
            case 3:
                return <AddGrades />;
            default:
                return <ViewStudents />;
        }
    };
    return renderMainPage();
};
