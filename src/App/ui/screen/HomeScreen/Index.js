import React from 'react';
import {SafeAreaView, useColorScheme} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import FocusStatusBar from '@app/ui/component/StatusBar/Index';
import Home from './Components/Home';

const Index = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={(backgroundStyle, {flex: 1})}>
      <FocusStatusBar
        translucent={false}
        backgroundColor={!isDarkMode ? 'white' : 'black'}
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
      />
      <Home />
    </SafeAreaView>
  );
};
export default Index;
