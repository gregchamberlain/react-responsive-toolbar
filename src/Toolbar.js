import React, { Component, PropTypes } from 'react'

export default class Toolbar extends Component {
  render() {

    const styles = getStyles(this.props, this.state)

    return (
      <div style={styles.container}>
        <div style={styles.toolbar}>
          {this.props.items}
        </div>
        <div style={styles.content}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

const getStyles = (props, state) => {
  return {
    container: {
      position: "absolute",
      overflow: props.fixed ? "hidden" : "auto",
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
    },
    toolbar: {
      height: 56,
      background: "#b535e5",
    },
    content: {
      position: "absolute",
      left: 0,
      top: 56,
      right: 0,
      bottom: 0,
      overflow: props.fixed ? "auto" : "visible",
    }
  }
}

Toolbar.defaultProps = {
  fixed: true,
};
