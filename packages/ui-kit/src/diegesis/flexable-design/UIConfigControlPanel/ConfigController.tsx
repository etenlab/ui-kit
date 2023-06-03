import React, { useState, useMemo, ChangeEventHandler } from 'react';

import {
  Typography,
  Stack,
  Divider,
  Button,
  Grid,
  Paper,
  TextField,
} from '@mui/material';

import {
  BasicUIConfig,
  FlexibleMarkDown,
} from '../UIConfigProvider/UIConfigProvider';
import { UIConfigList, ListItemType } from './UIConfigList';

import { VscNote, VscWand, VscMarkdown } from 'react-icons/vsc';

import { MarkdownEditor, CssEditor } from '../Editor';

export function ConfigController({
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
  const [markdownValue, setMarkdownValue] = useState<FlexibleMarkDown | null>(
    null,
  );

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

  const handleChangeSelectedMarkdown = (item: ListItemType) => {
    setMarkdownValue(uiConfig!.markdowns![item.name]);
  };

  const handleSaveContentItem = () => {
    if (contentValue === null || !uiConfig || !uiConfig.contents) {
      return;
    }

    const newConfig = {
      ...uiConfig,
      contents: {
        ...uiConfig.contents,
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
        ...uiConfig.styles,
        [styleValue.name]: styleValue.value,
      },
    };

    onChange(newConfig);
    setStyleValue(null);
  };

  const handleSaveMarkdownItem = () => {
    if (markdownValue === null || !uiConfig || !uiConfig.markdowns) {
      return;
    }

    const newConfig = {
      ...uiConfig,
      markdowns: {
        ...uiConfig.markdowns,
        [markdownValue.id!]: markdownValue,
      },
    };

    onChange(newConfig);
    setMarkdownValue(null);
  };

  const handleChangeMarkdownClassName: ChangeEventHandler<
    HTMLTextAreaElement
  > = (event) => {
    setMarkdownValue((markdownValue) => ({
      ...markdownValue,
      className: event.target.value,
    }));
  };

  const handleChangeMarkdownContent = (content: string) => {
    setMarkdownValue((markdownValue) => ({
      ...markdownValue,
      content,
    }));
  };

  const handleChangeMarkdownCss = (css: string) => {
    setMarkdownValue((markdownValue) => ({
      ...markdownValue,
      css,
    }));
  };

  const handleCancelContentItem = () => {
    setContentValue(null);
  };

  const handleCancelStyleItem = () => {
    setStyleValue(null);
  };

  const handleCancelMarkdownItem = () => {
    setMarkdownValue(null);
  };

  const { contentItems, styleItems, markdownItems } = useMemo(() => {
    if (uiConfig === null) {
      return {
        contentItems: [],
        styleItems: [],
        markdownItems: [],
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
            value: uiConfig.styles![key],
          }))
        : [],
      markdownItems: uiConfig.markdowns
        ? Object.keys(uiConfig.markdowns).map((key) => ({
            name: key,
            value: JSON.stringify(uiConfig.markdowns![key]),
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

  const markdownCom = markdownValue ? (
    <Stack gap="10px">
      <TextField defaultValue={markdownValue.id} disabled={true} label="id" />
      <TextField
        value={markdownValue.className}
        onChange={handleChangeMarkdownClassName}
        label="Input ClassName"
      />

      <MarkdownEditor
        value={markdownValue.content || ''}
        onChange={handleChangeMarkdownContent}
      />
      <CssEditor
        value={markdownValue.css || ''}
        onChange={handleChangeMarkdownCss}
      />

      <Stack direction="row" justifyContent="flex-start" alignItems="center">
        <Button
          variant="contained"
          color="primary"
          onClick={handleSaveMarkdownItem}
        >
          Change
        </Button>
        <Button
          variant="outlined"
          color="primary"
          onClick={handleCancelMarkdownItem}
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
                <Paper
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
                <Paper
                  elevation={3}
                  sx={{ background: '#e5e5e5', padding: '10px 5px' }}
                >
                  {styleCom}
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
                <Paper
                  elevation={3}
                  sx={{ background: '#e5e5e5', padding: '10px 5px' }}
                >
                  {styleCom}
                </Paper>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={1}>
              <Grid item xs={4}>
                <UIConfigList
                  title="Markdowns"
                  items={markdownItems}
                  icon={<VscMarkdown />}
                  onClick={handleChangeSelectedMarkdown}
                />
              </Grid>
              <Grid item xs={8}>
                <Paper
                  elevation={3}
                  sx={{ background: '#e5e5e5', padding: '10px 5px' }}
                >
                  {markdownCom}
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
