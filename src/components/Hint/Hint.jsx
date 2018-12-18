// @flow
import React, { type Node } from 'react';
import cx from 'classnames';
import { getDataAttrs } from '../../dataUtils';
import type { Data } from '../../types';

import styles from './style.scss';

type Props = {|
  children?: Node,
  className?: string,
  data?: Data,
  disabled?: boolean,
  error?: boolean,
  text?: string,
|};

const Hint = ({ children, className, data, disabled, error, text }: Props) => {
  const classes = cx(styles.hint, className, {
    [styles.hintDisabled]: disabled,
    [styles.hintError]: error,
  });

  return (
    <div
      className={classes}
      {...getDataAttrs(data)}
    >
      {children || text}
    </div>
  );
};

Hint.displayName = 'Plasma@Hint';

export default Hint;
