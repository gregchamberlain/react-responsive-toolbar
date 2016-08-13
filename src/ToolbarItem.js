import React, { Component, PropTypes } from 'react'
import Radium from 'radium'

class ToolbarItem extends Component {
  render() {

    const styles = getStyles(this.props);

    return (
      <div style={styles.container}>
        {this.props.children}
      </div>
    );
  }
}

const getStyles = (props) => {
  return {
    container: {
      display: "inline-flex",
      alignItems: "center",
      height: "100%",
      color: "#ccc",
      padding: "10px 15px",
      boxSizing: "border-box",
      cursor: "pointer",
      ':hover': {
        background: "rgba(255, 255, 255, .1)",
        color: "#eee",
      },
    }
  }
}

export default Radium(ToolbarItem);
