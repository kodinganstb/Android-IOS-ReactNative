import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {COLORS} from '../../constant';

const HeaderContentHome = ({text1, text2, text3}) => {
  return (
    <View>
      <Text style={styles.text1}>{text1}</Text>
      <View style={styles.row}>
        <Text style={styles.text2}>{text2}</Text>
        <Text style={styles.text3}>{text3}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text1: {
    color: COLORS.black,
    fontSize: 13,
  },
  row: {
    flexDirection: 'row',
    marginTop: 5,
    alignItems: 'flex-end',
  },
  text2: {
    color: COLORS.primary,
    fontSize: 24,
    fontWeight: 'bold',
    marginRight: 5,
  },
  text3: {
    color: COLORS.gray,
    fontSize: 14,
  },
});

export default HeaderContentHome;
