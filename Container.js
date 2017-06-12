import React from 'react';
import View from './components/View';
import fetchData from './FetchData/main';
// String constants
const NAMESPACE = "Autographa";

class Container extends React.Component {
  constructor() {
    super();
    this.state = {
      modalVisibility: false,
      modalSettingsVisibility: false,
    };
  }

  view() {
    let view = <div />
    let { contextId } = this.props.contextIdReducer;
    if (contextId) {
      view = <View
        {...this.props}
         modalVisibility={this.state.modalVisibility}
         modalSettingsVisibility={this.state.modalSettingsVisibility}
          showModal={() => this.setState({ modalVisibility: true, selectedPane: false })}
          showSettingsModal={() => this.setState({ modalSettingsVisibility: true, selectedPane: false })}
          hideModal={() => this.setState({ modalVisibility: false, modalSettingsVisibility:false })}
      />
    }
    return view;
  }

  render() {
    return (
      this.view()
    );
  }
}

module.exports = {
  name: NAMESPACE,
  container: Container,
  fetchData: fetchData
};
