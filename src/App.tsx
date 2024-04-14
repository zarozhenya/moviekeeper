import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {RootNavigator} from './navigation';

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}

export default App;
