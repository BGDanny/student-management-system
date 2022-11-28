import React from "react";
import { Flex, Heading, Button } from "@chakra-ui/react";
import {
    MdOutlineSpaceDashboard,
    MdMenuBook,
    MdAttachMoney,
    MdChatBubbleOutline,
    MdSettings,
} from "react-icons/md";
import {BsCalculatorFill} from "react-icons/bs";
import { usePageContext } from "../context/PageContext";

export const Nav = () => {
    const { setPage } = usePageContext();

    const handleClick = (pageNumber) => () => {
        setPage(pageNumber);
    };

    return (
        <Flex direction="column" align="center" rowGap={10}>
            <Heading as="h1" suze="3xl" marginY={5}>
                SMS
            </Heading>
            <Button
                leftIcon={<MdOutlineSpaceDashboard />}
                onClick={handleClick(0)}
            >
                Dashboard
            </Button>
            <Button leftIcon={<MdMenuBook />} onClick={handleClick(1)}>
                All Courses
            </Button>
            <Button leftIcon={<MdMenuBook />} onClick={handleClick(2)}>
                Enroll Courses
            </Button>
            <Button leftIcon={<MdAttachMoney />} onClick={handleClick(3)}>
                Finance
            </Button>
            <Button leftIcon={<MdChatBubbleOutline />} onClick={handleClick(4)}>
                Discussions
            </Button>
            <Button leftIcon={<BsCalculatorFill />} onClick={handleClick(5)}>
                GPA Calculator
            </Button>
            <Button leftIcon={<MdSettings />} onClick={handleClick(6)}>
                Edit Account
            </Button>
        </Flex>
    );
};
