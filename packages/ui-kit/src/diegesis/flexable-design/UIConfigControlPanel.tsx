import React, {
  useState,
  useEffect,
  useMemo,
  FC,
  ReactNode,
  ChangeEventHandler,
} from 'react';

import {
  Typography,
  Stack,
  Divider,
  Button,
  Grid,
  ListSubheader,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Breadcrumbs,
  Paper,
  TextField,
} from '@mui/material';

// import AceEditor from 'react-ace';

// import 'ace-builds/src-noconflict/mode-markdown';
// import 'ace-builds/src-noconflict/mode-css';
// import 'ace-builds/src-noconflict/theme-solarized_dark';
// import 'ace-builds/src-noconflict/ext-language_tools';

import { StyledPaper } from './styled';

import { GiAtom } from 'react-icons/gi';
import { CiFileOn } from 'react-icons/ci';
import { VscNote, VscWand } from 'react-icons/vsc';
import {
  BasicFlexibleProps,
  BasicUIConfig,
  useUIConfigContext,
} from './UIConfigProvider';
import { parsePath, buildPath, addPath } from './utility';

type ListItemType = {
  value: string;
  name: string;
};

function FlexibleListItem({
  item,
  icon,
  onClick,
}: {
  item: ListItemType;
  icon: ReactNode;
  onClick(): void;
}) {
  return (
    <ListItemButton onClick={onClick} sx={{ paddingLeft: 0, paddingRight: 0 }}>
      <ListItemIcon sx={{ minWidth: '30px' }}>{icon}</ListItemIcon>
      <ListItemText
        primary={item.name}
        sx={{ '& .MuiListItemText-primary': { fontSize: '10px !important' } }}
      />
    </ListItemButton>
  );
}

function UIConfigList({
  title,
  items,
  icon,
  onClick,
  moreCom,
}: {
  title: string;
  items: ListItemType[];
  icon: ReactNode;
  moreCom: ReactNode;
  onClick(item: ListItemType): void;
}) {
  return (
    <Paper
      variant="outlined"
      elevation={3}
      sx={{ background: '#e5e5e5', padding: '0px 5px' }}
    >
      <List
        sx={{
          width: '100%',
          height: '100%',
        }}
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader
            component="div"
            id="nested-list-subheader"
            sx={{ background: 'transparent', paddingRight: 0, paddingLeft: 0 }}
            disableSticky
          >
            {title}
          </ListSubheader>
        }
      >
        {items.map((item) => (
          <FlexibleListItem
            item={item}
            icon={icon}
            key={item.value}
            onClick={() => onClick(item)}
          />
        ))}
        {moreCom}
      </List>
    </Paper>
  );
}

function UIConfigPathItem({
  pathString,
  onClick,
  isLast,
}: {
  pathString: string;
  isLast?: boolean;
  onClick(pathString: string): void;
}) {
  if (pathString === '/') {
    return (
      <Button onClick={() => onClick(pathString)} disabled={isLast}>
        <Stack justifyContent="center" alignItems="center">
          <Typography variant="h6" sx={{ fontSize: '12px', padding: '1px' }}>
            root (U)
          </Typography>
        </Stack>
      </Button>
    );
  }

  const pathItems = parsePath(pathString);

  console.log('UIConfigPathItem ===>', isLast);

  const item = pathItems[pathItems.length - 1];

  return (
    <>
      <Divider orientation="vertical" variant="middle" flexItem />
      <Button onClick={() => onClick(pathString)} disabled={isLast}>
        <Stack justifyContent="center" alignItems="center">
          <Typography variant="h6" sx={{ fontSize: '12px', padding: '1px' }}>
            {item.key} {item.type === 'flexibles' ? '(F)' : '(U)'}
          </Typography>
        </Stack>
      </Button>
    </>
  );
}

function UIConfigPathBreadcrumbs({
  pathString,
  onChange,
}: {
  pathString: string;
  onChange(pathString: string): void;
}) {
  const pathItems = parsePath(pathString);
  console.log('pathString===>', pathString);
  console.log('pathItems ===>', pathItems.slice(0, 1));

  return (
    <Breadcrumbs>
      <UIConfigPathItem
        pathString="/"
        onClick={onChange}
        isLast={pathItems.length === 0}
        key="root"
      />
      {pathItems.map((_item, index) => (
        <UIConfigPathItem
          pathString={buildPath(pathItems.slice(0, index + 1))}
          onClick={onChange}
          isLast={index === pathItems.length - 1}
          key={pathString}
        />
      ))}
    </Breadcrumbs>
  );
}

