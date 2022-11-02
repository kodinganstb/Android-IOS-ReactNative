import React from 'react';
import {View, Image, Text} from 'react-native';

const CardLink = ({image, text}) => {
  return (
    <View style={{alignItems: 'center', marginRight: 10}}>
      <Image
        source={image}
        resizeMode="cover"
        style={{height: 96, width: 145}}
      />
      <Text
        style={{color: '#000', fontSize: 14, fontWeight: '600', marginTop: 10}}>
        {text}
      </Text>
    </View>
  );
};

export default CardLink;
