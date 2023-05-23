import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import {
  CiRead,
  CiDark,
  CiLight,
  CiPause1,
  CiUnread,
  CiSearch,
  CiFaceSmile,
  CiCircleRemove,
  BiLeftArrowAlt,
  BiRightArrowAlt,
  BiMessageRounded,
  BiChevronDown,
  BiChevronUp,
  BiDownload,
  BiTrashAlt,
  BiFile,
  BiDislike,
  BiLike,
  BiCommentAdd,
  BiUser,
  BiCheckCircle,
  BiDotsHorizontalRounded,
  BiShare,
  BiPencil,
  BiImages,
  BiChevronsDown,
  BiVolumeFull,
  BsFillPlayFill,
  BsFillRecordFill,
  BsClock,
  FiBell,
  FiCodesandbox,
  FiCheck,
  FiFilter,
  FiMic,
  FiPlus,
  FiX,
  FiPause,
  FiMenu,
  FiColumns,
  FiCreditCard,
  FiEdit,
  FiPaperclip,
  FiCornerDownLeft,
  TbLetterT,
  TbCameraRotate,
  TbVideoPlus,
  TbLayoutColumns,
  TbLayoutRows,
  TbArrowBack,
  DiViewer,
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
    (Story) => (
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

const Template: ComponentStory<typeof Div> = () => {
  return (
    <>
      <Div>
        <TitleWithIcon title="CiUnread" icon={<CiUnread />} />
        <TitleWithIcon title="CiRead" icon={<CiRead />} />
        <TitleWithIcon title="CiPause1" icon={<CiPause1 />} />
        <TitleWithIcon title="CiDark" icon={<CiDark />} />
        <TitleWithIcon title="CiLight" icon={<CiLight />} />
        <TitleWithIcon title="CiSearch" icon={<CiSearch />} />
        <TitleWithIcon title="CiFaceSmile" icon={<CiFaceSmile />} />
        <TitleWithIcon title="CiCircleRemove" icon={<CiCircleRemove />} />
        <TitleWithIcon title="BiLeftArrowAlt" icon={<BiLeftArrowAlt />} />
        <TitleWithIcon title="BiRightArrowAlt" icon={<BiRightArrowAlt />} />
        <TitleWithIcon title="BiMessageRounded" icon={<BiMessageRounded />} />
        <TitleWithIcon title="BiChevronDown" icon={<BiChevronDown />} />
        <TitleWithIcon title="BiChevronUp" icon={<BiChevronUp />} />
        <TitleWithIcon title="BiTrashAlt" icon={<BiTrashAlt />} />
        <TitleWithIcon title="BiFile" icon={<BiFile />} />
        <TitleWithIcon title="BiDislike" icon={<BiDislike />} />
        <TitleWithIcon title="BiLike" icon={<BiLike />} />
        <TitleWithIcon title="BiCommentAdd" icon={<BiCommentAdd />} />
        <TitleWithIcon title="BiUser" icon={<BiUser />} />
        <TitleWithIcon title="BiCheckCircle" icon={<BiCheckCircle />} />
        <TitleWithIcon title="BiDownload" icon={<BiDownload />} />
        <TitleWithIcon title="BiChevronsDown" icon={<BiChevronsDown />} />
        <TitleWithIcon
          title="BiDotsHorizontalRounded"
          icon={<BiDotsHorizontalRounded />}
        />
        <TitleWithIcon title="BiShare" icon={<BiShare />} />
        <TitleWithIcon title="BiPencil" icon={<BiPencil />} />
        <TitleWithIcon title="BiImages" icon={<BiImages />} />
        <TitleWithIcon title="BiVolumeFull" icon={<BiVolumeFull />} />
        <TitleWithIcon title="BsFillPlayFill" icon={<BsFillPlayFill />} />
        <TitleWithIcon title="BsFillRecordFill" icon={<BsFillRecordFill />} />
        <TitleWithIcon title="BsClock" icon={<BsClock />} />
        <TitleWithIcon title="FiBell" icon={<FiBell />} />
        <TitleWithIcon title="FiCodesandbox" icon={<FiCodesandbox />} />
        <TitleWithIcon title="FiCheck" icon={<FiCheck />} />
        <TitleWithIcon title="FiFilter" icon={<FiFilter />} />
        <TitleWithIcon title="FiMic" icon={<FiMic />} />
        <TitleWithIcon title="FiPlus" icon={<FiPlus />} />
        <TitleWithIcon title="FiX" icon={<FiX />} />
        <TitleWithIcon title="FiPause" icon={<FiPause />} />
        <TitleWithIcon title="FiMenu" icon={<FiMenu />} />
        <TitleWithIcon title="FiColumns" icon={<FiColumns />} />
        <TitleWithIcon title="FiCreditCard" icon={<FiCreditCard />} />
        <TitleWithIcon title="FiEdit" icon={<FiEdit />} />
        <TitleWithIcon title="FiPaperclip" icon={<FiPaperclip />} />
        <TitleWithIcon title="FiCornerDownLeft" icon={<FiCornerDownLeft />} />
        <TitleWithIcon title="TbLetterT" icon={<TbLetterT />} />
        <TitleWithIcon title="TbCameraRotate" icon={<TbCameraRotate />} />
        <TitleWithIcon title="TbVideoPlus" icon={<TbVideoPlus />} />
        <TitleWithIcon title="TbLayoutColumns" icon={<TbLayoutColumns />} />
        <TitleWithIcon title="TbLayoutRows" icon={<TbLayoutRows />} />
        <TitleWithIcon title="TbArrowBack" icon={<TbArrowBack />} />
      </Div>
      <Div>
        <TitleWithIcon title="DiViewer" icon={<DiViewer />} />
      </Div>
    </>
  );
};

export const Primary = Template.bind({});
