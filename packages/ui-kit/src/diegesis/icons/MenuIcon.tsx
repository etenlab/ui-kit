import React from "react";

interface IProps {
    width?: number
    height?: number
}
export function MenuIcon(props: IProps) {
    const { width = 49, height = 40 } = props;
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="1272 44 49 40"><g data-name="Group 98"><path d="M1321 44h-49" stroke-linejoin="round" stroke-linecap="round" stroke-width="4" stroke="#79c7b2" fill="transparent" data-name="Line 28" /><path d="M1321 84h-49" stroke-linejoin="round" stroke-linecap="round" stroke-width="4" stroke="#79c7b2" fill="transparent" data-name="Line 29" /><path d="M1321 64h-49" stroke-linejoin="round" stroke-linecap="round" stroke-width="2" stroke="#79c7b2" fill="transparent" data-name="Line 30" /></g></svg>
    )
}
export default MenuIcon;