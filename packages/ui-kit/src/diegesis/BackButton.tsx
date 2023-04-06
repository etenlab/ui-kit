import { Button } from "@mui/material"
import React from "react"
import { BsChevronLeft } from "react-icons/bs"
import { useColorModeContext } from ".."

interface IProps {
    className?: string
}
export const BackButton: React.FC<IProps> = (props) => {
    const colorMode = useColorModeContext()
    return (
        <Button
            className={props.className || ''}
            color={'dark'}
            startIcon={<BsChevronLeft color={colorMode.getColor('turquoise-light')} />}
            sx={{
                textTransform: 'none',
                fontWeight: 300,
                fontSize: '1.2rem',
                textDecoration: 'underline',
                textUnderlineOffset: '0.2rem',
                textDecorationColor: colorMode.getColor('turquoise-light'),
                fontFamily: 'Noto Serif',
                padding: 0,
                ':hover': {
                    textDecoration: 'underline'
                }
            }}>
            Back
        </Button>
    )
}