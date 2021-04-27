import React from 'react';
import {SafeAreaView, useColorScheme} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import FocusStatusBar from '@app/ui/component/StatusBar/Index';
import Login from './Components/Login';

const Index = ({navigation}) => {
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
      <Login navigation={navigation} />
    </SafeAreaView>
  );
};
export default Index;
