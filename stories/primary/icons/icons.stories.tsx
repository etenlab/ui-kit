import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeProvider } from '../../../packages/ui-kit/src';

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
  DiAdd,
  DiAdmin,
  DiApplication,
  DiArrowLeft,
  DiArrowRight,
  DiAskQuestion,
  DiAttach,
  DiCamera,
  DiChapter,
  DiCheck,
  DiChoose,
  DiCode,
  DiComment,
  DiCross,
  DiDatabase,
  DiData,
  DiDataViewer,
  DiDefinition,
  DiDialect,
  DiDictionary,
  DiDownload,
  DiDropDown,
  DiEdit,
  DiEmail,
  DiFeedback,
  DiFileText,
  DiFilter,
  DiForward,
  DiHome,
  DiImport,
  DiLanguage,
  DiLevels,
  DiLink,
  DiList,
  DiLogout,
  DiMap,
  DiMenu,
  DiMessages,
  DiMicro,
  DiMore,
  DiNation,
  DiNotifications,
  DiOrganization,
  DiPassword,
  DiPasswordNv,
  DiPasswordV,
  DiPause,
  DiPhrase,
  DiPlay,
  DiQa,
  DiRead,
  DiRemove,
  DiRole,
  DiRotate,
  DiSearch,
  DiSettings,
  DiSite,
  DiSmile,
  DiSound,
  DiSource,
  DiTarget,
  DiText,
  DiTimer,
  DiToggleOff,
  DiToggleOn,
  DiTranslate,
  DiTranslator,
  DiUploadFile,
  DiUser,
  DiVerse,
  DiVideo,
  DiViewColumn,
  DiViewLineBreak,
  DiViewRow,
  DiFlag1,
  DiFlag2,
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
          color: 'red',
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
        <ThemeProvider>
          <Story />
        </ThemeProvider>
      </div>
    ),
  ],
} as ComponentMeta<typeof Div>;

