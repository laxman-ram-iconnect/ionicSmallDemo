import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import SearchBarInput from '../components/SearchBar';
import ListItemWithAvatar from '../components/AvatarForList';
import { groupData } from '../constants/dummyData';

export default function GroupScreen() {
  return (
    <View style={styles.container}>
      <SearchBarInput/>

      <ScrollView style={styles.container}>
      {
    groupData.map((l, i) => (
      
       <View>
          <ListItemWithAvatar {...l} index={i} key={i} />
        <View style={{ borderBottomColor: 'lightgrey',marginLeft:70,marginRight:10,marginTop:-5,borderBottomWidth: 1}}></View>
      </View>
      // <Text>{i}</Text>
      
    ))
  }
      </ScrollView>

    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  contentContainer: {
    paddingTop: 15,
  },
  optionIconContainer: {
    marginRight: 12,
  },
  option: {
    backgroundColor: '#fdfdfd',
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: 0,
    borderColor: '#ededed',
  },
  lastOption: {
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  optionText: {
    fontSize: 15,
    alignSelf: 'flex-start',
    marginTop: 1,
  },
});
