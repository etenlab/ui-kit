import React from 'react';

import { Typography, Stack, Divider, Button, Breadcrumbs } from '@mui/material';

import { parsePath, buildPath } from '../utility';

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

  if (pathString.length === 0) {
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

export function UIConfigPathBreadcrumbs({
  pathString,
  onChange,
}: {
  pathString: string;
  onChange(pathString: string): void;
}) {
  const pathItems = parsePath(pathString);

  return (
    <Breadcrumbs>
      <UIConfigPathItem
        pathString="/"
        onClick={onChange}
        isLast={pathItems.length === 0}
        key="root"
      />
      {pathItems.length > 0 &&
        pathItems.map((_item, index) => (
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
