import React from 'react';
import {StatusBar, useColorScheme} from 'react-native';
import {gestureHandlerRootHOC} from 'react-native-gesture-handler';
import {Provider} from 'react-redux';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {ThemeProvider} from 'styled-components';
//import {PersistGate} from 'redux-persist/integration/react';
import {themeConfig, themes} from './theme/tokens';
import Navigation from './navigation/RootNavigation';

import {store} from './store';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const theme = themeConfig(themes.light);
  return (
    <SafeAreaProvider>
      <Provider store={store}>
      
          <ThemeProvider theme={theme}>
            <StatusBar
              barStyle={isDarkMode ? 'light-content' : 'dark-content'}
              backgroundColor={theme.background}
            />
            <Navigation />
          </ThemeProvider>
        
      </Provider>
    </SafeAreaProvider>
  );
};

export default gestureHandlerRootHOC(App);
