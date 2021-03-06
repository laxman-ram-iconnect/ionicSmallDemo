import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import SearchBarInput from '../components/SearchBar';
import ContactView from '../components/uiComponents/ContactView';
import { contactData } from '../constants/dummyData';

export default function LinksScreen() {
  return (
    <View style={styles.container}>
      <SearchBarInput />

      <ScrollView style={styles.container}>
        {
          contactData.map((l, i) => (
            <React.Fragment key={i+3}>
              <Text style={{
                backgroundColor: '#fff', marginLeft: 16, marginTop: 3,
                color: 'rgba(20, 20, 20, 0.7)'
              }}
                key={i + 4}>{l.group}</Text>
              {l.data.map((ins, indx) => (
                <View key={indx + 1}>
                  <ContactView
                    url={ins.avatar_url}
                    avatarTitle={ins.name.substring(0, 2).toUpperCase()}
                    mainLabel={ins.name}
                  />
                  <View key={indx + 2} style={{ borderBottomColor: "#ececec", marginLeft: 70, marginRight: 16, marginTop: -5, borderBottomWidth: 1 }}></View>
                </View>

                // <Text>{i}</Text>
              ))}
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
