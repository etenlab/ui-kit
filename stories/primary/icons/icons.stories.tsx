import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import {
  VisibilityOffOutlinedIcon,
  VisibilityOutlinedIcon,
  ArrowForwardOutlinedIcon,
  ArrowBackOutlinedIcon,
  NotificationsNoneOutlinedIcon,
  ExpandLessOutlinedIcon,
  ExpandMoreOutlinedIcon,
  SearchOutlinedIcon,
  TitleIcon,
  VideoCallOutlinedIcon,
  CloseOutlinedIcon,
  AddOutlinedIcon,
  CheckOutlinedIcon,
  AddCommentOutlinedIcon,
  PlayArrowIcon,
  AccessTimeIcon,
  FlipCameraIosIcon,
  SentimentSatisfiedAltIcon,
  DeleteOutlineOutlinedIcon,
  PersonIcon,
  AttachFileIcon,
  KeyboardReturnOutlinedIcon,
  FilterAltOutlinedIcon,
  PauseOutlinedIcon,
  ScienceOutlinedIcon,
  ViewStreamOutlinedIcon,
  FeedOutlinedIcon,
  KeyboardVoiceOutlinedIcon,
  ModeCommentOutlinedIcon,
  BorderColorOutlinedIcon,
  ViewInArOutlinedIcon,
  MenuIcon,
} from '../../../packages/ui-kit/src/icons';

function Div({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        width: '100%',
        margin: '50px auto',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '20px',
      }}
    >
      {children}
    </div>
  );
}

function TitleWithIcon({
  title,
  icon,
}: {
  title: string;
  icon: React.ReactNode;
}) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        border: '1px solid #aaa',
        borderRadius: 10,
        textAlign: 'center',
        padding: 10,
      }}
    >
      <div
        style={{
          margin: 'auto',
          padding: '5px',
          border: '1px solid #aaa',
          borderRadius: '5px',
        }}
      >
        {icon}
      </div>
      <div>Component name:</div>
      <div>
        <h6 style={{ margin: 0 }}>{title}</h6>
      </div>
    </div>
  );
}

export default {
  title: 'Primary/Icons',
  component: Div,
  decorators: [
    Story => (
      <div
        style={{
          margin: 'auto',
          background: '#eee',
          width: '500px',
        }}
      >
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof Div>;

const Template: ComponentStory<typeof Div> = args => {
  return (
    <Div>
      <TitleWithIcon
        title="VisibilityOffOutlinedIcon"
        icon={<VisibilityOffOutlinedIcon />}
      />

      <TitleWithIcon
        title="VisibilityOutlinedIcon"
        icon={<VisibilityOutlinedIcon />}
      />

      <TitleWithIcon
        title="ArrowForwardOutlinedIcon"
        icon={<ArrowForwardOutlinedIcon />}
      />

      <TitleWithIcon
        title="ArrowBackOutlinedIcon"
        icon={<ArrowBackOutlinedIcon />}
      />

      <TitleWithIcon
        title="NotificationsNoneOutlinedIcon"
        icon={<NotificationsNoneOutlinedIcon />}
      />

      <TitleWithIcon
        title="ExpandLessOutlinedIcon"
        icon={<ExpandLessOutlinedIcon />}
      />

      <TitleWithIcon
        title="ExpandMoreOutlinedIcon"
        icon={<ExpandMoreOutlinedIcon />}
      />

      <TitleWithIcon title="SearchOutlinedIcon" icon={<SearchOutlinedIcon />} />

      <TitleWithIcon title="TitleIcon" icon={<TitleIcon />} />

      <TitleWithIcon
        title="VideoCallOutlinedIcon"
        icon={<VideoCallOutlinedIcon />}
      />

      <TitleWithIcon title="CloseOutlinedIcon" icon={<CloseOutlinedIcon />} />

      <TitleWithIcon title="AddOutlinedIcon" icon={<AddOutlinedIcon />} />

      <TitleWithIcon title="CheckOutlinedIcon" icon={<CheckOutlinedIcon />} />

      <TitleWithIcon
        title="AddCommentOutlinedIcon"
        icon={<AddCommentOutlinedIcon />}
      />

      <TitleWithIcon title="PlayArrowIcon" icon={<PlayArrowIcon />} />

      <TitleWithIcon title="AccessTimeIcon" icon={<AccessTimeIcon />} />

      <TitleWithIcon title="FlipCameraIosIcon" icon={<FlipCameraIosIcon />} />

      <TitleWithIcon
        title="SentimentSatisfiedAltIcon"
        icon={<SentimentSatisfiedAltIcon />}
      />

      <TitleWithIcon
        title="DeleteOutlineOutlinedIcon"
        icon={<DeleteOutlineOutlinedIcon />}
      />

      <TitleWithIcon title="PersonIcon" icon={<PersonIcon />} />

      <TitleWithIcon title="AttachFileIcon" icon={<AttachFileIcon />} />

      <TitleWithIcon
        title="KeyboardReturnOutlinedIcon"
        icon={<KeyboardReturnOutlinedIcon />}
      />

      <TitleWithIcon
        title="FilterAltOutlinedIcon"
        icon={<FilterAltOutlinedIcon />}
      />

      <TitleWithIcon title="PauseOutlinedIcon" icon={<PauseOutlinedIcon />} />

      <TitleWithIcon
        title="ScienceOutlinedIcon"
        icon={<ScienceOutlinedIcon />}
      />

      <TitleWithIcon
        title="ViewStreamOutlinedIcon"
        icon={<ViewStreamOutlinedIcon />}
      />

      <TitleWithIcon title="FeedOutlinedIcon" icon={<FeedOutlinedIcon />} />

      <TitleWithIcon
        title="KeyboardVoiceOutlinedIcon"
        icon={<KeyboardVoiceOutlinedIcon />}
      />

      <TitleWithIcon
        title="ModeCommentOutlinedIcon"
        icon={<ModeCommentOutlinedIcon />}
      />

      <TitleWithIcon
        title="BorderColorOutlinedIcon"
        icon={<BorderColorOutlinedIcon />}
      />

      <TitleWithIcon
        title="ViewInArOutlinedIcon"
        icon={<ViewInArOutlinedIcon />}
      />

      <TitleWithIcon title="MenuIcon" icon={<MenuIcon />} />
    </Div>
  );
};

export const Primary = Template.bind({});
