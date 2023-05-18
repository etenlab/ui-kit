export type PathItem = {
  key: string;
  type: 'uiConfigs' | 'flexibles';
};

export function isValidJson(str: string) {
  try {
    JSON.parse(str);
    return true;
  } catch (e) {
    return false;
  }
}

export function addPath(pathItem: PathItem, rootPath?: string): string {
  const path = rootPath
    ? rootPath.split('/').filter(isValidJson).join('/')
    : '';
  return `${path}/${JSON.stringify(pathItem)}`;
}

export function parsePath(pathString: string): PathItem[] {
  return pathString
    .split('/')
    .filter(isValidJson)
    .map((path) => JSON.parse(path) as PathItem);
}

export function buildPath(pathItems: PathItem[]): string {
  return pathItems.map((item) => JSON.stringify(item)).join('/');
}
