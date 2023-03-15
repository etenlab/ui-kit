import { Button, InputAdornment, Stack, TextField, styled } from "@mui/material";
import React from "react";
import { BiSearch } from "react-icons/bi";
import { colors } from "..";

interface IProps {
    className?: string
    placeholder?: string
}

//#region styled components
const CustomTextField = styled(TextField)({
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: colors.green,
            borderRadius: '0px',
        },
        '& input': {
            fontSize: '20px',
            color: colors.dark + '!important',
            // paddingTop: '20px',
            // paddingBottom: '20px'
        },
        '&:hover fieldset': {
            borderColor: colors.green,
        },
        '&.Mui-focused fieldset': {
            borderColor: colors.green,
        },
    },
});
//#endregion

export const SearchBox: React.FC<IProps> = (props) => {
    const { placeholder, className } = props;
    return (
        <Stack direction={'row'} className={className}>
            <CustomTextField
                fullWidth
                placeholder={placeholder || 'Search...'}
                id="search-box"
                aria-describedby=""
                sx={{ borderCollapse: 'green' }}
                InputProps={{
                    'aria-label': 'weight',
                    startAdornment: <InputAdornment position="start">
                        <BiSearch color={'black'} size={24} />
                    </InputAdornment>,
                }}
            />
            <Button style={{ borderRadius: '0px', border: '5px', paddingLeft: '25px', paddingRight: '25px', textTransform: 'none', fontSize: '20px' }} size={'medium'} color={'green'} variant={'contained'}>
                Search
            </Button>
        </Stack>
    )
}
export default SearchBox;