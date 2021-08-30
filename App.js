import React from 'react';
import {  Appbar, Provider } from 'react-native-paper'
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
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Icon } from "react-native-elements";


const Stack = createStackNavigator()
const Drawer = createDrawerNavigator();
const Tab = createMaterialTopTabNavigator();


const ShareButton = () =>{

}

function ActionBarIcon() {
  return (
    <Image
    source={{uri : 'https://secure.gravatar.com/avatar/dbbab0050db2dbd84d4e2c844196ee0c?s=60&d=mm&r=g'}}
    style={{ width: 40, height: 40, borderRadius: 40/2, marginLeft : 15 }} />
  );
}


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
  const toggleDrawer = () => {
    props.navigationProps.goBack();
  };

  return (
    <View style={{flexDirection: 'row'}}>
      <TouchableOpacity onPress={toggleDrawer}>
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




const AboutUsScreenStackTopTab = ({navigation}) => {
  return (
    <Stack.Navigator initialRouteName="Aboutus">
      <Stack.Screen
        name="Aboutus"
        component={ Aboutus }
        options={{
          headerShown:false
        }}
        // options={{  
        //   title: 'Aboutus', //Set Header Title
        //   headerStyle: {
        //     backgroundColor: '#f4511e', //Set Header color
        //   },
        //   headerTintColor: '#fff', //Set Header text color
        //   headerTitleStyle: {
        //     fontWeight: 'bold', //Set Header text style
        //   },

        //  headerLeft: () => (
        //   <NavigationDrawerStructureBack
        //     navigationProps={navigation}
        //   />
        // ),
          
      
        // }}
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



const DashboardScreenStackTopTab = ({navigation}) => {
  return (
    <Stack.Navigator initialRouteName="Dashboard">
      <Stack.Screen
        name="Dashboard"
        
        options={{
          headerShown:false
        }}
        component={ Dashboard }
        // options={{
        //   title: 'Home', //Set Header Title
        //   headerLeft: () => (
        //     <NavigationDrawerStructure
        //       navigationProps={navigation}
        //     />
        //   ),
        //   headerStyle: {
        //     backgroundColor: '#f4511e', //Set Header color
        //   },
        //   headerTintColor: '#fff', //Set Header text color
        //   headerTitleStyle: {
        //     fontWeight: 'bold', //Set Header text style
        //   },
        // }}
      />
     
    </Stack.Navigator>
  );
};







const DashboardTopTab = () => {
  return (
    <Tab.Navigator
    tabBarOptions={{
      activeTintColor: 'orange',
      keyboardHidesTabBar: true,
    }}
    
    initialRouteName="Data">
    
      <Tab.Screen
        name="Dashboard"
        component={ DashboardScreenStackTopTab }
      />
      <Tab.Screen
        name="Aboutus"
        component={ AboutUsScreenStackTopTab }
      />
    </Tab.Navigator>
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
           }}>
          <Stack.Screen name="StartScreen" component={StartScreen} />
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
          <Stack.Screen name="Dashboard" component={ DashboardTopTab }  options={{
          title: 'Home', //Set Header Title
          headerStyle: {
            backgroundColor: '#f4511e', //Set Header color            
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
          headerShown: true,
          headerTitleAlign: 'center',
          headerRight: () => {
            return (
              <View style={styles.buttonStyleContainer}>
              
              <View style={styles.button} >
              <Button
               title={"Pause"}
               onPress={() => {
                 this.setState({ paused: true });
               }}
                color="#841584"
              />
              </View>


              <View style={styles.button} >
                <Button
                   title={"Play"}
                   onPress={() => {
                  this.setState({ paused: false });
               }}
               color="green"
             />
             </View>
  
           </View>
       
            // <Button
            //   title="Setting"
            //   onPress={() => navigation.navigate('ProfileScreenEdit')}
            //   backgroundColor="rgba(0,0,0,0)"
            //   color="rgba(0,122,255,1)"
            // />,
            

            // <Button
            //   title="Hello"
            //   onPress={() => navigation.navigate('ProfileScreenEdit')}
            //   backgroundColor="rgba(0,0,0,0)"
            //   color="rgba(0,122,255,1)"
            // />
            );
           
          
          },
        
          headerLeft : props => <ActionBarIcon {...props} />,
          
           }}
            />
          <Stack.Screen name="Aboutus" component={ Aboutus } />
          <Stack.Screen
            name="ResetPasswordScreen"
            component={ResetPasswordScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>




    // <Provider theme={theme}>
    //   <NavigationContainer>
    //     <Stack.Navigator
    //       initialRouteName="StartScreen"
    //       screenOptions={{
    //         headerShown: false,
    //        }}>
    //       <Stack.Screen name="StartScreen" component={StartScreen} />
    //       <Stack.Screen name="LoginScreen" component={LoginScreen} />
    //       <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
    //       <Stack.Screen name="Dashboard" component={ DashboardDrawer }/>
    //       <Stack.Screen name="Aboutus" component={ Aboutus }/>
    //       <Stack.Screen
    //         name="ResetPasswordScreen"
    //         component={ResetPasswordScreen}
    //       />
    //     </Stack.Navigator>
    //   </NavigationContainer>
    // </Provider>
  );
}


const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
  container: {
    flex: 1
  },
  icons: {
    paddingLeft: 10
  },
  iconContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: 120
  },
  buttonContainer: {
    flex: 1,
  },
  buttonStyleContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
   },
   button: {
     marginEnd:5,
     backgroundColor: 'green'
  }
});




//https://dev.to/easybuoy/combining-stack-tab-drawer-navigations-in-react-native-with-react-navigation-5-da
//https://aboutreact.com/switch-screen-out-of-the-navigation-drawer-in-react-native/
//https://stackoverflow.com/questions/53412278/how-to-implement-custom-header-icons-within-a-nested-stacknavigator
//https://aboutreact.com/react-native-bottom-sheet/
