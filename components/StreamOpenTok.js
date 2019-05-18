import React, {Component} from 'react';
import {Dimensions, Image, View} from "react-native";
import {OTPublisher, OTSession, OTSubscriber} from "opentok-react-native";

export default class extends Component {

  constructor(props) {
    super(props);
        this.apiKey = '46327222';
    this.sessionId = '2_MX40NjMyNzIyMn5-MTU1ODE5MzgwOTU5NH5zY0NuV3pVejFxaW51K0k4Z0owdG9wTzZ-fg';
    this.token = 'T1==cGFydG5lcl9pZD00NjMyNzIyMiZzaWc9MzAzN2VlYzEzNjAzNTJiNjMwNGJlNWZiZjY2M2M3MDU3ZjVmMDQwZTpzZXNzaW9uX2lkPTJfTVg0ME5qTXlOekl5TW41LU1UVTFPREU1TXpnd09UVTVOSDV6WTBOdVYzcFZlakZ4YVc1MUswazRaMG93ZEc5d1R6Wi1mZyZjcmVhdGVfdGltZT0xNTU4MTkzOTIwJm5vbmNlPTAuNTg0NTc3NzA5OTI1MTQwMSZyb2xlPW1vZGVyYXRvciZleHBpcmVfdGltZT0xNTU4MTk3NTIxJmluaXRpYWxfbGF5b3V0X2NsYXNzX2xpc3Q9';
  }

  componentDidMount() {

  }

  render() {
    let screenWidth = Dimensions.get('window').width;
    let screenHeight = Dimensions.get('window').height;
    return (
      <OTSession
        apiKey={this.apiKey}
        sessionId={this.sessionId}
        token={this.token}
      >
        {/*<OTPublisher style={{width: screenWidth, height: screenHeight}}/>*/}
        <OTSubscriber style={{width: screenWidth, height: screenHeight}}/>
      </OTSession>
    )
  }
}
