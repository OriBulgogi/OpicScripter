import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image } from 'react-native';
import { useState } from 'react';

import Button from './component/Button';
import ImageViewer from './component/ImageViewer';
import * as ImagePicker from 'expo-image-picker'
import CircleButton from './component/CircleButton';
import IconButton from './component/IconButton';
import EmojiPicker from "./component/EmojiPicker";
import EmojiList from './component/EmojiList';
import EmojiSticker from './component/EmojiSticker';

const PlaceholderImage = require('./assets/images/background-image.png');

export default function App() {

  const[selectedImage , setSelectedImage] = useState<string>("");
  const[showAppOptions, setShowAppOptions] = useState<boolean>(false);
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [pickedEmoji, setPickedEmoji] = useState(null);

  
  // useState와 이렇게 일반변수로 판단하는게 무슨 차이가 있는지 아직 모르겠음
  // -> 일반변수로는 랜더링 안된다고함 
  //const appopt :boolean =false;

  const pickImageAsync = async()=>{
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality :1,
    });

    if(!result.canceled){ 
      setSelectedImage(result.assets[0].uri);
      setShowAppOptions(true);
    }else{
      alert('You did not select any image.');
    }
  };

  const onReset = () => {
    setShowAppOptions(false);
  };

  const onAddSticker = () => {
    setIsModalVisible(true);
  };

  const onModalClose = () => {
    setIsModalVisible(false);
  };

  const onSaveImageAsync = async () => {
    
  };


  return(
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer 
          placeholderImageSource={PlaceholderImage}
          selectedImage={selectedImage}
        /> 
         {pickedEmoji && <EmojiSticker imageSize={40} stickerSource={pickedEmoji} />}
      </View>
      {showAppOptions ? (
        <View style={styles.optionsContainer}>
          <View style={styles.optionsRow}>
            <IconButton icon="refresh" label="Reset" onPress={onReset} />
            <CircleButton onPress={onAddSticker} />
            <IconButton icon="save-alt" label="Save" onPress={onSaveImageAsync} />
          </View>
        </View>
      ) : (
        <View style={styles.footerContainer}>
          <Button theme="primary" label="Choose a photo" onPress={pickImageAsync} />
          <Button label="Use this photo" onPress={()=> setShowAppOptions(true)}></Button>
        </View>
      )}
      
      <EmojiPicker isVisible={isModalVisible} onClose={onModalClose}>
        <EmojiList onSelect={setPickedEmoji} onCloseModal={onModalClose} />
      </EmojiPicker>
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
  optionsContainer: {
    position: 'absolute',
    bottom: 80,
  },
  optionsRow: {
    alignItems: 'center',
    flexDirection: 'row',
  },
});

