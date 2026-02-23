import React, {useRef, useState} from 'react';
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
import SchedulePopup from '@/pages/popup/SchedulePopup';
import {scheduleFixedData} from './schedule';

export default function ScheduleVisitFix(): JSX.Element {
  const navigation = useNavigation<any>();
  const router = useRoute<any>();
  const [showPopup, setPopup] = useState(false);

  const handlePopup = () => {
    navigation.setParams({...router.params, popupOpen: false});
  };
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          backgroundColor: 'white',
          padding: '5%',
          alignItems: 'center',
          marginBottom: '2%',
        }}>
        <Text style={{fontSize: 12}}>
          업체에서 방문예정입니다 견적을 비교 후 공사를 요청하세요
        </Text>
      </View>
      <ScrollView style={{flex: 1, backgroundColor: 'white'}}>
        {scheduleFixedData.map((el, i) => {
          return (
            <TouchableWithoutFeedback
              onPress={() => {
                if (el.state === 2) {
                  setPopup(true);
                }
              }}>
              <View
                key={i}
                style={{
                  width: '100%',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginBottom: '5%',
                }}>
                <View
                  style={{
                    width: '85%',
                    height: 270,
                    borderRadius: 10,
                    shadowColor: '#ababab',
                    shadowOffset: {
                      width: 0,
                      height: 2,
                    },
                    shadowOpacity: 0.5,
                    shadowRadius: 3.84,
                    backgroundColor: 'white',
                    elevation: 3,
                  }}>
                  {el.state !== 3 && (
                    <Image
                      source={require('@/assets/images/talkicon.png')}
                      style={{position: 'absolute', right: 5, top: 5}}
                    />
                  )}
                  <View
                    style={{
                      width: '100%',
                      height: '30%',
                      flexDirection: 'row',
                    }}>
                    <View style={{padding: '5%'}}>
                      <Image
                        style={{width: 70, height: 70}}
                        source={require('@/assets/images/pick1.png')}
                      />
                    </View>
                    <View
                      style={{
                        paddingTop: '10%',
                        justifyContent: 'center',
                      }}>
                      <Text
                        style={{
                          fontSize: 16,
                          fontWeight: '600',
                          paddingBottom: '5%',
                        }}>
                        한마음인테리어
                      </Text>
                      <View style={{flexDirection: 'row'}}>
                        <Text style={{fontSize: 10, paddingRight: '2%'}}>
                          보증보험가능
                        </Text>
                        <Text style={{fontSize: 10, paddingRight: '2%'}}>
                          자격증보유
                        </Text>
                        <Text style={{fontSize: 10}}>6개월A/S</Text>
                      </View>
                    </View>
                  </View>
                  <View
                    style={{
                      paddingTop: '10%',
                      width: '100%',
                      height: '70%',
                      borderBottomColor: '#E9EDEF',
                      borderBottomWidth: 1,
                    }}>
                    {el.isCheck && (
                      <View
                        style={{
                          width: '100%',
                          height: '77%',
                          backgroundColor: 'rgba(0,0,0,0.8)',
                          zIndex: 1,
                          top: '20%',
                          position: 'absolute',
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}>
                        <Image
                          source={require('@/assets/images/magnifier.png')}
                        />
                        <Text style={{color: 'white', paddingTop: '5%'}}>
                          다른업체찾기
                        </Text>
                      </View>
                    )}
                    <Carousel imgList={el.thumnailList} />
                    <View
                      style={
                        el.state !== 1
                          ? styles.fontStyleOtherWrap
                          : styles.fontaStyle1Wrap
                      }>
                      <Text
                        style={
                          el.state === 1 ? styles.fontStyle1 : {display: 'none'}
                        }>
                        2023년 5월 01일 AM 10:00
                      </Text>
                      <Text
                        style={
                          el.state === 1 || el.state === 4
                            ? styles.fontStyle1
                            : el.state === 2
                            ? styles.fontStyle2
                            : styles.fontStyle3
                        }>
                        {el.ment}
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </TouchableWithoutFeedback>
          );
        })}
      </ScrollView>
      <View style={{width: '100%', height: 50, flexDirection: 'row'}}>
        <View
          style={{
            width: '50%',
            height: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#416292',
          }}>
          <Text style={{color: 'white', fontWeight: '600'}}>스케줄 안내문</Text>
        </View>
        <TouchableWithoutFeedback
          onPress={() => {
            //schedule popup open
          }}>
          <View
            style={{
              width: '50%',
              height: '100%',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'row',
              backgroundColor: 'white',
              borderTopColor: '#F6F6F6',
              borderTopWidth: 1,
            }}>
            <Image source={require('@/assets/images/scheduleler0.5.png')} />
            <Text style={{fontWeight: '600', paddingLeft: '5%'}}>
              스케줄관리
            </Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
      {router.params?.popupOpen && <SchedulePopup handlePopup={handlePopup} />}
      {/* <RequestPopup showPopup={showPopup} handlePopup={handlePopup} /> */}
      {/* <RequestAcceptedPopup showPopup={showPopup} handlePopup={handlePopup} />
      <CalendarFilterPopup /> */}
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

  // font Style1 : 예약중
  // font Style2 : 예약완료
  // font Style3 : 예약불가
  // fontStyle1Wrap: 예약중, 예약완료 wrap
  // fontStyleOtherWrap: 예약불가wrap
  fontaStyle1Wrap: {
    borderTopWidth: 1,
    borderColor: '#F1F1F5',
    padding: '2%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  fontStyle1: {
    paddingLeft: '5%',
    paddingRight: '5%',
    color: '#656565',
    fontWeight: '600',
  },
  fontStyle2: {
    paddingLeft: '5%',
    paddingRight: '5%',
    color: '#2CB07B',
    fontWeight: '600',
  },
  fontStyleOtherWrap: {
    borderTopWidth: 1,
    borderColor: '#F1F1F5',
    padding: '2%',
    alignItems: 'center',
  },
  fontStyle3: {
    paddingLeft: '5%',
    color: '#EB701F',
    fontWeight: '600',
  },
});
