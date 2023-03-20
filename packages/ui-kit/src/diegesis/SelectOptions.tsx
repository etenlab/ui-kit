import { MenuItem, Select } from "@mui/material";
import React from "react";
import { colors } from "..";

interface IProps {
    label?: string
    value?: string
    options: { id: string, title: string }[]
    onChange: (value: string) => void
}

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

export const SelectOptions: React.FC<IProps> = (props) => {
    const { options = [], label = '', value, onChange } = props;

    return (
        <Select
            value={value || label}
            onChange={(e) => {
                if (onChange) onChange(e.target.value)
            }}
            MenuProps={MenuProps}
            sx={{
                '& .MuiOutlinedInput-input': {
                    backgroundColor: colors.white
                },
                '& .MuiSelect-select.Mui-focusVisible': {
                    borderColor: colors.green
                },
                '& .MuiOutlinedInput-notchedOutline': {
                    borderRadius: '0px'
                },
                '& .MuiSelect-select': {
                    fontWeight: 500,
                    // fontSize: '20px',
                    fontFamily: 'helvetica'
                },
                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                    borderColor: colors.green,
                },
                '&.Mui-focusVisible .MuiOutlinedInput-notchedOutline': {
                    borderColor: colors.green,
                },
            }}
        >
            <MenuItem value={label} disabled>{label}</MenuItem>
            {options.map((option) => (
                <MenuItem
                    key={option.id}
                    value={option.id}
                >
                    {option.title}
                </MenuItem>
            ))}
        </Select>
    )
}

export default SelectOptions