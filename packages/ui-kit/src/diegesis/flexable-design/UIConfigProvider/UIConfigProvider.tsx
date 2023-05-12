import React, {
  createContext,
  useState,
  useCallback,
  ReactNode,
  useContext,
  FC,
} from 'react';

import {
  PathItem,
  parsePath,
  buildPath,
  addPath,
  getOrgFunName,
} from '../utility';

export interface FlexibleMarkDown {
  id?: string;
  className?: string;
  content?: string;
  css?: string;
}

export interface BasicUIConfig {
  id?: string;
  hiddenComponent?: boolean;
  componentName: string;
  className?: string;
  configPath?: string;
  contents?: {
    [key: string]: unknown;
  };
  styles?: {
    [key: string]: string;
  };
  markdowns?: {
    [key: string]: FlexibleMarkDown;
  };
  uiConfigs?: {
    [key: string]: BasicUIConfig;
  };
  flexibles?: {
    [key: string]: BasicUIConfig;
  };
}

export interface BasicFlexibleProps<T extends BasicUIConfig> {
  id: string;
  parentPath: string;
  uiConfig?: T;
  children?: ReactNode;
}

export function leftJoinUIConfig(
  leftUIConfig: BasicUIConfig,
  rightUIConfig: BasicUIConfig,
): BasicUIConfig {
  if (leftUIConfig.componentName !== rightUIConfig.componentName) {
    return leftUIConfig;
  }

  const data = {
    id: leftUIConfig.id,
    hiddenComponent:
      leftUIConfig.hiddenComponent !== undefined
        ? leftUIConfig.hiddenComponent
        : rightUIConfig.hiddenComponent,
    componentName: leftUIConfig.componentName,
    className: `${leftUIConfig.className ? leftUIConfig.className : ''} ${
      rightUIConfig.className ? rightUIConfig.className : ''
    }`,
    configPath: leftUIConfig.configPath,
    contents: {
      ...rightUIConfig.contents,
      ...leftUIConfig.contents,
    },
    styles: {
      ...rightUIConfig.styles,
      ...leftUIConfig.styles,
    },
    markdowns: {
      ...rightUIConfig.markdowns,
      ...leftUIConfig.markdowns,
    },
    uiConfigs: leftUIConfig.uiConfigs,
    flexibles: leftUIConfig.flexibles,
  };

  return JSON.parse(JSON.stringify(data));
}

type NameVsComponent = Record<string, FC<BasicFlexibleProps<BasicUIConfig>>>;

interface RootUIConfig extends BasicUIConfig {}

const initialRootState = {
  id: 'root',
  componentName: getOrgFunName(UIConfigContextProvider.name),
  configPath: '/',
  uiConfigs: {},
};

export interface IUIConfigContext {
  mutateUIConfig<T extends BasicUIConfig>(path: string, newConfig: T): void;
  isExistsUIConfig(_path: string): boolean;
  initializeUIConfig<B extends BasicUIConfig, T extends BasicFlexibleProps<B>>(
    pathString: string,
    defaultConfig: B,
    FlexibleComponent: FC<T>,
  ): void;
  queryUIConfig<T extends BasicUIConfig>(path: string): T | null;
  getConfigurableComponentList(_path: string): string[];
  getComponentByName(_name: string): {
    Component: React.FC<BasicFlexibleProps<BasicUIConfig>>;
  } | null;
  setComponent(_com: FC<BasicFlexibleProps<BasicUIConfig>>): void;
  getUIConfigForComponent<T extends BasicUIConfig>(
    path: string,
    comName: string,
  ): T | null;
}

