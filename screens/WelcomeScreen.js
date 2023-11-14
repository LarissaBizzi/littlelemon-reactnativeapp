import * as React from 'react';
import { ScrollView, Image, Text, Pressable, StyleSheet } from 'react-native';

const WelcomeScreen = ({ navigation }) => {
  return (
  <ScrollView style={welcomescreenStyles.container}>
  <Image
    resizeMode={'contain'}
    style={welcomescreenStyles.logo}
    source={require("../assets/little-lemon-logo.png")}
    accessible={true}
    accessibilityLabel='Little Lemon logo'
  />
  <Text
    style={welcomescreenStyles.regularText}>
    Little Lemon, your local Mediterranean bistro.
  </Text>
  <Pressable onPress={() => navigation.navigate("Subscribe")}>
  <Text style={welcomescreenStyles.buttonText}>Newsletter</Text>
  </Pressable>
  </ScrollView>
)};

export default WelcomeScreen;

const welcomescreenStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  regularText: {
    fontSize: 24,
    fontWeight: 'bold',
    padding: 20,
    marginVertical: 8,
    color: '#495E57',
    textAlign: 'center',
  },
  logo: {
    width: 300,
    height: 300,
    margin: 100,
    alignSelf: 'center'
  },
 buttonText: {
    fontSize: 22,
    color: 'white',
    padding: 10,
    marginVertical: 8,
    margin: 40,
    textAlign: 'center',
    backgroundColor: '#495E57',

  }
});
