import ImagePicker from 'react-native-image-picker';
import { SafeAreaView, View, Text, Button } from "react-native";
import React from 'react'

const options = {
    title: 'Select Avatar',
    customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
  };

  const LibraryPicker = () => {
    ImagePicker.showImagePicker(options, (response) => {
        console.log('Response = ', response);
      
        if (response.didCancel) {
          console.log('User cancelled image picker');
        } else if (response.error) {
          console.log('ImagePicker Error: ', response.error);
        } else if (response.customButton) {
          console.log('User tapped custom button: ', response.customButton);
        } else {
          const source = { uri: response.uri };
      
          // You can also display the image using data:
          // const source = { uri: 'data:image/jpeg;base64,' + response.data };
      
          this.setState({
            avatarSource: source,
          });
        }
      });
    
  }

  const LibraryImagePicker = (props)=>{
      return(
          <SafeAreaView>
              <Button title="Library" onPress={LibraryPicker}/>
          </SafeAreaView>
      )
  }

  export {LibraryImagePicker}