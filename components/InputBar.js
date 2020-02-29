import React, { Component } from 'react';
import { Text, View, StyleSheet, ScrollView, KeyboardAvoidingView, TextInput, TouchableNativeFeedback, Keyboard } from 'react-native';
import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import AutogrowInput from 'react-native-autogrow-input';
export default class InputBar extends Component {

  componentWillReceiveProps(nextProps) {
    if (nextProps.text === '') {
      this.autogrowInput.resetInputText();
    }
  }

  render() {
    return (
      <View style={styles.inputBar}>
        <View style={{marginTop: 5}}>
          <AntDesign name="pluscircle" color="lightgrey" size={30} />
        </View>
        <View style={{ padding: 10, marginTop: 3, marginLeft: 50, zIndex: 100, position: 'absolute' }}>
          {
            this.props.text ? null :
              <FontAwesome5 name="smile" color="grey" size={20} />
          }
        </View>
        <AutogrowInput style={styles.textBox}
          ref={(ref) => { this.autogrowInput = ref }}
          multiline={true}
          defaultHeight={40}
          onChangeText={(text) => this.props.onChangeText(text)}
          onContentSizeChange={this.props.onSizeChange}
          value={this.props.text}>
        </AutogrowInput>
        <TouchableNativeFeedback onPress={() => this.props.onSendPressed()}>
          <MaterialCommunityIcons name="arrow-up-circle" color=" rgba(51, 153, 255, 0.92);" size={35} iconStyle={{ marginTop: 50 }} />
        </TouchableNativeFeedback>

        {/* <TouchableHighlight style={styles.sendButton} >
                  <Text style={{color: 'white'}}>Send</Text>
              </TouchableHighlight> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 5,
    paddingVertical: 3,
    marginBottom: 15
  },

  textBox: {
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'lightgrey',
    flex: 1,
    fontSize: 16,
    paddingHorizontal: 10,
    backgroundColor: 'lightgrey',
    marginLeft: 10,
    marginRight: 10
  }
})