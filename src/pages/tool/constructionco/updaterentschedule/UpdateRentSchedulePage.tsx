import React, {useRef, useState} from 'react';
import {
  Animated,
  Dimensions,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import StateUpdateCard from '@/components/card/StateUpdateCard';
import styled from 'styled-components/native';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import {WINDOW_HEIGHT} from '@/constants/context';
import ConstructionRequestCalendarPopup from '@/components/popup/ConstructionRequestCalendarPopup';
import ConstructionRequestStatusCard from '@/pages/schedule/constructionco/constructionrequest/ConstructionRequestStatusCard';
import GetRequestListStatusCard from '../getrequestlist/GetRequestListStatusCard';
import CalendarOnlyPopup from '@/pages/popup/CalendarOnlyPopup';
import RentScheduleStatusCard from '../rentschedule/RentScheduleStatusCard';
import UpdateRentScheduleCard from './UpdateRentScheduleCard';
import ToolRentNavPopup from '@/pages/popup/ToolRentNavPopup';

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
/*
 * UpdateRentScheduleCard 임대스케줄변경요청 페이지
 */
export default function UpdateRentSchedulePage(): JSX.Element {
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
          중장비업체에게 날짜변경요청 한 내역 입니다
        </Text>
      </View>
      <View
        style={{
          flex: 1,
          backgroundColor: 'white',
          alignItems: 'center',
        }}>
        <View
          style={{
            width: Dimensions.get('window').width,
            height: 'auto',
            alignItems: 'center',
            justifyContent: 'center',
            paddingTop: WINDOW_HEIGHT * 0.04,
          }}>
          <UpdateRentScheduleCard
            customerName={''}
            customerAddress={''}
            visitTime={''}
            companySchedule={''}
            updateState={0}
            isCanceled={false}
          />
        </View>
      </View>
      <View style={{width: '100%', height: 50, flexDirection: 'row'}}>
        <View
          style={{
            width: '50%',
            height: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#416292',
          }}>
          <Text style={{color: 'white', fontWeight: '600'}}>
            고객관리스케줄 안내문
          </Text>
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
            <Image source={require('@assets/images/scheduleler0.5.png')} />
            <Text style={{fontWeight: '600', paddingLeft: '5%'}}>
              스케줄관리
            </Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
      {router.params.popupOpen && (
        <ToolRentNavPopup handlePopup={handlePopup} />
      )}
      {/* <CalendarOnlyPopup /> */}
      {/* <ConstructionRequestCalendarPopup /> */}
    </View>
  );
}
