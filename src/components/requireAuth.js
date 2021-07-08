import React, { Component } from 'react';
import { connect } from 'react-redux';

export default (ChildComponent) => {
  class ComposedComponent extends Component {
    shouldNavigateAway() {
      if (!this.props.auth) {
        this.props.history.push('/');
      }
    }

    // Component just rendered
    componentDidMount() {
        this.shouldNavigateAway()
    }
    // Component just got updated
    componentDidUpdate() {
        this.shouldNavigateAway()   
    }
    render() {
      return <ChildComponent />
    }
  }

  const mapStateToProps = (state) => {
    return { auth: state.auth }
  }

  return connect(mapStateToProps)(ComposedComponent);
};

