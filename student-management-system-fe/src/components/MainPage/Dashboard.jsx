import React from "react";
import { useEffect, useState } from "react";
import {
    Heading,
    Text,
    TableContainer,
    Table,
    Thead,
    Tbody,
    Tr,
    Td,
    Th,
} from "@chakra-ui/react";
import axios from "axios";

export const Dashboard = () => {
    const [fetchedData, setFetchedData] = useState([]);
    let length;

    useEffect(() => {
        fetchProducts();
    }, []);

    let id = localStorage.getItem("id");

    const fetchProducts = async () => {
        const url = "http://localhost:5000/api/students/sections/" + id;
        axios
            .get(url)
            .then((res) => {
                console.log(res.data);
                setFetchedData(res.data);
                length = res.data.length;
                console.log(length);
                let upfees = length * 670.52;
                const url2 = "http://localhost:5000/api/students/fees/" + id;
                const response = fetch(url2, {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        upfees,
                    }),
                });
            })
            .catch((err) => {
                console.log(err);
            });
    };

    console.log("data: ", fetchedData);
    return (
        <>
            <Heading size="lg">Dashboard</Heading>
            <Text color={"#5E81F4"} fontWeight="bold" marginY={3}>
                Ongoing courses
            </Text>
            <TableContainer borderRadius={25}>
                <Table variant="simple">
                    <Thead bgColor={"#FFC670"}>
                        <Tr>
                            <Th>Course</Th>
                            <Th>Instructor</Th>
                            <Th>Location</Th>
                            <Th>Time</Th>
                            <Th>Day</Th>
                        </Tr>
                    </Thead>
                    <Tbody bgColor={"#D9D9D9"}>
                        {fetchedData.map((section) => (
                            <Tr>
                                <Td>
                                    {section.course_id.course_Name}:{" "}
                                    {section.course_id.course_Description}
                                </Td>
                                <Td>{section.instructor}</Td>
                                <Td>{section.location}</Td>
                                <Td>
                                    {section.start_time} - {section.end_time}
                                </Td>
                                <Td>{section.day}</Td>
                            </Tr>
                        ))}
                    </Tbody>
                </Table>
            </TableContainer>
        </>
    );
};
