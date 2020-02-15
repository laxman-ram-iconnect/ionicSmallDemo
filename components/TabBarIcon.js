import * as React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IonicIcons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import Colors from '../constants/Colors';

export default function TabBarIcon(props) {
  return (
    props.materialCom ?
    <Icon
      name={props.name}
      size={30}
      style={{ marginBottom: -3 }}
      color={props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
    /> : 
    props.ionicIcon ?
    <IonicIcons
      name={props.name}
      size={30}
      style={{ marginBottom: -3 }}
      color={props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
    /> :
    props.material ?
    <MaterialIcons
      name={props.name}
      size={30}
      style={{ marginBottom: -3 }}
      color={props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
    /> :
    <MaterialIcons
      name={props.name}
      size={30}
      style={{ marginBottom: 10 }}
      color={props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
    />
    
  );
}
