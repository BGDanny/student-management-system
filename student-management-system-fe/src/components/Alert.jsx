import { Alert, AlertIcon, AlertTitle, CloseButton } from "@chakra-ui/react";
import React from "react";
import { useAlertContext } from "../context/AlertContext";

export const AlertBanner = () => {
    const { alert, sendAlert } = useAlertContext();
    const onClose = () => {
        sendAlert("");
    };
    if (alert.message) {
        return (
            <Alert status={alert.status} justifyContent="center">
                <AlertIcon />
                <AlertTitle>{alert.message}</AlertTitle>
                <CloseButton onClick={onClose} />
            </Alert>
        );
    }
    return null;
};
