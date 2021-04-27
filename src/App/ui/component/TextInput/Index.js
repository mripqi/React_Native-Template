import React from 'react';
import {TextInput, StyleSheet} from 'react-native';
export default function InputText(props) {
  return (
    <TextInput style={styles.input} placeholderTextColor={'white'} {...props} />
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 3,
    borderColor: 'white',
    color: 'white',
    marginBottom: 15,
    marginLeft: 30,
    marginRight: 30,
    width: '90%',
  },
});
