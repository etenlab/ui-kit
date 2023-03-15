import { Stack, Typography } from '@mui/material';
import { Container } from '@mui/system';
import React from 'react';
import AppLogo from './AppLogo';
import './Page.css';

interface IProps {}
export function PageFooter(props: IProps) {
  return (
    <div className={'page-footer'}>
      <Container>
        <Stack direction={'column'} alignItems={'start'}>
          <Stack direction={'row'} className="full-width" alignItems={'center'}>
            <AppLogo varient={'light'} className={'app-logo'} />
          </Stack>
          <Stack
            direction={'row'}
            className="full-width mt-2 footer-content"
            alignItems={'center'}
            justifyContent={'space-between'}
          >
            <Typography variant="body1" className="">
              Diegesis.Bible is a project by MVH Solutions that uses the
              Proskomma Scripture Runtime Engine.
            </Typography>
            <Typography variant="body1" className="">
              © MVH Solutions {new Date().getFullYear()}
            </Typography>
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}
export default PageFooter;
