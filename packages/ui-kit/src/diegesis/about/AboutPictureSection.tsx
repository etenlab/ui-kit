import { Container, Typography } from "@mui/material"
import React from "react"

interface IProps {
    className?: string
    caption?: string
    imageUrl?: string
}
export function AboutPictureSection(props: IProps) {
    const { caption, imageUrl } = props;
    return (
        <Container className={`about-picture-section ${props.className}`}>
            <div className="inner-container">
                <Typography variant={'h2'}>
                    {caption}
                </Typography>
                <div className="img-box" style={{ backgroundImage: `url(${imageUrl})` }}>
                </div>
            </div>
        </Container>
    )
}
export default AboutPictureSection