const Template: ComponentStory<typeof Div> = () => {
  return (
    <>
      <Div>
        <TitleWithIcon title="DiAdd" icon={<DiAdd />} />
        <TitleWithIcon title="DiAdmin" icon={<DiAdmin />} />
        <TitleWithIcon title="DiApplication" icon={<DiApplication />} />
        <TitleWithIcon title="DiArrowLeft" icon={<DiArrowLeft />} />
        <TitleWithIcon title="DiArrowRight" icon={<DiArrowRight />} />
        <TitleWithIcon title="DiAskQuestion" icon={<DiAskQuestion />} />
        <TitleWithIcon title="DiAttach" icon={<DiAttach />} />
        <TitleWithIcon title="DiCamera" icon={<DiCamera />} />
        <TitleWithIcon title="DiChapter" icon={<DiChapter />} />
        <TitleWithIcon title="DiCheck" icon={<DiCheck />} />
        <TitleWithIcon title="DiChoose" icon={<DiChoose />} />
        <TitleWithIcon title="DiCode" icon={<DiCode />} />
        <TitleWithIcon title="DiComment" icon={<DiComment />} />
        <TitleWithIcon title="DiCross" icon={<DiCross />} />
        <TitleWithIcon title="DiDatabase" icon={<DiDatabase />} />
        <TitleWithIcon title="DiData" icon={<DiData />} />
        <TitleWithIcon title="DiDataViewer" icon={<DiDataViewer />} />
        <TitleWithIcon title="DiDefinition" icon={<DiDefinition />} />
        <TitleWithIcon title="DiDialect" icon={<DiDialect />} />
        <TitleWithIcon title="DiDictionary" icon={<DiDictionary />} />
        <TitleWithIcon title="DiDownload" icon={<DiDownload />} />
        <TitleWithIcon title="DiDropDown" icon={<DiDropDown />} />
        <TitleWithIcon title="DiEdit" icon={<DiEdit />} />
        <TitleWithIcon title="DiEmail" icon={<DiEmail />} />
        <TitleWithIcon title="DiFeedback" icon={<DiFeedback />} />
        <TitleWithIcon title="DiFileText" icon={<DiFileText />} />
        <TitleWithIcon title="DiFilter" icon={<DiFilter />} />
        <TitleWithIcon title="DiForward" icon={<DiForward />} />
        <TitleWithIcon title="DiHome" icon={<DiHome />} />
        <TitleWithIcon title="DiImport" icon={<DiImport />} />
        <TitleWithIcon title="DiLanguage" icon={<DiLanguage />} />
        <TitleWithIcon title="DiLevels" icon={<DiLevels />} />
        <TitleWithIcon title="DiLink" icon={<DiLink />} />
        <TitleWithIcon title="DiList" icon={<DiList />} />
        <TitleWithIcon title="DiLogout" icon={<DiLogout />} />
        <TitleWithIcon title="DiMap" icon={<DiMap />} />
        <TitleWithIcon title="DiMenu" icon={<DiMenu />} />
        <TitleWithIcon title="DiMessages" icon={<DiMessages />} />
        <TitleWithIcon title="DiMicro" icon={<DiMicro />} />
        <TitleWithIcon title="DiMore" icon={<DiMore />} />
        <TitleWithIcon title="DiNation" icon={<DiNation />} />
        <TitleWithIcon title="DiNotifications" icon={<DiNotifications />} />
        <TitleWithIcon title="DiOrganization" icon={<DiOrganization />} />
        <TitleWithIcon title="DiPassword" icon={<DiPassword />} />
        <TitleWithIcon title="DiPasswordNv" icon={<DiPasswordNv />} />
        <TitleWithIcon title="DiPasswordV" icon={<DiPasswordV />} />
        <TitleWithIcon title="DiPause" icon={<DiPause />} />
        <TitleWithIcon title="DiPhrase" icon={<DiPhrase />} />
        <TitleWithIcon title="DiPlay" icon={<DiPlay />} />
        <TitleWithIcon title="DiQa" icon={<DiQa />} />
        <TitleWithIcon title="DiRead" icon={<DiRead />} />
        <TitleWithIcon title="DiRemove" icon={<DiRemove />} />
        <TitleWithIcon title="DiRole" icon={<DiRole />} />
        <TitleWithIcon title="DiRotate" icon={<DiRotate />} />
        <TitleWithIcon title="DiSearch" icon={<DiSearch />} />
        <TitleWithIcon title="DiSettings" icon={<DiSettings />} />
        <TitleWithIcon title="DiSite" icon={<DiSite />} />
        <TitleWithIcon title="DiSmile" icon={<DiSmile />} />
        <TitleWithIcon title="DiSound" icon={<DiSound />} />
        <TitleWithIcon title="DiSource" icon={<DiSource />} />
        <TitleWithIcon title="DiTarget" icon={<DiTarget />} />
        <TitleWithIcon title="DiText" icon={<DiText />} />
        <TitleWithIcon title="DiTimer" icon={<DiTimer />} />
        <TitleWithIcon title="DiToggleOff" icon={<DiToggleOff />} />
        <TitleWithIcon title="DiToggleOn" icon={<DiToggleOn />} />
        <TitleWithIcon title="DiTranslate" icon={<DiTranslate />} />
        <TitleWithIcon title="DiTranslator" icon={<DiTranslator />} />
        <TitleWithIcon title="DiUploadFile" icon={<DiUploadFile />} />
        <TitleWithIcon title="DiUser" icon={<DiUser />} />
        <TitleWithIcon title="DiVerse" icon={<DiVerse />} />
        <TitleWithIcon title="DiVideo" icon={<DiVideo />} />
        <TitleWithIcon title="DiViewColumn" icon={<DiViewColumn />} />
        <TitleWithIcon title="DiViewer" icon={<DiViewer />} />
        <TitleWithIcon title="DiViewLineBreak" icon={<DiViewLineBreak />} />
        <TitleWithIcon title="DiViewRow" icon={<DiViewRow />} />
        <TitleWithIcon title="DiFlag1" icon={<DiFlag1 />} />
        <TitleWithIcon title="DiFlag2" icon={<DiFlag2 />} />
      </Div>
      <hr />
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
    </>
  );
};

export const Primary = Template.bind({});
