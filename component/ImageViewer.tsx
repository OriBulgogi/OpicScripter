import { StyleSheet, Image } from 'react-native';

type ImageViewerType ={
  placeholderImageSource : undefined;
  selectedImage: string;
}
export default function ImageViewer({placeholderImageSource ,selectedImage} : ImageViewerType) {

    const imageSource = selectedImage ? {uri: selectedImage} :placeholderImageSource;
    return (
      <Image source={imageSource} style={styles.image} />
    );
}

const styles = StyleSheet.create({
    image :{
      width:320,
      height : 440,
      borderRadius:18,
    },
  });

  