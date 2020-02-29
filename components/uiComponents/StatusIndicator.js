import * as React from 'react';
import { Text, View } from 'react-native';


export default StatusIndicator = (props) => {
    const badgetStyle = {
        borderRadius: props.borderRadius,
        borderColor: props.borderColor,
        borderWidth: props.borderWidth,
        backgroundColor: props.backgroundColor,
        height: props.height,
        width: props.width,
        justifyContent: 'center',
        alignItems: 'center'
    };
    return <View style={badgetStyle}>
        <Text style={{ color: props.textColor }}>{props.status}</Text>
    </View>;

}