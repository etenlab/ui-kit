import React, { useState } from "react";
import PageFooter from "../PageFooter";
import PageHeader from "../PageHeader";
import SideNav from "../SideNav";

interface IProps {

}
export function HomePage(props: IProps) {
    const [isSideNavOpen, setSideNavOpenStatus] = useState(false)
    return (
        <div id="home-page">
            <PageHeader openSideNav={() => setSideNavOpenStatus(true)}></PageHeader>
            <SideNav open={isSideNavOpen} close={() => { setSideNavOpenStatus(false) }} />
            <div>

            </div>
            <PageFooter></PageFooter>
        </div>
    )
}
export default HomePage;