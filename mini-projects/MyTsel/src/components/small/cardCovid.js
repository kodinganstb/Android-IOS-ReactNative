import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

const CardCovid = ({image, text1}) => {
  return (
    <TouchableOpacity style={{marginLeft: 10}}>
      <Image
        source={image}
        style={{width: 248, height: 112}}
        resizeMode="cover"
      />
      <View style={{padding: 10, width: 228}}>
        <Text style={{color: '#000', fontSize: 14, fontWeight: '700'}}>
          {text1}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default CardCovid;
