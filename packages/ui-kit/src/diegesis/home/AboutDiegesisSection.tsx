import { Button, Container, Stack, Typography } from "@mui/material";
import React from "react";
import './Home.css';

interface IProps {
    coverUrl?: string
    aboutDiegesisHref?: string
}
export function AboutDiegesisSection(props: IProps) {
    const { coverUrl, aboutDiegesisHref } = props;
    
    return (
        <Container className="about-diegesis-section">
            <div className="content-box">
                <div className="about-diegesis-box">
                    <Stack direction={'column'} alignItems={'flex-start'} justifyContent={'space-between'} className='full-height'>
                        <Typography variant="h2">Diegesis is a place to find Bibles and related resources, in a variety of formats, released under open licences.</Typography>
                        <Button href={aboutDiegesisHref} variant={'text'} size={'large'} color={'dark'} className='about-diegesis-btn'>About Diegesis</Button>
                    </Stack>
                </div>
                <div className="cover-img-container" style={{ backgroundImage: `url(${coverUrl})` }}>
                </div>
            </div>
        </Container>
    )
}
export default AboutDiegesisSection