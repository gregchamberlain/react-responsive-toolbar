import React, { Component, PropTypes } from 'react'

export default class ToolbarGroup extends Component {

  renderChildren = (props) => {
    return React.Children.map(props.children, child => {
      if (!child.props.highlight) {
        return React.cloneElement(child, {
          highlight: props.highlight
        })
      } else {
        return child
      }
    })
  }

  render() {

    const styles = getStyles(this.props)

    return (
      <div style={styles.container}>
        {this.renderChildren(this.props)}
      </div>
    );
  }
}

ToolbarGroup.propTypes = {
  background: PropTypes.string,
  color: PropTypes.string,
  highlight: PropTypes.string,
  float: PropTypes.string,
}

ToolbarGroup.defaultProps = {
  float: "left",
}

const getStyles = (props) => {
  return {
    container: {
      height: "100%",
      width: props.flex ? "100%" : "auto",
      float: props.float,
      color: props.color,
      background: props.background
    }
  }
}
