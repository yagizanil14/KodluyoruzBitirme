import React, { useRef, useState, useEffect } from 'react';
import {
  View,
  TouchableOpacity,
  Image,
  Text,
  ImageBackground,
  Button,
  PermissionsAndroid,
  ToastAndroid,
  FlatList
} from 'react-native';

// import images from 'res/images';
import { CameraShutterButton } from '../../component';
import { RNCamera } from 'react-native-camera';
import styles from '../../styles'
import CameraRoll, { PhotoIdentifier } from "@react-native-community/cameraroll";

const AddProductsQuickly = props => {
  const camera = useRef(null)
  const [imageUri, setImageUri] = useState('')
  const [images, setImages] = useState([]);

  useEffect(()=>{
    requestStoragePermision()
  },[])

  const requestStoragePermision = () => {
    PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
      {
        title: 'Fotoğraf izni',
        message:
          'Fotoğraf görüntüleme için dosya okuma izni vermeniz gereklidir.',
        buttonNeutral: 'Daha sonra sor',
        buttonNegative: 'İptal',
        buttonPositive: 'Tamam',
      },
    )
      .then((granted) => {
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          console.log('Galeri İzin verildi');
          getPhotos()
        } else {
          console.log('İzin verilmedi');
        }
      })
      .catch((e) => console.log(e));
  };
  const handleButtonPress = () => {
    if (Platform.OS === 'android') requestStoragePermision()
    else getPhotos()
  };
  const getPhotos = () => {
    CameraRoll.getPhotos({
      first: 1,
      assetType: 'Photos',
    })
      .then((r) => {
        console.log(r);
        setImages(r.edges);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const takePicture = async () => {
    if (camera) {
      console.log("take picture çalıştı")
      const options = { quality: 0.5, base64: false };
      const data = await camera.current?.takePictureAsync(options).then(data => {
        console.log(data.uri);
        setImageUri(data == undefined ? '' : data.uri);
        requestStoragePermission(data.uri);
      })
    }
  };

  const requestStoragePermission = async (callback) => {
    try {

      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        {
          title: 'Galeri kaydetme izni gerekiyor',
          message: 'Fotoğrafınızın galeriye kaydedilmesi için izin veriniz',
          buttonNeutral: 'Daha sonra sor',
          buttonNegative: 'İptal',
          buttonPositive: 'Tamam',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('✅İzin verildi');
        let saveRoll = CameraRoll.save(callback, 'photo').then(onfulfilled => {
          ToastAndroid.show(onfulfilled, ToastAndroid.SHORT);
        }).catch(error => {
          ToastAndroid.show(`${error.message}`, ToastAndroid.SHORT);

        });
      } else {
        console.log('❌İzin verilmedi');
      }
    } catch (err) {
      console.warn(err);
    }
  }

  return (

    <View style={styles.AddProductsQuicklyStyles.container}>
      <RNCamera
        ref={camera}
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
              : imageUri == "" ?
                <View style={{ flex: 1, justifyContent: "space-between" }}>
                  <View style={styles.AddProductsQuicklyStyles.headerRightContainer}>
                    <TouchableOpacity style={{ alignSelf: "flex-end" }} onPress={() => props.navigation.goBack()}>
                      <Image style={styles.AddProductsQuicklyStyles.headerRightImage} source={{ uri: "https://icons.iconarchive.com/icons/iconsmind/outline/512/Close-icon.png" }} />
                    </TouchableOpacity>
                  </View>
                  <View style={{ marginBottom: 30, flexDirection: "row", justifyContent: "space-between" }}>
                    <View>
                      {console.log("İMAGES LENGHT"+images.length)}
                      <FlatList
                        data={images}
                        keyExtractor={(data) => data.node.image.uri}
                        numColumns={3}
                        renderItem={(data) => (
                          <TouchableOpacity  onPress={handleButtonPress}>
                        {console.log("DATA.İTEM.NODE"+data.item.node.image.uri)}
                        <Image
                          style={{ height: 80, width: 70, marginLeft:10 }}
                          source={{ uri:data.item.node.image.uri }}
                        />
                      </TouchableOpacity>
                        )}
                      />
                      
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

                </View> :
                <View style={{ flex: 1 }}>
                  <ImageBackground style={styles.AddProductsQuicklyStyles.imageBackground} source={{ uri: imageUri }} />
                  <View style={styles.AddProductsQuicklyStyles.okButtonContainer}>
                    <Button title="TAMAM" onPress={() => setImageUri('')} />
                  </View>
                </View>
          );
        }}
      </RNCamera>
    </View >

  );
};




export { AddProductsQuickly };