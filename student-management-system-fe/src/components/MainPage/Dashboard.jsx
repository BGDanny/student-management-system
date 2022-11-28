import React from "react";
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

export const Dashboard = () => {
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
                    <Tbody>
                        <Tr>
                            <Td>SENG 513: Web-Based Systems</Td>
                            <Td>Ahmad Nasri</Td>
                            <Td>ICT 122</Td>
                            <Td>12:30 PM - 1:45 PM</Td>
                            <Td>Tue, Thu</Td>
                        </Tr>
                    </Tbody>
                </Table>
            </TableContainer>
        </>
    );
};