export const UIConfigContext = createContext<IUIConfigContext>({
  mutateUIConfig<BasicUIConfig>(_path: string, _newConfig: BasicUIConfig) {},
  isExistsUIConfig(_path: string) {
    return false;
  },
  initializeUIConfig<B extends BasicUIConfig, T extends BasicFlexibleProps<B>>(
    _pathString: string,
    _defaultConfig: B,
    _FlexibleComponent: FC<T>,
  ): void {},
  queryUIConfig<BasicUIConfig>(_path: string): BasicUIConfig {
    return initialRootState as any;
  },
  getConfigurableComponentList(_path: string): string[] {
    return [];
  },
  getComponentByName(_name: string): {
    Component: React.FC<BasicFlexibleProps<BasicUIConfig>>;
  } | null {
    return null;
  },
  setComponent(_com: FC<BasicFlexibleProps<BasicUIConfig>>): void {},
  getUIConfigForComponent<T extends BasicUIConfig>(
    _path: string,
    _comName: string,
  ): T | null {
    return null;
  },
});

interface UIConfigContextProviderProps {
  children?: React.ReactNode;
}

export function UIConfigContextProvider({
  children,
}: UIConfigContextProviderProps) {
  const [state, setState] = useState<RootUIConfig>(initialRootState);
  const [nameVsComponent, setNameVsComponent] = useState<NameVsComponent>({});

  const getComponentByName = useCallback(
    (name: string) => {
      console.log('getComponentByName', name, nameVsComponent);
      return nameVsComponent[name]
        ? {
            Component: nameVsComponent[name],
          }
        : null;
    },
    [nameVsComponent],
  );

  const setComponent = useCallback(
    (Component: FC<BasicFlexibleProps<BasicUIConfig>>) => {
      setNameVsComponent(
        (obj) =>
          ({
            ...obj,
            [getOrgFunName(Component.name)]: Component,
          } as NameVsComponent),
      );
    },
    [],
  );

  const isExistsUIConfig = useCallback(
    (pathString: string): boolean => {
      const pathItems: PathItem[] = parsePath(pathString);

      let currentState: BasicUIConfig = state;

      for (let i = 0; i < pathItems.length; i++) {
        const item = pathItems[i];

        if (!currentState[item.type]) {
          return false;
        }

        if (!currentState[item.type]![item.key]) {
          return false;
        }

        currentState = currentState[item.type]![item.key];
      }

      return true;
    },
    [state],
  );

  const mutateUIConfig = useCallback(
    <T extends BasicUIConfig>(pathString: string, newConfig: T): void => {
      setState((_state) => {
        try {
          const pathItems: PathItem[] = parsePath(pathString);

          if (!isExistsUIConfig(buildPath(pathItems.slice(0, -1)))) {
            throw new Error(`not exists such path=${pathString} at mutation`);
          }

          const subStates: BasicUIConfig[] = [_state];
          for (let i = 0; i < pathItems.length; i++) {
            const item = pathItems[i];
            const subState = subStates[i];

            if (i === pathItems.length - 1) {
              if (!subState[item.type]) {
                subState[item.type] = {};
              }
              let data: T;

              if (!subState[item.type]![item.key]) {
                data = {
                  id: newConfig.id,
                  hiddenComponent: newConfig.hiddenComponent,
                  componentName: newConfig.componentName,
                  className: newConfig.className,
                  configPath: newConfig.configPath,
                  contents: newConfig.contents,
                  styles: newConfig.styles,
                  markdowns: newConfig.markdowns,
                  uiConfigs: {},
                  flexibles: {},
                } as T;
              } else {
                data = {
                  id: subState[item.type]![item.key].id,
                  hiddenComponent: newConfig.hiddenComponent,
                  componentName: subState[item.type]![item.key].componentName,
                  className: newConfig.className,
                  configPath: subState[item.type]![item.key].configPath,
                  contents: newConfig.contents,
                  styles: newConfig.styles,
                  markdowns: newConfig.markdowns,
                  uiConfigs: subState[item.type]![item.key].uiConfigs,
                  flexibles: subState[item.type]![item.key].flexibles,
                } as T;
              }

              subStates.push(JSON.parse(JSON.stringify(data)));
            } else {
              subStates.push(
                JSON.parse(JSON.stringify(subState[item.type]![item.key])),
              );
            }
          }

          for (let i = pathItems.length - 1; i >= 0; i--) {
            const item = pathItems[i];
            subStates[i][item.type]![item.key] = JSON.parse(
              JSON.stringify(subStates[i + 1]),
            );
          }

          return subStates[0];
        } catch (err) {
          console.log(err);
          return _state;
        }
      });
    },
    [isExistsUIConfig],
  );

  const queryUIConfig = useCallback(
    <T extends BasicUIConfig>(pathString: string): T | null => {
      try {
        const pathItems: PathItem[] = parsePath(pathString);

        if (pathItems.length === 0) {
          return state as T;
        }

        if (!isExistsUIConfig(pathString)) {
          throw new Error(
            `not exists such path=${pathString} at queryUIConfig`,
          );
        }

        const pathStates = [state];

        for (let i = 0; i < pathItems.length; i++) {
          const item = pathItems[i];
          pathStates.push(pathStates[i][item.type]![item.key]);
        }

        let requestedState = pathStates[pathStates.length - 1];
        const componentName = requestedState.componentName;

        for (let i = pathStates.length - 1; i >= 0; i--) {
          if (!pathStates[i]['uiConfigs']) {
            continue;
          }

          if (!pathStates[i]['uiConfigs']![componentName]) {
            continue;
          }

          requestedState = leftJoinUIConfig(
            requestedState,
            pathStates[i]['uiConfigs']![componentName],
          );
        }

        return requestedState as T;
      } catch (err) {
        console.log(err);

        return null;
      }
    },
    [state, isExistsUIConfig],
  );

  const getUIConfigForComponent = useCallback(
    <T extends BasicUIConfig>(
      pathString: string,
      comName: string,
    ): T | null => {
      try {
        const pathItems: PathItem[] = parsePath(pathString);

        while (pathItems.length >= 0) {
          if (
            isExistsUIConfig(
              addPath(
                { key: comName, type: 'uiConfigs' },
                buildPath(pathItems),
              ),
            )
          ) {
            break;
          }
          pathItems.pop();
        }

        return queryUIConfig(
          addPath({ key: comName, type: 'uiConfigs' }, buildPath(pathItems)),
        );
      } catch (err) {
        console.log(err);

        return null;
      }
    },
    [isExistsUIConfig, queryUIConfig],
  );

  const initializeUIConfig = useCallback(
    <B extends BasicUIConfig, T extends BasicFlexibleProps<B>>(
      pathString: string,
      defaultConfig: B,
      FlexibleComponent: FC<T>,
    ) => {
      const pathItems: PathItem[] = parsePath(pathString);
      if (!isExistsUIConfig(pathString)) {
        if (isExistsUIConfig(buildPath(pathItems.slice(0, -1)))) {
          mutateUIConfig(pathString, defaultConfig);
          setComponent(
            FlexibleComponent as FC<BasicFlexibleProps<BasicUIConfig>>,
          );
        } else {
          throw new Error(`not exists such path=${pathString} at initialize`);
        }
      }
    },
    [isExistsUIConfig, mutateUIConfig, setComponent],
  );

  const getConfigurableComponentList = useCallback(
    (pathString: string): string[] => {
      const names: string[] = [];
      const state = queryUIConfig(pathString);

      if (!state || !state.flexibles) {
        return [];
      }

      names.push(state.componentName);

      Object.values(state.flexibles).forEach((config) => {
        names.push(...getConfigurableComponentList(config.configPath!));
      });

      return names.sort().filter((value, index) => {
        if (index + 1 < names.length && value === names[index + 1]) {
          return false;
        } else {
          return true;
        }
      });
    },
    [queryUIConfig],
  );

  const value = {
    isExistsUIConfig,
    mutateUIConfig,
    initializeUIConfig,
    queryUIConfig,
    getConfigurableComponentList,
    setComponent,
    getComponentByName,
    getUIConfigForComponent,
  };

  return (
    <UIConfigContext.Provider value={value}>
      {children}
    </UIConfigContext.Provider>
  );
}

export function useUIConfigContext() {
  const context = useContext(UIConfigContext);

  if (context === undefined) {
    throw new Error('useUIConfigContext must be within UIConfigContext');
  }

  return context;
}
