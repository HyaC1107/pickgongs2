import {WINDOW_HEIGHT, WINDOW_WIDTH} from '@/constants/context';
import React, {useRef, useState} from 'react';
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
} from 'react-native-responsive-dimensions';
interface VisitCardProps {
  customerName: string;
  customerAddress: string;
  visitTime: string;
  companySchedule: string;
}

export default function ConstructionScheduleStatusCard(
  data: VisitCardProps,
): JSX.Element {
  const {customerName, customerAddress, visitTime, companySchedule} = data;
  // state : 시공요청카드 상태관리 state
  // state값이 0 일때 == 고객이 시공요청할때 상태
  // state값이 1 일때 == 수락후 시간설정 버튼 활성 상태
  // state값이 2 일때 == 수락후 시간설정상태

  const [state, setState] = useState(0);

  return (
    <View
      style={
        state === 0
          ? styles.cardContainer
          : [styles.cardContainer, {height: WINDOW_HEIGHT * 0.65}]
      }>
      <View style={styles.cardWrapper}>
        <View style={styles.customerInfoContainer}>
          <View style={styles.imageBox}>
            <Image source={require('@/assets/images/talk.png')} />
          </View>
          <View style={styles.infoBox}>
            <View style={styles.nameAndCopy}>
              <Text
                style={{
                  fontSize: responsiveFontSize(2),
                  fontWeight: 'bold',
                }}>
                성시경 고객님
              </Text>
              <Image
                style={{
                  width: 23,
                  height: 23,
                  resizeMode: 'contain',
                }}
                source={require('@/assets/images/visit/copy.jpg')}></Image>
            </View>
            <Text
              style={{
                width: '90%',
                fontSize: responsiveFontSize(2),
                color: '#656565',
              }}>
              서울특별시 마포구 마포대로 20 202호
            </Text>
          </View>
        </View>
        <View style={styles.visitTimeBox}>
          <View style={styles.visitInfo}>
            {state === 0 && (
              <Text
                style={{
                  fontSize: responsiveFontSize(2.1),
                }}>
                고객님이 시공을 요청하였습니다{' '}
              </Text>
            )}
            {state !== 0 && (
              <View style={{alignItems: 'center', gap: 10}}>
                <Text
                  style={{
                    fontSize: responsiveFontSize(2.1),
                    fontWeight: '700',
                  }}>
                  시공날짜를 입력하세요
                </Text>
                <TouchableWithoutFeedback
                  onPress={() => {
                    setState(2);
                  }}>
                  <View
                    style={{
                      backgroundColor: '#E9EDEF',
                      width: WINDOW_WIDTH * 0.5,
                      paddingTop: state === 2 ? '3%' : '5%',
                      paddingBottom: state === 2 ? '3%' : '5%',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: 10,
                    }}>
                    {state === 2 && (
                      <View
                        style={{
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: 10,
                        }}>
                        <Text style={{color: '#0F134A'}}>2023년 05월 15일</Text>
                        <Text style={{color: '#0F134A'}}>AM 9:00</Text>
                      </View>
                    )}
                    {state === 1 && (
                      <Text style={{color: '#0F134A'}}>공사시작 입력</Text>
                    )}
                  </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback
                  onPress={() => {
                    setState(2);
                  }}>
                  <View
                    style={{
                      backgroundColor: '#E9EDEF',
                      width: WINDOW_WIDTH * 0.5,
                      paddingTop: state === 2 ? '3%' : '5%',
                      paddingBottom: state === 2 ? '3%' : '5%',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: 10,
                    }}>
                    {state === 2 && (
                      <View
                        style={{
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: 10,
                        }}>
                        <Text style={{color: '#0F134A'}}>2023년 05월 16일</Text>
                        <Text style={{color: '#0F134A'}}>PM 19:00</Text>
                      </View>
                    )}
                    {state === 1 && (
                      <Text style={{color: '#0F134A'}}>공사종료 입력</Text>
                    )}
                  </View>
                </TouchableWithoutFeedback>
              </View>
            )}
          </View>
        </View>
        {state !== 0 && (
          <View style={{width: '100%', alignItems: 'center'}}>
            <View
              style={{
                borderBottomWidth: 1,
                borderBottomColor: '#E9EDEF',
                width: '100%',
                alignItems: 'center',
                paddingBottom: WINDOW_HEIGHT * 0.04,
              }}>
              <Text
                style={{
                  paddingTop: '5%',
                  textAlign: 'center',
                  width: '85%',
                  fontSize: responsiveFontSize(1.3),
                  color: '#656565',
                }}>
                ※방문시간 변경은 고객님과 시간을 조율해서 등록하길 바랍니다
              </Text>
            </View>
            <View
              style={{
                width: '100%',
                alignItems: 'center',
                height: WINDOW_HEIGHT * 0.07,
                justifyContent: 'center',
              }}>
              <Text style={{color: '#2CB07B', fontWeight: '700'}}>
                입력완료
              </Text>
            </View>
          </View>
        )}
        {state === 0 && (
          <TouchableWithoutFeedback
            onPress={() => {
              setState(1);
            }}>
            <View
              style={{
                paddingTop: WINDOW_HEIGHT * 0.04,
                height: WINDOW_HEIGHT * 0.08,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text style={{color: '#2CB07B', fontWeight: '700'}}>
                수락하기
              </Text>
            </View>
          </TouchableWithoutFeedback>
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
  },
  cardWrapper: {
    width: '100%',
    alignItems: 'center',
    // height: '100%',
    paddingTop: WINDOW_HEIGHT * 0.03,
    paddingBottom: WINDOW_HEIGHT * 0.03,
  },
  customerInfoContainer: {
    width: WINDOW_WIDTH * 0.8,
    gap: 10,
    alignItems: 'flex-start',
    flexDirection: 'row',
    // marginTop: WINDOW_HEIGHT * 0.03,
    // backgroundColor: '#ff0',
  },
  imageBox: {
    // width: 90,
    // height: '100%',
  },
  infoBox: {
    // width: 210,
    // height: '100%',
    width: 'auto',
    // backgroundColor: '#ff0',
    justifyContent: 'center',
    paddingTop: '3%',
  },
  nameAndCopy: {
    width: '100%',
    // height: '40%',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  visitTimeBox: {
    width: WINDOW_WIDTH * 0.75,
    // height: WINDOW_HEIGHT * 0.17,
    backgroundColor: '#f9f9f9',
    marginTop: '5%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  visitInfo: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: '7%',
    gap: 15,
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
