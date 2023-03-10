import { Container } from "@mui/system";
import React from "react";
import PageFooter from "../PageFooter";
import PageHeader from "../PageHeader";

interface IProps {
    
}
export function HomePage(props: IProps) {
    return (
        <Container>
            <PageHeader></PageHeader>
            <PageFooter></PageFooter>
        </Container>
    )
}
export default HomePage;