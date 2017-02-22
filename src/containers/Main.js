import React from 'react';
import { IndexLink, Link } from 'react-router';

const { object } = React.PropTypes;

const Main =
  (props) => {
    return (
      <div>
        <nav>
          <ul>
            <li><IndexLink to="/">Home</IndexLink></li>
            <li><Link to="/about">About</Link></li>
          </ul>
        </nav>
        { React.cloneElement(props.children, props) }
      </div>
    );
  };

Main.contextTypes =
  { renderer: object
  };

export default Main;
