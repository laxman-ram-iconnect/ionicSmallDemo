import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import SearchBarInput from '../components/SearchBar';
import ListItemWithAvatar, { ListItemAvatar } from '../components/AvatarForList';
import { contactData } from '../constants/dummyData';

export default function LinksScreen() {
  return (
    <View style={styles.container}>
      <SearchBarInput/>

      <ScrollView style={styles.container}>
      {
    contactData.map((l, i) => (
      <React.Fragment>
        <Text style={{backgroundColor: '#fff', marginLeft: 16, marginTop: 3, 
        color: 'rgba(20, 20, 20, 0.7)'}}
        key={i}>{l.group}</Text>
        { l.data.map((ins, indx) => (
          <View key={indx + 1}>
            <ListItemWithAvatar
              leftAvatar={ <ListItemAvatar 
                        showRounded={true}
                        size={'medium'}
                        uri={ins.avatar_url}
                        title={ins.name.substring(0, 2).toUpperCase()} /> } 
              {...ins} 
              index={indx + l.group} 
              key={indx+ 6}
              containerStyle={{ paddingTop: 14, paddingBottom: 14 }}/>
            <View key={indx + 2} style={{ borderBottomColor: "#ececec",marginLeft:70,marginRight:10,marginTop:-5,borderBottomWidth: 1}}></View>
            </View>
            
          // <Text>{i}</Text>
          )) }
      </React.Fragment>
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
