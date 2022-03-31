import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import {
    Home,
    Login,
} from './screens';

const Router = createStackNavigator(
    {
        Home,
        Login,
    },
    {
        initialRouteName: 'Login',
        headerMode: 'none',
    },
);

export default createAppContainer(Router);