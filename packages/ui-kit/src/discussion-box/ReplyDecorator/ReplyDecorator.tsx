import React from 'react';

import { StandardDecorator, StandardDecoratorProps } from './StandardDecorator';
import { DeletedDecorator } from './DeletedDecorator';

export function ReplyDecorator({
  data,
  deleted = false,
}: {
  data?: StandardDecoratorProps;
  deleted?: boolean;
}) {
  return deleted ? <DeletedDecorator /> : <StandardDecorator {...data!} />;
}
