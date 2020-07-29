import React, {useEffect} from 'react'
import {View,Text,SafeAreaView,Button} from 'react-native'
import AsyncStorage from '@react-native-community/async-storage';

const Splash = props =>{
    useEffect(()=>{
        getData()
    },[])
   const getData = async () => {
        try {
          const value = await AsyncStorage.getItem('@USER_ID')
          if(value !== null) {
            props.navigation.navigate("DrawerMenu")
          }else{
            props.navigation.navigate("Signin")
          }
        } catch(e) {
          // error reading value
        }
      }
    return(
        <View>
        </View>
    )
}
export default  Splash 