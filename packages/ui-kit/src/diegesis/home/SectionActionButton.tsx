import React from "react";
import { Button, ButtonProps, styled } from "@mui/material";

interface IProps extends ButtonProps {
    label: string
    className?: string
}
const StyledButton = styled(Button)({
    color: '#fff',
    minWidth: '312px',
    minHeight: '70px',
    paddingLeft: '30px',
    paddingRight: '30px',
    backgroundColor: 'success',
    fontSize: '21px',
    textTransform: 'none',
    borderRadius: '40px'
})
export default function HomeSectionActionButton(props: IProps) {
    const { label, className, color = 'green' } = props;
    
    return (
        <StyledButton className={className} size={'large'} variant={'contained'} color={color} {...props}>
            {label}
        </StyledButton>
    )
}