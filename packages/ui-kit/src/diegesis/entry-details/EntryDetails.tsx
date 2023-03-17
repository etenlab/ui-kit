import { Box, Container } from "@mui/material"
import React, { useState } from "react"
import PageFooter from "../PageFooter"
import PageHeader from "../PageHeader"
import SideNav from "../SideNav"
import "./EntryDetails.css"
import TopControls from "./TopControls"
import DataTable, { HeadCell } from "../data-table/DataTable"

interface IProps {
}
interface IData {
    key: string
    value: string
}
const headCells: HeadCell[] = [
    { id: 'key', disablePadding: false, label: '', numeric: false },
    { id: 'value', disablePadding: false, label: '', numeric: false },
]
const sampleData: IData[] = [
    { key: 'Abbreviation', value: 'engBBE' },
    { key: 'Copyright', value: 'engBBE' },
    { key: 'Language', value: 'engBBE' },
    { key: 'Data source', value: 'engBBE' },
    { key: 'Owner', value: 'engBBE' },
    { key: 'Entry ID', value: 'engBBE' },
    { key: 'Revision', value: 'engBBE' },
    { key: 'Content', value: '39 OT, 27 NT' },
]
export const EntryDetailPage: React.FC<IProps> = (props) => {
    const [isSideNavOpen, setSideNavOpenStatus] = useState(false)
    return (
        <Box component={'div'} id="entry-detail-page">
            <PageHeader openSideNav={() => setSideNavOpenStatus(true)} />
            <SideNav open={isSideNavOpen} close={() => { setSideNavOpenStatus(false) }} />
            <Container className="controls-section">
                <TopControls />
            </Container>
            <Container className="details-section">
                <DataTable headCells={headCells} rows={sampleData} />
            </Container>
            <PageFooter />
        </Box>
    )
}
export default EntryDetailPage