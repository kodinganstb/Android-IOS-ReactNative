import {Checkbox} from 'native-base';
import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {Layer1} from '../../assets/images';
import {COLORS, SIZES} from '../../constant';
import {Facebook, Twitter} from '../../assets/icons';

const LoginScreen = ({navigation}) => {
  const [value1, setValue1] = useState(false);

  console.log(value1);

  return (
    <View style={styles.container}>
      {/* Layer */}
      <View style={{paddingHorizontal: SIZES.paddingHorizontal}}>
        <Image source={Layer1} resizeMode="cover" style={styles.layer1} />
      </View>

      {/* Title */}
      <View
        style={{
          marginTop: SIZES.padding,
          paddingHorizontal: SIZES.paddingHorizontal,
        }}>
        <Text style={styles.textTitle}>
          Silahkan masuk dengan nomer telkomsel kamu
        </Text>
      </View>

      {/* form */}
      <View
        style={{
          marginTop: SIZES.padding,
          paddingHorizontal: SIZES.paddingHorizontal,
        }}>
        <Text style={styles.textForm}>Nomor HP</Text>
        <TextInput
          placeholder="Cth. 08129xxx"
          style={styles.inputForm}
          placeholderTextColor={'#A4B0BE'}
        />
        <View style={{marginTop: 16}}>
          <Checkbox
            value={value1}
            size={'sm'}
            onChange={setValue1}
            accessibilityLabel="chose lisensi"
            _checked={{bg: COLORS.primary, borderColor: COLORS.primary}}>
            <Text style={styles.textCheckbox}>
              Saya menyetujui{' '}
              <Text style={styles.textRed}>syarat, ketentuan</Text> dan{' '}
              <Text style={styles.textRed}>privasi</Text> Telkomsel
            </Text>
          </Checkbox>
        </View>
        <View style={{marginTop: 32}}>
          <TouchableOpacity
            style={[
              styles.buttonLogin,
              {backgroundColor: value1 ? COLORS.primary : COLORS.lightGray},
            ]}
            disabled={!value1}
            onPress={() => {
              navigation.navigate('ConfirmLoginScreen');
            }}>
            <Text style={{color: value1 ? COLORS.white : COLORS.gray}}>
              Masuk
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{alignItems: 'center', marginTop: 16}}>
          <Text style={{color: COLORS.gray}}>Atau masuk menggunakan</Text>
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 16,
          }}>
          <TouchableOpacity
            style={[
              styles.buttonSocial,
              {borderColor: '#3B5998', marginRight: 10},
            ]}>
            <Image source={Facebook} resizeMode="cover" style={styles.icon} />
            <Text style={{color: '#3B5998'}}>Facebook</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.buttonSocial,
              {borderColor: '#1DA1F2', marginLeft: 10},
            ]}>
            <Image source={Twitter} resizeMode="cover" style={styles.icon} />
            <Text style={{color: '#1DA1F2'}}>Twitter</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
// _checked={{ bg: COLORS.primary, borderColor: COLORS.primary }}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
  },
  layer1: {
    height: 133,
    width: 147,
  },
  textTitle: {
    fontSize: 20,
    fontWeight: 'bold',
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
  textCheckbox: {
    fontSize: 14,
    color: COLORS.black,
  },
  textRed: {
    color: COLORS.primary,
  },
  buttonLogin: {
    padding: 12,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonSocial: {
    flex: 1,
    flexDirection: 'row',
    padding: 12,
    backgroundColor: COLORS.white,
    borderWidth: 1,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    height: 20,
    width: 20,
    marginRight: 8,
  },
});

export default LoginScreen;
