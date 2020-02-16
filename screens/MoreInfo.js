import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Avatar } from 'react-native-elements';

import { ProfileCard } from '../components/AvatarForList';

const ProfilePicData = () => <Avatar
rounded
size="large"
source={{
  uri:
    'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
}}
/>;
export default function MoreInfo() {
  return (
    <View style={styles.container}>
      <ProfileCard 
      name="Joe Lane"
      leftAvatar={<ProfilePicData />}
      subtitle="Online"
      titleStyle={{fontWeight: '700'}}
      subtitleStyle={{color: '#3787db'}}
      containerStyle={{ borderBottomWidth: 0}}
      />
     <Text style={{color: 'rgba(20, 20, 20, 0.7)', marginLeft: 14}}>PREFERENCES</Text>   

      <ScrollView style={styles.container}>
     
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
