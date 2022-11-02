import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {Back} from '../../assets/icons';
import {Layer2} from '../../assets/images';
import {COLORS, SIZES} from '../../constant';

const ConfirmLoginScreen = ({navigation}) => {
  const [value, setValue] = useState('');
  return (
    <View style={styles.container}>
      {/* Header */}
      {/* Icon Back */}
      <View
        style={{
          marginTop: SIZES.padding,
          paddingHorizontal: SIZES.paddingHorizontal,
          paddingVertical: SIZES.padding,
        }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={Back} resizeMode="cover" style={styles.iconBack} />
        </TouchableOpacity>
      </View>

      {/* Body */}
      <View style={styles.body}>
        {/* Image Layer */}
        <View>
          <Image
            source={Layer2}
            resizeMode="cover"
            style={{height: 112, width: 112}}
          />
        </View>

        {/* TEXT HEAD */}
        <View style={{marginTop: 32}}>
          <Text style={styles.titleBody}>
            Masukkan kode unik yang kami kirim
          </Text>
          <Text style={styles.titleBody2}>
            Silahkan periksa SMS kamu dan masukan kode unik yang kami kirimkan
            ke 0812xxxxx
          </Text>
        </View>

        {/* Form */}
        <View style={{marginTop: SIZES.padding, marginBottom: SIZES.padding}}>
          <Text style={styles.textForm}>Kode Unik</Text>
          <TextInput
            placeholder="xxxx"
            style={styles.inputForm}
            placeholderTextColor={'#A4B0BE'}
            onChange={text => {
              setValue(text);
            }}
          />
          <Text style={[styles.textForm, {marginTop: 16, fontWeight: '400'}]}>
            Tidak menerima SMS ? <Text style={styles.textRed}>Kirim ulang</Text>
          </Text>
          <TouchableOpacity
            style={styles.buttonNext}
            onPress={() => console.log(navigation.navigate('TabBottom'))}>
            <Text style={styles.textButton}>Lanjutkan</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
  },
  iconBack: {
    height: 26,
    width: 26,
  },
  body: {
    display: 'flex',
    flex: 1,
    paddingHorizontal: SIZES.padding,
    justifyContent: 'space-between',
  },
  titleBody: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  titleBody2: {
    fontSize: 14,
    marginTop: 12,
  },
  textForm: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  inputForm: {
    marginTop: 8,
    borderWidth: 1,
    borderColor: '#CED6E0',
    padding: 12,
    borderRadius: 10,
  },
  textRed: {
    color: COLORS.primary,
  },
  buttonNext: {
    padding: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: SIZES.padding,
    borderRadius: 10,
    backgroundColor: COLORS.primary,
  },
  textButton: {
    fontSize: 14,
    color: COLORS.white,
  },
});

export default ConfirmLoginScreen;
