
import { CiSearch } from '@components/icons';
import { List, ListItemButton, Paper, Grid, Typography, ListSubheader, Stack, IconButton, Divider } from '@mui/material';
import React, { useState, ChangeEventHandler, ReactNode } from 'react';
import { useColorModeContext } from '../../ThemeProvider';
import { SearchInput } from '@components/input';

export type CardsMenuItemType = {
  value: string;
  label: ReactNode;
  startIcon?: ReactNode;
  description?: string,
  endIcon?: ReactNode;
  color?: string;
  disabled?: boolean;
};

type CardsMenuProps = {
  label: string;
  toolBtnGroup?: ReactNode;
  withUnderline?: boolean;
  onClick(value: string): void;
  search?: {
    value: string;
    onChange(str: string): void;
    placeHolder: string;
  };
  items: CardsMenuItemType[];
};

type CardsMenutemProps = {
  item: CardsMenuItemType;
  withUnderline?: boolean;
  onClick(): void;
};

function CardsMenutem({ item, withUnderline, onClick }: CardsMenutemProps) {
  // const { getColor } = useColorModeContext();

  const { label, description, startIcon, disabled } = item;

  // const startIconCom = startIcon ? (
  //   <ListItemIcon sx={{ minWdith: '45px' }}>{startIcon}</ListItemIcon>
  // ) : null;

  // const endIconCom = endIcon ? endIcon : null;

  const underlineCom = withUnderline ? (
    <Divider sx={{ margin: '0 20px' }} />
  ) : null;

  // const itemColor = color ? color : getColor('dark');

  return (
    <>
      <ListItemButton
          onClick={onClick}
          disabled={disabled}
        >
          <Paper
            sx={{
              p: 4,
              margin: 'auto',
              border: '1px solid #C2CBD7',
              flexGrow: 1,
              backgroundColor: '#F3F6F9',
            }}
          >
            <Grid container spacing={2}>
              <Grid item>
                {startIcon}
                {/* <DiFileText
                  color="blue"
                  sx={{
                    width: 30,
                    height: 30,
                    color: '#1F77DF',
                  }}
                /> */}
              </Grid>
              <Grid item xs={12} sm container>
                <Grid item xs container direction="column" spacing={2}>
                  <Grid item xs>
                    <Typography
                      fontSize="18px"
                      gutterBottom
                      variant="subtitle1"
                      component="div"
                    >
                      {label}
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                      {description}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </ListItemButton>
      {underlineCom}
    </>
  );
}


export function CardsMenu({
  label,
  search,
  toolBtnGroup,
  withUnderline = false,
  items,
  onClick,
}: CardsMenuProps) {
  const { getColor } = useColorModeContext();
  // const [selectedIndex, setSelectedIndex] = useState(1);

  const [isShownSearchInput, setIsShownSearchInput] = useState<boolean>(false);

  const handleToggleSearchInput = () => {
    setIsShownSearchInput((shown) => !shown);
  };

  const handleChangeSearchInput: ChangeEventHandler<HTMLInputElement> = (
    event,
  ) => {
    search?.onChange(event.target.value);
  };

  const searchBtnCom = search ? (
    <IconButton onClick={handleToggleSearchInput}>
      <CiSearch />
    </IconButton>
  ) : null;

  const searchInputCom =
    search && isShownSearchInput ? (
      <SearchInput
        label={search.placeHolder}
        value={search.value}
        onChange={handleChangeSearchInput}
        fullWidth
        sx={{ padding: '20px 0' }}
      />
    ) : null;

  const toolBtnComs =
    search || toolBtnGroup ? (
      <Stack
        direction="row"
        gap="16px"
        justifyContent="flex-start"
        alignItems="center"
      >
        {searchBtnCom}
        {toolBtnGroup ? toolBtnGroup : null}
      </Stack>
    ) : null;

  return (
    <List
    component="nav"
      sx={{ padding: '0' }}
      subheader={
        <ListSubheader
          component="div"
          sx={{ padding: '6px 20px', backgroundColor: getColor('white') }}
        >
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography variant="overline" sx={{ opacity: 0.5 }}>
              {label}
            </Typography>
            {toolBtnComs}
          </Stack>
          {searchInputCom}
        </ListSubheader>
      }
      >
        {items.map((item) => {
        return (
          <CardsMenutem
            item={item}
            key={item.value}
            onClick={() => onClick(item.value)}
            withUnderline={withUnderline}
          />
        //   <ListItemButton
        //   selected={selectedIndex === 0}
        //   onClick={(event) => handleListItemClick(event, 0)}
        // >
        //   <Paper
        //     sx={{
        //       p: 4,
        //       margin: 'auto',
        //       border: '1px solid #C2CBD7',
        //       flexGrow: 1,
        //       backgroundColor: '#F3F6F9',
        //     }}
        //   >
        //     <Grid container spacing={2}>
        //       <Grid item>
        //         <DiFileText
        //           color="blue"
        //           sx={{
        //             width: 30,
        //             height: 30,
        //             color: '#1F77DF',
        //           }}
        //         />
        //       </Grid>
        //       <Grid item xs={12} sm container>
        //         <Grid item xs container direction="column" spacing={2}>
        //           <Grid item xs>
        //             <Typography
        //               fontSize="18px"
        //               gutterBottom
        //               variant="subtitle1"
        //               component="div"
        //             >
        //               Documents
        //             </Typography>
        //             <Typography variant="body2" gutterBottom>
        //               Upload a document to use in other crowd sourcing tools
        //             </Typography>
        //           </Grid>
        //         </Grid>
        //       </Grid>
        //     </Grid>
        //   </Paper>
        // </ListItemButton>
        );
      })}
      </List>
  );
  
}