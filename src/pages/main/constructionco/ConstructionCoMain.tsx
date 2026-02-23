import React, {useRef, useState} from 'react';
import {
  Animated,
  Button,
  Dimensions,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {responsiveFontSize} from 'react-native-responsive-dimensions';
import styled from 'styled-components/native';
import {useNavigation} from '@react-navigation/native';

import {WINDOW_HEIGHT} from '@/constants/context';

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
export default function ConstructionCoMain(): JSX.Element {
  const navigation = useNavigation<any>();
  const [page, setPage] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View style={styles.headerWrapper}>
        <View style={{alignItems: 'flex-start', gap: 5}}>
          <Text
            style={{
              paddingLeft: '5%',
              paddingRight: '5%',
              fontSize: responsiveFontSize(2.5),
              fontWeight: '700',
            }}>
            반갑습니다
          </Text>
          <Text
            style={{
              paddingLeft: '5%',
              paddingRight: '5%',
              fontSize: responsiveFontSize(2.5),
              fontWeight: '700',
            }}>
            한마음인테리어 사장님
          </Text>
        </View>
        <TouchableWithoutFeedback onPress={() => navigation.navigate('Alarm')}>
          <View style={{paddingRight: '5%', marginBottom: '5%'}}>
            <Image source={require('@assets/images/alarm0.5.png')} />
          </View>
        </TouchableWithoutFeedback>
      </View>
      <ScrollView style={{flex: 1}}>
        <View style={styles.rootWrapper}>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View
              style={{
                height: Dimensions.get('window').height * 0.25,
                width: Dimensions.get('window').width,
              }}>
              <Image
                style={{
                  width: '100%',
                  backgroundColor: '#ff0',
                  height: Dimensions.get('window').height * 0.25,
                }}
                source={require('@assets/images/main/notice0.5.png')}
              />
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              paddingLeft: '7.5%',
              paddingRight: '7.5%',
              paddingTop: Dimensions.get('window').height * 0.03,
            }}>
            <Text
              style={{
                fontSize: responsiveFontSize(2),
                fontWeight: '700',
                color: '#000',
              }}>
              오늘 신규고객님이 방문했어요{' '}
            </Text>
          </View>
          <View
            style={{
              width: '100%',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View
              style={{
                width: '85%',
                justifyContent: 'center',
                alignItems: 'center',
                height: Dimensions.get('window').height * 0.13,
                flexDirection: 'row',
                gap: 35,
              }}>
              <View style={{alignItems: 'center', gap: 10}}>
                <Text style={{fontSize: 12}}>조회수</Text>
                <View
                  style={{flexDirection: 'row', gap: 10, alignItems: 'center'}}>
                  <Image source={require('@assets/images/eye-main.png')} />
                  <Text>900</Text>
                </View>
              </View>
              <View style={{alignItems: 'center', gap: 10}}>
                <Text style={{fontSize: 12}}>찜한 고객</Text>
                <View
                  style={{flexDirection: 'row', gap: 10, alignItems: 'center'}}>
                  <Image source={require('@assets/images/like.png')} />
                  <Text>+1000</Text>
                </View>
              </View>
              <View style={{alignItems: 'center', gap: 10}}>
                <Text style={{fontSize: 12}}>공사건수</Text>
                <View
                  style={{flexDirection: 'row', gap: 10, alignItems: 'center'}}>
                  <Image source={require('@assets/images/peoples.png')} />
                  <Text>100 건</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={{flex: 1, backgroundColor: 'white'}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignItems: 'center',
              paddingLeft: '7.5%',
              paddingRight: '7.5%',
              paddingBottom: WINDOW_HEIGHT * 0.03,
            }}>
            <Text
              style={{
                fontSize: responsiveFontSize(2),
                fontWeight: '600',
                color: '#000',
              }}>
              오늘의 스케줄
            </Text>
          </View>
          <View
            style={{
              height: Dimensions.get('window').height * 0.25,
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <FlatList
              data={[
                {
                  img: require('@assets/images/main/carousel1.png'),
                  title: '다락철거',
                  time: 'PM 08:00',
                  state: '공사예정',
                },
                {
                  img: require('@assets/images/main/carousel2.png'),
                  title: '미디어인테리어',
                  time: 'PM 13:00',
                  state: '방문예약',
                },
                {
                  img: require('@assets/images/main/carousel1.png'),
                  title: '다락철거',
                  time: 'PM 08:00',
                  state: '공사예정',
                },
                {
                  img: require('@assets/images/main/carousel1.png'),
                  title: '다락철거',
                  time: 'PM 08:00',
                  state: '공사예정',
                },
              ]}
              horizontal
              contentContainerStyle={{paddingHorizontal: 24}}
              onScroll={e => {
                Animated.event([{nativeEvent: {contentOffset: {x: scrollX}}}], {
                  useNativeDriver: false,
                });
                const newPage = Math.round(e.nativeEvent.contentOffset.x / 205);
                setPage(newPage);
              }}
              showsHorizontalScrollIndicator={false}
              pagingEnabled
              snapToInterval={Dimensions.get('window').height * 0.22}
              renderItem={({item}) => (
                <TouchableWithoutFeedback
                  onPress={() => {
                    navigation.navigate('FindService', {isPopupView: false});
                  }}>
                  <View
                    key={item.img}
                    style={{
                      height: Dimensions.get('window').height * 0.22,
                      width: Dimensions.get('window').height * 0.25,
                      marginLeft: 20,
                      shadowColor: '#ababab',
                      backgroundColor: 'white',
                      shadowOffset: {
                        width: 0,
                        height: 1,
                      },
                      elevation: 3,
                      borderRadius: 5,
                      shadowOpacity: 0.7,
                      shadowRadius: 3.84,
                      padding: '3%',
                      justifyContent: 'center',
                    }}>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        padding: '3%',
                      }}>
                      <Image source={require('@/assets/images/talkicon.png')} />
                      <View>
                        <View
                          style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            gap: 5,
                          }}>
                          <Text
                            style={{
                              fontWeight: '700',
                              fontSize: responsiveFontSize(1.2),
                              color: '#000',
                            }}>
                            성시경 고객님
                          </Text>
                          <Image
                            source={require('@/assets/images/copy-icon.png')}
                          />
                        </View>
                        <Text style={{fontSize: 8, color: '#656565'}}>
                          서울특별시 마포구 마포대로
                        </Text>
                        <Text style={{fontSize: 8, color: '#656565'}}>
                          20 202호
                        </Text>
                      </View>
                    </View>
                    <View
                      style={{
                        width: '100%',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <View
                        style={{
                          width: '90%',
                          borderRadius: 5,
                          backgroundColor: '#F9F9F9',
                          gap: 10,
                          height: WINDOW_HEIGHT * 0.09,
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}>
                        <Text style={{fontSize: responsiveFontSize(1)}}>
                          고객님에게 방문예정 시간입니다
                        </Text>
                        <Text
                          style={{
                            fontWeight: '700',
                            fontSize: responsiveFontSize(1),
                          }}>
                          2023.05.10 PM 16:00
                        </Text>
                      </View>
                    </View>
                  </View>
                </TouchableWithoutFeedback>
              )}
            />
            <View style={{alignItems: 'center'}}>
              <IndicatorWrapper>
                {Array.from({length: 3}, (_, i) => i).map(i => (
                  <Indicator key={`indicator_${i}`} focused={i === page} />
                ))}
              </IndicatorWrapper>
            </View>
          </View>
        </View>
      </ScrollView>

      {/* <CalendarPopup /> */}
      {/* <AddressSelectPopup /> */}
      {/* <ReqAllStoreAlarmPopup /> */}
      {/* <ReqAllSuccessPopup /> */}
      {/* <TimeSelWarnPopup /> */}
      {/* <CategoryPopup /> */}
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
  headerWrapper: {
    height: WINDOW_HEIGHT * 0.15,
    width: '100%',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    flexDirection: 'row',
    backgroundColor: 'white',
    paddingBottom: '5%',
  },
});
