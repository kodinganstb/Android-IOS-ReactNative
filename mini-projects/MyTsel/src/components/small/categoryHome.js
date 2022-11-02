/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, Image, TouchableOpacity} from 'react-native';

const CategoryHome = ({text, sourceIcon, width, height}) => {
  return (
    <TouchableOpacity style={{justifyContent: 'center', alignItems: 'center'}}>
      <Image source={sourceIcon} resizeMode="cover" style={{width, height}} />
      <Text
        style={{fontSize: 14, fontWeight: '700', marginTop: 20, color: '#000'}}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default CategoryHome;
