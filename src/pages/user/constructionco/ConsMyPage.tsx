import React, {useEffect, useRef, useState} from 'react';
import {
  Animated,
  Button,
  Dimensions,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

import styled, {css} from 'styled-components/native';

import {
  RouteProp,
  StackNavigationState,
  TypedNavigator,
  useNavigation,
  useRoute,
} from '@react-navigation/native';

import Carousel from '@/components/carousel/Carousel';

export default function ConsMypage(): JSX.Element {
  const navigation = useNavigation<any>();
  const router = useRoute<any>();
  const [isOpen, setOpen] = useState(false);

  const [isPopupOpen, setPopupClose] = useState(true);

  useEffect(() => {
    navigation.setOptions({tabBarStyle: {display: 'flex'}});
  }, []);
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View
        style={{
          flexDirection: 'row',
          width: '100%',
          backgroundColor: '#F9F9F9',
          alignItems: 'center',
          padding: '5%',
          marginTop: '10%',
        }}>
        <View
          style={{
            position: 'absolute',
            right: 20,
            top: 10,
          }}>
          <TouchableWithoutFeedback onPress={() => {}}>
            <Image source={require('@/assets/images/setting-icon.png')} />
          </TouchableWithoutFeedback>
        </View>
        <View
          style={{
            position: 'relative',
          }}>
          <Image
            style={{
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
            }}
            source={require('@/assets/images/mypage/cons-thum.png')}
          />
        </View>
        <View
          style={{
            width: '100%',
            // alignItems: 'center',
            justifyContent: 'center',
            paddingTop: '5%',
            paddingLeft: '5%',
          }}>
          <Text style={{color: '#000', fontWeight: '700', paddingBottom: '2%'}}>
            한마음인테리어
          </Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: '#000',
                fontWeight: '700',
                paddingRight: '10%',
              }}>
              010-0000-0000
            </Text>
            <TouchableWithoutFeedback onPress={() => {}}>
              <View
                style={{
                  backgroundColor: '#707070',
                  borderRadius: 100,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    color: 'white',
                    padding: '2%',
                    paddingLeft: '3%',
                    paddingRight: '3%',
                    // paddingTop: '3%',
                    //   paddingBottom: '3%',
                    //   paddingRight: '3%',
                    fontSize: 8,
                  }}>
                  전화번호 변경
                </Text>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </View>
      </View>
      <View
        style={{
          width: '100%',
          justifyContent: 'center',
          paddingTop: '10%',
          paddingBottom: '5%',
          paddingLeft: '5%',
          backgroundColor: 'white',
          rowGap: 25,
        }}>
        <TouchableWithoutFeedback
          onPress={() => {
            navigation.navigate('ConsNotice');
          }}>
          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              alignItems: 'center',
              paddingLeft: '10%',

              gap: 25,
            }}>
            <Image source={require('@/assets/images/mypage-notice.png')} />
            <Text>공지사항</Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback
          onPress={() => {
            navigation.navigate('ConsReviewMgmt');
          }}>
          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              alignItems: 'center',
              paddingLeft: '10%',
              gap: 25,
            }}>
            <Image source={require('@/assets/images/mypage-review-mgmt.png')} />
            <Text>리뷰관리</Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback
          onPress={() => {
            navigation.navigate('ConsDecoServiceInfo', {isPopupView: false});
          }}>
          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              alignItems: 'center',
              paddingLeft: '10%',
              gap: 25,
            }}>
            <Image source={require('@/assets/images/mypage/deco.png')} />
            <Text>우리가게 꾸미기</Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback
          onPress={() => {
            navigation.navigate('ConsPayAdvertisement');
          }}>
          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              alignItems: 'center',
              paddingLeft: '10%',
              gap: 25,
            }}>
            <Image
              source={require('@/assets/images/mypage/advertisement.png')}
            />
            <Text>광고결재</Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback
          onPress={() => {
            navigation.navigate('ConsUpdateCoInfo');
          }}>
          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              alignItems: 'center',
              paddingLeft: '10%',
              gap: 25,
            }}>
            <Image
              source={require('@/assets/images/mypage/update-info-req.png')}
            />
            <Text>업체정보 수정요청</Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback
          onPress={() => {
            navigation.navigate('ConsFrequentQnA');
          }}>
          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              alignItems: 'center',
              paddingLeft: '10%',
              gap: 25,
            }}>
            <Image source={require('@/assets/images/mypage-freq-qna.png')} />
            <Text>자주 묻는 질문</Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback
          onPress={() => {
            navigation.navigate('ConsQnAEnrollPage');
          }}>
          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              alignItems: 'center',
              paddingLeft: '10%',
              gap: 25,
            }}>
            <Image
              source={require('@/assets/images/mypage-onetoone-qna.png')}
            />
            <Text>1:1 문의하기/소비자 신고</Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback
          onPress={() => {
            // navigation.navigate('ConsInqiry');
          }}>
          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              alignItems: 'center',
              paddingLeft: '10%',
              gap: 25,
            }}>
            <Image source={require('@/assets/images/mypage/inquiry.png')} />
            <Text>불편사항 및 개선 문의</Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback
          onPress={() => {
            navigation.navigate('ConsProfileUpdate');
          }}>
          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              alignItems: 'center',
              paddingLeft: '10%',
              gap: 25,
            }}>
            <Image
              source={require('@/assets/images/mypage-update-profile.png')}
            />
            <Text>회원정보 수정하기</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  rootWrapper: {
    //justifyContent: 'center',
    //alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
    flex: 1,
  },
  locationWrapper: {
    height: '10%',
    width: '100%',
    alignItems: 'flex-end',
    justifyContent: 'center',
    flexDirection: 'row',
    //backgroundColor: '#ff0',
    position: 'relative',
    paddingBottom: '5%',
  },
});
