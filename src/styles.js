import {StyleSheet,Dimensions} from 'react-native'

const styles={
    CameraShutterButtonStyles:StyleSheet.create({
        container: {
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            
          },
          outerCircle: {
            width: 75,
            height: 75,
            borderRadius: 75,
            borderWidth: 5,
            backgroundColor: 'transparent',
            borderColor: 'white',
            justifyContent: 'center',
            alignItems: 'center',
          },
          innerCircle: {
            width: 60,
            height: 60,
            borderRadius: 60,
            backgroundColor: 'white',
          },
    }),

    AddProductsQuicklyStyles:StyleSheet.create({
        container: {
            height:Dimensions.get("window").height * 1,
            width:Dimensions.get("window").width *1,
            backgroundColor: 'black',
          },
          preview: {
            height:Dimensions.get("window").height * 1,
            width:Dimensions.get("window").width *1,
            
          },
          headerRightContainer: { 
            marginRight: 20, 
            marginTop:10
          },
          headerRightImage: { 
            marginLeft: 20, 
            paddingTop: 10, 
            height: 35, 
            width: 35, 
            resizeMode: 'contain', 
            
          },
    })
}

export default styles