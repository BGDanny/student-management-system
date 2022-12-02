import React from "react";
import { Grid, GridItem } from "@chakra-ui/react";
import { AdminNav } from "../components/AdminNav";
import { PageContext } from "../context/PageContext";
import { AdminMain } from "../components/AdminMain";
import { AdminProfile } from "../components/AdminProfile";

function AdminPage() {
    const [page, setPage] = React.useState(0);

    return (
        <PageContext.Provider value={{page, setPage}}>
            <Grid gridTemplateColumns="25% 50% 25%" gridTemplateRows="100vh">
                <GridItem>
                    <AdminNav />
                </GridItem>
                <GridItem bg="#F5F5FB">
                    <AdminMain />
                </GridItem>
                <GridItem>
                    <AdminProfile />
                </GridItem>
            </Grid>
        </PageContext.Provider>
    );
}

export default AdminPage;
