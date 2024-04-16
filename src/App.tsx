import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import FlashMessage from 'react-native-flash-message';
import {RootNavigator} from './navigation';
import {QueryClient} from './api/client';
import {AuthProvider} from './contexts';

function App(): React.JSX.Element {
  return (
    <QueryClient>
      <AuthProvider>
        <NavigationContainer>
          <RootNavigator />
        </NavigationContainer>
      </AuthProvider>
      <FlashMessage position="top" />
    </QueryClient>
  );
}

export default App;
