import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import GroupScreen from '../screens/GroupScreen';
import MoreInfo from '../screens/MoreInfo';

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Home';

export default function BottomTabNavigator({ navigation, route }) {
  
  navigation.setOptions({ headerTitle: getHeaderTitle(route), headerStyle: {
    elevation: 0,
    shadowOpacity: 0,
    shadowColor: 'transparent',
    shadowRadius: 0,
shadowOffset: {
    height: 0,
},
borderBottomColor: '#fff'
    }, headerTitleStyle: {
      fontSize: 30,
      fontWeight: '700'
    } });

  return (
    <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Chats',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="chat" materialCom="true"/>,
        }}
      />
      <BottomTab.Screen
        name="Links"
        component={LinksScreen}
        options={{
          title: 'Contacts',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-contact" ionicIcon="true"/>,
        }}
      />
      <BottomTab.Screen
        name="Group"
        component={GroupScreen}
        options={{
          title: 'Groups',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="group" material="true" />,
        }}
      />
      <BottomTab.Screen
        name="MoreInfo"
        component={MoreInfo}
        options={{
          title: 'More',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="more-horiz" material="true" />,
        }}
      />
    </BottomTab.Navigator>
  );
}

function getHeaderTitle(route) {
  const routeName = route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

  switch (routeName) {
    case 'Home':
      return 'Chats';
    case 'Links':
      return 'Contacts';
    case 'Group':
      return 'Groups';
    case 'MoreInfo':
      return 'More Info';  
  }
}
