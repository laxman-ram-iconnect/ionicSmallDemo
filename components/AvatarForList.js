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
    size="medium"
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
        leftAvatar={<AvatarForList uri={props.avatar_url} color={props.color} showEditButton={props.showEditButton}/>}
        title={<View >
        <Text style={{color:"#141414",fontSize: 17,fontWeight: "bold"}}>{props.name}</Text>
      </View>}
        subtitle={<View>
        <Text style={styles.subtitleStyle}>{props.subtitle}</Text>
      </View>}
        rightTitle={<Text style={styles.subtitleStyle}> {props.messageSent ?<Icon name="check-double"color="#3787db"/>: null} 
        { props.showEditButton ? 'JAN 01' : null} </Text>}
        rightSubtitle= {
            props.messageCount ? <Badge status="primary" value={props.messageCount} /> : null
        }
        containerStyle={{ ... props.containerStyle}}
        
   /> );
}

const styles = StyleSheet.create({
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
