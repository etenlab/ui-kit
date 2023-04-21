import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import {
  colors,
  designColors,
  ThemeProvider,
} from '../../../packages/ui-kit/src/ThemeProvider';

import { Paper, Typography, Stack, Grid } from '@mui/material';

import { StoryPaper } from '../../StoryPaper';

export default {
  title: 'Primary/colors',
  component: Paper,
  decorators: [
    (Story) => (
      <ThemeProvider>
        <StoryPaper>
          <Story />
        </StoryPaper>
      </ThemeProvider>
    ),
  ],
} as ComponentMeta<typeof Paper>;

function ColorBox({ color }: { color: string }) {
  return (
    <Paper
      elevation={5}
      sx={{
        width: '50px',
        height: '50px',
        backgroundColor: color,
        borderRadius: '10px',
      }}
    />
  );
}

function DesignColorItem({ color, title }: { color: string; title: string }) {
  return (
    <Stack direction="row" justifyContent="flex-start" alignItems="center">
      <ColorBox color={color} />
      <Stack
        justifyContent="center"
        alignItems="center"
        sx={{ marginLeft: '5px' }}
      >
        <Typography variant="subtitle1" color="text.dark">
          {title}
        </Typography>
        <Typography variant="body2" color="text.dark">
          {color}
        </Typography>
      </Stack>
    </Stack>
  );
}

function PairColorBox({
  dark,
  light,
  title,
}: {
  dark: string;
  light: string;
  title: string;
}) {
  return (
    <Paper variant="outlined" sx={{ background: designColors.disable }}>
      <Typography
        variant="subtitle1"
        color="text.dark"
        sx={{ padding: '5px', textAlign: 'center' }}
      >
        {title}
      </Typography>
      <Paper
        elevation={0}
        sx={{
          background: designColors.white,
          padding: '20px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
        }}
      >
        <Typography variant="body2" color="text.dark">
          {light}
        </Typography>
        <ColorBox color={light} />
      </Paper>
      <Paper
        elevation={0}
        sx={{
          background: designColors['dark/bg'],
          padding: '20px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
        }}
      >
        <Typography variant="body2" color="text.white">
          {dark}
        </Typography>
        <ColorBox color={dark} />
      </Paper>
    </Paper>
  );
}

const Template: ComponentStory<typeof Paper> = () => {
  const designColorNames = Object.keys(designColors);

  const colorNames = Object.keys(colors);

  return (
    <Stack
      gap={2}
      alignItems="center"
      justifyContent="center"
      sx={{ padding: '20px' }}
    >
      <Typography variant="h2">Design Colors</Typography>
      <Grid container spacing={2}>
        {designColorNames.map((key) => (
          <Grid
            item
            xs={3}
            key={key}
            justifyContent="flex-start"
            alignItems="center"
          >
            <DesignColorItem
              color={designColors[key as keyof typeof designColors]}
              title={key}
            />
          </Grid>
        ))}
      </Grid>

      <Typography variant="h2">Light vs Dark Mode</Typography>
      <Grid container spacing={2}>
        {colorNames.map((key) => (
          <Grid
            item
            xs={3}
            key={key}
            justifyContent="flex-start"
            alignItems="center"
          >
            <PairColorBox
              light={colors[key as keyof typeof colors].light}
              dark={colors[key as keyof typeof colors].dark}
              title={key}
            />
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
};

export const Primary = Template.bind({});
