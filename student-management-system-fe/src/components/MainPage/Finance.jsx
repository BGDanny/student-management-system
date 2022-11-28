import React from "react";
import './Finance.css'
import axios from "axios";
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
export const Finance = () => {

    const [fetchedData, setFetchedData] = useState([]);
    const [fetchedStudentLoanData, setFetchedStudentLoanData] = useState([]);
    const [tutionFee, setTutionFee] = useState(0);
    const [receiptDate, setReceiptDate] = useState(null);
    const [length, setLength] = useState(0);
    useEffect(() => {
        fetchProducts();
    }, []);

    let id = localStorage.getItem('id');

    const fetchProducts = async () => {
        const url = "http://localhost:5000/api/students/sections/" + id;
        axios.get(url).then((res) => {
            setFetchedData(res.data);
            setLength(res.data.length);
        })
        .catch((err) => {
            console.log(err);
        })
    };
    
    useEffect(() => {
            fetchStudents();
    }, []);

    const fetchStudents = async () => {
        const url = "http://localhost:5000/api/students/" + id;
        axios.get(url).then((res) => {
            setFetchedStudentLoanData(res.data.student.loan);
            setTutionFee(res.data.student.fees.tution_Fee);
            setReceiptDate(res.data.student.fees.date_of_Receipt);
        })
        .catch((err) => {
            console.log(err);
        })
    };



    return (
        <>
        <div className="display-tution">
        <h2 className="account-header">Account Summary</h2>
            <TableContainer>
                <Table variant="simple">
                    <Thead>
                        <Tr>
                            <Th>Year</Th>
                            <Th>Term</Th>
                            <Th>Type</Th>
                            <Th>Amount Due</Th>
                        </Tr>
                    </Thead>
                  <Tbody>
                        <Tr>
                            <Td>2022</Td>
                            <Td>Winter</Td>
                            <Td>Academic</Td>
                            <Td>${length*600.65}</Td>
                        </Tr>
                    </Tbody>
                </Table>
            </TableContainer>
         </div>
         <div className="display-loan">
         <h2 className="account-header">Government Student Loan</h2>
            <TableContainer>
                <Table variant="simple">
                    <Thead>
                        <Tr>
                            <Th>Year</Th>
                            <Th>Lender</Th>
                            <Th>Start</Th>
                            <Th>End</Th>
                        </Tr>
                    </Thead>
                    {fetchedStudentLoanData.map((loan) => (<Tbody>
                        <Tr>
                            <Td>{loan.year}</Td>
                            <Td>ALberta Student Loan</Td>
                            <Td>{loan.start_Date}</Td>
                            <Td>{loan.end_Date}</Td>
                        </Tr>
                    </Tbody>))}
                </Table>
            </TableContainer>
         </div>
         <div className="display-payment">
         <h2 className="account-header">Past Payment History</h2>
            <TableContainer>
                <Table variant="simple">
                    <Thead>
                        <Tr>
                            <Th>Year</Th>
                            <Th>Term</Th>
                            <Th>Payment</Th>
                            <Th>Date</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr>
                            <Td>2021</Td>
                            <Td>ALberta Student Loan</Td>
                            <Td>{tutionFee}</Td>
                            <Td>{receiptDate}</Td>
                        </Tr>
                    </Tbody>
                </Table>
            </TableContainer>
         </div>

        </>
    )
};
