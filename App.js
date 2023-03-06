import * as eva from "@eva-design/eva"
import React from 'react';
import { StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ApplicationProvider, BottomNavigation, BottomNavigationTab} from '@ui-kitten/components';
import CreateNote from "./screens/CreateNote";
import AllNotes from "./screens/AllNotes";
import Note from "./screens/Note";

const { Navigator, Screen } = createBottomTabNavigator();



const BottomTabBar = ({ navigation, state }) => (
  <BottomNavigation
    selectedIndex={state.index}
    onSelect={index => navigation.navigate(state.routeNames[index])}>
    <BottomNavigationTab title='Create'/>
    <BottomNavigationTab title='All Notes'/>
  </BottomNavigation>
);

const TabNavigator = () => (
  <Navigator tabBar={props => <BottomTabBar {...props} />}>
    <Screen name='Create' component={CreateNote}  options={{headerShown: false}}/>
    <Screen name='AllNotes' component={AllNotes} options={{headerShown: false}}/>
    <Screen name='Note' component={Note}  options={{headerShown: false}}/>  
  </Navigator>
);

export default function App() {
  return (
    <ApplicationProvider {...eva} theme={eva.dark}> 
    <NavigationContainer>
      <TabNavigator/>
    </NavigationContainer>
  </ApplicationProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
