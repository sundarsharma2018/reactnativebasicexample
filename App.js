import React from 'react';
import {  Provider } from 'react-native-paper'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { theme } from './src/core/theme'
import { StartScreen, 
  LoginScreen,
  RegisterScreen,
  Dashboard,
  ResetPasswordScreen,
  Aboutus
 }  from './src/screens'
import { Button, Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import BackButton from './src/components/BackButton';


const Stack = createStackNavigator()
const Drawer = createDrawerNavigator();



const NavigationDrawerStructure = (props) => {
  //Structure for the navigatin Drawer
  const toggleDrawer = () => {
    //Props to open/close the drawer
    props.navigationProps.toggleDrawer();
  };

  return (
    <View style={{flexDirection: 'row'}}>
      <TouchableOpacity onPress={toggleDrawer}>
        {/*Donute Button Image */}
        <Image
          source={{
            uri:
              'https://raw.githubusercontent.com/AboutReact/sampleresource/master/drawerWhite.png',
          }}
          style={{width: 25, height: 25, marginLeft: 15, marginTop:3}}
        />
      </TouchableOpacity>
    </View>
  );
};


const NavigationDrawerStructureBack = (props) => {
  //Structure for the navigatin Drawer
  const toggleDrawer = () => {
    //Props to open/close the drawer
    props.navigationProps.goBack();
  };

  return (
    <View style={{flexDirection: 'row'}}>
      <TouchableOpacity onPress={toggleDrawer}>
        {/*Donute Button Image */}
        <Image
          source=
            {require('./src/assets/arrow_back.png')}
          style={{width: 30, height: 25, marginLeft: 15, marginTop:3}}
        />
      </TouchableOpacity>
    </View>
  );
};


  const DashboardDrawer = () => {
    return (
      <Drawer.Navigator>
        <Drawer.Screen
          name="Dashboard"
          options={{
            
            headerShown:false,}}
          component={ DashboardScreenStack }
        />
        <Drawer.Screen
          name="Aboutus"
          
          options={{headerShown:false,
          swipeEnabled: false,
          drawerIcon: ({ tintColor }) => (
            <Image
              source={require('./src/assets/arrow_back.png')}
              style={[styles.icon, { tintColor: tintColor }]}
            />
          ), 
         
          }}
          component={ AboutUsScreenStack }
        />
      </Drawer.Navigator>
    );
  };





const AboutUsScreenStack = ({navigation}) => {
  return (
    <Stack.Navigator initialRouteName="Aboutus">
      <Stack.Screen
        name="Aboutus"
        component={ Aboutus }
        options={{  
          title: 'Aboutus', //Set Header Title
          headerStyle: {
            backgroundColor: '#f4511e', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
          
         // headerLeft: <BackButton goBack={ navigation.goBack} />

         headerLeft: () => (
          <NavigationDrawerStructureBack
            navigationProps={navigation}
          />
        ),
          
      
        }}
      />
    </Stack.Navigator>
  );
};


const DashboardScreenStack = ({navigation}) => {
  return (
    <Stack.Navigator initialRouteName="Dashboard">
      <Stack.Screen
        name="Dashboard"
        component={ Dashboard }
        options={{
          title: 'Home', //Set Header Title
          headerLeft: () => (
            <NavigationDrawerStructure
              navigationProps={navigation}
            />
          ),
          headerStyle: {
            backgroundColor: '#f4511e', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        }}
      />
     
    </Stack.Navigator>
  );
};





export default function App() {
  return (
    <Provider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="StartScreen"
          screenOptions={{
            headerShown: false,
            headerBackTitleVisible: false,
            headerBackImage: ()=>(<MaterialCommunityIcons name='arrow-left' />),
            // headerBackTitleVisible: true,
            // headerBackImage: ()=>(<MaterialCommunityIcons name='arrow-left' />),
           }}
        >
            
          <Stack.Screen name="StartScreen" component={StartScreen} />
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
          <Stack.Screen name="Dashboard" component={ DashboardDrawer }
 />
          <Stack.Screen name="Aboutus" component={ Aboutus } 
       
                    />

          <Stack.Screen
            name="ResetPasswordScreen"
            component={ResetPasswordScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}


const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
});

//https://dev.to/easybuoy/combining-stack-tab-drawer-navigations-in-react-native-with-react-navigation-5-da
//https://aboutreact.com/switch-screen-out-of-the-navigation-drawer-in-react-native/