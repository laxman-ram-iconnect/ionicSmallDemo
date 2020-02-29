import * as React from 'react';
import { StyleSheet, Text, TouchableNativeFeedback, View } from 'react-native';
import ImageAvatar from './ImageAvatar';
import TitleAvatar from './TitleAvatar';
import CustomBadge from './CustomBadge';
import StatusIndicator from './StatusIndicator';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

export default UserListView = (props) => {
    return (
        <TouchableNativeFeedback onPress={props.onClickFunction}>

            <View style={styles.imageRow}>
                <View style={{ flexDirection: 'row' }}>
                    {
                        props.url ?
                            <ImageAvatar
                                height={50}
                                width={50}
                                borderRadius={50}
                                url={props.url}
                            /> : <TitleAvatar height={50}
                                width={50}
                                borderRadius={50}
                                backgroundColor={'lightgrey'}
                                title={props.avatarTitle} />
                    }
                    <View style={{marginTop: 32, marginLeft: -15}}>
                        <StatusIndicator height={18}
                            width={18}
                            borderRadius={50}
                            backgroundColor={ props.status === 'online' ? 'green' : 'orange'}
                            borderWidth={3}
                            borderColor={'white'}
                        />
                    </View>

                    <View style={styles.annaFailStackColumn}>
                        <View style={styles.annaFailStack}>
                            <Text style={styles.annaFail}>{props.mainLabel}</Text>
                        </View>
                        <Text style={styles.loremIpsum}>{props.subLabel}</Text>
                    </View>
                </View>
                <View style={styles.rightListContent}>
                    {
                        props.isMsgRead ?
                            <Icon name="check-all" style={styles.icon}></Icon>
                            : null
                    }

                    <View style={styles.loremIpsum3Column}>
                        <Text style={styles.loremIpsum3}>{props.rightLabel}</Text>
                        <View style={{ marginRight: 3, marginTop: 2 }}>
                            <CustomBadge
                                height={20}
                                width={20}
                                borderRadius={50}
                                count={props.msgCount} backgroundColor={'#3399ff'} textColor={'white'} />
                        </View>
                    </View>
                </View>
            </View>
        </TouchableNativeFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "rgba(255,255,255,1)"

    },
    text: {
        color: "#121212",
        fontSize: 24,
        // fontFamily: "roboto-regular",
        textAlign: "center",
        marginTop: 310,
        alignSelf: "center"
    },
    image1: {
        // width: 50,
        // height: 50,
        // borderRadius: 50,
        // borderColor: "#000000",
        // borderWidth: 1
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 50,
        borderColor: "#000000",
        borderWidth: 1,
        // overflow: 'hidden'
    },
    annaFail: {
        top: 0,
        left: 0,
        width: 180,
        height: 22,
        color: "#121212",
        position: "absolute",
        // justifyContent: "space-between",
        fontSize: 17,
        // fontFamily: "roboto-700",
        // lineHeight: 14
    },
    icon: {
        marginTop: 3,
        color: "#3888db",
        fontSize: 18,
        width: 18,
        height: 18
    },
    annaFailStack: {
        width: 188,
        height: 30
    },
    loremIpsum: {
        width: 170,
        height: 20,
        color: "rgba(155,155,155,1)",
        fontSize: 15,
        // fontFamily: "roboto-regular",
        lineHeight: 14
    },
    annaFailStackColumn: {
        minWidth: 188,
        marginLeft: 18,
        marginTop: 3,
        marginBottom: 1
    },
    loremIpsum3: {
        width: 66,
        height: 22,
        color: "rgba(155,155,155,1)",
        fontSize: 15,
        marginTop: -5
        // fontFamily: "roboto-regular",
        // lineHeight: 14
    },
    text2: {
        width: 13,
        height: 13,
        color: "rgba(155,155,155,1)",
        fontSize: 15,
        // fontFamily: "roboto-regular",
        lineHeight: 14,
        marginLeft: 33
    },
    loremIpsum3Column: {
        width: 66,
        marginLeft: 3,
        marginTop: 7,
        marginBottom: 4,
        flexDirection: 'column',
        alignItems: 'flex-end'
    },
    imageRow: {
        height: 82,
        flexDirection: "row",
        padding: 16,
        // marginLeft: 14,
        // marginRight: 14,
        justifyContent: 'space-between'
    },
    rightListContent: {
        flexDirection: 'row'
    }
});