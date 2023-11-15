import * as React from 'react';
import { useState } from 'react';
import { ScrollView, Image, Text, StyleSheet, TextInput, Alert, Pressable } from 'react-native';
import { validateEmail } from '../utils';


export default function SubscribeScreen () {
  const [email, onChangeEmail] = useState('');
  const validEmail = validateEmail(email);

  return (
  <ScrollView style={styles.container}>
    <Image
      resizeMode={'contain'}
      style={styles.logo}
      source={require("../assets/little-lemon-logo-grey.png")}
      accessible={true}
      accessibilityLabel='Little Lemon logo'
    />
    <Text style={styles.regularText}>
      Subscribe to our newsletter for our latest delicious recipes!
    </Text>
    <TextInput
        value={email}
        onChangeText={onChangeEmail}
        style={styles.inputBox}
        placeholder='email'
        keyboardType={'email-address'}
        clearButtonMode='always'
        textContentType='emailAddress'
/>
    <Pressable
        onPress={() => {Alert.alert('Thanks for subscribing, stay tuned!')}}
        disabled={!validEmail}
        style={styles.button}>
        <Text style={styles.buttonText}>Subscribe</Text>
    </Pressable>
</ScrollView>
);
}
const styles = StyleSheet.create({
container: {
    flex: 1,
},
regularText: {
    fontSize: 24,
    padding: 10,
    marginVertical: 8,
    color: '#495E57',
    textAlign: 'center',
},
inputBox: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    fontSize: 16,
    borderColor: '#EDEFEE',
    backgroundColor: '#EDEFEE',
},
button: {
   fontSize: 22,
   padding: 10,
   marginVertical: 8,
   margin: 100,
   backgroundColor: '#F4CE14',
   borderColor: '#F4CE14',
   borderWidth: 2,
   borderRadius: 50,
},
buttonText: {
  color: 'black',
  textAlign: 'center',
  fontSize: 25,
},
logo: {
  width: 200,
  height: 200,
  margin: 50,
  alignSelf: 'center'
},
});