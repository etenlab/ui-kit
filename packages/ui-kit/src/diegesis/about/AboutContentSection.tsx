import { Container, List, ListItem, ListItemIcon, ListItemText, Typography } from "@mui/material"
import React from "react"
import { BsDot } from "react-icons/bs"

interface IProps {
    className?: string
    title?: string
    description?: string
    points?: string[]
}
export function AboutContentSection(props: IProps){
    const { title, description, points = [] } = props;
    return (
        <Container className={`about-content-section ${props.className}`}>
            <Typography variant={'h2'} fontFamily={'Noto Serif Display'}>
                {title}
            </Typography>
            <Typography variant={'body1'} fontFamily={'Noto Serif Display'}>
                {description}
            </Typography>
            <List>
                {
                    points.map((point, idx) =>
                        <ListItem key={idx} disablePadding={true} dense={false}>
                            <ListItemIcon>
                                <BsDot size={34} color={'#60D0B2'} />
                            </ListItemIcon>
                            <ListItemText primary={point} />
                        </ListItem>
                    )
                }
            </List>
        </Container>
    )
}
export default AboutContentSection