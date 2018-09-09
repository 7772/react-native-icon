import React, { Component } from "react";
import { Image, View } from "react-native";

import { getIcon } from "./getIcon";

class Icon extends Component {
  constructor(props) {
    super(props);

    this.state = {
      iconPath: null
    };
  }

  componentDidMount() {
    const iconPath = getIcon(this.props.iconName);
    this.setState({ iconPath: iconPath });
  }

  render() {
    return (
      <View style={this.props.componentStyle}>
        <Image
          source={this.state.iconPath}
          style={{
            width: this.props.iconSize,
            height: this.props.iconSize,
            tintColor: this.props.iconColor
          }}
        />
      </View>
    );
  }
}

export default Icon;
