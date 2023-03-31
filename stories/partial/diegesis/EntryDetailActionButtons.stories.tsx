import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeProvider } from '../../../packages/ui-kit/src';
import ActionButtons from '../../../packages/ui-kit/src/diegesis/entry-details/ActionButtons';
import { buildDocs } from '../../common';

export default {
  title: 'Partial/Diegesis/Entries/Entry Detail',
  component: ActionButtons,
  decorators: [
    (Story) => (
      <div>
        <ThemeProvider>
          <Story />
        </ThemeProvider>
      </div>
    ),
  ],
} as ComponentMeta<typeof ActionButtons>;

const ActionButtonsTemplate: ComponentStory<typeof ActionButtons> = (args) => (
  <ActionButtons {...args} />
);
export const actionButtonsCode = ActionButtonsTemplate.bind({});
actionButtonsCode.args = {};
actionButtonsCode.parameters = buildDocs(`
type Props = {}
export default function ActionButtons(props: Props) {
    return (
        <Stack direction={'row'} alignItems={'center'} justifyContent={'flex-end'} className="full-width action-buttons">
            <Button
                sx={{ fontWeight: 700, fontSize: '1.3rem', textTransform: 'none', borderRadius: '2rem', padding: '0.8rem', minWidth: '12rem', marginRight: '1rem' }}
                startIcon={<AiOutlineFileText />}
                variant={'contained'}
                color={'green'}
                size={'large'}
            >
                View
            </Button>
            <Button
                sx={{ fontWeight: 700, fontSize: '1.3rem', textTransform: 'none', borderRadius: '2rem', padding: '0.8rem', minWidth: '12rem' }}
                startIcon={<AiOutlineDownload />}
                variant={'contained'}
                color={'green'}
                size={'large'}
            >
                Download
            </Button>
        </Stack>
    )
}
`);

export const actionButtonsUsage = ActionButtonsTemplate.bind({});
actionButtonsUsage.args = {};
actionButtonsUsage.parameters = buildDocs(<ActionButtons />);
