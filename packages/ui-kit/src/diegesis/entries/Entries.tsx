import { Box } from "@mui/material"
import React, { useState } from "react"
import PageFooter from "../PageFooter"
import PageHeader from "../PageHeader"
import SideNav from "../SideNav"

interface IProps {
}
export const EntriesPage: React.FC<IProps> = (props) => {
    const [isSideNavOpen, setSideNavOpenStatus] = useState(false)
    return (
        <Box component={'div'} id="entries-page">
            <PageHeader openSideNav={() => setSideNavOpenStatus(true)} />
            <SideNav open={isSideNavOpen} close={() => { setSideNavOpenStatus(false) }} />
            <PageFooter />
        </Box>
    )
}
export default EntriesPage