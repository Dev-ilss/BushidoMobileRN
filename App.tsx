import React from 'react';
import { Provider } from 'react-native-paper';
import Aplication from './src';
import { theme } from './src/core/theme';
const App = ()=>{
    return (
        <Provider theme={theme}>
          <Aplication/>
        </Provider>
    );
};

export default App;
