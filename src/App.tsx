import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import FlashMessage from 'react-native-flash-message';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {RootNavigator} from './navigation';
import {QueryClient} from './api/client';
import {AuthProvider, MoviesProvider, UserProvider} from './contexts';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  gestureHandler: {flex: 1},
});

function App(): React.JSX.Element {
  return (
    <QueryClient>
      <AuthProvider>
        <UserProvider>
          <MoviesProvider>
            <GestureHandlerRootView style={styles.gestureHandler}>
              <NavigationContainer>
                <RootNavigator />
              </NavigationContainer>
            </GestureHandlerRootView>
          </MoviesProvider>
        </UserProvider>
      </AuthProvider>
      <FlashMessage position="top" />
    </QueryClient>
  );
}

export default App;
