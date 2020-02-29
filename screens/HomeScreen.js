import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import moment from 'moment'

import SearchBarInput from '../components/SearchBar';
import CustomBadge from '../components/uiComponents/CustomBadge'
import { chatData } from '../constants/dummyData';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import UserListView from '../components/uiComponents/UserListView';

export default function HomeScreen({ navigation }) {


  const openMessages = () => {
    navigation.push('Chats')
  };

  const rightIcon = <Icon name="check-all" style={{
    marginTop: 3,
    color: "#3888db",
    fontSize: 18,
    width: 18,
    height: 18
  }}></Icon>;

  const cBadge = <CustomBadge
    height={20}
    width={20}
    borderRadius={50}
    count={5} backgroundColor={'#3399ff'} textColor={'white'} />;
  return (
    <View style={styles.container}>
      <SearchBarInput />

      <ScrollView style={styles.container}>
        {
          chatData.map((chat, i) => {
            return <View key={i + 1}>
              <UserListView
                url={chat.avatar}
                onClickFunction = { openMessages }
                avatarTitle={chat.name.substring(0, 2).toUpperCase()}
                mainLabel={chat.name}
                subLabel={chat.scope}
                isMsgRead={chat.lastActiveAt ? true : false}
                rightLabel={moment(chat.joinedAt).format('HH:MM A')}
                msgCount={2}
                status={chat.status}
              />
              <View key={i + 2} style={{
                borderBottomColor: '#ececec', marginLeft: 70, marginRight: 10, marginTop: -5,
                borderBottomWidth: 1
              }}>
              </View>
            </View>
          })
        }
      </ScrollView>

    </View>
  );
}

HomeScreen.navigationOptions = {
  header: {
    style: { shadowColor: 'transparent' },
  },
};

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
    width: 188,
    marginLeft: -20,
    marginTop: 4,
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
    height: 250,
    flexDirection: "row",

    marginLeft: 14,
    marginRight: 13,
    justifyContent: 'space-between'
  },
  rightListContent: {
    flexDirection: 'row'
  }
});
