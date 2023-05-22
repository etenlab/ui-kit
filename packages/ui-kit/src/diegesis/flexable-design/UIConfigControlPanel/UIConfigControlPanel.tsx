import React, { useState, useEffect, FC } from 'react';

import { Typography, Divider, Grid } from '@mui/material';

import { StyledPaper } from './styled';

import {
  BasicFlexibleProps,
  BasicUIConfig,
  useUIConfigContext,
} from '../UIConfigProvider';

import { ConfigController } from './ConfigController';
import { UIConfigPathBreadcrumbs } from './UIConfigPathBreadcrumbs';
import { UIConfigSelector } from './UIConfigSelector';
import { ComponentShower } from './ComponentShower';

export type UIConfigControlPanelProps = {
  onConfigSave?: (config: BasicUIConfig) => {};
};
export function UIConfigControlPanel({
  onConfigSave,
}: UIConfigControlPanelProps) {
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
    if (onConfigSave) onConfigSave(config);
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
