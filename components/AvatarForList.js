import * as React from 'react';
import { Avatar } from "react-native-elements";
import Icon from 'react-native-vector-icons/FontAwesome5';
import { ListItem, Badge } from 'react-native-elements'
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const AvatarForList = (props) => {
    return <Avatar
    rounded
    source={{
      uri:
      props.uri,
    }}
    editButton={{name: 'dot-single', 
    color: props.color, type: 'entypo', iconStyle: {backgroundColor: props.color, borderColor: 'white', 
borderWidth: 1, borderRadius: 50} }}
    showEditButton = {props.showEditButton}
  />
  }

export default ListItemWithAvatar = (props) =>{
   return (
    // <Text>  
    // {props.name}</Text> 
   
   <ListItem
        key={props.index}
        leftAvatar={<AvatarForList uri={props.avatar_url} color={props.color} showEditButton/>}
        title={props.name}
        subtitle={props.subtitle}
        bottomDivider
        rightTitle={<Text> {props.messageSent ?<Icon name="check-double"color="#3787db"/>: null} JAN 01 </Text>}
        rightSubtitle= {
          <Badge status="primary" value="9" />
        }
        
   /> );
}