import { Box, Container } from "@mui/material"
import React, { useState } from "react"
import PageFooter from "../PageFooter"
import PageHeader from "../PageHeader"
import SideNav from "../SideNav"
import EntriesTopControls from "./EntriesTopControls"
import EntriesDataTable from "./EntriesDataTable"
import "./Entries.css"

interface IProps {
}
export function EntriesPage(_props: IProps) {
    const [isSideNavOpen, setSideNavOpenStatus] = useState(false)
    return (
        <Box component={'div'} id="entries-page">
            <PageHeader openSideNav={() => setSideNavOpenStatus(true)} />
            <SideNav open={isSideNavOpen} close={() => { setSideNavOpenStatus(false) }} />
            <Container className="controls-section">
                <EntriesTopControls />
            </Container>
            <Container className="table-section">
                <EntriesDataTable />
            </Container>
            <PageFooter />
        </Box>
    )
}
export default EntriesPage