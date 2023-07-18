import React, { useRef } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableWithoutFeedback, TouchableOpacity, Animated } from 'react-native';

import vadar from "../../assets/batman-1.jpg";
import batman from "../../assets/darthvadar.jpg";
import animation from "../../assets/animation.jpeg";

const images = [
  { id: 1, image: batman, quote: 'Enjoy The super Heroes' },
  { id: 2, image: vadar, quote: 'Enjoy The Aventures' },
  { id: 3, image: animation, quote: 'Enjoy The animation' },
];

export default function Board({navigation}) {
  const scrollX = useRef(new Animated.Value(0)).current;

  const renderItem = ({ item }) => {
    const { id, image, quote } = item;
    return (
      <TouchableWithoutFeedback key={id}>
        <View style={{ width: '100%', height: 500, position: 'relative' }}>
          <Image source={image} style={{ width: 400, height: 500, position: 'relative' }} resizeMode='cover' />
          <View style={{ width: '100%', height: '100%', position: 'absolute', opacity: 0.7, zIndex: 20, backgroundColor: '#121212' }} />
          <Text numberOfLines={2} style={{ color: 'white', fontSize: 26, fontWeight: '700', zIndex: 20, position: 'absolute', bottom: 15, left: 5 }}>{quote}</Text>
        </View>
      </TouchableWithoutFeedback>
    );
  };

  const dotPosition = Animated.divide(scrollX, 300);

  return (
    <>
      <TouchableOpacity style={styles.container}>
        <Animated.FlatList
          horizontal
          data={images}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()} // Convert id to string
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            { useNativeDriver: false }
          )}
        />
      </TouchableOpacity>
      <View style={{ width: '100%', flexDirection: 'row', marginHorizontal: 130 }}>
        {images.map((item, index) => {
          const opacity = dotPosition.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [0.3, 1, 0.3],
            extrapolate: 'clamp'
          });

          const dotWidth = dotPosition.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [6, 20, 6],
            extrapolate: 'clamp'
          });

          const dotColor = dotPosition.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: ['tomato', 'green', 'blue'],
            extrapolate: 'clamp'
          });

          return (
            <Animated.View
              key={`dot-${index}`}
              opacity={opacity}
              style={{
                borderRadius: 20,
                marginHorizontal: 3,
                width: dotWidth,
                height: 6,
                backgroundColor: dotColor
              }}
            />
          );
        })}
      </View>
      <TouchableWithoutFeedback style={{ borderRadius: 20 }} onPress={()=> navigation.navigate('login')}>
        <Text style={{ backgroundColor: '#F05454', padding: 12,
         alignItems: 'center', width: '70%', alignSelf: 'center', 
         color: 'white', fontWeight: '600', fontSize: 30, marginTop: 40,
          borderRadius: 100 }}>Get Started</Text>
      </TouchableWithoutFeedback>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    // Add container styles as needed
  },
});
