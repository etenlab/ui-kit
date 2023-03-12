import React from "react";

interface IProps {
    width?: number
    height?: number
    className?: string
    onClick?: React.MouseEventHandler
}
export function MenuIcon(props: IProps) {
    const { width = 49, height = 40, onClick, className } = props;
    return (
        <svg className={className} onClick={onClick} xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="1272 44 49 40"><g data-name="Group 98"><path d="M1321 44h-49" strokeLinejoin="round" strokeLinecap="round" strokeWidth="4" stroke="#79c7b2" fill="transparent" data-name="Line 28" /><path d="M1321 84h-49" strokeLinejoin="round" strokeLinecap="round" strokeWidth="4" stroke="#79c7b2" fill="transparent" data-name="Line 29" /><path d="M1321 64h-49" strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" stroke="#79c7b2" fill="transparent" data-name="Line 30" /></g></svg>
    )
}
export default MenuIcon;