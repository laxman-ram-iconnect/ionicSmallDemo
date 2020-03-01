import React, { Component } from 'react';
import { Text, View, StyleSheet, ScrollView, KeyboardAvoidingView, TextInput, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { Avatar } from "react-native-elements";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
export default class MessageBubble extends Component {

  constructor(props) {
    super(props)
    this.state = {
      showDetails: false,
      id: ''
    }
  }
  showTime = (id) => {
    this.setState({ showDetails: !this.state.showDetails })
    this.setState({ id: id });
    console.log("on dbl click");
  }
  render() {
    const { id, direction } = this.props;
    var leftSpacer = this.props.direction === 'left' ? null : <View style={{ width: 120 }} />;
    var rightSpacer = this.props.direction === 'left' ? <View style={{ width: 80 }} /> : null;

    var bubbleStyles = this.props.direction === 'left' ? [styles.messageBubble, styles.messageBubbleLeft] : [styles.messageBubble, styles.messageBubbleRight];

    var bubbleTextStyle = this.props.direction === 'left' ? styles.messageBubbleTextLeft : styles.messageBubbleTextRight;

    return (
      <TouchableWithoutFeedback onPress={() => this.showTime(id, direction)}>
        <View style={{ paddingLeft: 5, justifyContent: 'space-between', marginBottom: 10, flexDirection: 'row' }}>
          {this.props.direction === 'left' && <Avatar
            rounded
            containerStyle={{ marginTop: "auto", width: 25, height: 25}}
            source={{
              uri:
                'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
            }}
          />}
          {leftSpacer}
          <View style={{
            marginRight: 10,
            marginLeft: 10,
            flex: 1,
          }}>
            <View style={bubbleStyles} >
              <Text style={bubbleTextStyle}>
                {this.props.text}
              </Text>
            </View>
            {
              this.state.id === id && this.state.showDetails ?
                <View style={this.props.direction === 'left' ? styles.detailsBubbleLeft : styles.detailsBubbleRight}>
                  <Text style={{ marginRight: 5 }}>09.15 AM</Text>
                  {
                    this.props.direction === 'left' ? null :
                      <Icon name="check-all" style={styles.icon}></Icon>
                  }
                </View> : null
            }
          </View>

          {rightSpacer}
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({

  //MessageBubble
  detailsBubbleRight: {
    borderRadius: 20,
    // marginRight: 10,
    // marginLeft: 10,
    paddingHorizontal: 10,
    // paddingVertical: 5,
    flexDirection: 'row',
    flex: 1,
    paddingTop: 5,
    paddingBottom: 5,
    justifyContent: 'flex-end'
  },
  detailsBubbleLeft: {
    borderRadius: 20,
    // marginRight: 10,
    // marginLeft: 10,
    paddingHorizontal: 10,
    // paddingVertical: 5,
    flexDirection: 'row',
    flex: 1,
    paddingTop: 5,
    paddingBottom: 5
  },
  messageBubble: {
    borderRadius: 20,
    marginTop: 8,
    // marginRight: 10,
    // marginLeft: 10,
    // paddingHorizontal: 10,
    // paddingVertical: 5,
    flexDirection: 'row',
    flex: 1,
    padding: 10
  },

  messageBubbleLeft: {
    backgroundColor: ' rgba(248, 248, 248, 0.92);',
  },

  messageBubbleTextLeft: {
    color: 'black'
  },

  messageBubbleRight: {
    backgroundColor: ' rgba(51, 153, 255, 0.92);'
  },

  messageBubbleTextRight: {
    color: 'white'
  },
  icon: {
    color: '#3888db',
    fontSize: 18,
    width: 18,
    height: 18
  }
})