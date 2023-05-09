import React, { useEffect, FC } from 'react';
import {
  BasicFlexibleProps,
  BasicUIConfig,
} from './UIConfigProvider/UIConfigProvider';
import { addPath } from './utility';
import { useUIConfigContext } from './UIConfigProvider/UIConfigProvider';

export function withFlexible<
  B extends BasicUIConfig,
  T extends BasicFlexibleProps<B>,
>(FlexibleComponent: FC<T>, defaultUIConfig: B) {
  return (props: T) => {
    const { id, parentPath } = props;
    const { queryUIConfig, initializeUIConfig, isExistsUIConfig } =
      useUIConfigContext();

    const configPath = addPath(
      {
        key: defaultUIConfig.componentName,
        type: 'uiConfigs',
      },
      '/',
    );
    const flexiblePath = addPath(
      {
        key: id,
        type: 'flexibles',
      },
      parentPath ? parentPath : '/',
    );

    useEffect(() => {
      const initialUIConfig = {
        ...defaultUIConfig,
        configPath: configPath,
        uiConfigs: {},
        flexibles: {},
      };

      const initialFlexibleConfig = {
        id: id,
        componentName: defaultUIConfig.componentName,
        configPath: flexiblePath,
        uiConfigs: {},
        flexibles: {},
      } as B;

      initializeUIConfig<B, T>(configPath, initialUIConfig, FlexibleComponent);
      initializeUIConfig<B, T>(
        flexiblePath,
        initialFlexibleConfig,
        FlexibleComponent,
      );
    }, [id, initializeUIConfig, configPath, flexiblePath]);

    const config = isExistsUIConfig(flexiblePath)
      ? queryUIConfig(flexiblePath)
      : null;

    console.log('config', defaultUIConfig.componentName, config);
    if (!config) {
      console.error('config is null');
      return null;
    }

    if (config.hiddenComponent === true) {
      console.error('config is hiddenComponent');
      return null;
    }

    return (
      <FlexibleComponent
        {...{
          ...props,
          uiConfig: config,
        }}
      />
    );
  };
}
