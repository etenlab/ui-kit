import { Tab, Tabs, styled } from "@mui/material";
import React from "react";
import { colors } from "..";

interface StyledTabsProps {
    children?: React.ReactNode;
    value: number;
    onClick: (event: React.SyntheticEvent) => void;
    onChange?: (event: React.SyntheticEvent, newValue: number) => void;
    className?: string;
}

export const CustomTabs = styled((props: StyledTabsProps) => (
    <Tabs
        {...props}
        // TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
    />
))({
    '& .MuiTabs-flexContainer': {
        padding: '0px 1rem',
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
        margin: '0px 1rem',
        height: '1px'
    },
});

interface StyledTabProps {
    label: string;
    value: number;
}

export const CustomTab = styled((props: StyledTabProps) => (
    <Tab {...props} wrapped={true} />
))(({ theme }) => ({
    textTransform: 'none',
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.pxToRem(20),
    textDecoration: 'underline',
    textUnderlineOffset: '0.5rem',
    textDecorationColor: colors.green,
    padding: '1rem',
    paddingBottom: '2rem',
    color: colors.dark,
    '&.Mui-selected': {
        backgroundColor: colors["light-gray"],
        color: colors.dark,
    },
}));