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

ToolbarItem.propTypes = {
  color: PropTypes.string,
  background: PropTypes.string,
  highlight: PropTypes.string,
  href: PropTypes.string,
}

const getStyles = (props) => {
  return {
    container: {
      display: "flex",
      float: "left",
      alignItems: "center",
      height: "100%",
      padding: "10px 15px",
      boxSizing: "border-box",
      background: props.background,
      cursor: "pointer",
      color: props.color,
      ':hover': {
        background: props.highlight ? props.highlight : "rgba(255, 255, 255, .2)",
      },
    }
  }
}

export default Radium(ToolbarItem);
