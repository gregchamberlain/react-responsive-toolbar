import React, { Component, PropTypes } from 'react'

export default class ToolbarGroup extends Component {

  renderChildren = (props) => {
    return React.Children.map(props.children, child => {
      console.log(child)
      console.log(child.props);
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
  float: PropTypes.string,
}

ToolbarGroup.defaultProps = {
  float: "left",
}

const getStyles = (props) => {
  return {
    container: {
      height: "100%",
      float: props.float,
      color: props.color,
    }
  }
}
