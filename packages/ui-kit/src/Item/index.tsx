import { Box } from '@mui/material';

import { Votes } from '../Votes';
import { Posts } from '../Posts';
import React from 'react';
import { Node, Relationship } from 'node-type';
import { ItemBox, ArrowSvg, PropertyKeyBlockBox } from './styled';

export const Item = ({
  type,
  propertyKeys,
  success = false,
  warning = false,
  onClick,
  showRelation = false,
}: {
  type: string;
  propertyKeys: Node['propertyKeys'] | Relationship['propertyKeys'];
  success?: boolean;
  warning?: boolean;
  onClick?: () => void;
  showRelation?: boolean;
}) => {
  return (
    <ItemBox
      success={success}
      warning={warning}
      onClick={onClick}
      showRelation={showRelation}
    >
      {showRelation && (
        <ArrowSvg viewBox="0 0 50 50">
          <path d="M14 0 L14 36 L42 36 L42 39 L48 35 L42 31 L42 34 L16 34 L16 0 Z" />
        </ArrowSvg>
      )}
      <Box>{type}</Box>
      {propertyKeys.length > 0 && (
        <Box sx={{ mt: '8px' }}>
          {propertyKeys.map(
            (
              { property_key, upVotes, downVotes, posts, propertyValue },
              index,
            ) => (
              <PropertyKeyBlockBox key={index}>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    mb: '3px',
                  }}
                >
                  <Votes upVotes={upVotes} downVotes={downVotes} />
                  <Posts posts={posts} />
                  <Box>{property_key}</Box>
                </Box>
                <Box
                  sx={{
                    marginLeft: '20px',
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                    }}
                  >
                    <Votes
                      upVotes={propertyValue.upVotes}
                      downVotes={propertyValue.downVotes}
                    />
                    <Posts posts={propertyValue.posts} />
                    <Box sx={{ p: '3px' }}>
                      {JSON.parse(propertyValue.property_value).value}
                    </Box>
                  </Box>
                </Box>
              </PropertyKeyBlockBox>
            ),
          )}
        </Box>
      )}
    </ItemBox>
  );
};
