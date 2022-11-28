import { Avatar, Box, Center, Text } from "@chakra-ui/react";
import React from "react";

export const Profile = () => {
    return (
        <Box>
            <Center marginY={5}>
                <Avatar
                    name="Junhao Xue"
                    src="https://bgdanny.github.io/assets/image/me.jpg"
                />
                <Text marginLeft={3}>Junhao Xue</Text>
            </Center>
        </Box>
    );
};
