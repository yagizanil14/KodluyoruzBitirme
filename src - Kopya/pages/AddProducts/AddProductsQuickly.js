import React from 'react';
import {View, TouchableOpacity, Image, Text} from 'react-native';

// import images from 'res/images';
import {CameraShutterButton} from '../../component';
import {RNCamera} from 'react-native-camera';
import styles from '../../styles';

const AddProductsQuickly = (props) => {
  takePicture = async () => {
    if (this.camera) {
      const options = {quality: 0.5, base64: true};
      const data = await this.camera.takePictureAsync(options);
      console.log(data.uri);
    }
  };

  return (
    <View style={styles.AddProductsQuicklyStyles.container}>
      <RNCamera
        ref={(ref) => {
          this.camera = ref;
        }}
        style={styles.AddProductsQuicklyStyles.preview}
        type={RNCamera.Constants.Type.back}
        flashMode={RNCamera.Constants.FlashMode.on}
        androidCameraPermissionOptions={{
          title: 'Kamera kullanım izni',
          message:
            'Uygulamanın kameranızı kullanması için izin vermeniz gerekiyor',
          buttonPositive: 'Tamam',
          buttonNegative: 'İptal',
        }}
        androidRecordAudioPermissionOptions={{
          title: 'Ses kaydı izni',
          message:
            'Uygulamanın sesinizi kaydetmesi için izin vermeniz gerekiyor.',
          buttonPositive: 'Tamam',
          buttonNegative: 'İptal',
        }}
        onGoogleVisionBarcodesDetected={({barcodes}) => {
          console.log(barcodes);
        }}>
        {({camera, status}) => {
          return status !== 'READY' ? (
            <View style={styles.AddProductsQuicklyStyles.preview}></View>
          ) : (
            <CameraShutterButton onPress={() => this.takePicture(camera)} />
          );
        }}
      </RNCamera>
    </View>
  );
};

AddProductsQuickly.navigationOptions = ({navigation}) => ({
  headerTransparent: true,
  headerStyle: {borderBottomWidth: 0},
  headerLeft: () => (
    <View style={styles.AddProductsQuicklyStyles.headerLeftContainer}>
      <TouchableOpacity onPress={() => navigation.goBack(null)}>
        <Text>Deneme</Text>
        {/* <Image style={styles.AddProductsQuicklyStyles.headerLeftImage} source={images.settings} /> */}
      </TouchableOpacity>
    </View>
  ),
  headerTitle: () => (
    <TouchableOpacity
      onPress={() => navigation.navigate('Info')}
      style={{
        justifyContent: 'center',
        alignContent: 'center',
        alignSelf: 'center',
        marginLeft: 'auto',
        marginRight: 'auto',
      }}>
      <Text>Deneme</Text>
      {/* <Image style={styles.AddProductsQuicklyStyles.headerTitleImage} source={images.flash} /> */}
    </TouchableOpacity>
  ),
  headerRight: () => (
    <View style={styles.AddProductsQuicklyStyles.headerRightContainer}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text>Deneme</Text>
        {/* <Image style={styles.AddProductsQuicklyStyles.headerRightImage} source={images.close_thick} /> */}
      </TouchableOpacity>
    </View>
  ),
});

export {AddProductsQuickly};
