import React, { Fragment } from 'react';

import { Box } from '@mui/material';

import { useColorModeContext } from '../../ThemeProvider';
import { IdentifierLabel } from '../IdentifierLabel';
import { NodeData } from '../NodeData';
import { Header } from './Header';
import { Content } from './Content';
import { TableProps } from '.';

export function LineBreakView({ bibleBook, onNewIdentifierSave }: TableProps) {
  const { getColor } = useColorModeContext();

  return (
    <Box>
      <Box>
        <Header>Original</Header>
        <Content>
          {bibleBook.chapters.map(({ id, identifier, verses }) => (
            <Fragment key={id}>
              <Box>
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
              </Box>
              {verses.map(({ id, identifier, text }) => (
                <Fragment key={id}>
                  <Box mt={1}>
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
                      sx={{ mr: 1 }}
                    />
                    <span>{text}</span>
                  </Box>
                </Fragment>
              ))}
            </Fragment>
          ))}
        </Content>
      </Box>
      <Box pt="20px" sx={{ borderTop: `1px solid ${getColor('middle-gray')}` }}>
        <Header>Translation</Header>
        <Content>
          {bibleBook.chapters.map(
            ({ id, identifier, verses }, chapterIndex) => (
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
                      sx={{ mt: chapterIndex + index ? 1 : 0 }}
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
                          sx={{ mt: 1 }}
                        />
                      ),
                    )}
                    <Box mt={1}>{text}</Box>
                  </Fragment>
                ))}
              </Fragment>
            ),
          )}
        </Content>
      </Box>
    </Box>
  );
}
