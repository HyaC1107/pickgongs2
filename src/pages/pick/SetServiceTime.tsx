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
import {RootStackParamList} from '../../utils/StackParamList';
import Toggle from '../../components/toggle/CustomToggle';
import MainMenu from '../../components/main/MainMenu';
import CalendarPopup from '../popup/CalendarPopup';
import AddressSelectPopup from '../popup/AddressSelectPopup';
import CategoryPopup from '../popup/CategoryPopup';
import Carousel from '../../components/carousel/Carousel';
import PickService from './PickService';
import CategorySelWarnPopup from '../popup/warn/CategorySelWarnPopup';
import IntroServicePopup from './IntroServicePopup';
import {pickData, timeData} from './data';
import {responsiveFontSize} from 'react-native-responsive-dimensions';

const IndicatorWrapper = styled.View`
  flex-direction: row;
  align-items: center;
`;

const Indicator = styled.View<{focused: boolean}>`
  margin: 0px 4px;
  background-color: ${props => (props.focused ? '#B4B4B4' : '#B4B4B4')};
  width: ${props => (props.focused ? '20px' : '6px')};
  height: 6px;
  border-radius: 3px;
`;
const data = [
  {dt: '2023년 04월 20일  AM 10:00', nm: 'test', review: false, isCheck: true},
  {dt: '미지정', nm: 'test', review: false, isCheck: true},
  {dt: '미지정', nm: 'test', review: false, isCheck: true},
  {dt: '미지정', nm: 'test', review: false, isCheck: true},
  {dt: '미지정', nm: 'test', review: false, isCheck: true},
  {dt: '미지정', nm: 'test', review: false, isCheck: true},
  {dt: '미지정', nm: 'test', review: false, isCheck: true},
  {dt: '미지정', nm: 'test', review: false, isCheck: true},
  {dt: '미지정', nm: 'test', review: true, isCheck: true},
];

export default function SetServiceTime(): JSX.Element {
  const navigation = useNavigation<any>();
  const [isOpen, setOpen] = useState(false);
  const [type, setType] = useState(1);
  const [page, setPage] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  let curr: string;
  const [showPopup, setPopup] = useState(false);
  const router = useRoute();
  //   useEffect(() => {}, []);
  return (
    <View style={{flex: 1}}>
      <ScrollView style={{flex: 1, backgroundColor: 'white'}}>
        <View
          style={{
            backgroundColor: 'white',
            padding: '7.5%',
            alignItems: 'center',
          }}>
          <Text style={{fontSize: responsiveFontSize(1.8)}}>
            업체를 선택하여 희망방문요청 시간을 입력하세요
          </Text>
        </View>
        {timeData.map((el, i) => {
          return (
            <TouchableWithoutFeedback onPress={() => setPopup(!showPopup)}>
              <View
                key={i}
                style={{
                  width: '100%',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginBottom: '5%',
                  // backgroundColor: '#dd0',
                }}>
                <View
                  style={{
                    width: '85%',
                    height: 250,
                    //backgroundColor: '#ff0000',
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
                  {el.isCheck && (
                    <View
                      style={{
                        borderRadius: 10,
                        width: '100%',
                        height: '100%',
                        backgroundColor: 'rgba(0,0,0,0.5)',
                        zIndex: 1,
                        position: 'absolute',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <Text style={{color: 'white'}}>{el.dt}</Text>
                    </View>
                  )}
                  <View
                    style={{
                      width: '100%',
                      height: '30%',
                      flexDirection: 'row',
                    }}>
                    <View style={{padding: '5%'}}>
                      <Image
                        source={require('../../assets/images/pick1.png')}
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
                      paddingLeft: '5%',
                      paddingTop: '10%',
                      width: '100%',
                      height: '70%',
                    }}>
                    <Carousel imgList={el.thumnailList} />
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
            width: '40%',
            height: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#416292',
          }}>
          <Text style={{color: 'white', fontWeight: '600'}}>
            방문시간 안내문
          </Text>
        </View>
        <TouchableWithoutFeedback
          onPress={() => navigation.navigate('PickServiceDetail')}>
          <View
            style={{
              width: '60%',
              height: '100%',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'row',
              backgroundColor: 'white',
              borderTopColor: '#F6F6F6',
              borderTopWidth: 1,
            }}>
            <Text
              style={{fontWeight: '600', color: '#2CB07B', paddingRight: '5%'}}>
              방문일괄요청
            </Text>
            <Image source={require('../../assets/images/next.png')} />
          </View>
        </TouchableWithoutFeedback>
      </View>
      {router.params?.popupOpen && <CategoryPopup />}
      {/* <PickService /> */}
      {/* {showPopup && <IntroServicePopup />}
      <CategorySelWarnPopup /> */}
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
