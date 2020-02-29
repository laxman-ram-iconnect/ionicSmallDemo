import React, { Component } from 'react';
import { Text, View, StyleSheet, ScrollView, KeyboardAvoidingView, TextInput, TouchableHighlight, Keyboard } from 'react-native';
import { Avatar } from "react-native-elements";
export default class MessageBubble extends Component {

    showTime = () =>{
      console.log("on dbl click");
    }
    render() {
  
      var leftSpacer = this.props.direction === 'left' ? null : <View style={{width: 120}}/>;
      var rightSpacer = this.props.direction === 'left' ? <View style={{width: 80}}/> : null;
  
      var bubbleStyles = this.props.direction === 'left' ? [styles.messageBubble, styles.messageBubbleLeft] : [styles.messageBubble, styles.messageBubbleRight];
  
      var bubbleTextStyle = this.props.direction === 'left' ? styles.messageBubbleTextLeft : styles.messageBubbleTextRight;
  
      return (
          <View style={{paddingLeft:10,justifyContent: 'space-between',marginBottom:10, flexDirection: 'row'}}>
         {this.props.direction === 'left' && <Avatar
    rounded
    containerStyle={{ marginTop: "auto",width:25,height:25}}
    source={{
      uri:
        'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    }}
  />}
              {leftSpacer}
              <View style={bubbleStyles} onClick={this.showTime} >
                <Text style={bubbleTextStyle}>
                  {this.props.text}
                </Text>
              </View>
              {rightSpacer}
            </View>
        );
    }
  }

  const styles = StyleSheet.create({
  
    //MessageBubble
  
    messageBubble: {
        borderRadius: 20,
        marginTop: 8,
        marginRight: 10,
        marginLeft: 10,
        paddingHorizontal: 10,
        paddingVertical: 5,
        flexDirection:'row',
        flex: 1,
        paddingTop:5,
        paddingBottom:8
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
  })