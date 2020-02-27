import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import SearchBarInput from '../components/SearchBar';
import { CircleAvatar, CustomBadge } from '../components/AvatarForList';
import { chartData } from '../constants/dummyData';
import { HeaderTitle } from '@react-navigation/stack';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

export default function HomeScreen({ navigation }) {

  // pass props for smallIcon on avatar
  const smallIconOnAvatar = (props) => {
    return {
      name: 'dot-single',
      color: props.color, type: 'entypo',
      iconStyle: props.iconStyle
    }
  }
  return (
    <View style={styles.container}>
      <SearchBarInput />

      <ScrollView style={styles.container}>
        {/* {
    chartData.map((l, i) => (
      <View key={i+1}>
        <ListItemWithAvatar 
          onPress={() => navigation.push('Chats')}
          leftAvatar={ <ListItemAvatar uri={l.avatar_url}
                        showRounded={true}
                        size={'medium'}
                        smallIconOnAvatar={smallIconOnAvatar({backgroundColor:l.color, color: l.color ? l.color : 'grey',
                              iconStyle: {backgroundColor: l.color, borderColor: 'white', 
                              borderWidth: 1, borderRadius: 50}})}
                        showEditButton={true} // if ture will show smallIcon
                        title={l.name.substring(0, 2).toUpperCase()}
                        /> }
            {...l}
            index={i} 
            key={i+3} 
            showEditButton />
      <View key={i+2} style={{ borderBottomColor: '#ececec',marginLeft:70,marginRight:10,marginTop:-5,
      borderBottomWidth: 1}}>
      </View>
      </View>
    // <Text>{i}</Text>
    ))
  } */}

        <View >

          <View style={styles.imageRow}>
            <CircleAvatar url={'https://raw.githubusercontent.com/AboutReact/sampleresource/master/old_logo.png'}
            />


            <View style={styles.annaFailStackColumn}>
              <View style={styles.annaFailStack}>
                <Text style={styles.annaFail}>Anna Fail</Text>

              </View>
              <Text style={styles.loremIpsum}>Lorem Ipsum</Text>
            </View>
            <View style={styles.rightListContent}>
              <Icon name="check-all" style={styles.icon}></Icon>

              <View style={styles.loremIpsum3Column}>
                <Text style={styles.loremIpsum3}>09.40pm</Text>
                <View style={{marginRight: 5}}>
                  <CustomBadge count={5} backgroundColor={'#3399ff'} textColor={'white'} />
                </View>
              </View>
            </View>
          </View>
        </View>

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
