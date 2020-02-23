import * as React from 'react';
import { Avatar } from "react-native-elements";
import Icon from 'react-native-vector-icons/FontAwesome5';
import { ListItem, Badge } from 'react-native-elements'
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export const ListItemAvatar = (props) => {
    return <Avatar
    rounded={props.showRounded}
    source={ props.uri ? { uri: props.uri } : null }
    size={props.size}
    editButton={props.smallIconOnAvatar}
    showEditButton = {props.showEditButton}
    title = { !props.uri ? props.title :  null }
    />
  }

export default ListItemWithAvatar = (props) =>{
   return (
    // <Text>  
    // {props.name}</Text> 
   
   <ListItem
        key={props.index}
        leftAvatar={props.leftAvatar}
        title={<View >
        <Text style={listStyles.titleStyle}>{props.name}</Text>
      </View>}
        subtitle={<View>
        <Text style={listStyles.subtitleStyle}>{props.subtitle}</Text>
      </View>}
        rightTitle={<Text style={listStyles.subtitleStyle}> {props.messageSent ?<Icon name="check-double" color="#3787db"/>: null} 
        { props.showEditButton ? props.sentDate : null} </Text>}
        rightSubtitle= {
            props.messageCount ? <Badge status="primary" value={props.messageCount} /> : null
        }
        containerStyle={{ ... props.containerStyle}}
        onPress={props.onPress}
   /> );
}

export const listStyles = StyleSheet.create({
    titleStyle: {color:"#141414",fontSize: 17,fontWeight: "bold"},
    subtitleStyle: {color:"rgba(20, 20, 20, 0.5);",fontSize: 13,fontWeight: "400"},
})

export const ProfileCard = (props) => {
    return (
        <ListItem
        key={props.index}
        leftIcon={props.leftIcon}
        rightIcon={props.rightIcon}
        leftAvatar={props.leftAvatar}
        title={props.name}
        titleStyle={props.titleStyle}
        subtitle={props.subtitle}
        subtitleStyle={props.subtitleStyle}
        bottomDivider
        rightTitle={<Text> {props.messageSent ?<Icon name="check-double"color="#3787db"/>: null} 
        { props.showEditButton ? 'JAN 01' : null} </Text>}
        rightSubtitle= {
            props.messageCount ? <Badge status="primary" value={props.messageCount} /> : null
        }
        containerStyle={{ ... props.containerStyle}}
        
   />
    )
}
