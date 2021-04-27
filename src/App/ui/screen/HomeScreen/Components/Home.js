import React from 'react';
import {View, useColorScheme, StyleSheet} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import Section from '@app/ui/component/Section/Index';
import Constants from '@app/utils/constant';

const Home = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const styles = StyleSheet.create({
    container: {
      backgroundColor: isDarkMode ? Colors.black : Colors.white,
      flex: 1,
    },
  });

  return (
    <View style={styles.container}>
      <Section title={Constants.Home_Title}>{Constants.Home_Text}</Section>
    </View>
  );
};

export default Home;
