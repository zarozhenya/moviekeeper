import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
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
    </QueryClient>
  );
}

export default App;
