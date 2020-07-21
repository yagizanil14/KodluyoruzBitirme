import {StyleSheet,Dimensions} from 'react-native'

const styles={
    CameraShutterButtonStyles:StyleSheet.create({
        container: {
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 50
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
            flex: 1,
            backgroundColor: 'black',
          },
          preview: {
            flex: 1,
            justifyContent: 'flex-end',
            alignItems: 'center',
          },
          headerLeftContainer: { 
            marginLeft: 20, 
            flex: 1, 
            flexDirection: 'row', 
            alignItems: 'center' 
          },
          headerLeftImage: { 
            height: 25, 
            width: 25, 
          },
          headerTitleImage: { 
            paddingTop: 10, 
            height: 23, 
            width: 23,
          },
          headerRightContainer: { 
            marginRight: 20, 
            flex: 1, 
            flexDirection: 'row', 
            alignItems: 'center' 
          },
          headerRightImage: { 
            marginLeft: 20, 
            paddingTop: 10, 
            height: 23, 
            width: 23, 
            resizeMode: 'contain' 
          },
    })
}

export default styles