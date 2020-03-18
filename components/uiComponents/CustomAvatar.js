import * as React from 'react';
import { Image } from 'react-native';
import { Text, View } from 'react-native';

export default CustomAvatar = (props) => {
  const avatarStyle = {
    borderRadius: props.borderRadius,
    borderColor: props.borderColor,
    borderWidth: props.borderWidth,
    height: props.height,
    width: props.width
  };
  const avatarTitleStyle = {
    borderRadius: props.borderRadius,
    borderColor: props.borderColor,
    borderWidth: props.borderWidth,
    backgroundColor: props.backgroundColor,
    height: props.height,
    width: props.width,
    justifyContent: 'center',
    alignItems: 'center'
  };
  let userTitle = null;
  if (props.title) {
    const titleArray = props.title.split(' ');
    if (titleArray.length > 1) {
      userTitle = titleArray.map(title => title[0]).join('').toUpperCase().substring(0, 2);
    } else {
      userTitle = props.title.substring(0, 2);
    }
  }
  return props.url ? <Image
    source={{ uri: props.url }}
    style={avatarStyle}></Image> :
    <View style={avatarTitleStyle}>
      <Text style={{ color: props.textColor }}>{userTitle}</Text>
    </View>;
}