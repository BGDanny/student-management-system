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

export const ViewStudents = () => {
    const [fetchedData, setFetchedData] = useState([{}]);

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        const url = "http://localhost:5000/api/students";
        axios
            .get(url)
            .then((res) => {
                console.log(res.data);
                setFetchedData(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <>
            <Heading size="1xl">Student Information</Heading>
            <Text>Enrolled Students</Text>
            <TableContainer>
                <Table variant="simple">
                    <Thead>
                        <Tr>
                            <Th>Student Name</Th>
                            <Th>Student Email</Th>
                            <Th>Student Phone Number</Th>
                            <Th>Student Address</Th>
                        </Tr>
                    </Thead>
                    {fetchedData.map((student) => (
                        <Tbody>
                            <Tr>
                                <Td>{student.name}</Td>
                                <Td>{student.email}</Td>
                                <Td>{student.phone_Number}</Td>
                                <Td>{student.address}</Td>
                            </Tr>
                        </Tbody>
                    ))}
                </Table>
            </TableContainer>
        </>
    );
};
