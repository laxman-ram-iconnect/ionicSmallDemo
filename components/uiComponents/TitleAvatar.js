import * as React from 'react';
import { Text, View } from 'react-native';


export default TitleAvatar = (props) => {
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
    return <View style={avatarTitleStyle}>
        <Text style={{ color: props.textColor }}>{props.title}</Text>
    </View>;
}