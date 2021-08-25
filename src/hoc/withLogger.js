import React from "react";

const withLogger = (Component, name) => {
  return class extends React.Component {
    componentDidMount() {
      //Connect socket
      console.log(name + " mount oldu");
    }

    componentWillUnmount() {
      // disconnect socket
      console.log(name + " unmount oldu");
    }
    render() {
      return <Component {...this.props} />;
    }
  };
};
export default withLogger;
