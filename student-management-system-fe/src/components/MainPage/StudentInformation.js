import React from "react";
import "./StudentInformation.css";
import { useState, useEffect } from "react";
import axios from "axios";

export const StudentInformation = () => {
    const [studentInfo, setStudentInfor] = useState({});
    useEffect(() => {
        fetchProducts();
    }, []);

    let id = localStorage.getItem("id");

    const fetchProducts = async () => {
        const url = "http://localhost:5000/api/students/" + id;
        axios
            .get(url)
            .then((res) => {
                console.log(res.data.student);
                setStudentInfor(res.data.student);
            })
            .catch((err) => {
                console.log(err);
            });
    };
    return (
        <>
            <div>
                <div className="user-info">
                    <div>
                        <h1 className="header">Student Information</h1>
                    </div>
                    <div className="info">
                        <p className="info-text">
                            <b>Name:</b> {studentInfo.name}
                        </p>
                        <br />
                        <br />
                        <p className="info-text">
                            <b>Address:</b> {studentInfo.address}
                        </p>
                        <br />
                        <br />
                        <p className="info-text">
                            <b>Phone-Number:</b> {studentInfo.phone_Number}
                        </p>
                        <br />
                        <br />
                        <p className="info-text">
                            <b>Email:</b> {studentInfo.email}
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};
