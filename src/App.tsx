import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import FlashMessage from 'react-native-flash-message';
import {RootNavigator} from './navigation';
import {QueryClient} from './api/client';
import {AuthProvider, MoviesProvider, UserProvider} from './contexts';

function App(): React.JSX.Element {
  return (
    <QueryClient>
      <AuthProvider>
        <UserProvider>
          <MoviesProvider>
            <NavigationContainer>
              <RootNavigator />
            </NavigationContainer>
          </MoviesProvider>
        </UserProvider>
      </AuthProvider>
      <FlashMessage position="top" />
    </QueryClient>
  );
}

export default App;
