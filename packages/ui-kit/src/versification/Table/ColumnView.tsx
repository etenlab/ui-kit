import React from 'react';

import { Box, BoxProps } from '@mui/material';

import { useColorModeContext } from '../../ThemeProvider';
import { IdentifierLabel } from '../IdentifierLabel';
import { NodeData } from '../NodeData';
import { Header } from './Header';
import { TableProps } from '.';

function Row(props: BoxProps) {
  const { getColor } = useColorModeContext();

  return (
    <Box
      {...props}
      display="grid"
      gridTemplateColumns="43.5% auto"
      sx={{
        color: getColor('dark'),
        fontSize: 14,
        '&:first-of-type > *:last-of-type::before': {
          top: 10,
          bottom: 10,
        },
        '&:nth-of-type(odd)': {
          backgroundColor: getColor('disable'),
        },
      }}
    />
  );
}

function Column({
  Component = Box,
  ...restProps
}: { Component?: typeof Box } & BoxProps) {
  const { getColor } = useColorModeContext();

  return (
    <Component
      {...restProps}
      sx={{
        p: '12.5px 9px',
        '& + &': {
          position: 'relative',
          '&::before': {
            content: '""',
            position: 'absolute',
            width: '0.8px',
            top: 0,
            bottom: 0,
            left: -2,
            backgroundColor: getColor('dark'),
            opacity: 0.1,
          },
        },
      }}
    />
  );
}

export function ColumnView({ bibleBook, onNewIdentifierSave }: TableProps) {
  const buildItems = (original = true) => {
    const list: (
      | {
          nodeType: 'chapter' | 'verse';
          originalValue: string;
          currentValue: string;
          translationValues: string[];
          identifierId: number;
          numUpVotes: number;
          numDownVotes: number;
          numPosts: number;
        }
      | {
          nodeType: 'word';
          value: string;
        }
    )[] = [];

    for (const { identifier, verses } of bibleBook.chapters) {
      const identifierSources = original
        ? [identifier.values[0]]
        : identifier.values;

      for (const { value: currentValue, ...rest } of identifierSources) {
        list.push({
          nodeType: 'chapter' as const,
          originalValue: identifier.values[0].value,
          currentValue,
          translationValues: identifier.values
            .slice(1)
            .map(({ value }) => value),
          identifierId: identifier.id,
          ...rest,
        });
      }

      for (const { identifier, text } of verses) {
        const identifierSources = original
          ? [identifier.values[0]]
          : identifier.values;

        for (const { value: currentValue, ...rest } of identifierSources) {
          list.push({
            nodeType: 'verse' as const,
            originalValue: identifier.values[0].value,
            currentValue,
            translationValues: identifier.values
              .slice(1)
              .map(({ value }) => value),
            identifierId: identifier.id,
            ...rest,
          });
        }

        for (const word of text.split(/\s+/g)) {
          list.push({
            nodeType: 'word' as const,
            value: word,
          });
        }
      }
    }

    return list;
  };

  const original = buildItems();
  const translation = buildItems(false);
  const numRows = Math.max(original.length, translation.length);

  return (
    <Box>
      <Row mb="11px">
        <Column Component={Header}>Original</Column>
        <Column Component={Header}>Translation</Column>
      </Row>
      {[...Array(numRows)].map((__, index) => {
        const originalItem = original[index] ? original[index] : null;
        const translationItem = translation[index] ? translation[index] : null;

        return (
          <Row key={index}>
            <Column>
              {originalItem && (
                <>
                  {originalItem.nodeType !== 'word' && (
                    <IdentifierLabel
                      {...originalItem}
                      onNewIdentifierSave={(value) =>
                        onNewIdentifierSave(originalItem.identifierId, value)
                      }
                    />
                  )}
                  {originalItem.nodeType === 'word' && originalItem.value}
                </>
              )}
            </Column>
            <Column>
              {translationItem && (
                <>
                  {translationItem.nodeType !== 'word' && (
                    <NodeData
                      col
                      {...translationItem}
                      onNewIdentifierSave={(value) =>
                        onNewIdentifierSave(translationItem.identifierId, value)
                      }
                    />
                  )}
                  {translationItem.nodeType === 'word' && translationItem.value}
                </>
              )}
            </Column>
          </Row>
        );
      })}
    </Box>
  );
}
