import ProfileCard from '@/components/card/ProfileCard';
import {WINDOW_HEIGHT, WINDOW_WIDTH} from '@/constants/context';
import React, {useEffect, useRef, useState} from 'react';
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
  responsiveScreenFontSize,
} from 'react-native-responsive-dimensions';
interface VisitCardProps {
  customerName: string;
  customerAddress: string;
  visitTime: string;
  companySchedule: string;
}

export default function RentScheduleStatusCard(
  data: VisitCardProps,
): JSX.Element {
  const {customerName, customerAddress, visitTime, companySchedule} = data;
  /*
   * scheduleState (스케줄 공사취소, 날짜변경 상태관리 state)
   * default 0 : 취소, 변경으로 상태를 업데이트하지않은상태
   * 1 : 취소상태
   * 2 : 날짜변경상태
   */
  const [scheduleState, setScheduleState] = useState(0);
  /*
   * isOpen (스케줄표 오픈)
   * true : dropdown open
   * false : dropdown close
   */
  const [isOpen, setOpen] = useState(false);

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
            borderWidth: 2,
            borderColor: '#F1F1F5',
            marginTop: '5%',
            width: '90%',
          }}></View>
        <View
          style={{
            width: '100%',
            alignItems: 'center',
            gap: 15,
            paddingTop: '3%',
          }}>
          <ProfileCard />
        </View>
        {scheduleState === 0 && (
          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              height: WINDOW_HEIGHT * 0.1,
              // backgroundColor: '#ff0',
              // borderBottomColor: '#e9edef',
              // borderBottomWidth: 1,
            }}>
            <TouchableWithoutFeedback
              onPress={() => {
                setScheduleState(1);
              }}>
              <Text
                style={{
                  color: '#F2295F',
                  fontWeight: '700',
                  paddingRight: 40,
                  fontSize: responsiveFontSize(2),
                }}>
                임대취소
              </Text>
            </TouchableWithoutFeedback>
            <Image source={require('@/assets/images/vertical-bar.png')} />
            <TouchableWithoutFeedback
              onPress={() => {
                setScheduleState(2);
              }}>
              <Text
                style={{
                  paddingLeft: 40,
                  color: '#656565',
                  fontWeight: '700',
                  fontSize: responsiveFontSize(2),
                }}>
                날짜변경
              </Text>
            </TouchableWithoutFeedback>
          </View>
        )}
        {scheduleState === 1 && (
          <View
            style={{
              width: '100%',
              justifyContent: 'center',
              alignItems: 'center',
              height: WINDOW_HEIGHT * 0.1,
              gap: 2,
              // backgroundColor: '#ff0',
              // borderBottomColor: '#e9edef',
              // borderBottomWidth: 1,
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center', gap: 3}}>
              <Text
                style={{color: '#656565', fontSize: responsiveFontSize(1.6)}}>
                업체에게
              </Text>
              <Text
                style={{color: '#F2295F', fontSize: responsiveFontSize(1.6)}}>
                임대취소요청
              </Text>
              <Text
                style={{color: '#656565', fontSize: responsiveFontSize(1.6)}}>
                하였습니다
              </Text>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center', gap: 3}}>
              <Text
                style={{color: '#656565', fontSize: responsiveFontSize(1.6)}}>
                임대취소요청 스케줄을 확인하세요
              </Text>
            </View>
          </View>
        )}
        {scheduleState === 2 && (
          <View
            style={{
              width: '100%',
              justifyContent: 'center',
              alignItems: 'center',
              height: WINDOW_HEIGHT * 0.1,
              gap: 2,
              // backgroundColor: '#ff0',
              borderBottomColor: '#e9edef',
              borderBottomWidth: 1,
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center', gap: 3}}>
              <Text
                style={{color: '#656565', fontSize: responsiveFontSize(1.6)}}>
                업체에게
              </Text>
              <Text
                style={{color: '#F2295F', fontSize: responsiveFontSize(1.6)}}>
                임대날짜변경을
              </Text>
              <Text
                style={{color: '#656565', fontSize: responsiveFontSize(1.6)}}>
                요청하였습니다
              </Text>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center', gap: 3}}>
              <Text
                style={{color: '#656565', fontSize: responsiveFontSize(1.6)}}>
                임대날짜변경요청 스케줄을 확인하세요
              </Text>
            </View>
          </View>
        )}
        {scheduleState === 2 && (
          <TouchableWithoutFeedback
            onPress={() => {
              setOpen(!isOpen);
            }}>
            <View
              style={{
                width: '100%',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '4%',
                flexDirection: 'row',
                gap: 10,
              }}>
              <Text style={{fontSize: responsiveFontSize(1.6)}}>
                변경된 날짜 보기
              </Text>
              <Image source={require('@/assets/images/open-schedule.png')} />
            </View>
          </TouchableWithoutFeedback>
        )}
        {isOpen && (
          <View
            style={{
              width: '95%',
              padding: '2%',
              paddingLeft: '3%',
              //   marginBottom: WINDOW_HEIGHT * 0.04,
            }}>
            <View
              style={{
                alignItems: 'center',
                gap: 10,
                padding: '3%',
                justifyContent: 'center',
              }}>
              <Text
                style={{fontSize: responsiveFontSize(2), fontWeight: '700'}}>
                2023년 05월 28일
              </Text>
              <Text
                style={{
                  fontSize: responsiveFontSize(2),
                  color: '#656565',
                }}>
                AM 08:00 ~ PM 17:00
              </Text>
            </View>
          </View>
        )}
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
    paddingTop: WINDOW_HEIGHT * 0.03,
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
