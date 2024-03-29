import { Stack, Typography, styled } from '@mui/material';
import { Container } from '@mui/system';
import React from 'react';
import AppLogo from './app-logo/AppLogo';

export type PageFooterProps = {
  footerText?: string;
  brandName?: string;
  year?: number;
  markdownContent?: string;
};
export const MOCK_PAGE_FOOTER_PROPS: PageFooterProps = {
  footerText: `Diegesis.Bible is a project by MVH Solutions that uses the
  Proskomma Scripture Runtime Engine.`,
  brandName: `MVH Solutions`,
  year: new Date().getFullYear(),
  markdownContent: '',
};

export function PageFooter(props: PageFooterProps) {
  if (props.markdownContent) {
    return (
      <FooterWrapper>
        <Container>{props.markdownContent}</Container>
      </FooterWrapper>
    );
  } else
    return (
      <FooterWrapper>
        <Container>
          <Stack direction={'column'} alignItems={'start'}>
            <Stack
              direction={'row'}
              className="full-width"
              alignItems={'center'}
            >
              <StyledAppLogo varient={'light'} />
            </Stack>
            <StyledContentWrapper>
              <StyledTypoBody1 variant="body1">
                {props.footerText}
              </StyledTypoBody1>
              <StyledTypoBody1 variant="body1">
                © {props.brandName} {props.year}
              </StyledTypoBody1>
            </StyledContentWrapper>
          </Stack>
        </Container>
      </FooterWrapper>
    );
}

const FooterWrapper = styled('div')(({ theme }) => ({
  padding: '3rem 0px',
  minHeight: '17rem',
  backgroundColor: theme.palette.background['darker-gray'],
}));
const StyledAppLogo = styled(AppLogo)(({ theme }) => ({
  marginTop: '5px',
  [theme.breakpoints.down('sm')]: {
    width: 'auto',
    height: '2.1rem',
  },
}));
const StyledContentWrapper = styled(Stack)(({ theme }) => ({
  marginTop: '1.2rem',
  flexDirection: 'row',
  alignItems: 'center',
  width: '100%',
  justifyContent: 'space-between',
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginTop: '0rem',
  },
}));
const StyledTypoBody1 = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.white,
  fontFamily: 'Noto Serif Display',
  fontSize: '1.1rem',
  lineHeight: '1.5rem',
  fontWeight: 400,
  [theme.breakpoints.down('sm')]: {
    marginTop: '25px',
  },
}));

export default PageFooter;
