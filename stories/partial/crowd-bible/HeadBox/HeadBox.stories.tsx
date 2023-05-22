import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeProvider } from '../../../../packages/ui-kit/src';
import { buildDocs } from '../../../common';
import { StoryPaper } from '../../../StoryPaper';

import {
  HeadBox,
  LanguageDto,
} from '../../../../packages/ui-kit/src/crowd-bible';

import { Input } from '../../../../packages/ui-kit/src/input';

export default {
  title: 'Partial/Crowd Bible/HeadBox',
  component: HeadBox,
  decorators: [
    (Story) => (
      <ThemeProvider>
        <StoryPaper>
          <Story />
        </StoryPaper>
      </ThemeProvider>
    ),
  ],
} as ComponentMeta<typeof HeadBox>;

const Template: ComponentStory<typeof HeadBox> = (args) => (
  <HeadBox {...args} />
);

const languages = [
  { id: '1', name: 'English' },
  { id: '2', name: 'Spanish' },
  { id: '3', name: 'Danish' },
];

export const HeadBox0 = Template.bind({});
HeadBox0.storyName = 'Combine';
HeadBox0.args = {
  back: {
    action: () => alert('back'),
  },
  title: 'Applications',
  appTitle: 'App Name 1',
  search: {
    value: '',
    onChange: (str: string) => alert(str),
    placeHolder: 'Search Site Text',
  },
  languageSelector: {
    languageList: languages,
    source: null,
    target: null,
    onChangeSource: (lang: LanguageDto | null) =>
      alert(JSON.stringify(lang, null, 2)),
    onChangeTarget: (lang: LanguageDto | null) =>
      alert(JSON.stringify(lang, null, 2)),
  },
};
HeadBox0.parameters = buildDocs(
  <HeadBox
    back={{
      action: () => alert('back'),
    }}
    title="Applications"
    appTitle="App Name 1"
    search={{
      value: '',
      onChange: (str: string) => alert(str),
      placeHolder: 'Search Site Text',
    }}
    languageSelector={{
      languageList: languages,
      source: null,
      target: null,
      onChangeSource: (lang: LanguageDto | null) =>
        alert(JSON.stringify(lang, null, 2)),
      onChangeTarget: (lang: LanguageDto | null) =>
        alert(JSON.stringify(lang, null, 2)),
    }}
  />,
);

export const HeadBox1 = Template.bind({});
HeadBox1.storyName = 'Applications';
HeadBox1.args = {
  back: {
    action: () => alert('back'),
  },
  title: 'Applications',
  languageSelector: {
    languageList: languages,
    source: languages[0],
    target: languages[1],
    onChangeSource: (lang: LanguageDto | null) =>
      alert(JSON.stringify(lang, null, 2)),
    onChangeTarget: (lang: LanguageDto | null) =>
      alert(JSON.stringify(lang, null, 2)),
  },
};
HeadBox1.parameters = buildDocs(
  <HeadBox
    back={{
      action: () => alert('back'),
    }}
    title="Applications"
    languageSelector={{
      languageList: languages,
      source: languages[0],
      target: languages[1],
      onChangeSource: (lang: LanguageDto | null) =>
        alert(JSON.stringify(lang, null, 2)),
      onChangeTarget: (lang: LanguageDto | null) =>
        alert(JSON.stringify(lang, null, 2)),
    }}
  />,
);

export const HeadBox2 = Template.bind({});
HeadBox2.storyName = 'One Application Page';
HeadBox2.args = {
  back: {
    action: () => alert('back'),
  },
  title: 'App Name 1',
  search: {
    value: '',
    onChange: (str: string) => alert(str),
    placeHolder: 'Search Site Text',
  },
};
HeadBox2.parameters = buildDocs(
  <HeadBox
    back={{
      action: () => alert('back'),
    }}
    title="App Name 1"
    search={{
      value: '',
      onChange: (str: string) => alert(str),
      placeHolder: 'Search Site Text',
    }}
  />,
);

export const HeadBox3 = Template.bind({});
HeadBox3.storyName = 'Site Text Application List';
HeadBox3.args = {
  title: 'Add New Site Text',
  appTitle: 'App Name 1',
};
HeadBox3.parameters = buildDocs(
  <HeadBox title="Add New Site Txt" appTitle="App Name 1" />,
);

export const HeadBox4 = Template.bind({});
HeadBox4.storyName = 'One Site Text Page One Word';
HeadBox4.args = {
  title: 'Ipsum',
  back: {
    action: () => alert('back'),
  },
};
HeadBox4.parameters = buildDocs(
  <HeadBox
    title="Add New Site Txt"
    back={{
      action: () => alert('back'),
    }}
  />,
);

export const HeadBox5 = Template.bind({});
HeadBox5.storyName = 'Document List';
HeadBox5.args = {
  title: 'Documents',
  filter: {
    onClick: () => {
      alert('Clicked');
    },
  },
};
HeadBox5.parameters = buildDocs(
  <HeadBox
    title="Documents"
    filter={{
      onClick: () => {
        alert('Clicked');
      },
    }}
  />,
);

export const HeadBox6 = Template.bind({});
HeadBox6.storyName = 'Add New Translation';
HeadBox6.args = {
  back: {
    action: () => alert('back'),
  },
  title: 'Add New Translation',
  extraNode: <Input value="Ipsum" disabled />,
};
HeadBox6.parameters = buildDocs(
  <HeadBox
    back={{
      action: () => alert('back'),
    }}
    title="Add New Translation"
    languageSelector={{
      languageList: languages,
      source: languages[0],
      target: languages[1],
      onChangeSource: (lang: LanguageDto | null) =>
        alert(JSON.stringify(lang, null, 2)),
      onChangeTarget: (lang: LanguageDto | null) =>
        alert(JSON.stringify(lang, null, 2)),
    }}
    extraNode={<Input value="Ipsum" disabled />}
  />,
);
