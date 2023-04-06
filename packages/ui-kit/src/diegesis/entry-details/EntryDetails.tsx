import { Box, Container, Stack, Typography } from "@mui/material"
import React, { useState } from "react"
import PageFooter from "../PageFooter"
import PageHeader from "../PageHeader"
import SideNav from "../SideNav"
import TopControls from "./TopControls"
import DataTable, { HeadCell } from "../data-table/DataTable"
import "./EntryDetails.css"
import SelectOptions from "../SelectOptions"
import ActionButtons from "./ActionButtons"
import { BackButton } from "../BackButton"

interface IProps {
}
interface IData {
    key: string
    value: string
}
const headCells: HeadCell[] = [
    { id: 'key', disablePadding: true, label: '', numeric: false },
    { id: 'value', disablePadding: false, label: '', numeric: false },
    { id: 'emptyColumn1', disablePadding: false, label: '', numeric: false },
]
const sampleData: IData[] = [
    { key: 'Details', value: '' },
    { key: 'Abbreviation', value: 'engBBE' },
    { key: 'Copyright', value: 'engBBE' },
    { key: 'Language', value: 'engBBE' },
    { key: 'Data source', value: 'engBBE' },
    { key: 'Owner', value: 'engBBE' },
    { key: 'Entry ID', value: 'engBBE' },
    { key: 'Revision', value: 'engBBE' },
    { key: 'Content', value: '39 OT, 27 NT' },
]
export function EntryDetailPage(_props: IProps) {
    const [isSideNavOpen, setSideNavOpenStatus] = useState(false)
    return (
        <Box component={'div'} id="entry-detail-page">
            <PageHeader openSideNav={() => setSideNavOpenStatus(true)} />
            <SideNav open={isSideNavOpen} close={() => { setSideNavOpenStatus(false) }} />
            <Container className="controls-section">
                <TopControls />
            </Container>
            <Container className="details-section">
                <Stack direction={'row'} className="divider mt-2"></Stack>
                <DataTable expandableRowOnMobile={false} headCells={headCells} rows={sampleData} />
                <Stack direction={'column'} alignItems={'flex-start'} justifyContent={'center'} className="book-resource-box">
                    <Typography variant="h3">Book Resources</Typography>
                    <SelectOptions label="Select a book" options={[]} onChange={() => { }} />
                </Stack>
                <Stack direction={'row'} className="divider mt-2 mb-2"></Stack>
                <Stack direction={'column'} className="bottom-action-btn-container full-width">
                    <ActionButtons />
                </Stack>
                <Stack direction={'row'} className="pb-2">
                    <BackButton className="show-xs" />
                </Stack>
            </Container>
            <PageFooter />
        </Box>
    )
}
export default EntryDetailPage