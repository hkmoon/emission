import React from "react"
import { Image, TouchableWithoutFeedback, View } from "react-native"
import styled from "styled-components/native"

import { Colors } from "lib/data/colors"
import { Fonts } from "lib/data/fonts"
import SwitchBoard from "lib/NativeModules/SwitchBoard"
import Separator from "../Separator"

interface Props extends React.Props<DarkNavigationButton> {
  href?: string
  onPress?: () => void
  title: string
  style?: any
}

const BackgroundView = styled.View`
  background-color: ${Colors.Black};
  padding-left: 20px;
  padding-top: 13px;
  padding-bottom: 9px;
  padding-right: 6px;
`

const Text = styled.Text`
  font-family: "${Fonts.GaramondRegular}";
  font-size: 15;
  color: ${Colors.White};
`

const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
`

export default class DarkNavigationButton extends React.Component<Props, any> {
  render() {
    return (
      <BackgroundView style={this.props.style}>
        <TouchableWithoutFeedback onPress={this.openLink.bind(this)}>
          <Row>
            <Text>
              {this.props.title}
            </Text>
            <Image source={require("../../../../images/horizontal_chevron_white.png")} />
          </Row>
        </TouchableWithoutFeedback>
      </BackgroundView>
    )
  }

  openLink() {
    if (this.props.href) {
      SwitchBoard.presentNavigationViewController(this, this.props.href)
    } else {
      this.props.onPress()
    }
  }
}
