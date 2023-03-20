import { Button } from "@mui/material"
import React from "react"
import { BsChevronLeft } from "react-icons/bs"
import { colors } from ".."

interface IProps {
    className?: string
}
export const BackButton: React.FC<IProps> = (props) => {
    return (
        <Button
            className={props.className || ''}
            color={'dark'}
            startIcon={<BsChevronLeft color={colors.green} />}
            sx={{
                textTransform: 'none',
                fontWeight: 700,
                fontSize: '1.2rem',
                textDecoration: 'underline',
                textUnderlineOffset: '0.2rem',
                textDecorationColor: colors.green,
                padding: 0
            }}>
            Back
        </Button>
    )
}