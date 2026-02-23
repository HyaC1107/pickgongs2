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
import PopUp from '../popup/PopUp';
import {useRoute} from '@react-navigation/native';
import SelectExposeArea from '../popup/SelectExposeArea';

export default function FindAccount(): JSX.Element {
  const [item, setItem] = useState(1);
  const [isShow, setState] = useState(true);
  const [email, setEmail] = useState('');

  const route = useRoute();
  useEffect(() => {
    setEmail('');
    setState(true);
  }, [item]);
  return (
    <View style={{backgroundColor: 'white', height: '100%'}}>
      <View style={{width: '100%', flexDirection: 'row', alignItems: 'center'}}>
        <TouchableWithoutFeedback
          onPress={() => {
            setItem(1);
          }}>
          <View
            style={
              item === 1
                ? {
                    width: '50%',
                    borderBottomWidth: 2,
                    borderColor: '#2CB07B',
                    alignItems: 'center',
                    padding: '5%',
                    backgroundColor: 'white',
                  }
                : {
                    width: '50%',
                    borderBottomWidth: 2,
                    borderColor: '#B4B4B4',
                    alignItems: 'center',
                    padding: '5%',
                    backgroundColor: 'white',
                  }
            }>
            <Text
              style={
                item === 1
                  ? {color: '#2CB07B', fontWeight: '600'}
                  : {color: '#B4B4B4'}
              }>
              아이디 찾기
            </Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback
          onPress={() => {
            setItem(2);
          }}>
          <View
            style={
              item === 2
                ? {
                    width: '50%',
                    borderBottomWidth: 2,
                    borderColor: '#2CB07B',
                    alignItems: 'center',
                    padding: '5%',
                    backgroundColor: 'white',
                  }
                : {
                    width: '50%',
                    borderBottomWidth: 1,
                    borderColor: '#B4B4B4',
                    alignItems: 'center',
                    padding: '5%',
                    backgroundColor: 'white',
                  }
            }>
            <Text
              style={
                item === 2
                  ? {color: '#2CB07B', fontWeight: '600'}
                  : {color: '#B4B4B4'}
              }>
              비밀번호 찾기
            </Text>
          </View>
        </TouchableWithoutFeedback>
      </View>

      {!isShow &&
        (email === '' ? (
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              height: 400,
            }}>
            <Text style={{color: '#FF3120', paddingBottom: '2%'}}>
              죄송합니다
            </Text>
            <Text style={{color: '#FF3120'}}>
              입력하신 정보가 맞지 않습니다
            </Text>
          </View>
        ) : (
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              height: 400,
            }}>
            <Text style={{paddingBottom: '2%'}}>입력하신 이메일</Text>
            <View style={{flexDirection: 'row'}}>
              <Text style={{paddingBottom: '2%', color: '#2CB07B'}}>
                {email}{' '}
              </Text>
              <Text style={{paddingBottom: '2%'}}>주소로</Text>
            </View>
            <View>
              <Text>아이디가 발송 되었습니다</Text>
            </View>
          </View>
        ))}
      <View style={isShow ? styles.rootWrapper : {display: 'none'}}>
        {item === 2 && (
          <View style={styles.textInputWrapper}>
            <View style={styles.textInputInfoWrap}>
              <View style={styles.textInputInfoTxtWrap}>
                <Text>아이디를 입력하세요</Text>
              </View>
              <View style={styles.checkDupBtmWrap}></View>
            </View>
          </View>
        )}
        {item === 2 && (
          <View style={styles.textInputWrap}>
            <TextInput style={styles.textInput} />
          </View>
        )}
        <View style={styles.textInputWrapper}>
          <View style={styles.textInputInfoWrap}>
            <View style={styles.textInputInfoTxtWrap}>
              <Text>이름을 입력하세요</Text>
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
              <Text>휴대폰 번호를 입력하세요</Text>
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
              <Text>가입한 이메일을 입력하세요</Text>
            </View>
            <View style={styles.checkDupBtmWrap}></View>
          </View>
        </View>
        <View style={styles.textInputWrap}>
          <TextInput
            style={styles.textInput}
            onChangeText={e => {
              setEmail(e);
            }}
          />
        </View>
      </View>
      <View
        style={{
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'white',
        }}>
        {!isShow && email === '' ? (
          <View style={{display: 'none'}}></View>
        ) : (
          <TouchableWithoutFeedback
            onPress={
              () => {
                setState(!isShow);
              }
              // navigation.navigate('LoginUserType', {userType: 'none'})
            }>
            <View style={styles.buttonWrap}>
              <Text style={styles.loginBtn}>
                {isShow
                  ? item === 1
                    ? '아이디 찾기'
                    : '비밀번호 찾기'
                  : '로그인 하기'}
              </Text>
            </View>
          </TouchableWithoutFeedback>
        )}
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  rootWrapper: {
    //justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: 400,
    backgroundColor: 'white',
    paddingLeft: '7.5%',
    paddingRight: '7.5%',
    paddingTop: '10%',
  },
  textInputWrapper: {
    alignItems: 'center',
    height: '10%',
    width: '100%',
    justifyContent: 'center',
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
    height: 50,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  textInput: {
    borderColor: '#E6E6E6',
    borderWidth: 1,
    width: '100%',
    height: 35,
    borderRadius: 3,
  },
  buttonWrap: {
    //marginTop: '15%',
    //marginBottom: '5%',

    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    borderRadius: 100,
    width: '50%',
    backgroundColor: '#000326',
    color: 'white',
    display: 'flex',
    height: '25%',
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