function UIConfigSelector({
  selectedPath,
  onChangeSelectedPath,
}: {
  selectedPath: string;
  onChangeSelectedPath(pathString: string): void;
}) {
  const { queryUIConfig } = useUIConfigContext();
  const [config, setConfig] = useState<BasicUIConfig | null>(null);

  useEffect(() => {
    setConfig(queryUIConfig(selectedPath));
  }, [selectedPath, queryUIConfig]);

  const handleChangeSelectedPath = (item: ListItemType) => {
    onChangeSelectedPath(item.value);
  };

  const { flexibleItems, uiConfigItems } = useMemo(() => {
    console.log(config);
    if (config === null) {
      return {
        flexibleItems: [],
        uiConfigItems: [],
      };
    }

    return {
      flexibleItems: config.flexibles
        ? Object.keys(config.flexibles).map((key) => ({
            name: key,
            value: addPath({ key: key, type: 'flexibles' }, config.configPath),
          }))
        : [],
      uiConfigItems: config.uiConfigs
        ? Object.keys(config.uiConfigs).map((key) => ({
            name: key,
            value: addPath({ key: key, type: 'uiConfigs' }, config.configPath),
          }))
        : [],
    };
  }, [config]);

  return (
    <Grid container sx={{ height: '100%' }} spacing={1}>
      <Grid item xs={6} sx={{ height: '100%' }}>
        <UIConfigList
          title="Flexibles"
          items={flexibleItems}
          icon={<GiAtom />}
          onClick={handleChangeSelectedPath}
          moreCom={<Button>+more</Button>}
        />
      </Grid>
      <Grid item xs={6} sx={{ height: '100%' }}>
        <UIConfigList
          title="UI Configs"
          items={uiConfigItems}
          icon={<CiFileOn />}
          onClick={handleChangeSelectedPath}
          moreCom={<Button>+more</Button>}
        />
      </Grid>
    </Grid>
  );
}

function ComponentShower({
  component,
  componentName,
}: {
  component: ReactNode;
  componentName: string;
}) {
  return (
    <>
      <Typography
        variant="h6"
        sx={(theme) => ({ color: theme.palette.primary.main })}
      >
        Flexible Component {`(${componentName})`}
      </Typography>
      <Divider />
      {component ? (
        component
      ) : (
        <Typography sx={(theme) => ({ color: theme.palette.error.main })}>
          Not Exists Any Component To Render
        </Typography>
      )}
    </>
  );
}

// function AceEditorWrapper({
//   value,
//   mode,
//   onChange,
//   placeholder,
// }: {
//   value?: string;
//   onChange(value: string): void;
//   mode: 'markdown' | 'css';
//   placeholder: string;
// }) {
//   return (
//     <Paper
//       variant="outlined"
//       elevation={3}
//       sx={{ background: '#e5e5e5', padding: '5px' }}
//     >
//       <AceEditor
//         placeholder={placeholder}
//         mode={mode}
//         theme="solarized_dark"
//         onChange={onChange}
//         fontSize={14}
//         showPrintMargin={true}
//         showGutter={true}
//         highlightActiveLine={true}
//         value={value}
//         setOptions={{
//           enableBasicAutocompletion: true,
//           enableLiveAutocompletion: true,
//           enableSnippets: false,
//           showLineNumbers: true,
//           tabSize: 2,
//         }}
//         style={{
//           width: '100%',
//           height: '100%',
//           minHeight: '300px',
//         }}
//       />
//     </Paper>
//   );
// }

