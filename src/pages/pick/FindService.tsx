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
import {pickData} from './data';
import {responsiveFontSize} from 'react-native-responsive-dimensions';
import {WINDOW_HEIGHT, WINDOW_WIDTH} from '@/constants/context';

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

export default function FindService(): JSX.Element {
  const navigation = useNavigation<any>();
  const router = useRoute();
  const [isOpen, setOpen] = useState(false);
  //   const [isPopupOpen, setPopupClose] = useState(true);
  const handleCategory = (data: string) => {
    const headerParam = router.params;
    navigation.setParams({...headerParam, headerValue: data});
  };

  const handlePopup = () => {
    const headerParam = router.params;
    navigation.setParams({...headerParam, popupOpen: false});
  };

  useEffect(() => {
    navigation.setOptions({tabBarStyle: {display: 'flex'}});
    console.log(router);
  }, []);
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          width: '100%',
          paddingLeft: '7.5%',
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: 'white',
          paddingTop: '3%',
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image source={require('../../assets/images/add-loc.png')} />
          <Text style={{paddingLeft: '2%'}}>지역추가</Text>
        </View>
        <View>
          <Text style={{paddingLeft: '5%', color: '#828282'}}>용강동</Text>
        </View>
        <View>
          <Text style={{paddingLeft: '5%', color: '#828282'}}>도화동</Text>
        </View>
        <View>
          <Text style={{paddingLeft: '5%', color: '#828282'}}>도곡동</Text>
        </View>
      </View>
      <View
        style={{
          width: '100%',
          paddingLeft: '7.5%',
          flexDirection: 'column',
          // alignItems: 'center',
          backgroundColor: 'white',
          paddingTop: '5%',
          paddingBottom: '5%',
          marginBottom: '2%',
        }}>
        <TouchableWithoutFeedback
          onPress={() => {
            setOpen(!isOpen);
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={{paddingLeft: '2%', paddingRight: '2%'}}>찜콕</Text>
            {!isOpen && (
              <Image source={require('../../assets/images/open-pick0.5.png')} />
            )}
            {isOpen && (
              <Image
                source={require('../../assets/images/close-pick0.5.png')}
              />
            )}
          </View>
        </TouchableWithoutFeedback>
        {isOpen && (
          <View style={{paddingTop: '4%'}}>
            <FlatList
              data={[
                {
                  img: require('@/assets/images/pick/1.png'),
                  title: '하늘인테리어',
                  time: 'PM 08:00',
                  state: '공사예정',
                  tags: ['보증보험가능', '자격증보유', '1년 A/S'],
                },
                {
                  img: require('@/assets/images/pick/2.png'),
                  title: '디자인인테리어',
                  time: 'PM 13:00',
                  state: '방문예약',
                  tags: ['보증보험가능', '자격증보유', '1년 A/S'],
                },
                {
                  img: require('@/assets/images/pick/3.png'),
                  title: '하늘인테리어',
                  time: 'PM 08:00',
                  state: '공사예정',
                  tags: ['보증보험가능', '1년 A/S'],
                },
              ]}
              horizontal
              renderItem={({item}) => (
                <TouchableWithoutFeedback
                  onPress={() =>
                    navigation.navigate('ServiceIntro', {isPopupView: true})
                  }>
                  <View
                    style={{
                      borderWidth: 1,
                      borderColor: '#E6E6E6',
                      height: 240,
                      width: 200,
                      borderRadius: 10,
                      marginRight: 10,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <View
                      style={{
                        width: '100%',
                        height: '80%',
                        borderBottomColor: '#E6E6E6',
                        borderBottomWidth: 1,
                        position: 'relative',
                      }}>
                      <Image
                        style={{
                          width: '100%',
                          height: '100%',
                          borderTopLeftRadius: 10,
                          borderTopRightRadius: 10,
                        }}
                        source={item.img}
                      />
                    </View>
                    <View
                      style={{
                        width: '100%',
                        height: '20%',
                        //alignItems: 'center',
                        justifyContent: 'center',
                        paddingTop: '3%',
                        paddingLeft: '5%',
                      }}>
                      <Text style={{color: '#000'}}>{item.title}</Text>
                      <View
                        style={{
                          flexDirection: 'row',
                          alignItems: 'center',
                        }}>
                        {item.tags.map((el, i) => {
                          return (
                            <Text
                              key={i}
                              style={{
                                color: '#767676',
                                paddingTop: '3%',
                                paddingBottom: '3%',
                                paddingRight: '3%',
                                fontSize: 12,
                              }}>
                              {el}
                            </Text>
                          );
                        })}
                      </View>
                    </View>
                  </View>
                </TouchableWithoutFeedback>
              )}></FlatList>
          </View>
        )}
      </View>
      <ScrollView style={{flex: 1, backgroundColor: 'white'}}>
        <View style={{backgroundColor: 'white', padding: '7.5%'}}>
          <Text style={{fontSize: 16}}>업체찾기</Text>
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
              }}>
              <View
                style={{
                  width: '85%',
                  height: WINDOW_HEIGHT * 0.45,
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
                  //   backgroundColor: '#ff0',
                }}>
                <View
                  style={{
                    width: '100%',
                    // height: '30%',
                    flexDirection: 'row',
                    alignItems: 'center',
                    paddingBottom: '2%',
                    paddingTop: '2%',
                  }}>
                  <View style={{padding: '5%'}}>
                    <Image source={el.imgUrl} />
                  </View>
                  <View
                    style={{
                      justifyContent: 'center',
                    }}>
                    <Text
                      style={{
                        fontSize: responsiveFontSize(1.8),
                        fontWeight: '600',
                        paddingBottom: '5%',
                      }}>
                      {el.nm}
                    </Text>
                    <View style={{flexDirection: 'row', gap: 10}}>
                      {el.tags.map((el, i) => {
                        return (
                          <Text
                            key={i}
                            style={{fontSize: responsiveFontSize(1.4)}}>
                            {el}
                          </Text>
                        );
                      })}
                    </View>
                  </View>
                </View>
                <View
                  style={{
                    width: '100%',
                    height: '45%',
                    borderBottomColor: '#E9EDEF',
                    borderBottomWidth: 1,
                  }}>
                  <Carousel imgList={el.thumnailList} />
                </View>
                <View
                  style={{
                    width: '100%',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <View
                    style={{
                      width: WINDOW_WIDTH * 0.5,
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      padding: '6%',
                      flexDirection: 'row',
                    }}>
                    <View style={{flexDirection: 'row'}}>
                      <Image source={require('@/assets/images/like.png')} />
                      <Text>+100</Text>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                      <Image source={require('@/assets/images/peoples.png')} />
                      <Text>+30</Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          );
        })}
      </ScrollView>
      {router.params?.popupOpen && (
        <CategoryPopup
          handleCategory={handleCategory}
          handlePopup={handlePopup}
        />
      )}
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
