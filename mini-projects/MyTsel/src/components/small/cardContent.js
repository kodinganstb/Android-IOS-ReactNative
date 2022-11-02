import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const CardContent = ({image, text1, text2, color1, color2}) => {
  return (
    <TouchableOpacity>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        colors={[color1, color2]}
        style={styles.card}>
        <Image
          source={image}
          resizeMode="cover"
          style={{height: 82, width: 81}}
        />
        <View style={{marginLeft: 10, justifyContent: 'space-evenly'}}>
          <Text
            style={{
              fontSize: 18,
              color: '#FFF',
              fontWeight: 'bold',
              width: 130,
            }}>
            {text1}
          </Text>
          <Text style={{fontSize: 14, color: '#fff', width: 130}}>{text2}</Text>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 13,
    flexDirection: 'row',
    backgroundColor: 'blue',
    marginRight: 20,
    borderRadius: 10,
  },
});

export default CardContent;
