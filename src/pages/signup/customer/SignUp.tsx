import React, {useEffect, useState} from 'react';
import {
  Button,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import PopUp from '@/pages/popup/PopUp';
import {useNavigation, useRoute} from '@react-navigation/native';
import SelectExposeArea from '@/pages/popup/SelectExposeArea';
import {WINDOW_HEIGHT} from '@/constants/context';

export default function SignUp(): JSX.Element {
  const [warn, setWarn] = useState(false);
  const [warnEmail, setEmailWarn] = useState(false);
  const [warnNick, setNickWarn] = useState(false);
  const [success, setSuccess] = useState(false);
  const route = useRoute();
  const navigation = useNavigation<any>();
  useEffect(() => {
    console.log(route.params);
  }, []);
  return (
    <View>
      <View style={styles.rootWrapper}>
        <View style={styles.textInputWrapper}>
          <View style={styles.textInputInfoWrap}>
            <View style={styles.textInputInfoTxtWrap}>
              <Text>아이디를 입력해주세요</Text>
            </View>
            <View style={styles.checkDupBtmWrap}>
              <TouchableWithoutFeedback>
                <View style={styles.checkDupBtn}>
                  <Text style={styles.checkTxt}>중복확인</Text>
                </View>
              </TouchableWithoutFeedback>
            </View>
          </View>
        </View>
        <View style={styles.textInputWrap}>
          <TextInput style={styles.textInput} />
        </View>
        <View style={styles.textInputWrapper}>
          <View style={styles.textInputInfoWrap}>
            <View style={styles.textInputInfoTxtWrap}>
              <Text>비밀번호를 입력해주세요</Text>
            </View>
            <View style={styles.checkDupBtmWrap}></View>
          </View>
        </View>
        <View style={styles.textInputWrap}>
          <TextInput style={styles.textInput} />
        </View>
        <View style={styles.textInputWrapper}>
          <View style={styles.textInputInfoWrap}>
            <View style={styles.textInputInfoTxtWrap}>
              <Text>다시 한번 비밀번호를 입력해주세요</Text>
            </View>
            <View style={styles.checkDupBtmWrap}></View>
          </View>
        </View>
        <View style={styles.textInputWrap}>
          <TextInput
            onChange={() => {
              setWarn(true);
            }}
            onBlur={() => {
              // setWarn(false);
            }}
            style={styles.textInput}
          />
          <Text style={warn ? styles.warnMent : styles.disabled}>
            비밀번호가 맞지 않습니다 다시 입력하세요
          </Text>
        </View>
        <View style={styles.textInputWrapper}>
          <View style={styles.textInputInfoWrap}>
            <View style={styles.textInputInfoTxtWrap}>
              <Text>이메일을 입력해주세요</Text>
            </View>
            <View style={styles.checkDupBtmWrap}>
              <TouchableWithoutFeedback>
                <View style={styles.checkDupBtn}>
                  <Text style={styles.checkTxt}>이메일인증</Text>
                </View>
              </TouchableWithoutFeedback>
            </View>
          </View>
        </View>
        <View style={styles.textInputWrap}>
          <TextInput
            onChange={() => {
              setEmailWarn(true);
            }}
            onBlur={() => {
              // setEmailWarn(false);
            }}
            style={styles.textInput}
          />
          <Text style={warnEmail ? styles.warnMent : styles.disabled}>
            이메일을 확인해주세요
          </Text>
        </View>
        <View style={styles.textInputWrapper}>
          <View style={styles.textInputInfoWrap}>
            <View style={styles.textInputInfoTxtWrap}>
              <Text>닉네임을 입력해주세요</Text>
            </View>
            <View style={styles.checkDupBtmWrap}>
              <TouchableWithoutFeedback>
                <View style={styles.checkDupBtn}>
                  <Text style={styles.checkTxt}>중복확인</Text>
                </View>
              </TouchableWithoutFeedback>
            </View>
          </View>
        </View>
        <View style={styles.textInputWrap}>
          <TextInput
            onChange={() => {
              setNickWarn(true);
            }}
            onBlur={() => {
              // setNickWarn(false);
            }}
            style={styles.textInput}
          />
          <Text style={warnNick ? styles.warnMent : styles.disabled}>
            이미 다른사람이 사용하고 있습니다
          </Text>
        </View>
        <View style={styles.textInputWrapper}>
          <View style={styles.textInputInfoWrap}>
            <View style={styles.textInputInfoTxtWrap}>
              <Text>본인인증하기</Text>
            </View>
            <View style={styles.checkDupBtmWrap}>
              <TouchableWithoutFeedback
                onPress={() => {
                  setSuccess(!success);
                }}>
                {success ? (
                  <View style={styles.checkSuccessWrap}>
                    <Image
                      source={require('@/assets/images/successcheck0.5.png')}
                    />
                    <Text style={styles.checkSuccessTxt}>인증완료</Text>
                  </View>
                ) : (
                  <View style={styles.checkDupBtn}>
                    <Text style={styles.checkTxt}>인증하기</Text>
                  </View>
                )}
              </TouchableWithoutFeedback>
            </View>
          </View>
        </View>
        <View style={styles.buttonWrap}>
          <TouchableWithoutFeedback
            onPress={() => {
              navigation.navigate('NavigatoarTab');
            }}>
            <View>
              <Text style={styles.loginBtn}>회원 가입 완료</Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </View>
      <PopUp />
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
    paddingLeft: '7.5%',
    paddingRight: '7.5%',
  },
  textInputWrapper: {
    alignItems: 'center',
    height: '5%',
    width: '100%',
    justifyContent: 'center',
    //backgroundColor: '#ff0',
  },
  textInputInfoWrap: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingLeft: '3%',
    paddingRight: '3%',
  },
  textInputInfoTxtWrap: {},
  checkDupBtmWrap: {
    width: '20%',
  },
  checkDupBtn: {
    backgroundColor: '#2CB07B',
    width: '100%',
    height: '80%',
    alignItems: 'center',
    borderRadius: 100,
    justifyContent: 'center',
  },
  checkTxt: {
    color: '#fff',
    fontSize: 11,
  },
  textInputWrap: {
    width: '100%',
    height: '10%',
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  textInput: {
    borderColor: '#E6E6E6',
    borderWidth: 1,
    width: '100%',
    height: '55%',
    borderRadius: 3,
  },
  buttonWrap: {
    marginTop: '15%',
    marginBottom: '5%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    borderRadius: 100,
    width: '50%',
    backgroundColor: '#000326',
    color: 'white',
    display: 'flex',
    height: WINDOW_HEIGHT * 0.06,
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
  warnMent: {
    fontSize: 10.5,
    color: '#FF3120',
    paddingLeft: '3%',
    paddingTop: '2%',
  },
  disabled: {
    display: 'none',
  },
  checkSuccessWrap: {
    width: '100%',
    height: '80%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  checkSuccessTxt: {
    color: '#2CB07B',
    fontSize: 11,
    paddingLeft: '5%',
  },
});
