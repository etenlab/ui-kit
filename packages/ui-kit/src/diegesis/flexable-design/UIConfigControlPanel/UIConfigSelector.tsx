import React, { useState, useEffect, useMemo } from 'react';

import { Button, Grid, Stack } from '@mui/material';
import { Autocomplete } from '../../../input';

import { GiAtom } from 'react-icons/gi';
import { CiFileOn } from 'react-icons/ci';

import {
  BasicUIConfig,
  useUIConfigContext,
} from '../UIConfigProvider/UIConfigProvider';
import { addPath } from '../utility';

import { UIConfigList, ListItemType } from './UIConfigList';

export function UIConfigSelector({
  selectedPath,
  onChangeSelectedPath,
}: {
  selectedPath: string;
  onChangeSelectedPath(pathString: string): void;
}) {
  const {
    queryUIConfig,
    getConfigurableComponentList,
    mutateUIConfig,
    getUIConfigForComponent,
  } = useUIConfigContext();
  const [config, setConfig] = useState<BasicUIConfig | null>(null);

  const [componentCandidates, setComponentCandidates] = useState<string[]>([]);
  const [componentName, setComponentName] = useState<string | null>(null);
  const [openSelector, setOpenSelector] = useState<boolean>(false);

  useEffect(() => {
    if (!openSelector) {
      setConfig(queryUIConfig(selectedPath));
    }
  }, [selectedPath, queryUIConfig, openSelector]);

  useEffect(() => {
    setComponentCandidates(
      getConfigurableComponentList(selectedPath).filter((componentName) => {
        if (!config || !config.uiConfigs || !config.uiConfigs[componentName]) {
          return true;
        } else {
          return false;
        }
      }),
    );
  }, [selectedPath, getConfigurableComponentList, config]);

  const handleSetComponentName = (
    _event: React.SyntheticEvent<Element, Event>,
    value: string | null,
  ) => {
    setComponentName(value);
  };

  const handleChangeSelectedPath = (item: ListItemType) => {
    onChangeSelectedPath(item.value);
  };

  const handleCancel = () => {
    setOpenSelector(false);
  };

  const handleClickMore = () => {
    setOpenSelector(true);
  };

  const handleSave = () => {
    if (!componentName || selectedPath === '/') {
      setOpenSelector(false);
      return;
    }

    const configPath = addPath(
      { key: componentName, type: 'uiConfigs' },
      selectedPath,
    );
    const componentConfig = getUIConfigForComponent(
      selectedPath,
      componentName,
    );

    if (!componentConfig) {
      setOpenSelector(false);
      return;
    }

    const data = {
      ...componentConfig,
      configPath,
      uiConfigs: {},
      flexibles: {},
    };

    mutateUIConfig(configPath, data);
    setOpenSelector(false);
  };

  const { flexibleItems, uiConfigItems } = useMemo(() => {
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

  const moreCom = !openSelector ? (
    <Button onClick={handleClickMore}>+more</Button>
  ) : (
    <Stack gap="10px">
      <Autocomplete
        label="Choose Component"
        options={componentCandidates}
        value={componentName}
        onChange={handleSetComponentName}
      />
      <Button variant="contained" onClick={handleSave}>
        Save
      </Button>
      <Button variant="outlined" onClick={handleCancel}>
        Cancel
      </Button>
    </Stack>
  );

  return (
    <Grid container sx={{ height: '100%' }} spacing={1}>
      <Grid item xs={6} sx={{ height: '100%' }}>
        <UIConfigList
          title="Flexibles"
          items={flexibleItems}
          icon={<GiAtom />}
          onClick={handleChangeSelectedPath}
        />
      </Grid>
      <Grid item xs={6} sx={{ height: '100%' }}>
        <UIConfigList
          title="UI Configs"
          items={uiConfigItems}
          icon={<CiFileOn />}
          onClick={handleChangeSelectedPath}
          moreCom={selectedPath !== '/' ? moreCom : null}
        />
      </Grid>
    </Grid>
  );
}
