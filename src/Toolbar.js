import React, { Component, PropTypes } from 'react'

export default class Toolbar extends Component {

  renderItems = (props) => {
    return React.Children.map(props.items, item => {
      if (!item.props.highlight) {
        return React.cloneElement(item, {
          highlight: props.highlight
        })
      } else {
        return item
      }
    })
  }

  render() {

    const styles = getStyles(this.props, this.state)
    const items = this.renderItems(this.props);

    return (
      <div style={styles.container}>
        <div style={styles.toolbar}>
          {items}
        </div>
        <div style={styles.content}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

Toolbar.propTypes = {
  background: PropTypes.string,
  color: PropTypes.string,
  fixed: PropTypes.bool,
  highlight: PropTypes.string,
  sidebarIcon: PropTypes.bool,
}

Toolbar.defaultProps = {
  background: "#444",
  fixed: true,
  color: "#eee",
  sidebarIcon: false,
};

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
      background: props.background,
      color: props.color,
      paddingLeft: props.sidebarIcon ? 56 : 0,
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
