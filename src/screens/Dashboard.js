import React, {useState} from 'react';
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Paragraph from '../components/Paragraph'
import Button from '../components/Button'
//import basic react native components
import { BottomSheet } from 'react-native-btr';
import { View, Text, StyleSheet } from 'react-native'

//import to show social icons
import { SocialIcon } from 'react-native-elements';

export default function Dashboard({ navigation }) {

  const [visible, setVisible] = useState(false);

  const toggleBottomNavigationView = () => {
    //Toggling the visibility state of the bottom sheet
    setVisible(!visible);
  };


  return (
    <Background >
      <Logo />
      <Header>Let’s start</Header>
      <Paragraph>
        Your amazing app starts here. Open you favorite code editor and start
        editing this project.
      </Paragraph>
      <Button
        mode="outlined"


        onPress={toggleBottomNavigationView}
        //on Press of the button bottom sheet will be visible
        title="Show Bottom Sheet"
        // onPress={() =>
        //   navigation.reset({
        //     index: 0,
        //     routes: [{ name: 'StartScreen' }],
        //   })
        // }
      >
        Logout
      </Button>


      <BottomSheet
          visible={visible}
          //setting the visibility state of the bottom shee
          onBackButtonPress={toggleBottomNavigationView}
          //Toggling the visibility state
          onBackdropPress={toggleBottomNavigationView}
          //Toggling the visibility state
        >
        {/*Bottom Sheet inner View*/}
        <View style={styles.bottomNavigationView}>
          <View
            style={{
              flex: 1,
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}>
            <Text
              style={{
                textAlign: 'center',
                padding: 20,
                fontSize: 20
              }}>
              Share Using
            </Text>
            <View style={{flex: 1, flexDirection: 'row'}}>
              <SocialIcon
                //Social Icon using react-native-elements
                type="twitter"
                //Type of Social Icon
                onPress={() => {
                  //Action to perform on press of Social Icon
                  toggleBottomNavigationView();
                  alert('twitter');
                }}
              />
              <SocialIcon
                type="gitlab"
                onPress={() => {
                  toggleBottomNavigationView();
                  alert('gitlab');
                }}
              />
              <SocialIcon
                type="medium"
                onPress={() => {
                  toggleBottomNavigationView();
                  alert('medium');
                }}
              />
              <SocialIcon
                type="facebook"
                onPress={() => {
                  toggleBottomNavigationView();
                  alert('facebook');
                }}
              />
              <SocialIcon
                type="instagram"
                onPress={() => {
                  toggleBottomNavigationView();
                  alert('instagram');
                }}
              />
            </View>
            <View style={{flex: 1, flexDirection: 'row'}}>
              <SocialIcon
                type="facebook"
                onPress={() => {
                  toggleBottomNavigationView();
                  alert('facebook');
                }}
              />
              <SocialIcon
                type="instagram"
                onPress={() => {
                  toggleBottomNavigationView();
                  alert('instagram');
                }}
              />
              <SocialIcon
                type="gitlab"
                onPress={() => {
                  toggleBottomNavigationView();
                  alert('gitlab');
                }}
              />
              <SocialIcon
                type="twitter"
                onPress={() => {
                  toggleBottomNavigationView();
                  alert('twitter');
                }}
              />
              <SocialIcon
                type="medium"
                onPress={() => {
                  toggleBottomNavigationView();
                  alert('medium');
                }}
              />
            </View>
          </View>
        </View>
      </BottomSheet>
    </Background>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E0F7FA',
  },
  bottomNavigationView: {
    backgroundColor: '#fff',
    width: '100%',
    height: 250,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
