import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image } from 'react-native';
import { useState } from 'react';

import Button from './component/Button';
import ImageViewer from './component/ImageViewer';
import * as ImagePicker from 'expo-image-picker'

const PlaceholderImage = require('./assets/images/background-image.png');

export default function App() {
  
  const[selectedImage , setSelectedImage] = useState<string>("");

  const pickImageAsync = async()=>{
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality :1,
    });

    if(!result.canceled){
      setSelectedImage(result.assets[0].uri);
    }else{
      alert('You did net select any image.');
    }
  };

  return(
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer 
          placeholderImageSource={PlaceholderImage}
          selectedImage={selectedImage}
        /> 
      </View>
      <View style={styles.footerContainer}>
      <Button theme="primary" label="Choose a photo" onPress={pickImageAsync} />
      <Button label="Use this photo"></Button>  
      </View>
      <StatusBar style="auto" />

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
  },
  imageContainer: {
    flex: 1,
    paddingTop: 58,
  },
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center',
  },
});

