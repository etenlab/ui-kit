import React, { Fragment } from 'react';

import { Box } from '@mui/material';

import { IdentifierLabel } from '../IdentifierLabel';
import { NodeData } from '../NodeData';
import { Header } from './Header';
import { Content } from './Content';
import { TableProps } from '.';

export function RowView({ bibleBook, onNewIdentifierSave }: TableProps) {
  return (
    <Box whiteSpace="nowrap" overflow="auto visible">
      <Box width="fit-content" minWidth="100%">
        <Box>
          <Header>Original</Header>
          <Content>
            {bibleBook.chapters.map(({ id, identifier, verses }) => (
              <Fragment key={id}>
                <IdentifierLabel
                  short
                  nodeType="chapter"
                  originalValue={identifier.values[0].value}
                  currentValue={identifier.values[0].value}
                  translationValues={identifier.values
                    .slice(1)
                    .map(({ value }) => value)}
                  onNewIdentifierSave={(value) =>
                    onNewIdentifierSave(identifier.id, value)
                  }
                />
                {verses.map(({ id, identifier, text }) => (
                  <Fragment key={id}>
                    <IdentifierLabel
                      short
                      nodeType="verse"
                      originalValue={identifier.values[0].value}
                      currentValue={identifier.values[0].value}
                      translationValues={identifier.values
                        .slice(1)
                        .map(({ value }) => value)}
                      onNewIdentifierSave={(value) =>
                        onNewIdentifierSave(identifier.id, value)
                      }
                      sx={{ mx: 2 }}
                    />
                    <span>{text}</span>
                  </Fragment>
                ))}
              </Fragment>
            ))}
          </Content>
        </Box>
        <Box>
          <Header>Translation</Header>
          <Content>
            {bibleBook.chapters.map(({ id, identifier, verses }) => (
              <Fragment key={id}>
                {identifier.values.map(
                  ({ value, numUpVotes, numDownVotes, numPosts }, index) => (
                    <NodeData
                      key={index}
                      short
                      inline
                      nodeType="chapter"
                      originalValue={identifier.values[0].value}
                      currentValue={value}
                      translationValues={identifier.values
                        .slice(1)
                        .map(({ value }) => value)}
                      numUpVotes={numUpVotes}
                      numDownVotes={numDownVotes}
                      numPosts={numPosts}
                      onNewIdentifierSave={(value) =>
                        onNewIdentifierSave(identifier.id, value)
                      }
                      sx={{ mr: 2.5 }}
                    />
                  ),
                )}
                {verses.map(({ id, identifier, text }) => (
                  <Fragment key={id}>
                    {identifier.values.map(
                      (
                        { value, numUpVotes, numDownVotes, numPosts },
                        index,
                      ) => (
                        <NodeData
                          key={index}
                          short
                          inline
                          nodeType="verse"
                          originalValue={identifier.values[0].value}
                          currentValue={value}
                          translationValues={identifier.values
                            .slice(1)
                            .map(({ value }) => value)}
                          numUpVotes={numUpVotes}
                          numDownVotes={numDownVotes}
                          numPosts={numPosts}
                          onNewIdentifierSave={(value) =>
                            onNewIdentifierSave(identifier.id, value)
                          }
                          sx={{ mr: 2.5 }}
                        />
                      ),
                    )}
                    <span>{text}</span>
                  </Fragment>
                ))}
              </Fragment>
            ))}
          </Content>
        </Box>
      </Box>
    </Box>
  );
}
