import React, {useRef, useState} from 'react';
import {
  Animated,
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

import styled from 'styled-components/native';
import {responsiveFontSize} from 'react-native-responsive-dimensions';
import {WINDOW_HEIGHT, WINDOW_WIDTH} from '@/constants/context';
import ConstructionRequestCalendarPopup from '@/components/popup/ConstructionRequestCalendarPopup';
import CalendarOnlyPopup from '@/pages/popup/CalendarOnlyPopup';
import SelectSpacePopup from '@/pages/popup/SelectConstructionSpacePopup';
import SelectConstructionSpacePopup from '@/pages/popup/SelectConstructionSpacePopup';
import ToolRentNavPopup from '@/pages/popup/ToolRentNavPopup';
import {useNavigation, useRoute} from '@react-navigation/native';

const IndicatorWrapper = styled.View`
  flex-direction: row;
  align-items: flex-start;
  margin-bottom: 10px;
  margin-top: 15px;
`;

const Indicator = styled.View<{focused: boolean}>`
  margin: 0px 4px;
  background-color: ${props => (props.focused ? '#B4B4B4' : '#B4B4B4')};
  width: ${props => (props.focused ? '20px' : '6px')};
  height: 6px;
  border-radius: 3px;
`;

const data = [
  {
    state: 31,
    storeName: '코지인테리어',
    storeThum: require('@assets/images/cozy.png'),
    time: undefined,
    date: '2023년 5월 2일',
    startDt: undefined,
    endDt: undefined,
    icon: require('@assets/images/main/home/19518.png'),
    category: '종합인테리어',
  },
  {
    state: 32,
    storeName: '코지인테리어',
    storeThum: require('@assets/images/cozy.png'),
    time: undefined,
    date: undefined,
    startDt: undefined,
    endDt: undefined,
    icon: require('@assets/images/main/home/19518.png'),
    category: '종합인테리어',
  },
  {
    state: 33,
    storeName: '코지인테리어',
    storeThum: require('@assets/images/cozy.png'),
    time: 'AM 09시 ~ PM 17:30',
    date: '2023년 5월 1일',
    startDt: undefined,
    endDt: undefined,
    icon: require('@assets/images/main/home/19519.png'),
    category: '철거',
  },
];
export default function CancleRequestSchedulePage(): JSX.Element {
  const scrollX = useRef(new Animated.Value(0)).current;
  const [page, setPage] = useState(0);
  const router = useRoute<any>();
  const navigation = useNavigation<any>();
  const handlePopup = () => {
    navigation.setParams({...router.params, popupOpen: false});
  };
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          height: '9%',
          backgroundColor: 'white',
          padding: '2%',
          alignItems: 'center',
          marginBottom: '2%',
          justifyContent: 'center',
        }}>
        <Text style={{fontSize: responsiveFontSize(2)}}>
          시공날짜를 표시합니다
        </Text>
      </View>
      <View
        style={{
          backgroundColor: 'white',
          alignItems: 'center',
          paddingTop: WINDOW_HEIGHT * 0.02,
          flex: 1,
        }}>
        <ScrollView
          style={{flex: 1, maxHeight: WINDOW_HEIGHT}}
          contentContainerStyle={{
            alignItems: 'center',
            gap: 5,
            // height: '100%',
          }}>
          <View
            style={{
              backgroundColor: '#F9F9F9',
              width: WINDOW_WIDTH * 0.9,
              borderRadius: 5,
              alignItems: 'center',
              padding: '5%',
              gap: 20,
            }}>
            <View
              style={{
                width: '100%',
                gap: 10,
                alignItems: 'center',
                paddingBottom: WINDOW_HEIGHT * 0.03,
              }}>
              <Text>임대요청 날짜를 선택하세요</Text>
              <Text style={{color: '#B4B4B4'}}>선택</Text>
            </View>
            <View
              style={{
                width: '100%',
                gap: 10,
                alignItems: 'center',
                paddingBottom: WINDOW_HEIGHT * 0.04,
              }}>
              <Text>임대요청 날짜를 선택하세요</Text>
              <Text style={{color: '#B4B4B4'}}>선택</Text>
            </View>
          </View>
          <View
            style={{
              backgroundColor: '#F9F9F9',
              width: WINDOW_WIDTH * 0.9,
              borderRadius: 5,
              alignItems: 'center',
              padding: '5%',
            }}>
            <View
              style={{
                width: '100%',
                gap: 30,
                alignItems: 'center',
                paddingBottom: WINDOW_HEIGHT * 0.02,
              }}>
              <Text>공사시간을 선택하세요</Text>
              <Text style={{color: '#B4B4B4'}}>선택</Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              gap: 10,
            }}>
            <View
              style={{
                backgroundColor: '#F9F9F9',
                width: WINDOW_WIDTH * 0.43,
                borderRadius: 5,
                paddingTop: '5%',
                height: WINDOW_HEIGHT * 0.12,
              }}>
              <View
                style={{
                  width: '100%',
                  alignItems: 'center',
                  gap: 20,
                }}>
                <Text>장비를 선택하세요</Text>
                <Text style={{color: '#B4B4B4'}}>선택</Text>
              </View>
            </View>
            <View
              style={{
                backgroundColor: '#F9F9F9',
                width: WINDOW_WIDTH * 0.43,
                borderRadius: 5,
                paddingTop: '5%',
                height: WINDOW_HEIGHT * 0.12,
              }}>
              <View
                style={{
                  width: '100%',
                  alignItems: 'center',
                  gap: 20,
                }}>
                <Text>희망차종을 선택하세요</Text>
                <Text style={{color: '#B4B4B4'}}>선택</Text>
              </View>
            </View>
          </View>
          <View
            style={{
              backgroundColor: '#F9F9F9',
              width: WINDOW_WIDTH * 0.9,
              borderRadius: 5,
              //   alignItems: 'center',
              padding: '5%',
            }}>
            <View
              style={{
                width: '100%',
                // gap: 50,
                alignItems: 'center',
                paddingBottom: WINDOW_HEIGHT * 0.02,
                flexDirection: 'row',
                gap: 10,
              }}>
              <Text>공사시간을 선택하세요</Text>
              <View
                style={{
                  marginLeft: '2%',
                  width: WINDOW_WIDTH * 0.14,
                  height: WINDOW_HEIGHT * 0.03,
                  backgroundColor: 'white',
                  alignItems: 'center',
                }}>
                <TextInput style={{width: '30%'}} />
              </View>
              <Text>층</Text>
            </View>
            <View style={{paddingBottom: '2%'}}>
              <Text>작업내용</Text>
            </View>
            <View
              style={{
                width: WINDOW_WIDTH * 0.6,
                height: WINDOW_HEIGHT * 0.17,
                backgroundColor: 'white',
                alignItems: 'center',
              }}>
              <TextInput multiline style={{width: '100%', height: '100%'}} />
            </View>
          </View>
          <View
            style={{
              height: WINDOW_HEIGHT * 0.15,
              alignItems: 'center',
              paddingTop: '7%',
              width: '100%',
            }}>
            <Text
              style={{
                color: '#2CB07B',
                fontWeight: '700',
                fontSize: responsiveFontSize(2),
              }}>
              요청하기
            </Text>
          </View>
          <View
            style={{
              width: '100%',
              height: 50,
              flexDirection: 'row',
              // position: 'absolute',
              // bottom: 0,
            }}>
            <TouchableWithoutFeedback
              onPress={() => {
                //schedule popup open
              }}>
              <View
                style={{
                  width: '100%',
                  height: '100%',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: '#416292',
                }}>
                <Text style={{color: 'white', fontWeight: '600'}}>
                  고객관리스케줄 안내문
                </Text>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </ScrollView>
      </View>
      {router.params.popupOpen && (
        <ToolRentNavPopup handlePopup={handlePopup} />
      )}
      {/* <CalendarOnlyPopup /> */}
      {/* <SelectConstructionSpacePopup /> */}
      {/* <ConstructionRequestCalendarPopup /> */}
    </View>
  );
}
