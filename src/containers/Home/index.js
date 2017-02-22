import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Header from 'components/Header';
import Hello from 'components/Hello';
import ActionCreators from './actions';

const Home =
  ({ subject, actions }) => {
    return (
      <div>
        <Header
          text='Pure Components Rock! yay!  🎸🎶'
          color='purple'
          fontSize ={17}
        />
        <Hello subject={subject} setSubject={actions.setSubject} />
      </div>
    );
  };


const mapState =
  state => {
    return (
      { subject: state.subject
      }
    );
  };

const mapDispatch =
  dispatch => {
    return (
      { actions: bindActionCreators(ActionCreators, dispatch)
      }
    );
  };

export default connect(mapState, mapDispatch)(Home);