function ConfigController({
  uiConfig,
  onChange,
  onSave,
  onCancel,
}: {
  uiConfig: BasicUIConfig | null;
  onChange(uiConfig: BasicUIConfig): void;
  onSave(): void;
  onCancel(): void;
}) {
  const [styleValue, setStyleValue] = useState<ListItemType | null>(null);
  const [contentValue, setContentValue] = useState<ListItemType | null>(null);

  const handleChangeStyle: ChangeEventHandler<HTMLInputElement> = (event) => {
    setStyleValue((_style) => ({
      name: _style!.name,
      value: event.target.value,
    }));
  };

  const handleChangeContent: ChangeEventHandler<HTMLTextAreaElement> = (
    event,
  ) => {
    setContentValue((_content) => ({
      name: _content!.name,
      value: event.target.value,
    }));
  };

  const handleChangeSelectedStyle = (item: ListItemType) => {
    setStyleValue(item);
  };

  const handleChangeSelectedContent = (item: ListItemType) => {
    setContentValue(item);
  };

  const handleSaveContentItem = () => {
    if (contentValue === null || !uiConfig || !uiConfig.contents) {
      return;
    }

    const newConfig = {
      ...uiConfig,
      contents: {
        ...uiConfig!.contents,
        [contentValue.name]: contentValue.value,
      },
    };

    onChange(newConfig);
    setContentValue(null);
  };

  const handleSaveStyleItem = () => {
    if (styleValue === null || !uiConfig || !uiConfig.styles) {
      return;
    }

    const newConfig = {
      ...uiConfig,
      styles: {
        ...uiConfig!.styles,
        [styleValue.name]: styleValue.value,
      },
    };

    onChange(newConfig);
    setStyleValue(null);
  };

  const handleCancelContentItem = () => {
    setContentValue(null);
  };

  const handleCancelStyleItem = () => {
    setStyleValue(null);
  };

  const { contentItems, styleItems } = useMemo(() => {
    if (uiConfig === null) {
      return {
        contentItems: [],
        styleItems: [],
      };
    }

    return {
      contentItems: uiConfig.contents
        ? Object.keys(uiConfig.contents).map((key) => ({
            name: key,
            value: uiConfig.contents![key] as string,
          }))
        : [],
      styleItems: uiConfig.styles
        ? Object.keys(uiConfig.styles).map((key) => ({
            name: key,
            value: uiConfig.styles![key] as string,
          }))
        : [],
    };
  }, [uiConfig]);

  const contentCom = contentValue ? (
    <Stack gap="10px">
      <TextField
        label={contentValue.name}
        multiline
        value={contentValue.value}
        onChange={handleChangeContent}
        sx={{ width: '100%', minHeight: '200px' }}
      />
      <Stack direction="row" justifyContent="flex-start" alignItems="center">
        <Button
          variant="contained"
          color="primary"
          onClick={handleSaveContentItem}
        >
          Change
        </Button>
        <Button
          variant="outlined"
          color="primary"
          onClick={handleCancelContentItem}
        >
          Cancel
        </Button>
      </Stack>
    </Stack>
  ) : (
    <Typography sx={(theme) => ({ color: theme.palette.error.main })}>
      Not Selected Any Content
    </Typography>
  );

  const styleCom = styleValue ? (
    <Stack gap="10px">
      <TextField
        label={styleValue.name}
        value={styleValue.value}
        onChange={handleChangeStyle}
        sx={{ width: '100%' }}
      />
      <Stack direction="row" justifyContent="flex-start" alignItems="center">
        <Button
          variant="contained"
          color="primary"
          onClick={handleSaveStyleItem}
        >
          Change
        </Button>
        <Button
          variant="outlined"
          color="primary"
          onClick={handleCancelStyleItem}
        >
          Cancel
        </Button>
      </Stack>
    </Stack>
  ) : (
    <Typography sx={(theme) => ({ color: theme.palette.error.main })}>
      Not Selected Any Style
    </Typography>
  );

  return (
    <Grid container spacing={1} sx={{ marginTop: '10px' }}>
      <Grid item xs={12}>
        <Stack
          gap="20px"
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
          sx={{ padding: 0 }}
        >
          <Typography
            variant="h6"
            sx={(theme) => ({ color: theme.palette.primary.main })}
          >
            Flexible Component Controller
          </Typography>
          <Button variant="contained" color="primary" onClick={onSave}>
            Save
          </Button>
          <Button variant="outlined" color="primary" onClick={onCancel}>
            Cancel
          </Button>
        </Stack>
        <Divider />
      </Grid>
      {uiConfig ? (
        <>
          <Grid item xs={12}>
            <Grid container spacing={1}>
              <Grid item xs={4}>
                <UIConfigList
                  title="UI Contents"
                  items={contentItems}
                  icon={<VscNote />}
                  onClick={handleChangeSelectedContent}
                  moreCom={<></>}
                />
              </Grid>
              <Grid item xs={8}>
                {/* <AceEditorWrapper
                  value={contentValue}
                  onChange={handleChangeContent}
                  mode="markdown"
                  placeholder="Write your content..."
                /> */}
                <Paper
                  variant="outlined"
                  elevation={3}
                  sx={{ background: '#e5e5e5', padding: '10px 5px' }}
                >
                  {contentCom}
                </Paper>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={1}>
              <Grid item xs={4}>
                <UIConfigList
                  title="UI Styles"
                  items={styleItems}
                  icon={<VscWand />}
                  onClick={handleChangeSelectedStyle}
                  moreCom={<></>}
                />
              </Grid>
              <Grid item xs={8}>
                {/* <AceEditorWrapper
                  value={styleValue}
                  onChange={handleChangeStyle}
                  mode="css"
                  placeholder="Write your style..."
                /> */}
                <Paper
                  variant="outlined"
                  elevation={3}
                  sx={{ background: '#e5e5e5', padding: '10px 5px' }}
                >
                  {styleCom}
                </Paper>
              </Grid>
            </Grid>
          </Grid>
        </>
      ) : (
        <Grid item xs={12}>
          <Typography sx={(theme) => ({ color: theme.palette.error.main })}>
            Not Exists Any Configuration To Control
          </Typography>
        </Grid>
      )}
    </Grid>
  );
}

