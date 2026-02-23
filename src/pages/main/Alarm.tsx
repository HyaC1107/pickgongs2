import React, {useRef, useState} from 'react';
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
import ToggleSwitch from 'toggle-switch-react-native';
import CustomTextInput from '../../components/textinput/TextInput';
import PssWdTextInput from '../../components/textinput/PsswdTextInput';
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
import {WINDOW_HEIGHT, WINDOW_WIDTH} from '@/constants/context';
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
  {
    dt: '2023년 4월 1일',
    nm: 'test',
    review: false,
    name: '하늘스카이',
    ment: '고객님! 업체에서 예약이 불가합니다/희망방문스케줄에서 새로운 업체를 찾으세요!',
  },
  {
    dt: '2023년 4월 1일',
    nm: 'test',
    review: false,
    name: '이슬인테리어',
    ment: '고객님! 업체에서 오전 10시에 방문할 예정입니다/시간과 약속 잘 지켜 주세요!',
  },
  {
    dt: '2023년 4월 1일',
    nm: 'test',
    review: false,
    name: '팅팅타일',
    ment: '고객님! 타일업체를 선택하셨네요!/업체와 공사날짜를 조율하세요!',
  },
  {
    dt: '2023년 4월 1일',
    nm: 'test',
    review: false,
    name: '하늘전기',
    ment: '고객님! 업체에서 오전 11시에 공사할 예정입니다/공사에 차질이 없게 지켜주세요!',
  },
  {
    dt: '2023년 4월 1일',
    nm: 'test',
    review: false,
    name: '클린청소',
    ment: '고객님! 업체에서 공사시간을 변경하였습니다/스케줄과 대화창을 확인하세요!',
  },
  {
    dt: '2023년 4월 2일',
    nm: 'test',
    review: false,
    name: '다보여씨씨티비',
    ment: '고객님! 업체에게 공사를 취소 하셨습니다/잠시만 기다려주세요 업체에서 확인하고 있어요!',
  },
  {
    dt: '2023년 4월 2일',
    nm: 'test',
    review: false,
    name: '다보여씨씨티비',
    ment: '고객님! 업체에게 공사를 취소 하셨습니다/잠시만 기다려주세요 업체에서 확인하고 있어요!',
  },
  {
    dt: '2023년 4월 2일',
    nm: 'test',
    review: false,
    name: '픽공스 알림',
    ment: '고객님! 픽공스에서 야심찬 이벤트가 있습니다/공지사항을 확인하셔서 이벤트에 참가하세요!',
  },
  {
    dt: '2023년 4월 2일',
    nm: 'test',
    review: true,
    name: '리뷰작성',
    ment: '고객님! 공사가 마무리 되었어요!/사장님에게 리뷰 한마디 남겨보세요!',
  },
];
export default function Alarm(): JSX.Element {
  const navigation = useNavigation<any>();
  const [isOn, setToggle] = useState(false);
  const [type, setType] = useState(1);
  const [page, setPage] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  let curr: string;
  return (
    <View style={{flex: 1}}>
      <ScrollView style={{flex: 1}}>
        {data.map((el, i) => {
          return (
            <View key={i}>
              {i > 0 && el.dt !== data[i - 1].dt && (
                <Text
                  style={{
                    width: '100%',
                    alignItems: 'center',
                    backgroundColor: 'white',
                    textAlign: 'center',
                    padding: '5%',
                    color: '#656565',
                    fontSize: responsiveFontSize(1.4),
                  }}>
                  {el.dt}
                </Text>
              )}
              {i === 0 && (
                <Text
                  style={{
                    width: '100%',
                    alignItems: 'center',
                    backgroundColor: 'white',
                    textAlign: 'center',
                    padding: '5%',
                    color: '#656565',
                    fontSize: responsiveFontSize(1.4),
                  }}>
                  {el.dt}
                </Text>
              )}
              <View
                style={{
                  width: '100%',
                  flexDirection: 'row',
                  alignItems: 'center',
                  borderBottomColor: '#F0F3F4',
                  borderBottomWidth: 1,
                  //   justifyContent: 'center',
                  paddingTop: '4%',
                  paddingBottom: '4%',
                  backgroundColor: 'white',
                }}>
                <View
                  style={{
                    alignItems: 'center',
                    paddingLeft: '10%',
                    justifyContent: 'center',
                  }}>
                  <View
                    style={{
                      width: WINDOW_WIDTH * 0.16,
                      height: WINDOW_WIDTH * 0.16,
                      backgroundColor: '#B4B4B4',
                      borderRadius: 100,
                    }}></View>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    width: WINDOW_WIDTH * 0.7,
                    alignItems: 'center',
                  }}>
                  <View
                    style={{
                      height: WINDOW_WIDTH * 0.16,
                      paddingLeft: '10%',
                      justifyContent: 'center',
                    }}>
                    <Text
                      style={{
                        fontSize: responsiveFontSize(1.5),
                        fontWeight: '700',
                        paddingBottom: 10,
                        color: '#334856',
                      }}>
                      {el.name}
                    </Text>
                    <Text
                      style={{
                        fontSize: responsiveFontSize(1.3),
                        color: '#334856',
                        paddingBottom: 1,
                      }}>
                      {el.ment.split('/')[0]}
                    </Text>
                    <Text
                      style={{
                        fontSize: responsiveFontSize(1.3),
                        color: '#334856',
                        paddingBottom: 10,
                      }}>
                      {el.ment.split('/')[1]}
                    </Text>
                  </View>
                  {el.review && (
                    <View
                      style={{
                        backgroundColor: '#2CB07B',
                        justifyContent: 'center',
                        // padding: '5%',
                        height: WINDOW_HEIGHT * 0.035,
                        // width: WINDOW_WIDTH * 0.15,
                        alignItems: 'center',
                        borderRadius: 100,
                        paddingLeft: '3%',
                        paddingRight: '3%',
                      }}>
                      <Text
                        style={{
                          color: '#fff',
                          fontSize: responsiveFontSize(1.3),
                        }}>
                        리뷰쓰기
                      </Text>
                    </View>
                  )}
                </View>
              </View>
            </View>
          );
        })}
      </ScrollView>
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
