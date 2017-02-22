import React from 'react';
import { connect } from 'react-fela';

import mapStylesToProps from './styles';

const { string, object } = React.PropTypes;

export const Header =
  ({ text, styles = {} }) => (
    <header className={styles.container}>
      <h1 className={styles.title}>{ text }</h1>
    </header>
  );

Header.PropTypes =
  { text: string
  , styles: object
  };

export default connect(mapStylesToProps)(Header);
