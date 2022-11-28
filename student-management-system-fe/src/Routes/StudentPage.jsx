import React from "react";
import { Grid, GridItem } from "@chakra-ui/react";
import { Nav } from "../components/Nav";
import { Profile } from "../components/Profile";
import { PageContext } from "../context/PageContext";
import { Main } from "../components/Main";

function StudentPage() {
    const [page, setPage] = React.useState(0);

    return (
        <PageContext.Provider value={{page, setPage}}>
            <Grid gridTemplateColumns="25% 50% 25%" gridTemplateRows="100vh">
                <GridItem>
                    <Nav />
                </GridItem>
                <GridItem bg="#F5F5FB">
                    <Main />
                </GridItem>
                <GridItem>
                    <Profile />
                </GridItem>
            </Grid>
        </PageContext.Provider>
    );
}

export default StudentPage;
