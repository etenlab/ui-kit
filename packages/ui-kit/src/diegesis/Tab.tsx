import { Tab, Tabs, styled } from "@mui/material";
import React from "react";
import { colors } from "..";

interface StyledTabsProps {
    children?: React.ReactNode;
    value: number;
    onChange: (event: React.SyntheticEvent, newValue: number) => void;
}

export const CustomTabs = styled((props: StyledTabsProps) => (
    <Tabs
        {...props}
        TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
    />
))({
    '& .MuiTabs-flexContainer': {
        padding: '0px 15px',
    },
    '& .MuiTabs-indicator': {
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: 'transparent',
        top: '70%'
    },
    '& .MuiTabs-indicatorSpan': {
        width: '100%',
        backgroundColor: colors.green,
        margin: '0px 15px',
        height: '1px'
    },
});

interface StyledTabProps {
    label: string;
    value: number
}

export const CustomTab = styled((props: StyledTabProps) => (
    <Tab {...props} />
))(({ theme }) => ({
    textTransform: 'none',
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.pxToRem(20),
    '&.Mui-selected': {
        backgroundColor: colors["light-gray"],
        color: colors.dark,
        fontSize: '20px',
        padding: '15px',
        paddingBottom: '25px'
    },
}));