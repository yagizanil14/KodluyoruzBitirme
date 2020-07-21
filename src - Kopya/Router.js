import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';


import { Signin, Signup} from './pages/Sign'
import { Main, Profile, Offers } from "./pages/DrawerMenu";
import {AddProductsQuickly} from './pages/AddProducts'

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
function DrawerMenu() {
    return (
        <Drawer.Navigator initialRouteName="Main">
          <Drawer.Screen name="Main" component={Main} />
          <Drawer.Screen name="Profile" component={Profile} />
          <Drawer.Screen name="Offers" component={Offers} />
        </Drawer.Navigator>
    );
  }

function Router() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Signin" component={Signin} options={{ headerShown: false }} />
                <Stack.Screen name="Signup" component={Signup} options={{ headerShown: false }} />
                <Stack.Screen name="DrawerMenu" component={DrawerMenu} options={{ headerShown: false, gestureEnabled: false}} />
                <Stack.Screen name="AddProductsQuickly" component={AddProductsQuickly} options={{ headerShown: false}} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Router;