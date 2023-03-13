import { Container, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import SectionActionButton from "./SectionActionButton";
import './Home.css';

interface IProps { }
export function LandingSection(props: IProps) {
    return (
        <Container className="landing-section">
            <Stack direction={'column'} alignItems={'center'} justifyContent={'center'}>
                <Typography variant="h1">
                    Diegesis is a place to find Bibles and related resources, in a variety of formats, released under open licences*.
                </Typography>
                <SectionActionButton label="Browse content" />
                <Typography variant="caption">
                    * In other words, you can use, share, improve and translate them.
                </Typography>
            </Stack>
        </Container>
    )
}
export default LandingSection