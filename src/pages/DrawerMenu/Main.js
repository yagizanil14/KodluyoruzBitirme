import React from 'react'
import { SafeAreaView, Text, Button, TouchableOpacity } from "react-native";

import auth from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-community/async-storage';

const Main = props => {
     const signOut = () => {
        auth().signOut()
        AsyncStorage.removeItem('@USER_ID')
        props.navigation.navigate("Signin")
    }
    const goToAddProducts = () => {
        props.navigation.navigate("AddProductsQuickly")
    }
    return(
        <SafeAreaView>
            <Text>Main Page</Text>
            <TouchableOpacity onPress={goToAddProducts}>
                <Text>Hızlı Ürün Ekle</Text>
            </TouchableOpacity>
            <Button
            title='Signout'
            onPress={signOut}/>
        </SafeAreaView>
    )
}
export {Main}