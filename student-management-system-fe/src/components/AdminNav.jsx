import React from "react";
import { Flex, Heading, Button } from "@chakra-ui/react";
import {
    MdOutlineSpaceDashboard,
    MdMenuBook,
    MdAttachMoney,
    MdChatBubbleOutline,
    MdSettings,
} from "react-icons/md";
import { BsCalculatorFill } from "react-icons/bs";
import { GrCircleInformation } from "react-icons/gr";
import { usePageContext } from "../context/PageContext";

export const AdminNav = () => {
    const { setPage } = usePageContext();

    const handleClick = (pageNumber) => () => {
        setPage(pageNumber);
    };

    return (
        <Flex direction="column" align="center" rowGap={10}>
            <Heading as="h1" suze="3xl" marginY={5}>
                SMS - Admin Portal
            </Heading>
            <Button
                leftIcon={<MdOutlineSpaceDashboard />}
                onClick={handleClick(0)}
            >
                View Students
            </Button>
            <Button leftIcon={<MdMenuBook />} onClick={handleClick(1)}>
                Add/Remove Sections
            </Button>
            <Button leftIcon={<MdMenuBook />} onClick={handleClick(2)}>
                Register Students
            </Button>
            <Button leftIcon={<MdAttachMoney />} onClick={handleClick(3)}>
                Add Grades
            </Button>
        </Flex>
    );
};
