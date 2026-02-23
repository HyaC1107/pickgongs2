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
import {RootStackParamList} from '@/utils/StackParamList';
import Toggle from '@/components/toggle/CustomToggle';
import MainMenu from '@/components/main/MainMenu';
import CalendarPopup from '../popup/CalendarPopup';
import AddressSelectPopup from '../popup/AddressSelectPopup';
import CategoryPopup from '../popup/CategoryPopup';
import Carousel from '@/components/carousel/Carousel';
import PickService from './PickService';
import CategorySelWarnPopup from '../popup/warn/CategorySelWarnPopup';
import IntroServicePopup from './IntroServicePopup';
import {WINDOW_HEIGHT} from '@/constants/context';
import {pickData} from './data';

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

export default function PickServiceDetail(): JSX.Element {
  const navigation = useNavigation<any>();
  const [isPopupOpen, setPopupClose] = useState(true);
  const router = useRoute<any>();
  const [showPopup, setPopup] = useState(false);
  const handleListPopup = () => {
    setPopupClose(!isPopupOpen);
  };
  useEffect(() => {
    if (!isPopupOpen) {
      navigation.setOptions({
        tabBarStyle: {
          display: 'flex',
          paddingBottom: 10,
          paddingTop: 10,
          height: 60,
        },
        headerShown: true,
      });
    }
  }, [isPopupOpen]);

  const handleCategory = (data: string) => {
    const headerParam = router.params;
    navigation.setParams({...headerParam, headerValue: data});
  };

  const handlePopup = () => {
    const headerParam = router.params;
    navigation.setParams({...headerParam, popupOpen: false});
  };
  return (
    <View style={{flex: 1}}>
      <ScrollView style={{flex: 1, backgroundColor: 'white'}}>
        <View
          style={{
            backgroundColor: 'white',
            padding: '7.5%',
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 16}}>최대 3개 업체까지 선택 가능합니다</Text>
        </View>
        {pickData.map((el, i) => {
          return (
            <View
              key={i}
              style={{
                width: '100%',
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: '5%',
                height: WINDOW_HEIGHT * 0.4,
              }}>
              <View
                style={{
                  width: '85%',
                  height: '100%',
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
                  gap: 15,
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
                    <Image
                      source={require('@/assets/images/check-circle0.5.png')}
                    />
                  </View>
                )}
                <View
                  style={{
                    width: '100%',
                    height: '30%',
                    flexDirection: 'row',
                  }}>
                  <View style={{padding: '5%'}}>
                    <Image source={el.imgUrl} />
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
                      {el.nm}
                    </Text>
                    <View style={{flexDirection: 'row'}}>
                      {el.tags.map((tag, i) => {
                        return (
                          <Text
                            key={i}
                            style={{fontSize: 10, paddingRight: '2%'}}>
                            {tag}
                          </Text>
                        );
                      })}
                    </View>
                  </View>
                </View>
                <View
                  style={{
                    // paddingTop: '11%',
                    // width: '100%',
                    // height: '70%',
                    height: '60%',
                  }}>
                  <Carousel imgList={el.thumnailList} />
                </View>
              </View>
            </View>
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
            주의사항 안내문
          </Text>
        </View>
        <TouchableWithoutFeedback
          onPress={() => navigation.navigate('SetServiceTime', router.params)}>
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
              다음
            </Text>
            <Image source={require('@/assets/images/next.png')} />
          </View>
        </TouchableWithoutFeedback>
      </View>
      {showPopup && <IntroServicePopup />}
      {/* <CategorySelWarnPopup /> */}
      {router.params?.popupOpen && (
        <CategoryPopup
          handleCategory={handleCategory}
          handlePopup={handlePopup}
        />
      )}
      <PickService
        handlePopup={handleListPopup}
        isPopupOpen={isPopupOpen}
        navigation={navigation}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  rootWrapper: {
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
});
