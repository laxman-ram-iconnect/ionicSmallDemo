import * as React from 'react';
import { Image } from 'react-native';


export default ImageAvatar = (props) => {
  const avatarStyle = {
    borderRadius: props.borderRadius,
    borderColor: props.borderColor,
    borderWidth: props.borderWidth,
    height: props.height,
    width: props.width
  };

  return <Image
      source={{ uri: props.url }}
      style={avatarStyle}
    ></Image>;
}