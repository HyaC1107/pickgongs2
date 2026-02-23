import React, {useEffect, useState} from 'react';
import {
  Button,
  Dimensions,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import Carousel from '@/components/carousel/Carousel';
const data = {
  dt: '2023년 4월 1일',
  nm: 'test',
  review: false,
  isCheck: true,
  state: 1,
};

interface SchecduleCardProps {
  dt: string;
  nm: string;
  review: boolean;
  isCheck: boolean;
  state: number;
  i: number;
  thumnailList: any[];
}
export default function ScheduleCardComponent(
  data: SchecduleCardProps,
): JSX.Element {
  const [showPopup, setPopup] = useState(true);
  const {dt, nm, review, isCheck, state, i, thumnailList} = data;
  return (
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
              <Text style={{fontSize: 10, paddingRight: '2%'}}>자격증보유</Text>
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
          {isCheck && (
            <TouchableWithoutFeedback
              onPress={() => {
                console.log('rrr');
              }}>
              <View
                style={{
                  width: '100%',
                  height: '75%',
                  backgroundColor: 'rgba(0,0,0,0.8)',
                  zIndex: 1,
                  top: '20%',
                  position: 'absolute',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image source={require('@/assets/images/magnifier.png')} />
                <Text style={{color: 'white', paddingTop: '5%'}}>
                  다른업체찾기
                </Text>
              </View>
            </TouchableWithoutFeedback>
          )}
          <Carousel imgList={thumnailList} />
          <View
            style={
              state === 3 ? styles.fontStyleOtherWrap : styles.fontaStyle1Wrap
            }>
            <Text
              style={
                state === 1
                  ? styles.fontStyle1
                  : state === 2
                  ? styles.fontStyle2
                  : {display: 'none'}
              }>
              2023년 5월 01일 AM 10:00
            </Text>
            <Text
              style={
                state === 1
                  ? styles.fontStyle1
                  : state === 2
                  ? styles.fontStyle2
                  : styles.fontStyle3
              }>
              {state === 1 && '예약중'}
              {state === 2 && '예약완료'}
              {state === 3 && '예약불가'}
            </Text>
          </View>
        </View>
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
