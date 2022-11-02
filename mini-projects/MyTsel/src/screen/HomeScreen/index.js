import {ScrollView} from 'native-base';
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
  StatusBar,
} from 'react-native';
import {COLORS, SIZES} from '../../constant';
import {
  LogoSimpati,
  Qrcode,
  Internet,
  Telepon,
  Roaming,
  SMS,
  Hiburan,
  Unggulan,
  Tersimpan,
  Riwayat,
} from '../../assets/icons';
import LinearGradient from 'react-native-linear-gradient';
import {
  CardContent,
  CardCovid,
  CardLink,
  CardVoucher,
  CategoryHome,
  HeaderContentHome,
} from '../../components';
import {
  TanggapCovid1,
  TanggapCovid2,
  TanggapCovid3,
  TanggapCovid4,
  Terbaru1,
  Terbaru2,
  LinkAja1,
  LinkAja2,
  LinkAja3,
  Voucher1,
  Voucher2,
  Voucher3,
  Voucher4,
  Penawaran1,
  Penawaran2,
} from '../../assets/images';
const {width: W} = Dimensions.get('window');

const HomeScreen = () => {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <StatusBar translucent={true} backgroundColor="transparent" />

      {/* Header */}
      <View style={styles.containerHeader}>
        {/* background */}
        <View style={styles.header} />

        {/* Header content */}
        <View style={{position: 'absolute', top: 45, width: '100%'}}>
          <View style={styles.headerRow}>
            <Text style={{color: '#fff', fontSize: 20}}>
              Hai, <Text style={{fontWeight: 'bold'}}>Rizki</Text>
            </Text>
            <Image
              source={Qrcode}
              resizeMode="cover"
              style={{height: 18, width: 18}}
            />
          </View>
          {/* card */}
          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            colors={['#E53E27', '#B31217']}
            style={styles.cardHeader}>
            <View style={[styles.row, {justifyContent: 'space-between'}]}>
              <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 18}}>
                081284382734
              </Text>
              <Image
                source={LogoSimpati}
                resizeMode="cover"
                style={{width: 84, height: 15}}
              />
            </View>
            <View
              style={[
                styles.row,
                {
                  marginTop: 20,
                  justifyContent: 'space-between',
                  alignItems: 'flex-end',
                },
              ]}>
              <View>
                <Text style={{color: '#fff', fontSize: 14, fontWeight: '600'}}>
                  Sisa pulsa Anda
                </Text>
                <Text
                  style={{
                    color: '#fff',
                    fontSize: 24,
                    fontWeight: 'bold',
                    marginTop: 5,
                  }}>
                  Rp54.000
                </Text>
              </View>
              <TouchableOpacity
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  padding: 8,
                  backgroundColor: '#F7B731',
                  borderRadius: 8,
                }}>
                <Text style={{fontSize: 14}}>Isi Pulsa</Text>
              </TouchableOpacity>
            </View>
            <View style={{marginTop: 15}}>
              <Text style={{color: '#fff', fontSize: 14}}>
                Berlaku sampai{' '}
                <Text style={{fontWeight: 'bold'}}>17 Januari 2023</Text>
              </Text>
              <View style={[styles.row, {marginTop: 4}]}>
                <Text style={{color: '#fff', fontSize: 14}}>
                  Telkomsel POIN{' '}
                </Text>
                <View
                  style={{
                    padding: 2,
                    backgroundColor: '#F7B731',
                    borderRadius: 3,
                  }}>
                  <Text style={{fontSize: 12}}>272</Text>
                </View>
              </View>
            </View>
          </LinearGradient>
        </View>

        {/* Header content2 */}
        <View
          style={[
            styles.row,
            {
              marginTop: 55,
              paddingHorizontal: 20,
              justifyContent: 'space-around',
            },
          ]}>
          <HeaderContentHome text1={'Internet'} text2={'13.9'} text3={'GB'} />
          <HeaderContentHome text1={'Telpon'} text2={'0'} text3={'Min'} />
          <HeaderContentHome text1={'SMS'} text2={'23'} text3={'SMS'} />
        </View>
      </View>

      {/* Content */}
      <View style={styles.content}>
        <View>
          <Text style={styles.textTitleContent}>Kategori Paket</Text>
          <View
            style={[
              styles.row,
              {marginTop: 25, justifyContent: 'space-between'},
            ]}>
            <CategoryHome
              sourceIcon={Internet}
              text={'Internet'}
              width={32}
              height={32}
            />
            <CategoryHome
              sourceIcon={Telepon}
              text={'Telpon'}
              width={32}
              height={31}
            />
            <CategoryHome
              sourceIcon={SMS}
              text={'SMS'}
              width={32}
              height={31}
            />
            <CategoryHome
              sourceIcon={Roaming}
              text={'Roaming'}
              width={32}
              height={31}
            />
          </View>
          <View
            style={[
              styles.row,
              {marginTop: 20, justifyContent: 'space-between'},
            ]}>
            <CategoryHome
              sourceIcon={Hiburan}
              text={'Hiburan'}
              width={32}
              height={24}
            />
            <CategoryHome
              sourceIcon={Unggulan}
              text={'Unggulan'}
              width={25}
              height={32}
            />
            <CategoryHome
              sourceIcon={Tersimpan}
              text={'Tersimpan'}
              width={32}
              height={30}
            />
            <CategoryHome
              sourceIcon={Riwayat}
              text={'Riwayat'}
              width={28}
              height={28}
            />
          </View>
        </View>

        {/* konten terbaru */}
        <View style={{marginTop: 30}}>
          <View
            style={[
              styles.row,
              {justifyContent: 'space-between', alignItems: 'center'},
            ]}>
            <Text style={styles.textTitleContent}>Terbaru dari Telkomsel</Text>
            <TouchableOpacity>
              <Text style={{color: COLORS.primary, fontSize: 14}}>
                Lihat Semua
              </Text>
            </TouchableOpacity>
          </View>
          <ScrollView
            horizontal={true}
            style={{marginTop: 20}}
            showsHorizontalScrollIndicator={false}>
            <CardContent
              image={Terbaru1}
              text1="Internet OMG"
              text2="Bisa Youtube dan  Sosmed"
              color1={'#FF512F'}
              color2={'#DD2476'}
            />
            <CardContent
              image={Terbaru2}
              text1="Undian Ketengan"
              text2="Beli kuota ketengan"
              color1={'#4776E6'}
              color2={'#8E54E9'}
            />
          </ScrollView>
        </View>

        {/* Tanggap Covid 19 */}
        <View style={{marginTop: 30}}>
          <Text style={styles.textTitleContent}>Tanggap COVID-19</Text>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            style={{marginTop: 20}}>
            <CardCovid
              image={TanggapCovid1}
              text1="Diskon Spesial 25% Untuk Pelanggan Baru"
            />
            <CardCovid
              image={TanggapCovid2}
              text1="Bebas Kuota Akses Layanan Kesehatan"
            />
            <CardCovid
              image={TanggapCovid3}
              text1="Telkomsel #TerusBergerakMaju ..."
            />
            <CardCovid image={TanggapCovid4} text1="#DiRumahTerusProduktif" />
          </ScrollView>
        </View>

        {/* Link Aja */}
        <View style={{marginTop: 30}}>
          <Text style={styles.textTitleContent}>Ayo! Pakai LinkAja!</Text>
          <Text style={{marginTop: 10, color: '#000', fontSize: 14}}>
            Pakai LinkAja untuk beli pulsa, beli paket data dan bayar tagihan
            lebih mudah.
          </Text>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            style={{marginTop: 20}}>
            <CardLink image={LinkAja1} text="Bayar Serba Cepat" />
            <CardLink image={LinkAja2} text="Cukup Scan QR" />
            <CardLink image={LinkAja3} text="NO! Credit Card" />
          </ScrollView>
        </View>

        {/* Voucher */}
        <View style={{marginTop: 30}}>
          <View
            style={[
              styles.row,
              {justifyContent: 'space-between', alignItems: 'center'},
            ]}>
            <Text style={styles.textTitleContent}>Cari Voucher Yuk!</Text>
            <TouchableOpacity>
              <Text style={{color: COLORS.primary, fontSize: 14}}>
                Lihat Semua
              </Text>
            </TouchableOpacity>
          </View>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            style={{marginTop: 20}}>
            <CardVoucher
              image={Voucher1}
              text="Double Benefits from DOUBLE UNTUNG"
            />
            <CardVoucher image={Voucher2} text="Join Undi-Undi Hepi 2020!" />
            <CardVoucher
              image={Voucher3}
              text="Get Samsung Galaxy S20 Series with Best kartuHalo ..."
            />
            <CardVoucher
              image={Voucher4}
              text="Mau Dapetin Konten Favorit? Ke Outlet Pulsa Aja!"
            />
          </ScrollView>
        </View>

        {/* Penawaran */}
        <View style={{marginTop: 30}}>
          <View
            style={[
              styles.row,
              {justifyContent: 'space-between', alignItems: 'center'},
            ]}>
            <Text style={styles.textTitleContent}>Penawaran Khusus</Text>
            <TouchableOpacity>
              <Text style={{color: COLORS.primary, fontSize: 14}}>
                Lihat Semua
              </Text>
            </TouchableOpacity>
          </View>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            style={{marginTop: 20}}>
            <CardVoucher
              image={Penawaran1}
              text="Terus Belajar dari Rumahmu dengan Ruangguru!"
            />
            <CardVoucher
              image={Penawaran2}
              text="Belajar Kini Makin Mudah dengan Paket ilmupedia!"
            />
          </ScrollView>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    backgroundColor: COLORS.lightGray,
  },
  containerHeader: {
    paddingBottom: 30,
    backgroundColor: COLORS.white,
  },
  header: {
    height: 250,
    width: W - 120,
    left: 50,
    backgroundColor: 'red',
    top: -20,
    borderRadius: 150,
    transform: [{scaleX: 3}],
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    width: '100%',
    padding: 10,
    // backgroundColor: COLORS.primary
    // marginTop: SIZES.padding * 2
  },
  cardHeader: {
    paddingHorizontal: 20,
    paddingVertical: 16,
    marginHorizontal: 20,
    marginTop: 20,
    borderRadius: 10,
  },
  row: {
    flexDirection: 'row',
  },
  content: {
    marginTop: 5,
    paddingHorizontal: 20,
    paddingVertical: 20,
    backgroundColor: COLORS.white,
  },
  textTitleContent: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
});

export default HomeScreen;
