import { Typography } from "@mui/material";
import { Container } from "@mui/system";
import React, { useState } from "react";
import PageFooter from "../PageFooter";
import PageHeader from "../PageHeader";
import SideNav from "../SideNav";
import AboutContentSection from "./AboutContentSection";
import "./About.css";
import AboutPictureSection from "./AboutPictureSection";

interface IProps {

}

//#region data
const dataAboutContentSection1 = {
    title: "Aliquam aliquet mollis",
    description: "Metus vitae feugiat. Vestibulum sit amet ligula sit amet odio scelerisque interdum. Phasellus nisi metus, viverra nec faucibus id, ultrices non mauris. Donec maximus consectetur congue. Vestibulum scelerisque cursus sem at commodo. Donec nunc odio, molestie a erat ac, dapibus imperdiet urna.",
    points: ["Metus vitae feugiat. Vestibulum sit amet ligula sit amet odio scelerisque interdum.", "Metus vitae feugiat. Vestibulum sit amet ligula sit amet odio scelerisque interdum.", "Metus vitae feugiat. Vestibulum sit amet ligula sit amet odio scelerisque interdum."]
}
//#endregion

export const AboutPage: React.FC<IProps> = (props) => {
    const [isSideNavOpen, setSideNavOpenStatus] = useState(false)
    return (
        <div id="about-page">
            <PageHeader openSideNav={() => setSideNavOpenStatus(true)} />
            <SideNav open={isSideNavOpen} close={() => { setSideNavOpenStatus(false) }} />
            <Container className="header-section">
                <Typography variant={'h1'} className="page-title">
                    About Diegesis
                </Typography>
                <Typography variant={'h2'} fontStyle={'italic'} className="page-title-sub">
                    Open source Bibles resources
                </Typography>
            </Container>
            <Container className="inner-content">
                <AboutContentSection
                    className="no-padding"
                    title={dataAboutContentSection1.title}
                    description={dataAboutContentSection1.description}
                    points={dataAboutContentSection1.points}
                />
                <AboutPictureSection caption="Image Caption" />
                <Typography variant="h1" textTransform={'none'} className="diegesis-quote">
                    “Diegesis is a place to find Bibles and related resources, in a variety of formats, released under open licences.”
                </Typography>
                <AboutContentSection
                    className="no-padding"
                    title={dataAboutContentSection1.title}
                    description={dataAboutContentSection1.description}
                    points={dataAboutContentSection1.points}
                />
            </Container>
            <PageFooter />
        </div>
    )
}
export default AboutPage