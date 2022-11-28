import React from "react";
import { useEffect, useState } from "react";
import {
    InputGroup,
    Input,
    InputLeftElement,
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
import { MdSearch } from "react-icons/md";
import axios from "axios";

export const Dashboard = () => {
    const [fetchedData, setFetchedData] = useState([]);

    useEffect(() => {
        fetchProducts();
    }, []);

    let id = localStorage.getItem('id');

    const fetchProducts = async () => {
        const url = "http://localhost:5000/api/students/sections/" + id;
        axios.get(url).then((res) => {
            console.log(res.data);
            setFetchedData(res.data);
        })
        .catch((err) => {
            console.log(err);
        })
    };

  console.log("data: ", fetchedData);
    return (
        <>
            <InputGroup>
                <InputLeftElement children={<MdSearch />} />
                <Input type="text" placeholder="Search" variant="filled" />
            </InputGroup>
            <Heading size="1xl">Dashboard</Heading>
            <Text>Ongoing courses</Text>
            <TableContainer>
                <Table variant="simple">
                    <Thead>
                        <Tr>
                            <Th>Course</Th>
                            <Th>Instructor</Th>
                            <Th>Location</Th>
                            <Th>Time</Th>
                            <Th>Day</Th>
                        </Tr>
                    </Thead>
                    {fetchedData.map((section) => (<Tbody>
                        <Tr>
                            <Td>{section.course_id.course_Name}: {section.course_id.course_Description}</Td>
                            <Td>{section.instructor}</Td>
                            <Td>{section.location}</Td>
                            <Td>{section.start_time} - {section.end_time}</Td>
                            <Td>{section.day}</Td>
                        </Tr>
                    </Tbody>))}
                </Table>
            </TableContainer>
        </>
    );
};
