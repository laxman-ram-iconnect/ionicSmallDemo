import * as React from 'react';
import { Avatar } from "react-native-elements";
import Icon from 'react-native-vector-icons/FontAwesome5';
import { ListItem, Badge } from 'react-native-elements'
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';


export const CircleAvatar = (props) => {
  const avatarStyle = {
    borderRadius: props.borderRadius,
    borderColor: props.borderColor,
    borderWidth: props.borderWidth,
    height: 50,
    width: 50
  };
  const avatarTitleStyle = {
    borderRadius: 50,
    borderColor: props.borderColor,
    borderWidth: props.borderWidth,
    backgroundColor: 'lightgrey',
    height: 50,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center'
  };
  return props.url ?
    <Image
      source={{ uri: props.url }}
      style={avatarStyle}
    ></Image> :
    <View style={avatarTitleStyle}><Text>{props.title}</Text></View>
}

export const CustomizedBadge = (props) => {
  const badgetStyle = {
    borderRadius: 50,
    borderColor: props.borderColor,
    borderWidth: props.borderWidth,
    backgroundColor: props.backgroundColor,
    height: 20,
    width: 20,
    justifyContent: 'center',
    alignItems: 'center'
  };
  return <View style={badgetStyle}><Text style={{color: props.textColor}}>{props.count}</Text></View>;

}
export const ListItemAvatar = (props) => {
  return <Avatar
    rounded={props.showRounded}
    source={props.uri ? { uri: props.uri } : null}
    size={props.size}
    editButton={props.smallIconOnAvatar}
    showEditButton={props.showEditButton}
    title={!props.uri ? props.title : null}
  />
}

export default ListItemWithAvatar = (props) => {
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
      rightTitle={<Text style={listStyles.subtitleStyle}> {props.messageSent ? <Icon name="check-double" color="#3787db" /> : null}
        {props.showEditButton ? props.sentDate : null} </Text>}
      rightSubtitle={
        props.messageCount ? <CustomBadge backgroundColor='#3888db' count={props.messageCount} /> : null
      }
      containerStyle={{ ...props.containerStyle }}
      onPress={props.onPress}
    />);
}

export const listStyles = StyleSheet.create({
  titleStyle: { color: "#141414", fontSize: 17, fontWeight: "bold" },
  subtitleStyle: { color: "rgba(20, 20, 20, 0.5);", fontSize: 13, fontWeight: "400" },
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
      rightTitle={<Text> {props.messageSent ? <Icon name="check-double" color="#3787db" /> : null}
        {props.showEditButton ? 'JAN 01' : null} </Text>}
      rightSubtitle={
        props.messageCount ? <CustomBadge backgroundColor='#3888db' count={props.messageCount} /> : null
      }
      containerStyle={{ ...props.containerStyle }}

    />
  )
}

export const CustomBadge = (props) => {
  return <Badge value={props.count} badgeStyle={{
    backgroundColor: props.backgroundColor,
    borderWidth: props.borderWidth, borderColor: props.borderColor
  }} />
}


// import React, { Component } from "react";
// import { StyleSheet, View, Text, Image } from "react-native";
// import Icon from "react-native-vector-icons/MaterialCommunityIcons";

// function Untitled(props) {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.text}>
//         Start from scratch{"\n"}
//         {"\n"}or{"\n"}
//         {"\n"}Drag and drop a Sketch file
//       </Text>
//       <View style={styles.imageRow}>
//         <Image
//           source={require("../assets/images/kisspng-heist-film-netflix-autoadhesivo-television-sticker-vinilo-5b183b809eb655.6878247915283147526501.jpg")}
//           resizeMode="contain"
//           style={styles.image}
//         ></Image>
//         <View style={styles.annaFailStackColumn}>
//           <View style={styles.annaFailStack}>
//             <Text style={styles.annaFail}>Anna Fail</Text>
//             <Icon name="check-all" style={styles.icon}></Icon>
//           </View>
//           <Text style={styles.loremIpsum}>Lorem Ipsum</Text>
//         </View>
//         <View style={styles.loremIpsum3Column}>
//           <Text style={styles.loremIpsum3}>09.40pm</Text>
//           <Text style={styles.text2}>5</Text>
//         </View>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "rgba(255,255,255,1)"
//   },
//   text: {
//     color: "#121212",
//     fontSize: 24,
//     fontFamily: "roboto-regular",
//     textAlign: "center",
//     marginTop: 310,
//     alignSelf: "center"
//   },
//   image: {
//     width: 50,
//     height: 50,
//     borderRadius: 50,
//     borderColor: "#000000",
//     borderWidth: 1
//   },
//   annaFail: {
//     top: 3,
//     left: 0,
//     width: 180,
//     height: 22,
//     color: "#121212",
//     position: "absolute",
//     justifyContent: "space-between",
//     fontSize: 17,
//     fontFamily: "roboto-700",
//     lineHeight: 14
//   },
//   icon: {
//     top: 0,
//     left: 170,
//     position: "absolute",
//     color: "#3888db",
//     fontSize: 18,
//     width: 18,
//     height: 18
//   },
//   annaFailStack: {
//     width: 188,
//     height: 25
//   },
//   loremIpsum: {
//     width: 170,
//     height: 20,
//     color: "rgba(155,155,155,1)",
//     fontSize: 15,
//     fontFamily: "roboto-regular",
//     lineHeight: 14
//   },
//   annaFailStackColumn: {
//     width: 188,
//     marginLeft: 26,
//     marginTop: 4,
//     marginBottom: 1
//   },
//   loremIpsum3: {
//     width: 66,
//     height: 22,
//     color: "rgba(155,155,155,1)",
//     fontSize: 15,
//     fontFamily: "roboto-regular",
//     lineHeight: 14
//   },
//   text2: {
//     width: 13,
//     height: 13,
//     color: "rgba(155,155,155,1)",
//     fontSize: 15,
//     fontFamily: "roboto-regular",
//     lineHeight: 14,
//     marginLeft: 33
//   },
//   loremIpsum3Column: {
//     width: 66,
//     marginLeft: 3,
//     marginTop: 7,
//     marginBottom: 8
//   },
//   imageRow: {
//     height: 50,
//     flexDirection: "row",
//     marginTop: -305,
//     marginLeft: 14,
//     marginRight: 13
//   }
// });

// export default Untitled;
