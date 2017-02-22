import React from 'react';

import Header from 'components/Header';

const { object } = React.PropTypes;

const About =
  props => {
    return (
      <Header
        text="About"
        color="purple"
        fontSize={25}
      />
    );
  };

About.contextTypes =
  { renderer: object
  };

export default About;
