import React from 'react';
import {
  View,
  TouchableOpacity,
  Image,
  Text,
} from 'react-native';

// import images from 'res/images';
import { CameraShutterButton } from '../../component';
import { RNCamera } from 'react-native-camera';
import styles from '../../styles'

const AddProductsQuickly = props => {

  takePicture = async (camera) => {
    if (camera) {
      const options = { quality: 0.5, base64: true };
      const data = await camera.takePictureAsync(options);
      console.log(data.uri);
    }
  };

  return (
    <View style={styles.AddProductsQuicklyStyles.container}>
      <RNCamera
        type={RNCamera.Constants.Type.back}
        style={styles.AddProductsQuicklyStyles.preview}
        flashMode={RNCamera.Constants.FlashMode.on}
        androidCameraPermissionOptions={{
          title: 'Kamera kullanım izni',
          message: 'Uygulamanın kameranızı kullanması için izin vermeniz gerekiyor',
          buttonPositive: 'Tamam',
          buttonNegative: 'İptal',
        }}
        androidRecordAudioPermissionOptions={{
          title: 'Ses kaydı izni',
          message: 'Uygulamanın sesinizi kaydetmesi için izin vermeniz gerekiyor.',
          buttonPositive: 'Tamam',
          buttonNegative: 'İptal',
        }}
        onGoogleVisionBarcodesDetected={({ barcodes }) => { console.log(barcodes); }}
        onStatusChange={(s) => { console.log(s) }}
        onCameraReady={() => { console.log("ready") }}
        onMountError={() => console.log("mount error")}
      >
        {({ camera, status }) => {
          return (
            status !== 'READY' ? <View style={styles.AddProductsQuicklyStyles.preview}></View>
              : <View style={{ flex: 1, justifyContent: "space-between" }}>
                <View style={styles.AddProductsQuicklyStyles.headerRightContainer}>
                  <TouchableOpacity style={{ alignSelf: "flex-end" }} onPress={() => props.navigation.goBack()}>
                    <Image style={styles.AddProductsQuicklyStyles.headerRightImage} source={{ uri: "https://icons.iconarchive.com/icons/iconsmind/outline/512/Close-icon.png" }} />
                  </TouchableOpacity>
                </View>
                <View style={{ marginBottom: 30, flexDirection: "row", justifyContent: "space-between" }}>
                  <View>
                    <Text>Galeri</Text>
                  </View>

                  <View>
                    <CameraShutterButton style={{}} onPress={() => takePicture(camera)} />
                  </View>

                  <View>
                    <TouchableOpacity onPress={() => props.navigation.navigate("AddProductInfo")}>
                      <Image style={styles.AddProductsQuicklyStyles.headerRightImage} source={{ uri: "https://image.flaticon.com/icons/png/512/98/98673.png" }} />
                    </TouchableOpacity>
                  </View>

                </View>

              </View>
          );
        }}
      </RNCamera>
    </View >

  );
};




export { AddProductsQuickly };