import React, {useRef, useState} from 'react';
import {
  Animated,
  Image,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

import {useNavigation} from '@react-navigation/native';

interface StateCardProps {
  /*
  state 1 : 업체선정중, 
  state 2 : 시간조율중,
  state 3 : 선정일14일전으로 취소요청가능상태
  state 4 : 선정일 14일 후로 취소요청불가능상태
  state 10 : 금일 시공가능 상태
  state 11 : 공사일이 2일이상일때
  state 20 : 공사일 시간이 지난후 작업완료 버튼이떠있는상태
  state 21 : 업체, 고객이 작업완료를 누르고 리뷰하기 버튼이있는상태
  */
  state: number;
  storeName?: string;
  storeThum?: any;
  time?: string;
  date?: string;
  startDt?: string;
  endDt?: string;
}

export default function StateCard(data: StateCardProps): JSX.Element {
  const {state, storeName, storeThum, time, date, startDt, endDt} = data;
  const navigation = useNavigation<any>();
  const [isOpen, setOpen] = useState(false);
  const [type, setType] = useState(1);
  const [page, setPage] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  let curr: string;
  const [showPopup, setPopup] = useState(false);
  const handlePopup = () => {
    setPopup(false);
  };

  return (
    <View
      style={
        state === 1
          ? {
              width: '55%',
              height: 250,
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
              borderWidth: 2,
              borderColor: '#2CB07B',
            }
          : {
              width: '55%',
              height: 250,
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
            }
      }>
      <View
        style={{
          width: '100%',
          alignItems: 'center',
          height: '100%',
        }}>
        {storeName && (
          <View
            style={{
              height: '20%',
              width: '100%',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: '#000',
                fontWeight: '700',
                fontSize: 16,
              }}>
              {storeName}
            </Text>
          </View>
        )}
        {state === 1 && (
          <View
            style={{
              width: '100%',
              height: '100%',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={{color: '#2CB07B', fontSize: 16, fontWeight: '600'}}>
              업체선정중
            </Text>
          </View>
        )}
        {state !== 1 && (
          <View style={{width: 'auto', height: 'auto'}}>
            <View
              style={{
                position: 'absolute',
                backgroundColor: 'rgba(0,0,0,0.7)',
                width: '72%',
                height: '100%',
                zIndex: 1,
                borderRadius: 5,
                alignItems: 'center',
                padding: '5%',
              }}>
              {state !== 21 && (
                <Image source={require('@/assets/images/talkicon.png')} />
              )}
              {state === 2 && (
                <View
                  style={{
                    height: '45%',
                    alignItems: 'center',
                    width: '100%',
                    justifyContent: 'center',
                  }}>
                  <Text style={{color: 'white'}}>시공날짜 조율중</Text>
                </View>
              )}
              {state === 21 && (
                <View
                  style={{
                    alignItems: 'center',
                    width: '100%',
                    height: '100%',
                    justifyContent: 'center',
                  }}>
                  <Text
                    style={{
                      color: 'white',
                      fontWeight: '600',
                      paddingTop: '5%',
                    }}>
                    {date && date}
                  </Text>
                  <Text
                    style={{
                      color: 'white',
                      fontWeight: '600',
                      paddingTop: '5%',
                    }}>
                    공사완료
                  </Text>
                </View>
              )}
              {state !== 1 && state !== 2 && state !== 21 && (
                <View
                  style={{
                    height: '57%',
                    width: '100%',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}>
                  {(state === 3 || state === 4) && (
                    <Text
                      style={{
                        color: 'white',
                        fontWeight: '600',
                        paddingTop: '5%',
                      }}>
                      시공예정
                    </Text>
                  )}
                  {(state === 10 || state === 11 || state === 20) && (
                    <Text
                      style={{
                        color: 'white',
                        fontWeight: '600',
                        paddingTop: '5%',
                      }}>
                      금일 시공예정
                    </Text>
                  )}
                  {state !== 11 && (
                    <View style={{width: '100%', alignItems: 'center'}}>
                      <Text style={{color: 'white'}}>{date && date}</Text>
                      <Text style={{color: 'white'}}>{time && time}</Text>
                    </View>
                  )}
                  {state === 11 && (
                    <View style={{width: '100%', alignItems: 'center'}}>
                      <Text style={{color: 'white', fontSize: 11}}>
                        {startDt && startDt}~
                      </Text>
                      <Text style={{color: 'white', fontSize: 11}}>
                        {endDt && endDt}
                      </Text>
                    </View>
                  )}
                </View>
              )}
            </View>
            {storeThum && <Image source={storeThum} />}
          </View>
        )}
        {state === 3 && (
          <TouchableWithoutFeedback>
            <Text style={{padding: '10%', color: '#EB701F', fontWeight: '700'}}>
              공사취소요청
            </Text>
          </TouchableWithoutFeedback>
        )}
        {state === 20 && (
          <TouchableWithoutFeedback>
            <Text style={{padding: '10%', color: '#2CB07B', fontWeight: '700'}}>
              작업완료
            </Text>
          </TouchableWithoutFeedback>
        )}
        {state === 21 && (
          <TouchableWithoutFeedback>
            <Text
              style={{
                padding: '4%',
                color: '#2CB07B',
                fontWeight: '700',
                borderRadius: 5,
                borderWidth: 1,
                marginTop: '4%',
                borderColor: '#2CB07B',
              }}>
              리뷰남기기
            </Text>
          </TouchableWithoutFeedback>
        )}
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
    position: 'relative',
    paddingBottom: '5%',
  },

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
