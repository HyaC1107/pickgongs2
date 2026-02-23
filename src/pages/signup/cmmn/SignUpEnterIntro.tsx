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
import PopUp from '../../popup/PopUp';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {RootStackParamList} from '@/utils/StackParamList';

export default function SignUpEnterIntro(): JSX.Element {
  const navigation = useNavigation<any>();
  const router = useRoute<RouteProp<RootStackParamList>>();

  return (
    <View style={styles.rootWrapper}>
      <View style={styles.welcomeTitleWrap}>
        <Text style={styles.greeting}>안녕하세요 대표님!</Text>
        <Text style={[styles.purple, styles.greeting]}>
          프로모션을 소개합니다!
        </Text>
      </View>
      <View style={styles.greyBodyWrap}>
        <View style={styles.bodyMentWrap}>
          <Text>첫달만 결제하세요!</Text>
          <Text>프로모션 기간동안 무료!</Text>
        </View>
        <View style={styles.highlightMentWrap}>
          <Text style={styles.price}>{(49000).toLocaleString()}원</Text>
        </View>
        <View style={styles.taxMentWrap}>
          <Text style={styles.subTxt}>부가세는 10%, 지역추가는 별도에요!</Text>
        </View>
        <View style={styles.divider} />
        <View style={styles.bodyMentWrap}>
          <Text>가족,친구,모임,커뮤니티에</Text>
          <Text>픽공스 소개하고 추천인코드 많이 받으면</Text>
        </View>
        <View style={styles.highlightMentWrap}>
          <Text style={styles.price}>무료이용권 + 지역노출권 추가!</Text>
        </View>
        <View style={styles.taxMentWrap}>
          <Text style={styles.subTxt}>이건 프로모션이 끝나면 적용되요!</Text>
        </View>
      </View>

      <View style={styles.buttonWrap}>
        <TouchableWithoutFeedback
          onPress={() =>
            navigation.navigate('SignUpEnterprise', router.params)
          }>
          <View style={styles.button}>
            <Text style={styles.btnText}>다음</Text>
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
    paddingLeft: '7.5%',
    paddingRight: '7.5%',
  },
  welcomeTitleWrap: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    height: '20%',
  },
  greeting: {
    fontSize: 16,
  },
  purple: {color: '#4545FD'},
  greyBodyWrap: {
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 2.5,
    backgroundColor: '#F8F8FA',
    // padding: '5%',
  },
  bodyMentWrap: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  price: {
    color: '#2CB07B',
    fontSize: 20,
    fontWeight: '700',
  },

  highlightMentWrap: {
    height: '20%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  taxMentWrap: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  subTxt: {
    fontSize: 10,
  },
  divider: {
    borderWidth: 1,
    borderColor: '#D6D6D6',
    width: '90%',
    marginTop: '10%',
    marginBottom: '10%',
  },
  buttonWrap: {
    flex: 1,
    width: '100%',
    justifyContent: 'flex-end',
    // paddingTop: '10%',
    alignItems: 'center',
    flexDirection: 'column',
    borderRadius: 100,
    paddingBottom: '10%',
  },
  button: {
    borderRadius: 100,
    width: '50%',
    backgroundColor: '#000326',
    color: 'white',
    display: 'flex',
    height: '30%',
    // height: 50,
    fontSize: 15,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    color: 'white',
  },
});
