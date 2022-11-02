/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Image, Text} from 'react-native';

const CardVoucher = ({image, text}) => {
  return (
    <View style={{marginRight: 20}}>
      <Image
        source={image}
        resizeMode="cover"
        style={{height: 112, width: 248}}
      />
      <View style={{padding: 10, width: 228}}>
        <Text style={{fontSize: 14, color: '#000', fontWeight: '600'}}>
          {text}
        </Text>
      </View>
    </View>
  );
};

export default CardVoucher;
