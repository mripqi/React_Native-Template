import React from 'react';
import {TouchableOpacity, View, Text, StyleSheet} from 'react-native';

export default function ButtonComponent({handleClick, text}) {
  return (
    <TouchableOpacity
      onPress={() => handleClick(text)}
      style={styles.listContainer}>
      <View style={styles.listWrapper}>
        <Text style={styles.textList}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  listContainer: {
    paddingRight: 10,
    paddingBottom: 10,
  },
  listWrapper: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  textList: {color: 'black', fontSize: 16},
});
