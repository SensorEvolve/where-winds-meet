import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import ImageViewer from 'react-native-image-zoom-viewer';
import { colors } from '../theme';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

export default function WorldMap() {
  const images = [
    {
      url: '', // Will use props.source instead
      props: {
        source: require('../../assets/wwm_world_map.png'),
      },
    },
  ];

  return (
    <View style={styles.container}>
      <ImageViewer
        imageUrls={images}
        enableSwipeDown={false}
        backgroundColor={colors.background}
        maxOverflow={0}
        enableImageZoom={true}
        saveToLocalByLongPress={false}
        doubleClickInterval={250}
        style={styles.imageViewer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  imageViewer: {
    flex: 1,
  },
});
