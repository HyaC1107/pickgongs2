import React, {useRef, useState} from 'react';
import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import {
  responsiveFontSize,
  responsiveScreenFontSize,
} from 'react-native-responsive-dimensions';
import GetHeavyProfileCard from './GetHeavyProfileCard';
import {WINDOW_HEIGHT, WINDOW_WIDTH} from '@/constants/context';

interface VisitCardProps {
  customerName: string;
  customerAddress: string;
  visitTime: string;
  companySchedule: string;
}

export default function GetHeavyRequestListStatusCard(
  data: VisitCardProps,
): JSX.Element {
  const {customerName, customerAddress, visitTime, companySchedule} = data;
  const dummy = [
    {
      key: 'key',
      reservAvaiilableState: true,
    },
    {
      key: 'key',
      reservAvaiilableState: true,
    },
    {
      key: 'key',
      reservAvaiilableState: false,
    },
  ];
  return (
    <View style={styles.cardContainer}>
      <View style={styles.cardWrapper}>
        <View style={{width: '100%', alignItems: 'center', gap: 15}}>
          <Text
            style={{fontSize: responsiveScreenFontSize(2), fontWeight: '700'}}>
            2023년 05월 25일
          </Text>
          <View
            style={{
              width: WINDOW_WIDTH * 0.49,
              flexDirection: 'row',
              alignItems: 'flex-start',
              justifyContent: 'space-between',
            }}>
            <Image source={require('@/assets/images/request-get-pin.png')} />
            <View style={{alignItems: 'center'}}>
              <Text
                style={{
                  fontSize: responsiveScreenFontSize(2),
                  color: '#656565',
                }}>
                서울시 마포구 마포대로 33
              </Text>
              <Text
                style={{
                  fontSize: responsiveScreenFontSize(2),
                  color: '#656565',
                }}>
                삼성아파트 305동 101호
              </Text>
            </View>
          </View>
          <Text
            style={{
              fontSize: responsiveScreenFontSize(2),

              color: '#656565',
            }}>
            AM 08:00 ~ PM 17:00
          </Text>
        </View>

        <View
          style={{
            width: '100%',
            alignItems: 'center',
            gap: 15,
            paddingTop: '3%',
          }}>
          <GetHeavyProfileCard />
        </View>
        <View
          style={{
            width: '100%',
            alignItems: 'center',
            // gap: 15,
            paddingTop: '3%',
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              width: WINDOW_WIDTH * 0.5,
              height: WINDOW_HEIGHT * 0.1,
            }}>
            <Text style={{fontSize: responsiveFontSize(2), fontWeight: '700'}}>
              임대료금액설정
            </Text>
            <Text style={{fontSize: responsiveFontSize(2), fontWeight: '700'}}>
              0원
            </Text>
          </View>
          <View
            style={{
              justifyContent: 'flex-start',
              alignItems: 'center',
              width: '100%',
              height: WINDOW_HEIGHT * 0.07,
              borderBottomColor: '#E9EDEF',
              borderBottomWidth: 1,
              //   backgroundColor: '#ff0',
            }}>
            <Text
              style={{
                fontSize: responsiveFontSize(1.8),
                fontWeight: '700',
                color: '#EB701F',
              }}>
              입찰하기
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              //   width: WINDOW_WIDTH * 0.5,
              height: WINDOW_HEIGHT * 0.07,
              //   backgroundColor: '#ff0',
              gap: 10,
            }}>
            <Text style={{fontSize: responsiveFontSize(2)}}>
              2023.05.25 스케줄보기
            </Text>
            <Image source={require('@/assets/images/open-schedule.png')} />
          </View>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  cardContainer: {
    width: Dimensions.get('window').width * 0.85,
    // height: WINDOW_HEIGHT * 0.4,
    borderRadius: 10,
    shadowColor: '#ababab',
    shadowOffset: {
      width: 2,
      height: 3,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3.84,
    backgroundColor: 'white',
    elevation: 5,
    borderWidth: 1,
    borderColor: '#e9edef',
    marginBottom: WINDOW_HEIGHT * 0.1,
  },
  cardWrapper: {
    width: '100%',
    alignItems: 'center',
    // height: '100%',
    paddingTop: WINDOW_HEIGHT * 0.05,
    // paddingBottom: WINDOW_HEIGHT * 0.04,
  },
  customerInfoContainer: {
    width: WINDOW_WIDTH * 0.68,
    gap: 10,
    alignItems: 'flex-start',
    flexDirection: 'row',
  },
  imageBox: {},
  infoBox: {
    width: 'auto',
    justifyContent: 'center',
    gap: 2,
  },
  nameAndCopy: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  visitTimeBox: {
    width: WINDOW_WIDTH * 0.65,
    height: WINDOW_HEIGHT * 0.17,
    backgroundColor: '#f9f9f9',
    marginTop: '3%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  visitInfo: {
    height: '85%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '2%',
    gap: 25,
  },
  modifyVisitTime: {
    width: '25%',
    height: '85%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modifyButton: {
    width: '85%',
    height: '90%',
    backgroundColor: '#e9edef',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
