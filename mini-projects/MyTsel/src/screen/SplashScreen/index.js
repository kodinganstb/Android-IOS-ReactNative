import React, {useEffect} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {Logo} from '../../assets/icons';
import {COLORS} from '../../constant';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('LoginScreen');
    }, 3000);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image source={Logo} resizeMode="cover" style={styles.logo} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.primary,
  },
  logo: {
    height: 123,
    width: 97,
  },
});

export default SplashScreen;
