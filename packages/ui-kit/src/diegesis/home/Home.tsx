import React, { useState } from "react";
import PageFooter from "../PageFooter";
import PageHeader from "../PageHeader";
import SideNav from "../SideNav";
import LandingSection from "./LandingSection";
import StatSection from "./StatSection";

interface IProps {

}
export function HomePage(props: IProps) {
    const [isSideNavOpen, setSideNavOpenStatus] = useState(false)
    return (
        <div id="home-page">
            <PageHeader openSideNav={() => setSideNavOpenStatus(true)}></PageHeader>
            <SideNav open={isSideNavOpen} close={() => { setSideNavOpenStatus(false) }} />
            <div>
                <LandingSection />
                <StatSection />
            </div>
            <PageFooter></PageFooter>
        </div>
    )
}
export default HomePage;