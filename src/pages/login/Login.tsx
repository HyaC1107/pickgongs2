import React, {useState} from 'react';
import {
  Button,
  Image,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import CustomTextInput from '../../components/textinput/TextInput';
import PssWdTextInput from '../../components/textinput/PsswdTextInput';
import {
  RouteProp,
  StackNavigationState,
  TypedNavigator,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import {RootStackParamList} from '../../utils/StackParamList';
interface LoginProp {
  navigate: any;
}
export default function Login(): JSX.Element {
  const navigation = useNavigation<any>();
  const colorCircle = require('../../assets/images/circlecolor.png');
  const greyCircle = require('../../assets/images/circlegrey.png');
  const [type, setType] = useState(1);
  return (
    <View style={styles.rootWrapper}>
      <View style={styles.radioGroupWrap}>
        <TouchableWithoutFeedback
          onPress={() => {
            setType(1);
          }}>
          <View style={styles.radioWrap}>
            <Image source={type === 1 ? colorCircle : greyCircle} alt="icon" />
            <Text style={styles.radioTxt}>회원</Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback
          onPress={() => {
            setType(2);
          }}>
          <View style={styles.radioWrap}>
            <Image source={type === 2 ? colorCircle : greyCircle} alt="icon" />
            <Text style={styles.radioTxt}>파트너</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
      <View style={styles.titleWrap}>
        <Text style={[styles.title1, styles.black]}>시공전문가 찾고</Text>
        <Text style={[styles.title2, styles.green]}> 픽! </Text>
        <Text style={[styles.title1, styles.black]}>할땐</Text>
      </View>
      <CustomTextInput placeholder="아이디를 입력해주세요" />
      <PssWdTextInput placeholder="비밀번호를 입력해주세요" />
      <View style={styles.waringWrapper}>
        <Text style={styles.warningText}>
          로그인이 되지않습니다 아이디와 비밀번호를 다시입력하세요
        </Text>
      </View>
      <View style={styles.autoLoginWrapper}>
        <View style={styles.autoLoginTxtWrap}>
          <View style={styles.checkWrap}>
            <Image
              style={styles.checkIcon}
              source={require('../../assets/images/check.png')}
            />
          </View>
          <View>
            <Text style={styles.autoTxt}>자동로그인</Text>
          </View>
        </View>
        <TouchableWithoutFeedback
          onPress={() => {
            navigation.navigate('FindAccount', {userType: '회원'});
          }}>
          <View style={styles.findPsswdWrap}>
            <Text style={styles.findPsswd}>아이디 / 비밀번호찾기</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
      <TouchableWithoutFeedback
        onPress={() => {
          navigation.navigate('LoginUserType', {userType: 'none'});
      }}>
      <View style={styles.signUpWrap}>
        <Text style={styles.signUpTxt}>회원 / 파트너 회원가입</Text>
      </View>
      </TouchableWithoutFeedback>
      <View style={styles.buttonWrap}>
        <TouchableWithoutFeedback
          onPress={() =>
            navigation.navigate('LoginUserType', {userType: 'none'})
          }>
          <View>
            <Text style={styles.loginBtn}> 로그인</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  rootWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  radioButton: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: 30,
    width: 30,
    borderRadius: 50,
    backgroundColor: '#eee',
    color: '#ababab',
  },
  waringWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    marginBottom: 30,
  },
  warningText: {
    color: '#ff0000',
    fontSize: 11,
  },
  autoLoginWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
  },
  autoLoginTxtWrap: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    display: 'flex',
    paddingRight: 10,
  },
  autoTxt: {color: '#848484'},
  findPsswdWrap: {
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
  },
  findPsswd: {color: '#848484'},
  checkWrap: {
    paddingRight: 5,
    display: 'flex',
  },
  checkIcon: {
    height: 20,
    width: 20,
  },
  signUpWrap: {
    height: '20%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  signUpTxt: {color: '#848484'},
  titleWrap: {
    height: '20%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  title1: {
    fontSize: 27,
    fontWeight: '700',
  },
  black: {color: '#000'},
  green: {color: '#2CB07B'},
  title2: {
    fontSize: 35,
    fontWeight: '700',
  },
  buttonWrap: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    borderRadius: 100,
    width: '40%',
    backgroundColor: '#000326',
    color: 'white',
    display: 'flex',
    height: '7%',
  },
  loginBtn: {
    borderRadius: 100,
    backgroundColor: '#000326',
    color: 'white',
    display: 'flex',
    // height: 50,
    fontSize: 15,
    textAlign: 'center',
  },
  radioGroupWrap: {
    width: '50%',
    // height: '5%',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  radioWrap: {
    height: '100%',

    //backgroundColor: '#ff0',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    // marginRight: '8%',
  },
  radioTxt: {
    paddingLeft: '3%',
    fontSize: 16,
  },
});
