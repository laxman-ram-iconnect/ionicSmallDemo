import React, { Component } from 'react';
import { Text, View, StyleSheet, ScrollView, KeyboardAvoidingView, TextInput, TouchableNativeFeedback, Keyboard } from 'react-native';
import KeyboardSpacer from 'react-native-keyboard-spacer';
import AutogrowInput from 'react-native-autogrow-input';
import { Avatar } from "react-native-elements";
import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import MessageBubble from "../components/MassageBubble";
import InputBar from "../components/InputBar";
import Ionicons from "react-native-vector-icons/Ionicons";
//used to make random-sized messages
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// The actual chat view itself- a ScrollView of BubbleMessages, with an InputBar at the bottom, which moves with the keyboard
export default class ChatView extends Component {

  constructor(props) {
    super(props);

    const { navigation } = props;

    navigation.setOptions(
      {
        headerTitleStyle: { textAlign: 'center', flex: 1 },
        headerTitle: (titleProps) => {
          return <View style={{ alignItems: "center", textAlign: 'center' }}>
            <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Joe Lane</Text>
            <Text style={{ color: '#3399ff' }}>online</Text>
          </View>
        },
        headerLeft: (props1) => {
          return ( /* Your custom header */
            <TouchableNativeFeedback onPress={props1.onPress}>
              <View style={{ marginLeft: 12, flexDirection: 'row' }}>
                <Ionicons name="ios-arrow-back" style={{
                  fontSize: 27,
                  width: 20,
                  height: 27,
                  fontWeight: '700',
                  color: '#2685e4'
                }} />
                <View style={{ marginLeft: -5, justifyContent: 'center', alignItems: 'center' }}>
                  <Text style={{ color: '#3399ff', fontWeight: '500', fontSize: 18 }}>Chats</Text>
                </View>
              </View>
            </TouchableNativeFeedback>
          )
        },
        headerRight: (rightProps) => {
          return <View style={{ marginRight: 12 }}>
            <ImageAvatar
              height={35}
              width={35}
              borderRadius={50}
              url={'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg'}
            />
          </View>
        }
      }
    )
    var loremIpsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ac orci augue. Sed fringilla nec magna id hendrerit. Proin posuere, tortor ut dignissim consequat, ante nibh ultrices tellus, in facilisis nunc nibh rutrum nibh.';

    var numberOfMessages = 20;

    var messages = [];

    for (var i = 0; i < numberOfMessages; i++) {
      var messageLength = getRandomInt(10, 120);

      var direction = getRandomInt(1, 2) === 1 ? 'right' : 'left';

      message = loremIpsum.substring(0, messageLength);

      messages.push({
        direction: direction,
        text: message
      })
    }

    this.state = {
      messages: messages,
      inputBarText: ''
    }
  }

  componentWillMount() {
    this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this.keyboardDidShow.bind(this));
    this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this.keyboardDidHide.bind(this));
  }

  componentWillUnmount() {
    this.keyboardDidShowListener.remove();
    this.keyboardDidHideListener.remove();
  }

  keyboardDidShow(e) {
    this.scrollView.scrollToEnd();
  }

  keyboardDidHide(e) {
    this.scrollView.scrollToEnd();
  }

  componentDidMount() {
    setTimeout(function () {
      this.scrollView.scrollToEnd();
    }.bind(this))
  }

  componentDidUpdate() {
    setTimeout(function () {
      this.scrollView.scrollToEnd();
    }.bind(this))
  }

  _sendMessage() {
    this.state.messages.push({ direction: "right", text: this.state.inputBarText });

    this.setState({
      messages: this.state.messages,
      inputBarText: ''
    });
  }

  _onChangeInputBarText(text) {
    console.log("change text", text);
    this.setState({
      inputBarText: text
    });
  }

  _onInputSizeChange() {
    setTimeout(function () {
      this.scrollView.scrollToEnd({ animated: false });
    }.bind(this))
  }


  render() {

    var messages = [];

    this.state.messages.forEach(function (message, index) {
      messages.push(
        <MessageBubble key={index} direction={message.direction} text={message.text} id={index+1}/>
      );
    });

    return (
      <View style={styles.outer}>
        <ScrollView ref={(ref) => { this.scrollView = ref }} style={styles.messages}>
          {messages}
        </ScrollView>
        <InputBar onSendPressed={() => this._sendMessage()}
          onSizeChange={() => this._onInputSizeChange()}
          onChangeText={(text) => this._onChangeInputBarText(text)}
          text={this.state.inputBarText} />
        <KeyboardSpacer />
      </View>
    );
  }
}







const styles = StyleSheet.create({


  outer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: 'white'
  },

  messages: {
    flex: 1
  },
})