import React from 'react';
import {View, useColorScheme} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import Section from '../../../component/Section/Index';

const Index = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View
      style={{
        backgroundColor: isDarkMode ? Colors.black : Colors.white,
        flex: 1,
      }}>
      <Section title="Step One">
        Edit to change this screen and then come back to see your edits.
      </Section>
    </View>
  );
};
export default Index;
