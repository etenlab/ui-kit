import { Typography, styled } from "@mui/material";

const PageTitleTypo = styled(Typography)(({ theme }) => ({
    fontSize: '2.5rem',
    lineHeight: '2.8rem',
    fontWeight: 400,
    fontFamily: 'Noto Serif Display',
    color: theme.palette.text['darker-gray'],
    [theme.breakpoints.down('sm')]: {
        fontSize: '2rem',
    }
}))

export default PageTitleTypo;