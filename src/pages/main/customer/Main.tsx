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
import CustomTextInput from '@components/textinput/TextInput';
import PssWdTextInput from '@components/textinput/PsswdTextInput';
import styled, {css} from 'styled-components/native';
import {
  RouteProp,
  StackNavigationState,
  TypedNavigator,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import Toggle from '@/components/toggle/CustomToggle';
import MainMenu from '@components/main/MainMenu';
import {data, storeData} from './data';
import AddressSelectPopup from '@/pages/popup/AddressSelectPopup';
import {WINDOW_HEIGHT} from '@/constants/context';

interface LoginProp {
  navigate: any;
}

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
export default function Main(): JSX.Element {
  const navigation = useNavigation<any>();
  const [isOn, setToggle] = useState(false);
  const [type, setType] = useState(1);
  const [page, setPage] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const [showPopup, setPopup] = useState(false);
  const [address, setAddress] = useState('서울특별시 마포구 도화동 11-1');

  const handleAdress = (data: string) => {
    setAddress(data);
  };
  const handlePopup = () => {
    setPopup(false);
  };
  return (
    <View style={{flex: 1}}>
      <View style={styles.locationWrapper}>
        <View></View>
        <TouchableWithoutFeedback
          onPress={() => {
            setPopup(true);
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image source={require('@assets/images/pin0.5.png')} />
            <Text style={{paddingLeft: '5%', paddingRight: '5%'}}>
              {address}
            </Text>
            <Image source={require('@assets/images/open0.5.png')} />
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => navigation.navigate('Alarm')}>
          <View
            style={{right: '7.5%', position: 'absolute', marginBottom: '5%'}}>
            <Image source={require('@assets/images/alarm0.5.png')} />
          </View>
        </TouchableWithoutFeedback>
      </View>
      <ScrollView
        style={{flex: 1}}
        contentContainerStyle={{alignItems: 'center'}}>
        <View style={styles.rootWrapper}>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <FlatList
              data={['test', 'test', 'test']}
              horizontal
              contentContainerStyle={{alignItems: 'center'}}
              style={{width: '100%'}}
              renderItem={({item}) => (
                <View
                  style={{
                    height: 185,
                    width: Dimensions.get('window').width,
                  }}>
                  <Image
                    style={{width: '100%'}}
                    source={require('@assets/images/main/notice0.5.png')}
                  />
                </View>
              )}
              onScroll={e => {
                Animated.event([{nativeEvent: {contentOffset: {x: scrollX}}}], {
                  useNativeDriver: false,
                });
                const newPage = Math.round(
                  e.nativeEvent.contentOffset.x /
                    Dimensions.get('window').width,
                );
                setPage(newPage);
              }}
              showsHorizontalScrollIndicator={false}
              pagingEnabled
            />
            <IndicatorWrapper>
              {Array.from({length: 3}, (_, i) => i).map(i => (
                <Indicator key={`indicator_${i}`} focused={i === page} />
              ))}
            </IndicatorWrapper>
          </View>
          <View></View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingLeft: '7.5%',
              paddingRight: '7.5%',
              paddingTop: '2%',
              paddingBottom: '2%',
            }}>
            <Text style={{fontSize: 16, fontWeight: '600', color: '#000'}}>
              업체찾기
            </Text>
            <Toggle isOn={isOn} onToggle={() => setToggle(!isOn)} />
          </View>
          <View style={{alignItems: 'center'}}>
            <MainMenu data={isOn ? data : storeData} fullpage={false} />
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
              paddingTop: '2%',
              height: 80,
            }}>
            <Text style={{fontSize: 20, fontWeight: '600', color: '#000'}}>
              오늘의 방문스케줄
            </Text>
          </View>
          <View style={{height: 300, flex: 1}}>
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
              ]}
              horizontal
              contentContainerStyle={{paddingHorizontal: 24}}
              renderItem={({item}) => (
                <TouchableWithoutFeedback
                  onPress={() => {
                    navigation.navigate('FindService', {isPopupView: false});
                  }}>
                  <View
                    key={item.img}
                    style={{
                      borderWidth: 1,
                      borderColor: '#E6E6E6',
                      height: 200,
                      width: 200,
                      margin: 10,
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
                      <View
                        style={{
                          position: 'absolute',
                          alignSelf: 'center',
                          top: '10%',
                          backgroundColor: 'rgba(0,0,0,0.6)',
                          width: '80%',
                          height: '20%',
                          borderRadius: 100,
                          alignItems: 'center',
                          justifyContent: 'center',
                          zIndex: 1,
                        }}>
                        <Text style={{color: '#fff'}}>
                          {item.time}
                          {'   '}
                          {item.state}
                        </Text>
                      </View>
                      <Image
                        style={{width: '100%', height: '100%'}}
                        source={item.img}
                      />
                    </View>
                    <View
                      style={{
                        width: '100%',
                        height: '20%',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}>
                      <Text style={{color: '#000'}}>{item.title}</Text>
                    </View>
                  </View>
                </TouchableWithoutFeedback>
              )}></FlatList>
          </View>
        </View>
      </ScrollView>
      {showPopup && (
        <AddressSelectPopup
          handleAdress={handleAdress}
          handlePopup={handlePopup}
        />
      )}
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
    height: WINDOW_HEIGHT * 0.1,
    width: '100%',
    alignItems: 'flex-end',
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: 'white',
    position: 'relative',
    paddingBottom: '5%',
  },
});