export function UIConfigControlPanel() {
  const { queryUIConfig, mutateUIConfig, getComponentByName } =
    useUIConfigContext();

  const [config, setConfig] = useState<BasicUIConfig | null>(null);
  const [OriginalComponent, setOriginalComponent] = useState<{
    Component: FC<BasicFlexibleProps<BasicUIConfig>>;
  } | null>(null);
  const [selectedPath, setSelectedPath] = useState<string>('/');

  useEffect(() => {
    const config = queryUIConfig(selectedPath);

    if (!config) {
      setConfig(null);
      setOriginalComponent(null);
      return;
    }

    setConfig(config);

    const original = getComponentByName(config.componentName);
    console.log(config.componentName);
    console.log(original);
    if (!original) {
      setOriginalComponent(null);
    } else {
      setOriginalComponent({
        Component: original.Component,
      });
    }
  }, [selectedPath, queryUIConfig, getComponentByName]);

  const handleChangeSelectedPath = (pathString: string) => {
    setSelectedPath(pathString);
  };

  const handleChangeConfig = (newConfig: BasicUIConfig) => {
    setConfig(newConfig);
  };

  const handleSaveConfig = () => {
    if (!config) {
      return;
    }
    mutateUIConfig(selectedPath, config);
  };

  const handleCancelConfig = () => {
    setConfig(queryUIConfig(selectedPath));
  };

  return (
    <Grid container spacing={1}>
      <Grid item xs={12}>
        <StyledPaper elevation={3}>
          <Typography variant="h4">Flexible UI Config</Typography>
          <Divider />
          <UIConfigPathBreadcrumbs
            pathString={selectedPath}
            onChange={handleChangeSelectedPath}
          />
        </StyledPaper>
      </Grid>
      <Grid item xs={4}>
        <StyledPaper elevation={3}>
          <UIConfigSelector
            selectedPath={selectedPath}
            onChangeSelectedPath={handleChangeSelectedPath}
          />
        </StyledPaper>
      </Grid>
      <Grid item xs={8}>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <StyledPaper elevation={3}>
              <ComponentShower
                component={
                  OriginalComponent && config ? (
                    <OriginalComponent.Component
                      parentPath="/test-com"
                      id={`test-com-${config.id}`}
                      uiConfig={config}
                    />
                  ) : null
                }
                componentName={config ? config.componentName : ''}
              />
            </StyledPaper>
          </Grid>
          <Grid item xs={12}>
            <StyledPaper elevation={3}>
              <ConfigController
                uiConfig={config}
                onChange={handleChangeConfig}
                onSave={handleSaveConfig}
                onCancel={handleCancelConfig}
              />
            </StyledPaper>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
