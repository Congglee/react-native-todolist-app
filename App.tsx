import React from 'react';
import {SafeAreaView} from 'react-native';
import HomeScreen from './src/homes/HomeScreen';

const App = () => {
  return (
    <>
      {/* <StatusBar
        translucent
        barStyle={'light-content'}
        backgroundColor="transparent"
      /> */}
      <SafeAreaView style={{flex: 1}}>
        <HomeScreen />
      </SafeAreaView>
    </>
  );
};

export default App;
