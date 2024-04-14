import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {RootNavigator} from './navigation';
import {QueryClient} from './api/client';

function App(): React.JSX.Element {
  return (
    <QueryClient>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </QueryClient>
  );
}

export default App;
